import App from './config/app.vue';
import Vue from 'vue';
import baseComponent from './config/base-component.vue'

import './config/highlight.css';
import highlight from './config/vue-highlight.js'
Vue.use(highlight);

import iciUi from './index'
Vue.use(iciUi);

import 'iview/dist/styles/iview.css';
import iview from 'iview'
Vue.use(iview);



Vue.component('baseComponent', baseComponent)

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
