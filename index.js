import iciButton from './components/ici-button.vue'
import iciLoadin from './components/ici-loading.vue'

const components = {
    iciButton, iciLoadin
}

const install = function (Vue) {
    if (install.installed) return;
    Object.keys(components).forEach(val=> Vue.component(val,components[val]))
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {install};
