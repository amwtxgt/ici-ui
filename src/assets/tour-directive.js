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
  *   func:function, //当传入的是函数时
  *   buttons?:[{type:'primary',name:'按钮',click(){}}], //按钮，最多3个
  * }] //执行顺序数组
  * }
  * */
  let tourMap = {};
  Vue.prototype._tourMap = tourMap;

  let updateData = function(name,data,el,component){
    let d;
    if (typeof data === 'string') {
      d = {
        content: data
      }
    } else if (typeof data === "function") {

      let func = data.bind(component)
      d = func()
      d.func = func;

    } else if (typeof data === 'object' && data.content) {
      d = data;
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

    if (typeof d.index === "number") {
      tourMap[name][d.index] = tour;
    } else {
      tourMap[name] = [tour];
    }
  }

  Vue.directive('tour', {
    bind: function (el, binding, vNode) {

      if (!binding.value) {
        console.warn('v-tour的值是必填的,没有填写时功能无效')
        return;
      }
      if (!binding.arg) {
        console.warn('在v-tour中必须传入name参数，用于表示操作导航的名称，格式v-tour:name="" name可以是任何str')
        return;
      }

      let name = binding.arg;

      updateData(name,binding.value,el,vNode.context)

      let key
      for (let a in vNode.context) {
        if (vNode.context[a] === binding.value) {
          key = a;
          break;
        }
      }
      if (key) {

        el.unwatch = vNode.context.$watch(key, (data) => {
          updateData(name,data,el,vNode.context)
          console.log(tourMap[name]);
          iciTour.update(name)
        }, {deep: true})
      }



    },
    unbind(el) {

      if(el.unwatch && typeof el.unwatch === "function"){

        el.unwatch()
      }

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
