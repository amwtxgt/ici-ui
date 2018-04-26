import iciButton from './components/ici-button.vue'
import iciLoading from './components/ici-loading.vue'

export const components = {
    iciButton, iciLoading
}

const install = function (Vue) {
    if (install.installed) return;
    Object.keys(components).forEach(val=> Vue.component(val,components[val]))
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {install};
