import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            hiragana: {
                vowels: {
                    a:'あ', i:'い', u:'う', e:'え', o: 'お'
                },
                ka: {
                    ka:'か',ki:'き',ku:'く', ke:'け', ko:'こ'
                },
                sa: {
                    sa:'さ',shi:'し',su:'す', se:'せ', so:'そ'
                },
                ta: {
                    ta:'た',chi:'ち',tsu:'つ', te:'て', to:'と'
                },
                na: {
                    na:'な',ni:'に',nu:'ぬ', ne:'ね', no:'の'
                },
                ha: {
                    ha:'は',hi:'ひ',fu:'ふ', he:'へ', ho:'ほ'
                },
                ma: {
                    ma:'ま',mi:'み',mu:'む', me:'め', mo:'も'
                },
                ya: {
                    ya:'や',yu:'ゆ', yo:'よ'
                },
                ra: {
                    ra:'ら',ri:'り',ru:'る', re:'れ', ro:'ろ'
                },
                wa: {
                    wa:'わ',wo:'を',n:'ん'
                },
            },
            katakana:{
                vowels: {
                    a:'ア', i:'イ', u:'ウ', e:'エ', o: 'オ'
                },
                ka: {
                    ka:'カ',ki:'キ',ku:'ク', ke:'ケ', ko:'コ'
                },
                sa: {
                    sa:'サ',shi:'シ',su:'ス', se:'セ', so:'ソ'
                },
                ta: {
                    ta:'タ',chi:'チ',tsu:'ツ', te:'テ', to:'ト'
                },
                na: {
                    na:'ナ',ni:'ニ',nu:'ヌ', ne:'ネ', no:'ノ'
                },
                ha: {
                    ha:'ハ',hi:'ヒ',fu:'フ', he:'ヘ', ho:'ホ'
                },
                ma: {
                    ma:'マ',mi:'ミ',mu:'ム', me:'メ', mo:'モ'
                },
                ya: {
                    ya:'ヤ',yu:'ユ', yo:'ヨ'
                },
                ra: {
                    ra:'ラ',ri:'リ',ru:'ル', re:'レ', ro:'ロ'
                },
                wa: {
                    wa:'ワ',wo:'ヲ',n:'ン'
                }
            },
            quizCharacters: [],
            alphabet: '',
        };
    },
    mutations: {
        // Adding the character set to the selected array
        addSelected(state, payload) {
            let temp = state.quizCharacters;
            temp.push(payload);
            state.quizCharacters = temp;
        },
        // Filter out an item from the selected Array
        // when button was already clicked
        removeSelected(state, payload) {
            let temp = state.quizCharacters.filter( item => item != payload);
            state.quizCharacters = temp;
        },
        selectAlphabet(state, payload) {
            state.alphabet = payload;
        },
        clearSettings(state) {
            state.alphabet = '';
            state.quizCharacters = [];
        }
    },
    actions: {
        AddSelected(context, payload) {
            context.commit('addSelected', payload);
        },
        RemoveSelected(context, payload) {
            context.commit('removeSelected', payload);
        },
        SelectAlphabet(context,payload) {
            context.commit('selectAlphabet', payload);
        },
        ClearSettings(context) {
            context.commit('clearSettings');
        }
    },
    getters: {
        selectedSets(state) {
            return state.quizCharacters;
        },
        getAlphabet(state) {
            return state.alphabet;
        }
    }
});

export default store;