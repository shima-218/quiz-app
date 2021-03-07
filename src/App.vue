<template>
  <div>
    <router-view />
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer";
export default {
  components: {
    Footer,
  },
};
</script>

<style>
div.footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
