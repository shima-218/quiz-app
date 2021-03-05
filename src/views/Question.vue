<template>
    <div>
        {{question}}
    <p v-for="choice in choices" :key="choice.id">
        {{choice[0]}}
        <!--<img :src = imgPath(choice[0])>-->
    </p>
    <p v-if="this.$route.params.id < numOfQuestions">
        <router-link :to="{name: 'Question', params: {id: +this.$route.params.id+1}}">
            <img src = "../assets/001_01.png">
        </router-link>
    </p>
    <p v-else>
        <router-link to="/result">答え合わせ</router-link>
    </p>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
        question: "",
        choices: ""
    }
  },
  computed: {
    ...mapState({
      numOfQuestions: 'numOfQuestions'
    }),
    id(){
        return this.$route.params.id
    }
  },
  watch: {
      id: {
          handler: "readQuestion",
          immediate: true
      }
  },
  methods: {
      readQuestion(){
          var object = this.$store.state.questions[this.$route.params.id-1]
          if (object != null) {
            this.question = object[0]
            this.choices = object[1]
          }
      },
      imgPath(str){
          return require(str)
      }
  }
}
</script>
