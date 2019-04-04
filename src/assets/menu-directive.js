import iciMenu from '../components/ici-menu.vue'

export default function (Vue){
  //右键菜单
  let rightMenu = new Vue(iciMenu);
  Vue.directive('rightmenu', {
    inserted: function (el, binding) {
      el.oncontextmenu = (e) => {

        if (binding.value) {
          if (typeof binding.value === 'function') {

            rightMenu.open(binding.value(), e)
          }
          else if (binding.value instanceof Array) {
            rightMenu.open(binding.value, e)
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
            rightMenu.open(binding.value(), e)
          }
          else if (binding.value instanceof Array) {
            rightMenu.open(binding.value, e)
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
