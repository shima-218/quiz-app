<template>
  <div>
    <Header/>
    <router-link to="/result"> 答え合わせ！ </router-link>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
  created() {
    if (this.$store.state.illegalTransition) {
      this.$router.push("/"); //不正な画面遷移対策
    }
  },
};
</script>