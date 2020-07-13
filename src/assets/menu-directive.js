import iciMenu from '../components/ici-menu.vue'

export default function (Vue, options) {
  //右键菜单
  let rightMenu = new Vue({...iciMenu, ...options});
  Vue.prototype.$menu = rightMenu;
  Vue.directive('rightmenu', {
    inserted: function (el, binding) {

      el.oncontextmenu = (e) => {

        if (binding.value) {
          if (typeof binding.value === 'function') {
            console.log('1111111',binding)
            rightMenu.open(binding.value(), {x: e.clientX, y: e.clientY})
          } else if (binding.value instanceof Array) {

            console.log('22222',binding)
            rightMenu.open(binding.value, {x: e.clientX, y: e.clientY})
          }
        }
        window.event.returnValue = false;
        return false;
      }
    },
    componentUpdated: function (el, binding) {
      el.oncontextmenu = (e) => {

        if (binding.value) {
          if (typeof binding.value === 'function') {

            rightMenu.open(binding.value(), {x: e.clientX, y: e.clientY})
          } else if (binding.value instanceof Array) {
            rightMenu.open(binding.value, {x: e.clientX, y: e.clientY})
          }
        }
        window.event.returnValue = false;
        return false;
      }
    },
    unbind(el) {
      el.oncontextmenu = null;
    },
  })


  Vue.directive('leftmenu', {
    inserted: function (el, binding) {

      el.onmouseup = (e) => {
        if (e.button !== 0) return;
        if (binding.value) {
          if (typeof binding.value === 'function') {
            rightMenu.open(binding.value(), {x: e.clientX, y: e.clientY})
          } else if (binding.value instanceof Array) {
            rightMenu.open(binding.value, {x: e.clientX, y: e.clientY})
          }
        }
        window.event.returnValue = false;
        return false;
      }
    },
    componentUpdated: function (el, binding) {

      el.onmouseup = (e) => {
        if (e.button !== 0) return;
        if (binding.value) {
          if (typeof binding.value === 'function') {
            rightMenu.open(binding.value(), {x: e.clientX, y: e.clientY})
          } else if (binding.value instanceof Array) {
            rightMenu.open(binding.value, {x: e.clientX, y: e.clientY})
          }
        }
        window.event.returnValue = false;
        return false;
      }
    },
    unbind(el) {
      el.onmouseup = null;
    },
  })
}
