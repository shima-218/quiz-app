<template>
  <div>
    <Footer :showMark="false" />
    <router-link to="/result"> 答え合わせ！ </router-link>
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  components: {
    Footer,
  },
  created() {
    if (this.$store.state.illegalTransition) {
      this.$router.push("/"); //不正な画面遷移対策
    }
  },
};
</script>