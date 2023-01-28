import express from "express";
import mongoose from "mongoose";
import dotevn from "dotenv";
import userRoute from "./routes/userRoute.js";

dotevn.config();

class Server {
  constructor() {
    this.app = express();
  }

  listen() {
    this.app.listen(4000, () => {
      console.log("connected to db & server started on port 4000");
    });
  }

  useMiddlewares() {
    this.app.use(express.json({ limit: "50mb" }));
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.app.use("/api/users", userRoute);
  }

  async connectToDB() {
    try {
      await mongoose.connect("mongodb://0.0.0.0:27017/workouts");
      this.listen();
    } catch (error) {
      console.log(error);
    }
  }
}

const server = new Server();

server.useMiddlewares();
server.connectToDB();
