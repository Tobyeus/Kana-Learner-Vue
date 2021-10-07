import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/BaseCard.vue';
import TheButton from './components/TheButton.vue';
import TheHeader from './components/TheHeader.vue';
import ChoiceButton from './components/ChoiceButton.vue';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('the-button', TheButton);
app.component('the-header', TheHeader);
app.component('choice-button', ChoiceButton);
app.mount('#app');
