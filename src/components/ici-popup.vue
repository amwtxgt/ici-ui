<template>
  <transition name="ici-popup">
    <div v-show="value" class="fms-popup-layer" :style="popupLayer" v-focus="value" tabindex="0"
         @keydown.esc.stop="esc && $emit('input',false)">
      <transition name="ici-mask">
        <div class="mark" v-if="value && mask" @click.self="clickMark"></div>
      </transition>
      <div class="fms-popup" :style="popupStyle" ref="fmsPopup">

        <div ref="header" class="fms-popup-title" :class="titleClass||'title-bg-color'" @mousedown="mousedown">
          <slot name="header">{{title}}</slot>
        </div>
        <div class="fms-popup-body" :style="popupBody" :class="bodyClass" @mousedown="bodyMousedown">
          <!--slot-->
          <div class="fms-popup-body-inner" :class="{noscroll:noScroll}">
            <slot></slot>
          </div>
          <ici-loading v-show="loading" block></ici-loading>
        </div>
        <div ref="footer" class="fms-popup-footer" :class="bodyClass" v-if="!footerHide" @mousedown="mousedown">
          <div v-if="$slots['footer-left']" class="fms-popup-footer-left">
            <!--slot-->
            <slot name="footer-left"></slot>
          </div>
          <div class="fms-popup-handle">
            <!--slot-->
            <slot name="footer-right">
              <ici-button v-if="hasConfirm" shape="pill" type="primary" :loading="loading" @click="$emit('confirm')">confirm</ici-button>
              <ici-button type="primary" shape="pill" plain @click="$emit('input',false)">close</ici-button>
            </slot>
          </div>
        </div>
      </div>

    </div>
  </transition>
</template>

<script>

  export default {
    name: "ici-popup",
    data() {
      return {
        hasConfirm: false,
        drag: {
          open: false,
          x: 0,
          y: 0,
          left: 0,
          top: 0,
        }
      }
    },
    watch: {
      value(v) {
        if (!v) {
          document.body.removeEventListener('mousemove', this.mousemove)
          document.body.removeEventListener('mouseup', this.mouseup)
          document.body.removeEventListener('mouseleave', this.mouseup)
          setTimeout(() => {
            var el = this.$refs.fmsPopup;
            el.style.left = '0px'
            el.style.top = '0px'
          }, 300)
          this.drag.open = false;
        }
        else {

          document.body.addEventListener('mousemove', this.mousemove)
          document.body.addEventListener('mouseup', this.mouseup)
          document.body.addEventListener('mouseleave', this.mouseup)
        }
      },
    },
    props: {
      value: [Boolean, String],
      loading: Boolean,//弹是否属于加载状态
      fullDrag: Boolean, //是否全窗口可拖拽
      title: {
        type: String,
        default: ''
      },
      titleClass: {
        type: String,
        default: ''
      },
      bodyClass:{
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'fixed'
      },
      esc: Boolean,
      mask: Boolean,
      noScroll: Boolean, //不出现滚动条
      markClose: Boolean, //点击遮罩层关闭
      maskClose: Boolean,

      maxHeight: { //最大高度
        type: String,
        default: '100%'
      },
      width: {
        type: Number,
        default: 700
      },

      height: [String, Number],
      fullscreen: {
        type: Boolean,
        default: false
      },
      footerHide: {
        type: Boolean,
        default: false
      }
    },

    mounted() {
      if (this._events.confirm) {
        this.hasConfirm = true;
      }

    },
    computed: {
      popupStyle() {
        let css = {maxWidth: this.width + 'px', maxHeight: this.maxHeight}
        if (this.height) {
          css.height = /[%a-zA-Z]/.test(this.height) ? this.height : this.height + 'px'
        }
        if (this.fullscreen) {
          css = {width: '100%', height: '100vh'}
          var el = this.$refs.fmsPopup;
          el.style.left = '0px'
          el.style.top = '0px'
        }
        return css;
      },
      popupLayer() {
        let css = {position: this.position}
        if (this.fullscreen) {
          css.padding = 0;
        }
        return css;
      },
      popupBody() {
        let css = {}
        if (this.value) {
          let hHeight = this.$refs.header ? this.$refs.header.clientHeight : 0,
            fHeight = this.$refs.footer ? this.$refs.footer.clientHeight : 0
          if (this.fullscreen) {
            css.height = 'calc(100vh - ' + (hHeight + fHeight) + 'px)';

          }
        }
        return css;
      }
    },
    methods: {
      bodyMousedown(e) {
        if (this.fullDrag) {
          this.mousedown(e)
        }
      },
      mousedown(e) {
        if (this.fullscreen) return
        var el = this.$refs.fmsPopup;
        var styles = window.getComputedStyle(el);

        this.drag = {
          open: true,
          x: e.clientX,
          y: e.clientY,
          left: parseFloat(styles.left),
          top: parseFloat(styles.top)
        };

      },
      mouseup() {
        this.drag.open = false;
      },
      mousemove(e) {
        var el = this.$refs.fmsPopup;
        let d = this.drag;
        if (this.drag.open) {
          let x = e.clientX, y = e.clientY;
          el.style.left = d.left + (x - d.x) + 'px'
          el.style.top = d.top + (y - d.y) + 'px'
        }
      },
      clickMark() {
        if (this.markClose || this.maskClose) {
          this.close()
        }
      },
      close() {
        this.$emit('input', false)
      }
    }
  }
</script>

<style scoped lang="less">

  .ici-popup-enter-active, .ici-mask-enter-active {
    transition: all .7s !important;
  }

  .ici-popup-leave-active, .ici-mask-leave-active {
    transition: all .5s !important;
  }

  .ici-mask-enter, .ici-mask-leave-to {
    opacity: 0 !important;
  }

  .ici-mask-enter-to {
    opacity: 1 !important;
  }

  .fms-popup-layer {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
    padding: 5%;
    display: flex;
    perspective: 1000px;
    transform-origin: 0 0 100px;
    outline: none;
    pointer-events: none;
    align-items: center;
    flex-direction: column;
    backface-visibility: hidden;

    .mark {
      background-color: rgba(0, 0, 0, .45);
      pointer-events: auto;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }

    &.ici-popup-enter, &.ici-popup-leave-to {
      .fms-popup {
        opacity: 0;
        transform: translate3d(-0px, -50px, -100px) !important;
      }
    }
    &.ici-popup-enter-to {
      .fms-popup {
        opacity: 1;
        transform: translate3d(0, 0, 0) !important;
      }
    }
    .fms-popup {
      min-height: 200px;
      pointer-events: auto;
      width: 100%;
      align-items: stretch;
      display: flex;
      flex-shrink: 1;
      flex-direction: column;
      transition: transform .3s cubic-bezier(.5, 0.0, 0.2, 1), opacity .3s, max-width .2s, width .2s !important;
      position: relative;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24);
      outline: none;
      &.title-bg-color{
        background-color: #f7f7f7;
      }
      .fms-popup-title {
        cursor: move;
        user-select: none;
        flex: none;
        &:empty {
          display: none;
        }

        padding: 15px 20px;
        font-size: 20px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        vertical-align: middle;
        position: relative;
        -webkit-transition: box-shadow .1s ease-in-out;
        transition: box-shadow .1s ease-in-out;
        width: 100%;
        z-index: 1;
        /*滚动效果*/
        &.roll {
          box-shadow: 0 0 10px silver;
        }
      }

      .fms-popup-body {
        position: relative;
        width: 100%;
        height: 100%;
        flex: auto;
        display: flex;
        .fms-popup-body-inner {
          flex: auto;
          overflow: auto;
          max-height: 100%;
          &.noscroll {
            overflow: visible;
          }
        }
      }
      .fms-popup-footer {
        flex: none;
        padding: 5px 10px;
        display: flex;
        .fms-popup-footer-left {
          flex: auto
        }
        .fms-popup-handle {
          flex: auto;
          padding: 5px;
          text-align: right;
        }
      }
    }
  }
</style>
