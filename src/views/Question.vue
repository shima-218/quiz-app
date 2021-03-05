<template>
    <div>
    <p>
        {{question}}
    </p>
    <p> 
    <span v-for="choice in choices" :key="choice.id">
        <Choice :choice="choice"/>
    </span>
    </p>
    <p v-if="this.$route.params.id < numOfQuestions">
        <router-link :to="{name: 'Question', params: {id: +this.$route.params.id+1}}">
            次へ
        </router-link>
    </p>
    <p v-else>
        <router-link to="/result">答え合わせ</router-link>
    </p>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Choice from '../components/Choice'
export default {
  components: {
      Choice
  },
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
      }
  }
}
</script>
