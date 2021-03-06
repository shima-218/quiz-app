import { createStore } from 'vuex'

export default createStore({
    state: {
        questions: [
            ["キャベツはどっち？", [
                ["001_01.png", "1"],
                ["001_02.png", "0"]
            ]],
            ["春菊はどれ？", [
                ["002_01.png", "1"],
                ["002_02.png", "0"],
                ["002_03.png", "2"]
            ]],
            ["ほうれん草はどれ？", [
                ["003_01.png", "0"],
                ["003_02.png", "1"],
                ["003_03.png", "0"],
                ["003_04.png", "0"]
            ]],
            ["エリンギはどれ？", [
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
    },
    mutations: {
        addAnswer(state, payload) {
            var id = payload[0]
            var selectedImage = payload[1][0]
            var selectedAnswer = payload[1][1]
            state.selectedImages[id - 1] = selectedImage
            state.answers[id - 1] = selectedAnswer
        },
        resetAnswer(state) {
            state.selectedImages = []
            state.answers = Array(state.numOfQuestions).fill("")
        }
    },
    actions: {},
    modules: {}
})