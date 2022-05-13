import { createApp } from 'vue';
import App from './App.vue';
import store from './vuex/store';
import router from '@/router/router';
import axios from "axios";
import VueAxios from "vue-axios";
import './styles/styles.scss';
/*import Centrifuge from "centrifuge";*/


createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios, axios)
    .mount('#app')


