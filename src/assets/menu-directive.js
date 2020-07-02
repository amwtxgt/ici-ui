import iciMenu from '../components/ici-menu.vue'

export default function (Vue){
  //右键菜单
  let rightMenu = new Vue(iciMenu);
  Vue.prototype.$menu = rightMenu;
  Vue.directive('rightmenu', {
    inserted: function (el, binding) {

      el.oncontextmenu = (e) => {
        if (binding.value) {
          if (typeof binding.value === 'function') {
            rightMenu.open(binding.value(), {x:e.clientX,y:e.clientY})
          }
          else if (binding.value instanceof Array) {
            rightMenu.open(binding.value, {x:e.clientX,y:e.clientY})
          }
        }
        window.event.returnValue = false;
        return false;
      }
    },
    componentUpdated:function (el, binding) {
      el.oncontextmenu = (e) => {

        if (binding.value) {
          if (typeof binding.value === 'function') {

            rightMenu.open(binding.value(), {x:e.clientX,y:e.clientY})
          }
          else if (binding.value instanceof Array) {
            rightMenu.open(binding.value, {x:e.clientX,y:e.clientY})
          }
        }
        window.event.returnValue = false;
        return false;
      }
    },
    unbind(el){
      el.oncontextmenu = null;
    },
  })


  Vue.directive('leftmenu', {
    inserted: function (el, binding) {

      el.onmouseup = (e) => {
        if(e.button !==0) return;
        if (binding.value) {
          if (typeof binding.value === 'function') {
            rightMenu.open(binding.value(), {x:e.clientX,y:e.clientY})
          }
          else if (binding.value instanceof Array) {
            rightMenu.open(binding.value, {x:e.clientX,y:e.clientY})
          }
        }
        window.event.returnValue = false;
        return false;
      }
    },
    componentUpdated: function (el, binding) {

      el.onmouseup = (e) => {
        if(e.button !==0) return;
        if (binding.value) {
          if (typeof binding.value === 'function') {
            rightMenu.open(binding.value(), {x:e.clientX,y:e.clientY})
          }
          else if (binding.value instanceof Array) {
            rightMenu.open(binding.value, {x:e.clientX,y:e.clientY})
          }
        }
        window.event.returnValue = false;
        return false;
      }
    },
    unbind(el){
      el.onmouseup = null;
    },
  })
}
