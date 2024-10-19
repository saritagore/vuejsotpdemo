import {  createApp } from 'vue'
import App from './App.vue'
import BaseButton from '@/UI/BaseButton.vue';
import BaseCard from './UI/BaseCard.vue';
import LoginScreen from './components/LoginScreen.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
const app = createApp(App);
app.component('base-button',BaseButton);
app.component('base-card',BaseCard);
const router=createRouter({
history:createWebHistory(),
routes:[
    {path:'/',component:HelloWorld},
    {path:'/login',component:LoginScreen},
    { path:'/:notFound(.*)', redirect:'/'}
]
})
app.use(router);
app.mount('#app')
