<template>
    <div class="help-card">
        <slot/>
    </div>
</template>

<style scoped>
.help-card{
    width: 400px;
    box-shadow: 0 0 20px 8px #d0d0d0;
    border: 2px solid #073b4c;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    color: #073b4c;
    font-family: 'Roboto', sans-serif;
}
</style>