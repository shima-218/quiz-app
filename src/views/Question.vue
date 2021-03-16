<template>
  <div>
    <Header />
    <p>
      {{ question }}
    </p>
    <button
      :class="{ hintOn: showHint, hintOff: !showHint }"
      @click="showHint = !showHint"
    >
      {{ showHint ? "ヒントを隠す" : "ヒントを見る" }}</button
    ><br /><br />
    <transition name="bounceHint"
      ><span class="hint" v-if="showHint">{{ hint }}</span></transition
    >
    <transition name="fade" mode="out-in">
      <p :key="id">
        <span
          v-for="choice in choices"
          :key="choice.id"
          @click="showHint = false"
        >
          <Choice :choice="choice" :keyword="keyword" :id="id" />
        </span>
      </p>
    </transition>
    <p></p>
  </div>
</template>

<script>
import Choice from "../components/Choice";
import Header from "../components/Header";
export default {
  components: {
    Choice,
    Header,
  },
  data() {
    return {
      question: "",
      keyword: "",
      choices: "",
      hint: "",
      hoge: "",
      showHint: false,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  watch: {
    id: {
      handler: "readQuestion",
      immediate: true,
    },
  },
  methods: {
    readQuestion() {
      var object = this.$store.state.questions[this.$route.params.id - 1];
      if (object != null) {
        this.question = object[0];
        this.keyword = object[1];
        this.choices = object[2];
        this.hint = object[3];
      }
      var vm = this;
      this.$axios.get(
        "https://nw531kuxm5.execute-api.ap-northeast-1.amazonaws.com/prod/readQuiz?id=" +
          this.$route.params.id
      ).then( (response) => {vm.hoge = response.data});
    },
  },
  created() {
    if (this.$store.state.illegalTransition) {
      this.$router.push("/"); //不正な画面遷移対策
    }
  },
};
</script>

<style scoped>
span.hint {
  position: absolute;
  min-width: 250px;
  max-height: 100px;
  transform: translateX(-50%);
  padding: 2rem 2rem;
  border-radius: 15px;
  background: rgba(224, 224, 224, 0.8);
}

.hintOff {
  background: #dddddd;
  box-shadow: 0px 2px 0 #aaaaaa;
  -webkit-box-shadow: 0px 2px 0 #aaaaaa;
  min-width: 100px;
  border: none;
  outline: none; /* クリックしたときの青枠線を消す */
}

.hintOn {
  background: #dddddd;
  transform: translateY(2px);
  min-width: 100px;
  border: none;
  outline: none; /* クリックしたときの青枠線を消す */
}
</style>
