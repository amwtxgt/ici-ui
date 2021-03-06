import './less/index.less'
import iciButton from './components/ici-button.vue'
import iciLoading from './components/ici-loading.vue'
import iciIcon from './components/ici-icon.vue'
import iciInput from './components/ici-input.vue'
import iciInputGroup from './components/ici-input-group'
import iciMultipleField from './components/ici-multiple-field'
import iciRadioField from './components/ici-radio-field'

import iciPopup from './components/ici-popup.vue'
import iciModal from './components/ici-modal.vue'

import iciDrawer from './components/ici-drawer'

import iciSearch from './components/ici-search.vue'
import iciHint from './components/ici-hint.vue'
import iciHeader from './components/ici-header.vue'

import iciBgimg from './components/ici-bgimg.vue'
import iciScroll from './components/ici-scroll.vue'
import iciColorIcon from './components/ici-color-icon'
import IciTour from './components/ici-tour'

import * as funs from './assets/functions'
import menuDirective from './assets/menu-directive'
import imgViewDirective from './assets/imgView-directive'
import tooltipDirective from './assets/tooltip-directive'
import tourDirective from './assets/tour-directive'


//悬浮窗
import iciPoptip from './components/ici-poptip';
import iciPoptipView from './components/ici-poptip-view';

import iciMsg from './assets/icimsg'

const components = {
  iciButton,
  iciLoading,
  iciIcon,
  iciMultipleField,
  iciRadioField,
  iciInput,
  iciInputGroup,
  iciPopup,
  iciModal,
  iciSearch,
  iciHint,
  iciHeader,
  iciBgimg,
  iciDrawer,
  iciScroll,
  iciPoptip,
  iciColorIcon,
  IciTour,
}

const install = function (Vue,options) {

  if (install.installed) return;
  Object.keys(components).forEach(function (val) {
    return Vue.component(val, components[val]);
  });

  iciMsg(Vue,options)

  Vue.prototype.$funs = funs;

  //悬浮窗
  let iciPoptip  = new Vue({...iciPoptipView,...options});
  Vue.prototype.$icitip = iciPoptip;

  var modal  = new Vue(iciModal);
  Vue.prototype.$popup = modal;

  // 注册一个全局自定义指令 `v-focus`
  Vue.directive('focus', {
    // 指令的定义
    update: function (el, binding) {
      if (binding.value  && binding.value !== binding.oldValue) {
        setTimeout(function () {
          el.focus();
        }, 150)
      }
    },
    inserted: function (el, binding) {
      if (binding.value) {
        setTimeout(function () {
          el.focus();
        }, 150);
      }
    }
  })

  //图片预览
  imgViewDirective(Vue)

  //右键菜单
  menuDirective(Vue,options);

  tourDirective(Vue,options);

  //提示窗
  tooltipDirective(Vue);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {install: install};
export {components, funs}


