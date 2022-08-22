import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/main.css'
import store from './store'
import 'flowbite';
import router from '@/router/index'

createApp(App).use(store).use(router).mount('#app')
