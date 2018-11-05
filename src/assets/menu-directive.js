import iciMenu from '../components/ici-menu.vue'

export default function (Vue){
  //右键菜单
  var rightMenu = new Vue(iciMenu);
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
    }
  })

  Vue.directive('leftmenu', {
    inserted: function (el, binding) {

      el.addEventListener('click',(e) => {
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
      })
    }
  })
}
