<template>
  <div>
    <transition name="fade">
    <router-view />
    </transition>
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
  created() {
    if (
      navigator.userAgent.indexOf("iPhone") > 0 ||
      navigator.userAgent.indexOf("Android") > 0
    ) {
      this.$store.commit("setMobileFlag", true);
    }
  },
};
</script>

<style>
div.footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
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

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}

.bounceHint-enter-active {
  animation: bounceHint-in 0.5s;
}
.bounceHint-leave-active {
  animation: bounceHint-in 0.5s reverse;
}
@keyframes bounceHint-in {
  0% {
    transform: translateX(-50%) scale(0);
  }
  50% {
    transform: translateX(-50%) scale(1.5);
  }
  100% {
    transform: translateX(-50%) scale(1);
  }
}

/* スマホタップ時に青色を表示しない */
a {
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}

</style>
