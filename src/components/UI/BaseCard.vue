<template>
    <div class='card' 
         :class="{
         'focus': focusUsedCard,
         'solved': isCorrect,
         'notSolved': !solved && !isWrong,
         'wrong': isWrong && !solved,
            }">
        <h2>{{name}}</h2>
        <input class=''
            @click="focusUsedCard = true"
            @focus="focusUsedCard = true;"
            @blur="this.focusUsedCard = false;"
            v-model="textInput" 
            @keydown.enter="checkInput(solution, $event)" 
            type="text"
            v-if="!isCorrect"
            >
        <h3 v-else>{{textInput}}</h3>
    </div>
</template>

<script>
export default {
    emits: ['cardCorrect'],
    props:['name','solution'],
    data() {
        return {
            textInput: '',
            solved: false,
            isCorrect: false,
            isWrong: false,
            focusUsedCard: false,
        }
    },
    computed: {
    },
    methods:{
        checkInput(input,event){
            if ( this.textInput === input ){
                this.isCorrect = true;
                this.solved = true;
                this.isWrong = false;
                this.cardIsCorrect();
            }
            if ( this.textInput != input ){
                this.isWrong = true;

            }
            this.focusUsedCard = false;
            if( event.target.parentElement.nextElementSibling === null ) {
                //console.log('No other Element');
            } else{
                event.target.parentElement.nextElementSibling.children[1].focus();
            }
        },
        cardIsCorrect() {
            this.$emit('cardCorrect');
        }
    }
}
</script>

<style scoped>
.card{
    width: 150px;
    height: 175px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5%;
    box-shadow: 0 0 20px 8px #d0d0d0;
    color: white;
    transition: 0.5s;
}
.focus {
    width: 160px;
    height: 185px;
    margin: 15px;
    transform: scale(1.1);
    transition: 0.5s;
}
.wrong{
    background-color:#ef476f;
}
.notSolved{
    background-color: #073b4c;
}
.solved{
    background-color: #06d6a0;
}
h2{ 
    font-size: 50px;
    margin: 1rem;
    font-family: 'Noto Sans JP', sans-serif;
 }
h3{
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
}
input{
    width: 45%;
    height: 2rem;
    margin: 10px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    border: none;
    border-radius: 5%;
    font-size: 20px;
}
input :focus {
    border: 0px;
}
</style>