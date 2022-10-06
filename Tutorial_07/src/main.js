// src/main.js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import './css/normalize.css';
import './css/skeleton.css';

import bookIndex from './bookIndex.vue'
import bookDetails from './bookDetails.vue'

const routes = [
  { path: '/book', 
    component: bookIndex,
    props: true},
  { path: '/book/show/:id',
    component: bookDetails,
    props: {show: true}},
  { path: '/book/edit/:id',
    component: bookDetails,
    props: {edit: true}},
  { path: '/book/create',
    component: bookDetails,
    props: {create: true}},
  { path: '/book/delete/:id',
    component: bookDetails,
    props: {delete: true}},
  { path: '/',
    component: bookIndex,
    props: true},
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

let app = createApp(App)

app.use(router)

app.mount('#app')