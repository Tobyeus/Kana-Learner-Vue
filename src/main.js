// Vue App
import { createApp } from 'vue';

// Router and Store
import Store from './store.js';
import Router from './router.js';

//Components
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import StartButton from './components/UI/StartButton.vue';
import TheHeader from './components/UI/TheHeader.vue';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('start-button', StartButton);
app.component('the-header', TheHeader);
app.use(Store);
app.use(Router);
app.mount('#app');
