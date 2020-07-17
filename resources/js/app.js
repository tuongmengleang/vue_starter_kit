/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import App from './components/views/App';

// routes
import router from './router'

const app = new Vue(
    Vue.util.extend({
        router
    },App)
).$mount('#app');
