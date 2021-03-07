<template>
  <div class="home">
    野菜クイズ<br />
    エリンギはこれです！<br />
    <router-link to="/1">
      <span @click="resetAnswer()">はじめる</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    resetAnswer() {
      this.$store.commit("startGame");
    },
  },
};
</script>
