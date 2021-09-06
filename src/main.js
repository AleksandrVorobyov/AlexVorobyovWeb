import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/fonts.css'
import './assets/style/animation.css'
import './assets/style/font-awesome.min.css'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

createApp(App)
.use(store)
.use(router)
.use(VueSplide)
.mount('#app')