<template>
    <div>
        <button @click="$emit('start-game')">Start</button>
    </div>
</template>

<script>
export default {
    emit:['start-game'],
    data() {
        return {
            playerIsReady: false,
        };
    }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
}
button {
    width: 200px;
    margin: 2rem;
    color: white;
    background-color: #073b4c;
    padding: 1rem;
    font-size: 40px;
    border-radius: 10px;
    font-family: 'Noto Sans JP', sans-serif;
    box-shadow: 0 0 20px 8px #d0d0d0;
}
</style>