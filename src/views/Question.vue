<template>
  <div>
    <Header />
    <p>
      {{ question }}
    </p>
    <transition name="fade">
      <p :key="id">
        <span v-for="choice in choices" :key="choice.id">
          <Choice :choice="choice" :keyword="keyword" :id="id" />
        </span>
      </p>
    </transition>
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
      }
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
</style>
