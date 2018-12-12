import iciTooltip from '../components/ici-tooltip'


function Events(el) {
  var timeout = 0
  this.mouseout = (e) => {
    clearTimeout(timeout)
    el.close();
  }

  this.mousemove = (e) => {

    clearTimeout(timeout)
    var  title = ''
    e.path.some((v)=>{
      if(v.dataset.__title){
        title = v.dataset.__title
        return true
      }
    })
    if(title){
      if (e.buttons > 0) {
        el.close();
      }else{
        timeout = setTimeout(()=>{
          el.open({content: title, x: e.clientX, y: e.clientY})
        },50)
      }
    }
  }
}


export default function (Vue) {
  //提示窗
  var tooltip = new Vue(iciTooltip);
  let events = new Events(tooltip);

  Vue.directive('title', {

    inserted: function (el, binding) {

      if (typeof binding.value === 'string' || typeof binding.value === 'number') {
        el.dataset.__title = binding.value
      }

      el.addEventListener('mousemove', events.mousemove);
      el.addEventListener('mouseout', events.mouseout);
      el.addEventListener('mousewheel', events.mouseout);
      el.addEventListener('mousedown', events.mouseout);
    },
    update: function (el, binding){
      if (typeof binding.value === 'string' || typeof binding.value === 'number') {

        el.dataset.__title = binding.value
      }
    },
    unbind:function(el){
      el.removeEventListener('mousemove', events.mousemove);
      el.removeEventListener('mouseout', events.mouseout);
      el.removeEventListener('mousewheel', events.mouseout);
      el.removeEventListener('mousedown', events.mouseout);
    }
  })
}
