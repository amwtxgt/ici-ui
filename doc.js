import App from './config/app.vue';
import baseComponent from './config/base-component.vue'
import './config/highlight.css';
import highlight from './config/vue-highlight.js'

Vue.use(highlight);
Vue.component('baseComponent', baseComponent)

new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
})