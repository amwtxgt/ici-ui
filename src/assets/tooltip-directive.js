
import iciTooltip from '../components/ici-tooltip'



function mouseover(e){
  console.log('mouseover',e)
}

function mouseout(e){
  console.log('mouseout',e)
}

function mousemove(e){
//  console.log('mousemove',e)
}


export default function (Vue){
  //提示窗
  var tooltip = new Vue(iciTooltip)

  Vue.directive('title', {

    inserted: function (el, binding) {
      el.addEventListener('mouseover', mouseover);
      el.addEventListener('mouseout', mouseout)
      el.addEventListener('mousewheel', mouseout);
      el.addEventListener('mousemove', mousemove)
    },

    unbind:function(el,binding){

    }
  })
}
