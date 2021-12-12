import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';

import Options from './components/pages/Options.vue';
import TheGrid from './components/pages/TheGrid.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/KanaAppDeploy', component: Options },
        { path: '/KanaAppDeploy/quiz', component: TheGrid }
    ]
});

export default router;