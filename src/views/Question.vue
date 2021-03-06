<template>
  <div>
    <p>
      {{ question }}
    </p>
    <p>
      <span v-for="choice in choices" :key="choice.id">
        <Choice :choice="choice" :id="id" />
      </span>
    </p>
  </div>
</template>

<script>
import Choice from "../components/Choice";
export default {
  components: {
    Choice,
  },
  data() {
    return {
      question: "",
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
        this.choices = object[1];
      }
    },
  },
  created() {
    if (this.$store.state.answers.length == 0) {
      this.$router.push("/"); //不正な画面遷移対策
    }
  },
};
</script>
