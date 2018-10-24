import iciButton from './components/ici-button.vue'
import iciLoading from './components/ici-loading.vue'
import iciIcon from './components/ici-icon.vue'
import iciInput from './components/ici-input.vue'
import iciInputGroup from './components/ici-input-group'
import iciMultipleField from './components/ici-multiple-field'
import iciRadioField from './components/ici-radio-field'
import iciPopup from './components/ici-popup.vue'
import iciMessage from './components/ici-message.vue'
import iciSearch from './components/ici-search.vue'
import iciHint from './components/ici-hint.vue'
import iciHeader from './components/ici-header.vue'
import iciImagePreview from './components/ici-image-preview.vue'
import iciBgimg from './components/ici-bgimg.vue'

import * as funs from './assets/functions'

export const components = {
  iciButton,
  iciLoading,
  iciIcon,
  iciMultipleField,
  iciRadioField,
  iciInput,
  iciInputGroup,
  iciPopup,
  iciSearch,
  iciHint,
  iciHeader,
  iciBgimg
}

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(function (val) {
    return Vue.component(val, components[val]);
  });

  var message = new Vue(iciMessage);
  Vue.prototype.$icimsg = message;
  Vue.prototype.$funs = funs;

  var preview = new Vue(iciImagePreview);
  var previewMain = function (obj) {
    var winHeight = window.innerHeight;
    var winWidth = window.innerWidth;
    if (obj.nativeHeight > winHeight * 0.95) {

      obj.nativeWidth = (winHeight * 0.95 / obj.nativeHeight) * obj.nativeWidth;
      obj.nativeHeight = winHeight * 0.95;
    }
    if (obj.nativeWidth > winWidth * 0.95) {
      obj.nativeHeight = (winWidth * 0.95 / obj.nativeWidth) * obj.nativeHeight;
      obj.nativeWidth = winWidth * 0.95;

    }


    var left = obj.x - (winWidth / 2 - obj.width / 2);
    var top = obj.y - (winHeight / 2 - obj.height / 2);
    preview.showPic(
      {
        thumb_pic: obj.src,
        pic: obj.src,
        thumb: {transform: `translate3d(${left}px, ${top}px, 0px) scale(${obj.width / obj.nativeWidth},${obj.height / obj.nativeHeight})`},
        big: {width: obj.nativeWidth + 'px', height: obj.nativeHeight + 'px'}
      })
  }
  Vue.directive('bgpreview', {
    inserted: function (el, binding) {
      if(binding.value === false){
        return
      }
      el.addEventListener('click', (e) => {
        var reg = /url\("(.+)"\)/.exec(el.style.backgroundImage);
        if (reg) {
          var imgUrl = reg[1];
          var img = document.createElement('img')
          img.src = imgUrl;
          img.onload = function () {
            var nativeWidth = img.width;
            var nativeHeight = img.height;
            var width = el.offsetWidth;
            var height = el.offsetHeight;
            var x = e.x-e.offsetX, y = e.y-e.offsetY

            if (nativeWidth / nativeHeight > width / height) {
              //取宽
              width = height/nativeHeight*nativeWidth;
              x =  x+(el.offsetWidth-width)/2
            }else{
              //取高
              height = width/nativeWidth*nativeHeight;
              y =  y+(el.offsetHeight-height)/2
            }
            previewMain({width, height, x, y, nativeWidth, nativeHeight, src: imgUrl})
          };
          img.onerror = function (err) {
            console.log('图片错误', err)
          }
        }
      })
    }
  });

  Vue.directive('imgpreview', {
    inserted: function (el, binding) {
      if(binding.value === false){
        return
      }
      el.addEventListener('click', (e) => {
        var width = el.width, height = el.height, x = el.x, y = el.y, nativeWidth = el.naturalWidth,
          nativeHeight = el.naturalHeight;
          previewMain({width, height, x, y, nativeWidth, nativeHeight, src: el.src})
      })
    }
  })


  // 注册一个全局自定义指令 `v-focus`
  Vue.directive('focus', {
    // 指令的定义
    update: function (el, binding) {
      if (binding.value && binding.value !== binding.oldValue) {
        setTimeout(function () {
          el.focus();
        }, 150)
      }
    },
    inserted: function (el, binding) {
      if (binding.value) {
        setTimeout(function () {
          el.focus();
        }, 150);
      }
    }
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {install: install};
