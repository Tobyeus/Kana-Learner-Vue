<template>
    <div id="grid">
        <base-card
        v-for="element in quizCharacters"
        :key="element.id"
        :name="element.name"
        :solution="element.solution"
        v-on:card-correct="cardCorrect"
        ></base-card>
    </div>
    <div v-if="gameFinished">
        <div>
            <h2>Congratulations!</h2>
            <p>You answered all characters correct.</p>
        </div>
        <div>
            <start-button @click="playAgain">Play Again</start-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            alphabet: '',
            characterList: [],
            quizCharacters: [],
            isReady: false,
            counter: 0,
            numberOfCards: 0,
            gameFinished: false,
        };
    },
    methods: {
        playAgain() {
            this.$router.push("/KanaAppDeploy/");
        },
        cardCorrect() {
            this.counter += 1;
            console.log(this.counter);
        },
        gameDone() {
            this.gameFinished = true;
        }
    },
    watch: {
        counter(value){
            if( value === this.numberOfCards ) {
                console.log('Game Done!');
                this.gameDone();
            }
        },
    },
    beforeMount() {
        // Getting the alphabet and characters
        this.characterList = this.$store.getters.selectedSets;
        this.alphabet = this.$store.getters.getAlphabet;
        // Bringing the characters in the right objects form
        for ( let item in this.characterList){
            // items are objects, looping through entries entry[0] => key, entry[1] => value
            for( let entry of Object.entries(this.$store.state[this.alphabet][this.characterList[item]]) ) {
                let character = {
                    name: entry[1],
                    id: entry[1],
                    solution: entry[0]
                }
                this.quizCharacters.push(character);
            }
        }
        this.quizCharacters.sort( () => Math.random() - 0.5 );
        this.numberOfCards = Object.keys(this.quizCharacters).length;
        // Cases in which no data is loaded -> redirect to home
        if( this.numberOfCards === 0 ) {
            this.$router.push('/KanaAppDeploy/');
        }
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
h2, p {
    padding: 1rem;
    text-align: center;
    color: #073b4c;
    font-family: 'Roboto', sans-serif;
}
h2 {
    font-size: 40px;
}
</style>