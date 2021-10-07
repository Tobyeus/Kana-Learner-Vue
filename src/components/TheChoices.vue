<template>
<div>
    <div class='system'>
        <!-- <button class='hiragana' :class="{'selected': options.hiragana}" @click="selectSystem('hiragana')">Hiragana</button> -->
        <choice-button 
            class="choice" 
            :class="selectedSystem === 'hiragana' ? 'selected' : 'choice'" 
            @click="handleSystem('hiragana')"
        >Hiragana</choice-button>
        <choice-button 
            class="choice" 
            :class="selectedSystem === 'katakana' ? 'selected' : ''"
            @click="handleSystem('katakana')"
        >Katakana</choice-button>
    </div>
    <div class="characterChoice" v-if="options.systems.hiragana || options.systems.katakana" >
        <choice-button class="choice" v-for="item in options.characters" :key="item">{{item.name}}</choice-button> 
    </div>
</div>    
</template>

<script>
export default {
    data(){
        return {
            options: {
                systems:{
                    hiragana: false,
                    katakana: false,
                },
                characters: {
                    vowels: {
                        clicked: false,
                        name: 'vowels'
                    },
                    k: {
                        clicked: false,
                        name: 'k'
                    },
                    s: {
                        clicked: false,
                        name: 's'
                    },
                    t: {
                        clicked: false,
                        name: 't'
                    },
                    n: {
                        clicked: false,
                        name: 'n'
                    },
                    h: {
                        clicked: false,
                        name: 'h'
                    },
                    m: {
                        clicked: false,
                        name: 'm'
                    },
                    y: {
                        clicked: false,
                        name: 'y'
                    },
                    r: {
                        clicked: false,
                        name: 'r'
                    },
                    w: {
                        clicked: false,
                        name: 'w'
                    },
                }
            },
            selectedSystem: null,
        };
    },
    methods: {
        handleSystem(system){
            this.selectedSystem = system;
            if( system === 'hiragana'){
                this.options.systems.hiragana = !this.options.systems.hiragana;
                this.options.systems.katakana = false;
            }else{
                this.options.systems.katakana = !this.options.systems.katakana;
                this.options.systems.hiragana = false;
            }
        }
    }
}
</script>
<style scoped>
.system {
    display: flex;
    justify-content: center;
}
button {
    width: 30%;
    margin: 2rem;
    padding: 1rem;
    color: white;
    background-color: #073b4c;
    padding: 1rem;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    font-family: 'Noto Sans JP', sans-serif;
    box-shadow: 0 0 20px 8px #d0d0d0;
}
.choice {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: auto;
    margin: 1rem;
    color: #073b4c;
    background-color: #fff;
    border:5px solid #073b4c;
    padding: 0.5rem;
    font-size: 10px;
    font-family: 'Noto Sans JP', sans-serif;
    box-shadow: 0 0 20px 8px #d0d0d0;
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
    display: flex;
    align-items: center;
}
</style>