import iciTooltip from '../components/ici-tooltip'


function Events(el, content) {

  this.mouseout = (e) => {
    el.close();
  }

  this.mousemove = (e) => {

    if(content){
      if (e.buttons > 0) {
        el.close();
      }else{
        el.open({content: content, x: e.clientX, y: e.clientY})
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
