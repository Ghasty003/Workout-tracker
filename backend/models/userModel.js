import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw new Error("All fields are required");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw new Error("User already exists");
  }

  if (password.length < 6) {
    throw new Error("Password must be more than six characters");
  }

  const user = await this.create({ email, password });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("All fields are required");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("Invalid email");
  }

  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  return user;
};

export default mongoose.model("users", userSchema);
