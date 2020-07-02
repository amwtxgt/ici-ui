<template>
  <transition name="ici-popup">
    <div v-show="value" class="ici-popup-layer" :style="popupLayer" v-focus="value" tabindex="0"
         @keydown.esc.stop="esc && $emit('input',false)">
      <transition name="ici-mask">
        <div class="mark" v-if="value && mask" @click.self="clickMark"></div>
      </transition>
      <div class="ici-popup" :style="popupStyle" ref="fmsPopup">

        <div ref="header" class="ici-popup-title" :class="titleClass||'title-bg-color'" @mousedown="mousedown">
          <slot name="header">{{title}}</slot>
        </div>
        <div class="ici-popup-body" :style="popupBody" :class="bodyClass" @mousedown="bodyMousedown">
          <!--slot-->
          <div class="ici-popup-body-inner" :class="{noscroll:noScroll}">
            <slot></slot>
          </div>
          <ici-loading v-show="loading" block></ici-loading>
        </div>
        <div ref="footer" class="ici-popup-footer" :class="bodyClass" v-if="!footerHide">
          <div v-if="$slots['footer-left']" class="ici-popup-footer-left">
            <!--slot-->
            <slot name="footer-left"></slot>
          </div>
          <div class="ici-popup-handle">
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
        this.init()
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
      this.init()
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
      init(){
        if (!this.value) {
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
        console.log(this.drag)
      },
      mouseup() {
        this.drag.open = false;
      },
      mousemove(e) {
        console.log('mousemove')
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
