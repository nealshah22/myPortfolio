import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
import VueAgile from 'vue-agile'
// import { Quasar } from 'quasar'
// import quasarUserOptions from './quasar-user-options'

createApp(App).use(router).use(VueAgile).mount('#app')
