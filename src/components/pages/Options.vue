<template>
<div class='options-wrapper'>
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
    <div class="characterChoice" v-if="options.hiragana || options.katakana" >
        <choice-button 
            class="choice"
            v-for="item in characters"
            :class="item.clicked ? 'selected' : ''"
            :key="item.name" 
            @click="selectButton(item)">{{item.name}}
        </choice-button> 
    </div>
    <start-button @click="startGame">
        Start
    </start-button>
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
                    sa: {
                        clicked: false,
                        name: 'sa'
                    },
                    ta: {
                        clicked: false,
                        name: 'ta'
                    },
                    na: {
                        clicked: false,
                        name: 'na'
                    },
                    ha: {
                        clicked: false,
                        name: 'ha'
                    },
                    ma: {
                        clicked: false,
                        name: 'ma'
                    },
                    ya: {
                        clicked: false,
                        name: 'ya'
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
            if( !this.options[alphabet] ) {
                this.clearAlphabetChoice();
            }
            this.options[alphabet] = !this.options[alphabet];
        },
        clearAlphabetChoice() {
            this.options.hiragana = false;
            this.options.katakana = false;
        },
        selectButton(charSet) {
            // Cases if an button was already clicked or not
            if( !this.characters[charSet.name].clicked ) {
                this.$store.dispatch('AddSelected', charSet.name);
            } else {
               this.$store.dispatch('RemoveSelected', charSet.name);
            }
            // Managing clicked property for CSS
            this.characters[charSet.name].clicked = !this.characters[charSet.name].clicked;
            this.$store.getters.selectedSets;
        },
        startGame() {
            if( this.options.hiragana ) {
                this.$store.dispatch('SelectAlphabet', 'hiragana');
            } else{
                this.$store.dispatch('SelectAlphabet', 'katakana');
            }
            this.$router.push("/quiz");
        },
    },
    beforeMount() {
        console.log('Clear Settings');
        this.$store.dispatch('ClearSettings');
    }
}
</script>
<style scoped>
.system {
    display: flex;
    justify-content: center;
}
.options-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.alphabet {
    text-align: center;
    width: auto;
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
.choice {
    width: 50%;
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
.characterChoice {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    width: 40%;
}
</style>