import iciButton from './components/ici-button.vue'
import iciLoadin from './components/ici-loading.vue'

export const components = {
  iciButton,iciLoadin
}

const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {install};
