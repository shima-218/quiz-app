<template>
  <div>
    <Header :showMark="true" />
    <p :class="{ result: !isP(), result_p: isP() }">判定：{{ rank }}</p>
    <p class="message">{{ messages[rank] }}</p>
    <span><img :src="images[rank]" /></span><br />
    <a :href="twitterUrl" target="_blank" rel="noopener noreferrer">
      <span class="twitter">結果をツイート！</span></a
    ><br /><br /><br />
    <a
      href="https://www.youtube.com/watch?v=5LBYNrZ-Gug"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="youtube">答えはこちらの動画で確認！</span> </a
    ><br /><br /><br />
    <router-link to="/"> <span class="retry">もう１回あそぶ</span> </router-link
    ><br />
    <br /><br /><br /><br />
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
        S: "すごい！野菜の才能があるかも？",
        A: "全問正解まであと少し！",
        B: "まだまだ頑張ろう！",
        C: "野菜を食べて覚えよう！",
        D: "＼分かるだろ野菜〜！／",
        P: "QuizKnockのプロデューサーかも！？",
      },
      images: {
        S: require("../assets/result_s.png").default,
        A: require("../assets/result_a.png").default,
        B: require("../assets/result_b.png").default,
        C: require("../assets/result_c.png").default,
        D: require("../assets/result_d.png").default,
        P: require("../assets/result_p.png").default,
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
    twitterUrl() {
      var url = encodeURIComponent(location.href);
      return (
        "https://twitter.com/intent/tweet?url=" +
        url.substr(0,url.length-6) +
        "&text=" +
        "判定：" + this.rank + " " +
        this.messages[this.rank] +
        "&hashtags=野菜クイズ"
      );
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

<style scoped>
div {
  position: relative;
}

p.result {
  font-size: 200%;
  font-weight: bold;
}

p.result_p {
  font-size: 200%;
  font-weight: bold;
  color: #ff66cc;
}

p.message {
  font-size: 120%;
}

span img {
  width: 300px;
}

span.retry {
  font-size: 130%;
  font-weight: bold;
  position: absolute;
  transform: translateX(-50%);
  padding: 0.5rem 2rem;
  color: #fff;
  background: #094;
  box-shadow:  0 5px 0 #007032;
  -webkit-box-shadow: 0 5px 0 #007032;
  white-space: nowrap;
}
span.retry:active {
  position: absolute;
  transform: translate(-50%, 5px);
  box-shadow: 5px 5px 0 #ffffff;
  -webkit-box-shadow: 5px 5px 0 #ffffff;
}

span.youtube {
  font-size: 130%;
  font-weight: bold;
  position: absolute;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  color: #fff;
  background: #c52929;
  box-shadow: 0 5px 0 #a41614;
  -webkit-box-shadow: 0 5px 0 #a41614;
  white-space: nowrap;
}
span.youtube:active {
  position: absolute;
  transform: translate(-50%, 5px);
  box-shadow: 5px 5px 0 #ffffff;
  -webkit-box-shadow: 5px 5px 0 #ffffff;
}

span.twitter {
  font-size: 130%;
  font-weight: bold;
  position: absolute;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  color: #fff;
  background: #55acee;
  box-shadow: 0 5px 0 #1c91e8;
  -webkit-box-shadow: 0 5px 0 #1c91e8;
  white-space: nowrap;
}
span.twitter:active {
  position: absolute;
  transform: translate(-50%, 5px);
  box-shadow: 5px 5px 0 #ffffff;
  -webkit-box-shadow: 5px 5px 0 #ffffff;
}
</style>