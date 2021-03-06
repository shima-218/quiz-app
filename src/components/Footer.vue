<template>
    <div>
        <span v-for="image in images" :key="image.id">
            <span class="choice">
                <img :src="imgPath(image)">
            </span>
        </span>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      images: "selectedImages"
    })
  },
  methods:{
      imgPath(str){
          return "https://quiz-pictures.s3-ap-northeast-1.amazonaws.com/" + str
      }
  }    
}
</script>

<style scoped>
span.choice img {
  width: 50px;
}
</style>