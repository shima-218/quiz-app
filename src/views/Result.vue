<template>
  <div>
    <Header :showMark="true" />
    判定：{{ this.rank }}<br />
    {{ this.messages[this.rank] }}<br />
    <a
      href="https://www.youtube.com/watch?v=5LBYNrZ-Gug"
      target="_blank"
      rel="noopener noreferrer"
    >
      答えはこちらの動画で確認！
    </a><br/>
    <router-link to="/">もう１回あそぶ</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      messages: {
        S: "すごい！あなたは野菜の才能があるかも？",
        A: "全問正解まであと少し！",
        B: "まだまだ頑張ろう！",
        C: "野菜を食べて覚えよう！",
        D: "全問不正解！もしかして野菜嫌い？",
        P: "QuizKnockのプロデューサーと気が合うかも！？",
      },
    };
  },
  computed: {
    ...mapState({
      answers: "answers",
    }),
    rank() {
      var correctsToRank = ["D", "C", "B", "A", "S"];
      if (this.isP()) {
        return "P";
      } else {
        var corrects = this.answers.filter(function (x) {
          return x === "1";
        }).length;
        return correctsToRank[corrects];
      }
    },
  },
  methods: {
    isP() {
      var pAnswers = ["1", "2", "1", "2"];
      for (var i = 0, n = this.answers.length; i < n; ++i) {
        if (this.answers[i] !== pAnswers[i]) return false;
      }
      return true;
    },
  },
  created() {
    if (this.$store.state.illegalTransition) {
      this.$router.push("/"); //不正な画面遷移対策
    }
  },
};
</script>