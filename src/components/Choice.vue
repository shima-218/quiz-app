<template>
  <span
    :class="{ choice: !isMobile, choice_mb: isMobile }"
    v-if="id < numOfQuestions"
  >
    <router-link :to="{ name: 'Question', params: { id: +id + 1 } }">
      <span @click="registerAnswer()"><img :src="imgPath" /></span>
    </router-link>
  </span>
  <span :class="{ choice: !isMobile, choice_mb: isMobile }" v-else>
    <router-link to="/confirm">
      <span @click="registerAnswer()"><img :src="imgPath" /></span>
    </router-link>
  </span>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    choice: Array[String],
    keyword: String,
    id: String,
  },
  computed: {
    ...mapState({
      numOfQuestions: "numOfQuestions",
      answers: "answers",
      isMobile: "isMobile",
    }),
    imgPath() {
      return (
        "https://quiz-pictures.s3-ap-northeast-1.amazonaws.com/" +
        this.choice[0]
      );
    },
  },
  methods: {
    registerAnswer() {
      this.$store.commit("addAnswer", [this.id, this.choice, this.keyword]);
    },
    resetAnswer() {
      this.$store.commit("resetAnswer");
    },
  },
};
</script>

<style scoped>
span.choice img {
  width: 200px;
  border-radius: 30px;
  border: 6px solid #ffffff;
}
span.choice_mb img {
  width: 150px;
  border-radius: 15px;
  border: 3px solid #ffffff;
}
span.choice img:hover {
  border: 6px solid #00cc00;
}
span.choice img:active {
  opacity: 0.5;
}
span.choice_mb img:active {
  border: 3px solid #ffffff;
  opacity: 0.5;
}
</style>