<template>
  <router-view />
</template>

<script>
export default {
  components: {

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