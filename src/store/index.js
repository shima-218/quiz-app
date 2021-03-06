import { createStore } from 'vuex'

export default createStore({
    state: {
        questions: [
            ["キャベツはどっち？", "キャベツ", [
                ["001_01.png", "1"],
                ["001_02.png", "0"]
            ]],
            ["春菊はどれ？", "春菊", [
                ["002_01.png", "1"],
                ["002_02.png", "0"],
                ["002_03.png", "2"]
            ]],
            ["ほうれん草はどれ？", "ほうれん草", [
                ["003_01.png", "0"],
                ["003_02.png", "1"],
                ["003_03.png", "0"],
                ["003_04.png", "0"]
            ]],
            ["エリンギはどれ？", "エリンギ", [
                ["004_01.png", "2"],
                ["004_02.png", "1"],
                ["004_03.png", "0"],
                ["004_04.png", "0"],
                ["004_05.png", "0"]
            ]]
        ],
        numOfQuestions: 4,
        selectedImages: [],
        answers: [],
        keywords: [],
        illegalTransition: true
    },
    mutations: {
        addAnswer(state, payload) {
            var id = payload[0]
            var selectedImage = payload[1][0]
            var selectedAnswer = payload[1][1]
            var keyword = payload[2]
            state.selectedImages[id - 1] = selectedImage
            state.answers[id - 1] = selectedAnswer
            state.keywords[id - 1] = keyword
        },
        startGame(state) {
            state.selectedImages = []
            state.answers = []
            state.keywords = []
            state.illegalTransition = false
        }
    },
    actions: {},
    modules: {}
})