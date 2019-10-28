import iciMessage from '../components/ici-message.vue'

export default function (Vue,options = {}){
    var message = new Vue({...iciMessage,...options});
    Vue.prototype.$icimsg = message;
}
