<template>
  <div class="header">
    <span v-if="showTitle"> 野菜クイズ<br/>エリンギはこれです！ </span>
    <span v-else>
      <span v-for="(image, index) in images" :key="image.id">
        <span :class="{choice: !isMobile, choice_mb: isMobile}">
          {{ keywords[index] }}
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
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    showTitle: {
      type: Boolean,
      default: false
    },
    showMark: {
      type: Boolean,
      defalut: false
    }
  },
  computed: {
    ...mapState({
      images: "selectedImages",
      answers: "answers",
      keywords: "keywords",
      isMobile: "isMobile"
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
span.choice_mb {
  display: inline-block;
  position: relative;
  width: 70px;
  font-size: 60%;
}
span.image {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}
span.choice img {
  width: 50px;
}
span.choice_mb img {
  width: 50px;
}
div.header {
  background-color: #ccff66;
  height: 80px;
}
</style>