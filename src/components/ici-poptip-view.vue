<template>
  <transition name="poptip">
    <div :id="id" class="ici-poptip-wrap" :style="style" v-show="showtip" ref="poptip" @mouseover="mouseover"
         @mouseout="mouseout">
      <div class="poptip-arrows" :class="bodyClass" ref="arrows" v-show="arrows"></div>
      <div class="ici-poptip-view" :class="bodyClass" :style="bodyStyle">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    components: {},
    name: "ici-poptip",
    data() {
      return {
        id: 'ici-poptip-' + Math.random(),
        showtip: false,
        timeout: 1,
        openTimeout: 1,
        zIndex: 10,
        arrows: false,

        overflow: 'auto',
        bodyClass: '',
        style: '',
        mouseoutClose: true,
      };
    },
    computed: {
      bodyStyle() {
        let style = {overflow: this.overflow}
        if (this.bgColor) style.backgroundColor = this.bgColor;
        return style;
      },
    },
    created() {
      this._append();
    },
    methods: {
      close() {
        if (this.showtip) {
          this.showtip = false;
        }
      },
      delayClose() {
        if (this.showtip) {
          this.timeout = setTimeout(() => {
            this.showtip = false;
          }, 50);
        }
      },
      show(refresh) {
        clearTimeout(this.timeout);
        if (refresh) {
          this.$forceUpdate()
        }

        this.showtip = true;
      },
      mouseover(e) {
        if (!e.buttons) {
          this.show();
        }

      },
      mouseout() {
        if (this.mouseoutClose) {
          this.delayClose()
        }
      },

      open(opt) {
        let isam = this.showtip; //是否开启过渡动画
        let def = this.$slots.default;
        if (opt.slots) this.$slots.default = opt.slots
        if (opt.zIndex) this.zIndex = opt.zIndex;
        if (opt.bgColor) this.bgColor = opt.bgColor
        if (opt.overflow) this.overflow = opt.overflow;

        this.bodyClass = opt.bodyClass;
        this.mouseoutClose = opt.mouseoutClose;
        this.arrows = opt.arrows;
        this.show(def !== opt.slots);
        this.style = ''

        if (opt.positions) {
          this.$nextTick(() => {
            this.setPosition(opt.positions, isam)
          })
        }
      },
      setPosition(pos, isam) {

        //浏览器大小
        let innerWidth = window.innerWidth,
          innerHeight = window.innerHeight;

        var el = this.$refs.poptip;
        //浮窗大小
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        var x, y, maxWidth, maxHeight, cssText = `z-index:${this.zIndex};`;
        var weiyi = `border-left-color:${this.bgColor};border-top-color:${this.bgColor};`; //箭头位移

        //计算下部分的高度
        var h2 = innerHeight - pos.bottom + (pos.bottom - pos.top) / 2

        if (innerHeight > height + pos.bottom || innerHeight / 2 < h2) {
          maxHeight = innerHeight - pos.bottom - 5
          cssText += `top:${pos.bottom}px;max-height:${maxHeight}px;`
        } else {
          weiyi += `bottom:-5px;transform: rotate(225deg);`
          cssText += `bottom:${innerHeight - pos.top}px;max-height:${pos.top - 5}px;`
        }


        //计算右部分宽度
        let w2 = innerWidth - pos.left + (pos.right - pos.left) / 2;

        if (innerWidth > width + pos.left || innerWidth / 2 < w2) {
          maxWidth = innerWidth - pos.left - 5
          cssText += `left:${pos.left}px;max-width:${maxWidth}px;`
        } else {
          let maxWidth;
          if (innerWidth > width) {
            maxWidth = width;
          } else {
            maxWidth = innerWidth - 10
          }
          if (pos.right - width < 5) x = 5;
          else x = pos.right - width;
          cssText += `left:${innerWidth - width - 5}px;max-width:${maxWidth}px;`

          weiyi += `left:${(pos.left + (pos.right - pos.left) / 2) - (innerWidth - width)}px;`

        }

        //箭头位置
        if (this.arrows) {
          let arrows = this.$refs.arrows;
          arrows.style.cssText = weiyi;
        }
        if (!isam) {
//          console.log('关闭动画')
          cssText += 'transition: none'
        }

        this.style = cssText;
      },

      _append() {
        if (!window.document.getElementById(this.id)) {
          if (this.$el) {
            window.document.body.appendChild(this.$el);
          } else {
            var menu = window.document.createElement('div');
            window.document.body.appendChild(menu);
            this.$mount(menu); //绑定
          }
        }
      },
    },
  }
</script>
