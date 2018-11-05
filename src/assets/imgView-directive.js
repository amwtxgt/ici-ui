import iciImagePreview from '../components/ici-image-preview.vue'

export default function(Vue){
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
      if (binding.value === false) {
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
            var x = e.x - e.offsetX, y = e.y - e.offsetY

            if (nativeWidth / nativeHeight > width / height) {
              //取宽
              width = height / nativeHeight * nativeWidth;
              x = x + (el.offsetWidth - width) / 2
            }
            else {
              //取高
              height = width / nativeWidth * nativeHeight;
              y = y + (el.offsetHeight - height) / 2
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
      if (binding.value === false) {
        return
      }
      el.addEventListener('click', (e) => {
        var width = el.width, height = el.height, x = el.x, y = el.y, nativeWidth = el.naturalWidth,
          nativeHeight = el.naturalHeight;
        previewMain({width, height, x, y, nativeWidth, nativeHeight, src: el.src})
      })
    }
  })
}
