<template>
  <transition name="poptip">
    <div :id="id" class="ici-poptip-wrap" v-show="showtip" ref="poptip" @mouseover="mouseover" @mouseout="mouseout">
      <div class="poptip-arrows" ref="arrows" v-show="arrows"></div>
      <div class="ici-poptip-view" :style="{backgroundColor:bgColor}">
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
        bgColor: '#fff',
      };
    },

    created() {
      this._append();
    },
    methods: {
      close() {
        this.timeout = setTimeout(() => {
          this.showtip = false;
        }, 50)
      },
      show(isRefresh) {
        clearTimeout(this.timeout);
        if (isRefresh && this.showtip) {
          this.showtip = false;
          this.$nextTick(() => {
            this.showtip = true;
          })
        }
        else {
          this.showtip = true;
        }
      },
      mouseover() {
        this.show();
      },
      mouseout() {
        this.close()
      },

      open(opt) {

        let def = this.$slots.default;
        if (opt.slots) {
          this.$slots.default = opt.slots
        }
        if (opt.zIndex) {
          this.zIndex = opt.zIndex;
        }
        if (opt.bgColor) {
          this.bgColor = opt.bgColor
        }
        this.arrows = opt.arrows;
        this.show(def !== opt.slots);
        var el = this.$refs.poptip;
        el.style.cssText = '';
        if (opt.positions) {
          this.$nextTick(() => {
            this.setPosition(opt.positions)
          })
        }
      },
      setPosition(pos) {

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
        }
        else {
          weiyi += `bottom:-5px;top:auto; transform: rotate(225deg);`
          cssText += `bottom:${innerHeight - pos.top}px;max-height:${pos.top - 5}px;`
        }


        //计算右部分宽度
        var w2 = innerWidth - pos.left + (pos.right - pos.left) / 2

        if (innerWidth > width + pos.left || innerWidth / 2 < w2) {
          maxWidth = innerWidth - pos.left - 5
          cssText += `left:${pos.left}px;max-width:${maxWidth}px;`
        }
        else {
          let maxWidth;
          if (innerWidth > width) {
            maxWidth = width;
          }
          else {
            maxWidth = innerWidth - 10
          }
          if (pos.right - width < 5) x = 5;
          else x = pos.right - width;
          cssText += `left:${innerWidth - width - 5}px;max-width:${maxWidth}px;`
          console.log('weeeewae')
          weiyi += `left:${(pos.left + (pos.right - pos.left) / 2) - (innerWidth - width)}px;`

        }

        //箭头位置
        if (this.arrows) {
          let arrows = this.$refs.arrows;
          arrows.style.cssText = weiyi;
        }

        el.style.cssText = cssText;
      },

      _append() {
        if (!window.document.getElementById(this.id)) {
          if (this.$el) {
            window.document.body.appendChild(this.$el);
          }
          else {
            var menu = window.document.createElement('div');
            window.document.body.appendChild(menu);
            this.$mount(menu); //绑定
          }
        }
      },
    },
  }
</script>

<style scoped lang="less">
  .poptip-enter-active, .poptip-leave-active {
    transition: opacity 200ms;
  }

  .poptip-enter, .poptip-leave-to {
    opacity: 0;
  }

  .ici-poptip-wrap {
    max-width: 95%;
    max-height: 95%;
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: column;
    .ici-poptip-view {
      padding: 5px;
      flex: auto;
      overflow: auto;
      width: 100%;
      max-height: 100%;
      border-radius: 4px;
      box-shadow: 0 1px 8px rgba(0, 0, 0, .3);
    }

    .poptip-arrows {
      position: absolute;
      width: 0;
      height: 0;
      transform: rotate(45deg);
      border: 5px solid transparent;
      border-left-color: #fff;
      border-top-color: #fff;
      top: -5px;
      left: 20px;
      box-shadow: -3px -3px 3px rgba(0, 0, 0, .1);
    }
  }


</style>
