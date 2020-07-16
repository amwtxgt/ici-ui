import IciTour from '../components/ici-tour'

let id = 'tour_' + Date.now();


export default function (Vue, options) {

  //操作导航
  let iciTour = new Vue({...IciTour, ...options});
  iciTour.id = id;
  iciTour.$mount();
  document.body.appendChild(iciTour.$el);
  Vue.prototype.$tour = iciTour;


  /*
  * tourMap的格式
  * {
  * '导航名称':[{
  *   dom:'绑定的dom对象',
  *   content:'内容或html代码',
  *   position?:'right|left|top|bottom'
  *   width?:number
  *   x?:number,
  *   y?:number,
  *   buttons?:[{type:'primary',name:'按钮',click(){}}], //按钮，最多3个
  * }] //执行顺序数组
  * }
  * */
  let tourMap = {};
  Vue.prototype._tourMap = tourMap


  let tourFunc = function (el, binding,vNode) {

    if (!binding.value) {
      console.warn('v-tour的值是必填的,没有填写时功能无效')
      return;
    }
    if (!binding.arg) {
      console.warn('在v-tour中必须传入name参数，用于表示操作导航的名称，格式v-tour:name="" name可以是任何str')
      return;
    }

    let name = binding.arg;

    let d;
    if (typeof binding.value === 'string') {

      d = {
        content: binding.value
      }

    } else if (typeof binding.value === "function") {

      d = binding.value.bind(vNode.context)()

    } else if (typeof binding.value === 'object' && binding.value.content) {
      d = binding.value;
    }

    if (d.buttons && d.buttons.length > 3) {
      d.buttons.splice(3, d.buttons.length);
      console.warn('buttons最多3个，后面的将会忽略')
    }

    let tour = {
      dom: el,
      ...d
    }

    //如果对应的还没有内容，给一个空数组
    if (!tourMap[name]) {
      tourMap[name] = [];
    }

    if (d.index) {
      tourMap[name][d.index] = tour;
    } else {
      tourMap[name] = [tour];
    }
    let cName = iciTour.getCurrentName()

    if (cName === name) {
      setTimeout(() => {
        iciTour.updateTours(name)
      }, 1)
    }
  };
  Vue.directive('tour', {
    bind: tourFunc,
    componentUpdated: tourFunc,

    unbind(el) {

      for (let i in tourMap) {
        if (tourMap[i]) {
          tourMap[i].forEach((v, index) => {
            if (v && v.dom === el) {
              tourMap[i][index] = undefined;
            }
          })
        }
        if (tourMap[i].every(v => !v)) {
          delete tourMap[i];
        }
      }
    },
  })

}
