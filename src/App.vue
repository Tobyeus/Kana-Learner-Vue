<template>
<div>
    <the-header></the-header>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    data(){
        return {
            playerIsReady: false,
        };
    },
    methods: {
        startQuiz() {
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