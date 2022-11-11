import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from "@/components/parts";
import VueSplide from '@splidejs/vue-splide';
import VueLazyLoad from 'vue3-lazyload'
import './assets/style/fonts.css'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import './assets/style/font-awesome.min.css'

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(store)
    .use(router)
    .use(VueSplide)
    .use(VueLazyLoad)
    .mount('#app')