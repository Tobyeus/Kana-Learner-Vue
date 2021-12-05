<template>
    <div>
        <button @click="$emit('start-game')" class="base-btn">
            <slot></slot>
        </button>
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
.base-btn {
    width: auto;
    margin: 1rem;
    color: white;
    background-color: #073b4c;
    padding: 1rem 2rem;
    font-size: 2rem;
    border-radius: 10px;
    font-family: 'Noto Sans JP', sans-serif;
    box-shadow: 0 0 20px 8px #d0d0d0;
}
</style>