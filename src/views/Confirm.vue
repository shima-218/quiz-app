<template>
  <div>
    <Header/>
    <router-link to="/result">
    <span class="confirm">答え合わせ！</span>
    </router-link>
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

<style scoped>
div{
  position: relative;
}

span.confirm{
  font-size: 150%;
  font-weight: bold;
  position: absolute;
  top: 300%;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  color: #fff;
  background: #094;
  -webkit-box-shadow: 0 5px 0 #007032;
  white-space: nowrap;
}
span.confirm:active{
  position: absolute;
  top: 300%;
  transform: translate(-50%,5px);
  -webkit-box-shadow: 5px 5px 0 #ffffff;
}
</style>