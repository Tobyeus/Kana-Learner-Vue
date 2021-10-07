<template>
<div>
    <the-header></the-header>
    <the-choice></the-choice>
    <the-button @startGame="playerIsReady=true" v-if="!playerIsReady"></the-button>
    <the-grid v-if="playerIsReady"></the-grid>
</div>
</template>

<script>
import TheChoice from './components/TheChoices.vue'
import TheButton from './components/TheButton.vue';
import TheGrid from './components/TheGrid.vue';
export default {
    components: {
        TheGrid,
        TheButton,
        TheChoice,
    },
    data(){
        return {
            playerIsReady: false,
        };
    },
    methods: {
        startGame(){
            this.playerIsReady = true;
        }
    },

}
</script>
<style>
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
</style>