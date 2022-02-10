import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
import VueAgile from 'vue-agile'



createApp(App).use(router).use(VueAgile).mount('#app')
