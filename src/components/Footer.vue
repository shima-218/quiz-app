<template>
  <div class="footer">
    <span v-for="(image, index) in images" :key="image.id">
      <span class="choice">
        {{keywords[index]}}
        <span class="image">
          <img :src="imgPath(image)" />
        </span>
        <span class="image" v-if="showMark">
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
span.choice {
  display: inline-block;
  position: relative;
  width: 100px;
}
span.image {
  position:absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}
span.choice img {
  width: 50px;
}
div.footer {
  background-color: #CCFF66;
  height: 80px;
}
</style>