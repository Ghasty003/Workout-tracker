import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    fetchAccessToken({ commit }) {
      const user = localStorage.getItem("user");
      commit("setUser", JSON.parse(user));
    },

    async signUp(context, { email, password }) {
      const response = await fetch("http://localhost:4000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();

      if (response.ok) {
        context.commit("setUser", json);
        localStorage.setItem("user", JSON.stringify(json));
        console.log(json);
      }

      if (!response.ok) {
        console.log(json.error);
        throw new Error(json.error);
      }
    },

    async login({ commit }, { email, password }) {
      const response = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();

      if (response.ok) {
        commit("setUser", json);
        localStorage.setItem("user", JSON.stringify(json));
        console.log(json);
      }

      if (!response.ok) {
        console.log(json.error);
        throw new Error(json.error);
      }
    },

    logout(context) {
      localStorage.removeItem("user");
      context.commit("setUser", null);
    },
  },
});
