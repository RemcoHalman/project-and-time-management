<template>
  <div id="nav">
    <router-link to="/" class="nav-item">Home</router-link>
    <router-link to="/about" class="nav-item">About</router-link>
    <router-link to="/projects" class="nav-item">Projects</router-link>
    <router-link to="/current-week" class="nav-item">Current Week</router-link>
  </div>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: rgb(177, 177, 177);
    margin: 0 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #2c3e50;
    text-decoration: none;
    transition: background-color 0.3s;

    &.router-link-exact-active {
      color: #ccc;
      background-color: #527699;
    }
    &:hover {
      color: #ccc;
      background-color: #527699;
    }
  }
}
</style>
