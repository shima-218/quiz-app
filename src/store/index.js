import { createStore } from 'vuex'

export default createStore({
  state: {
    questions: [["キャベツはどっち？",[["../assets/001_01.png","1"],["../assets/001_02.png","0"]]],
              ["春菊はどれ？",[["春菊","1"],["食用菊","0"],["水菜","0"]]],
              ["ほうれん草はどれ？",[["小松菜","0"],["ほうれん草","1"],["クレソン","0"],["ニラ","0"]]],
              ["エリンギはどれ？",[["えのき","0"],["エリンギ","1"],["しめじ","0"],["舞茸","0"],["椎茸","0"]]]],
    numOfQuestions: 4
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
