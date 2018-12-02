import iciTooltip from '../components/ici-tooltip'


function Events(el, content) {
  var timeout = 0
  this.mouseout = (e) => {
    clearTimeout(timeout)
    el.close();
  }

  this.mousemove = (e) => {
    clearTimeout(timeout)
    if(content){
      if (e.buttons > 0) {
        el.close();
      }else{
        timeout = setTimeout(()=>{
          el.open({content: content, x: e.clientX, y: e.clientY})
        },50)

      }

    }
  }
}


export default function (Vue) {
  //提示窗
  var tooltip = new Vue(iciTooltip);

  Vue.directive('title', {

    inserted: function (el, binding) {
      let content = ''
      if (typeof binding.value === 'string') {
        content = binding.value
      }

      let events = new Events(tooltip, content);

      el.addEventListener('mousemove', events.mousemove)
      el.addEventListener('mouseout', events.mouseout)
      el.addEventListener('mousewheel', events.mouseout);
      el.addEventListener('mousedown', events.mouseout);


    },

  })
}
