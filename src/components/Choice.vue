<template>
    <span class="choice">
        <img :src = imgPath>
    </span>
</template>

<script>
export default {
    props: {
        choice: Array[String]
    },
    computed:{
        imgPath(){
            return "https://quiz-pictures.s3-ap-northeast-1.amazonaws.com/" + this.choice[0]
        }
    }
}
</script>

<style scoped>
    span.choice img {
        width: 200px;
    }
</style>