<template>
    <div id="grid">
        <base-card
        v-for="element in quizCharacters"
        :key="element.id"
        :name="element.name"
        :solution="element.solution"
        ></base-card>
   </div>
   <div>
       <start-button @click="playAgain">Play Again</start-button>
   </div>
</template>

<script>
export default {
    data(){
        return{
            alphabet: '',
            characterList: [],
            quizCharacters: {},
            isReady: false,
        };
    },
    methods: {
        playAgain() {
            this.$router.push("/");
        }
    },
    beforeMount() {
        // Array of charactersets for example vowels, ka, sa
        this.characterList = this.$store.getters.selectedSets;
        this.alphabet = this.$store.getters.getAlphabet;
        console.log(this.alphabet);
        for ( let item in this.characterList){
            // items are objects
            // Looping through entries entry[0] => key entry[1] => value
            for( let entry of Object.entries(this.$store.state[this.alphabet][this.characterList[item]]) ) {
                let newCharacter = {
                    name: entry[1],
                    id: entry[1],
                    solution: entry[0]
                }
                this.quizCharacters[entry[0]] = newCharacter;
            }
        }
        console.log(this.quizCharacters);
    }
}
</script>

<style scoped>
#grid {
    margin: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    transition: 0.5s;
}
</style>