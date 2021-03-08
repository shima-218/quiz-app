<template>
  <div>
    <Header :showTitle="true"/>
    <router-link to="/1">
      <span @click="startGame()">はじめる</span>
    </router-link>
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
