<template>
  <div>
    <Header :showTitle="true"/>
    <router-link to="/1">
      <span @click="resetAnswer()">はじめる</span>
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
    resetAnswer() {
      this.$store.commit("startGame");
    },
  },
};
</script>
