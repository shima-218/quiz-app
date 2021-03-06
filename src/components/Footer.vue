<template>
  <div>
    <span v-for="(image, index) in images" :key="image.id">
      <span class="choice">
        {{keywords[index]}}
        <img :src="imgPath(image)" />
        <span v-if="showMark">
          <span v-if="answers[index] == 1">
            <img src="../assets/maru.png" />
          </span>
          <span v-else>
            <img src="../assets/batsu.png" />
          </span>
        </span>
      </span>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    showMark: Boolean,
  },
  computed: {
    ...mapState({
      images: "selectedImages",
      answers: "answers",
      keywords: "keywords"
    }),
  },
  methods: {
    imgPath(str) {
      return "https://quiz-pictures.s3-ap-northeast-1.amazonaws.com/" + str;
    },
  },
};
</script>

<style scoped>
span.choice img {
  width: 50px;
}
</style>