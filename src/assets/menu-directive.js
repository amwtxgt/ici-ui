import iciMenu from '../components/ici-menu.vue'



export default function (Vue, options) {
  //右键菜单
  let rightMenu = new Vue({...iciMenu, ...options});
  Vue.prototype.$menu = rightMenu;

  let eventHandler = (e,binding,isLeftMouse)=>{

    if (isLeftMouse && e.button !== 0) return;

    if (binding.value) {
      if (typeof binding.value === 'function') {

        rightMenu.open(binding.value(), {x: e.clientX, y: e.clientY})
      } else if (binding.value instanceof Array) {
        rightMenu.open(binding.value, {x: e.clientX, y: e.clientY})
      }
    }

    e.returnValue = false;
    return false;
  }

  Vue.directive('rightmenu', {
    inserted: function (el, binding) {

      el.oncontextmenu = (e) => {
        return eventHandler(e,binding)
      }
    },
    componentUpdated: function (el, binding) {
      el.oncontextmenu = (e) => {
        return eventHandler(e,binding)
      }
    },
    unbind(el) {
      el.oncontextmenu = null;
    },
  })


  Vue.directive('leftmenu', {
    inserted: function (el, binding) {

      el.onmouseup = (e) => {
        return eventHandler(e,binding,true)
      }
    },
    componentUpdated: function (el, binding) {

      el.onmouseup = (e) => {
        return eventHandler(e,binding,true)
      }
    },
    unbind(el) {
      el.onmouseup = null;
    },
  })
}
