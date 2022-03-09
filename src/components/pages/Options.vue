<template>
<div id='options-wrapper'>
    <div class='system'>
        <choice-button 
            class="alphabet" 
            :class="options.hiragana ? 'selected' : ''"
            @click="chooseAlphabet('hiragana')"
        >Hiragana</choice-button>
        <choice-button 
            class="alphabet" 
            :class="options.katakana ? 'selected' : ''"
            @click="chooseAlphabet('katakana')"
        >Katakana</choice-button>
    </div>
    <div class="characters" v-if="options.hiragana || options.katakana">
        <choice-button 
            class="choice"
            v-for="item in characters"
            :class="item.clicked ? 'selected' : ''"
            :key="item.name" 
            @click="selectButton(item)"
            >{{item.name}}
        </choice-button> 
    </div>
    <start-button @click="startGame">
        Start
    </start-button>
    <p v-if="nothingSelected" class="error">There are no characters selected.</p>
</div>
</template>

<script>
import ChoiceButton from '../UI/ChoiceButton.vue';
import StartButton from '../UI/StartButton.vue';
export default {
    components: {
        ChoiceButton,
        StartButton,
    },
    data(){
        return {
                nothingSelected: false,
                options: {
                    hiragana: false,
                    katakana: false,
                },
                characters: {
                    vowels: {
                        clicked: false,
                        name: 'vowels'
                    },
                    ka: {
                        clicked: false,
                        name: 'ka'
                    },
                    ga: {
                        clicked: false,
                        name: 'ga'
                    },
                    sa: {
                        clicked: false,
                        name: 'sa'
                    },
                    ta: {
                        clicked: false,
                        name: 'ta'
                    },
                    za: {
                        clicked: false,
                        name: 'za'
                    },
                    na: {
                        clicked: false,
                        name: 'na'
                    },
                    ha: {
                        clicked: false,
                        name: 'ha'
                    },
                    pa: {
                        clicked: false,
                        name: 'pa'
                    },
                    ma: {
                        clicked: false,
                        name: 'ma'
                    },
                    ya: {
                        clicked: false,
                        name: 'ya'
                    },
                    ba: {
                        clicked: false,
                        name: 'ba'
                    },
                    ra: {
                        clicked: false,
                        name: 'ra'
                    },
                    wa: {
                        clicked: false,
                        name: 'wa'
                    },
                },
        };
    },
    methods: {
        chooseAlphabet(alphabet) {
            // Case when Button was already selected
            if( !this.options[alphabet] ) {
                this.clearAlphabetChoice();
            }
            this.options[alphabet] = !this.options[alphabet];
        },
        clearAlphabetChoice() {
            // Clears Hiragana and Katakana button
            this.options.hiragana = false;
            this.options.katakana = false;
        },
        selectButton(charSet) {
            // Cases if an button was already clicked or not
            if( !this.characters[charSet.name].clicked ) {
                this.nothingSelected = false;
                this.$store.dispatch('AddSelected', charSet.name);
            } else {
               this.$store.dispatch('RemoveSelected', charSet.name);
            }
            this.characters[charSet.name].clicked = !this.characters[charSet.name].clicked;
        },
        startGame() {
            if( this.options.hiragana ) {
                this.$store.dispatch('SelectAlphabet', 'hiragana');
            } else{
                this.$store.dispatch('SelectAlphabet', 'katakana');
            }
            // Cases when no alphabet or no characters are selected
            if( this.options.hirgana && this.options.katakana || this.$store.getters.selectedSets.length === 0 ) {
                this.nothingSelected = true;
                return;
            }
            this.$router.push("/KanaAppDeploy/quiz");
        },
    },
    beforeMount() {
        // Clear Settings
        this.$store.dispatch('ClearSettings');
    }
}
</script>
<style scoped>
#options-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.system {
    display: flex;
    justify-content: center;
    width:80%
}
.alphabet {
    text-align: center;
    width: 20rem;
    margin: 1rem;
    color: #073b4c;
    background-color: #fff;
    border:5px solid #073b4c;
    padding: 0.5rem 2rem;
    font-size: 10px;
    font-family: 'Noto Sans JP', sans-serif;
    box-shadow: 0 0 20px 8px #d0d0d0;
    cursor: pointer;
    transition: 0.5s;
}
.characters {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    width:70%
}
.choice {
    text-align: center;
    width: 80%;
    margin: 0.5rem;
    color: #073b4c;
    background-color: #fff;
    border:3px solid #073b4c;
    padding: 0.5rem 2rem;
    font-size: 10px;
    font-family: 'Noto Sans JP', sans-serif;
    box-shadow: 0 0 10px 4px #d0d0d0;
    cursor: pointer;
    transition: 0.5s;
}
.selected {
    color: #fff;
    background-color: #073b4c;
    cursor: pointer;
    transition: 0.5s;
}
.error {
    font-family: 'Noto Sans JP', sans-serif;
    color: red;
    font-size: 20px;
}
</style>