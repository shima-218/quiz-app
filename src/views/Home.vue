<template>
  <div>
    <Header :showTitle="true"/>
    <router-link to="/1">
      <span class="start" @click="startGame()">はじめる</span>
    </router-link><br/>
    <span class="warning">
    このアプリはQuizKnockが好きな<br/>
    QuizKnockとは何の関係もない<br/>
    一個人が作成したアプリです。
    </span>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header
  },
  methods: {
    startGame() {
      this.$store.commit("startGame");
    },
  },
};
</script>

<style scoped>
div{
  position: relative;
}

span.start{
  font-size: 150%;
  font-weight: bold;
  position: absolute;
  top: 300%;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  color: #fff;
  background: #094;
  -webkit-box-shadow: 0 5px 0 #007032;
  white-space: nowrap;/* 文を折り返さない*/
}
span.start:active{
  position: absolute;
  top: 300%;
  transform: translate(-50%,5px);
  -webkit-box-shadow: 5px 5px 0 #ffffff;
}
span.warning{
  position: fixed;
  transform: translateX(-50%);
  bottom: 10%;
  white-space: nowrap;
}
</style>
