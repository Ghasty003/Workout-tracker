<template>
  <div>
    <div v-if="user">
      <Home />
    </div>
    <div v-else>
    <Login />
  </div>
  </div>
</template>

<script>
import Login from "./views/auth/LoginView.vue";
import Home from "./views/HomeView.vue";
export default {
  components: {
    Login, Home
  },
  data() {
    return {
      user: ""
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>