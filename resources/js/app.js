require('./bootstrap');

import Vue from 'vue'

Vue.component('foo', require('./components/Foo.vue').default);

const app = new Vue({
    el: '#app'
});