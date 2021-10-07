<template>
    <div id="grid">
        <base-card
        v-for="element in selectedCharacters"
        :key="element.id"
        :name="element.name"
        :solution="element.solution"
        ></base-card>
   </div> 
</template>

<script>
export default {
    data(){
        return{
            hiragana: { 
                        a:'あ', i:'い', u:'う', e:'え', o: 'お',
                        ka:'か',ki:'き',ku:'く', ke:'け', ko:'こ',
                        sa:'さ',shi:'し',su:'す', se:'せ', so:'そ',
                        ta:'た',chi:'ち',tsu:'つ', te:'て', to:'と',
                        na:'な',ni:'に',nu:'ぬ', ne:'ね', no:'の',
                        ha:'は',hi:'ひ',fu:'ふ', he:'へ', ho:'ほ',
                        ma:'ま',mi:'み',mu:'む', me:'め', mo:'も',
                        ya:'や',yu:'ゆ', yo:'よ',
                        ra:'ら',ri:'り',ru:'る', re:'れ', ro:'ろ',
                        wa:'わ',wo:'を',n:'ん'
            },
            katakana: {
                        a:'ア', i:'イ', u:'ウ', e:'エ', o: 'オ',
                        ka:'カ',ki:'キ',ku:'ク', ke:'ケ', ko:'コ',
                        sa:'サ',shi:'シ',su:'ス', se:'セ', so:'ソ',
                        ta:'タ',chi:'チ',tsu:'ツ', te:'テ', to:'ト',
                        na:'ナ',ni:'ニ',nu:'ヌ', ne:'ネ', no:'ノ',
                        ha:'ハ',hi:'ヒ',fu:'フ', he:'ヘ', ho:'ホ',
                        ma:'マ',mi:'ミ',mu:'ム', me:'メ', mo:'モ',
                        ya:'ヤ',yu:'ユ', yo:'ヨ',
                        ra:'ラ',ri:'リ',ru:'ル', re:'レ', ro:'ロ',
                        wa:'ワ',wo:'ヲ',n:'ン'
            },
            selectedCharacters: {
            },
            isReady: false,
        };
    },
    methods: {
    },
    beforeMount(){
            console.log("beforeMount")
            for( let [key, value] of Object.entries(this.hiragana)){
                let newCharacter = {
                    name: value,
                    id: key,
                    solution: key
                }
                this.selectedCharacters[key] = newCharacter;
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
</style>