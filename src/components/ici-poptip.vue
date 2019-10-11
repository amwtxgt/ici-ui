<template>
  <div v-if="false" class="ici-poptip"></div>
</template>

<script>
  export default {
    components: {},
    name: "ici-poptip",
    data() {
      return {
        el: null,
        timeout: 0
      };
    },
    props: {
      bodyClass:String,
      //触发弹窗机制，hover,click,custom
      trigger: {
        type: String,
        default: 'hover'
      },
      //偏移
      offset: {
        type: [Number, Object],
        default: 10
      },
      //触发层级，默认1，根据父级元素计算位置， 如果为2那就是根据父级的父级计算
      layer: {
        type: [Number],
        default: 1,
      },
      //层级
      zIndex: {
        type: [Number, String],
        default: 10
      },
      //是否显示箭头
      arrows: {
        type: Boolean,
        default: true,
      },
      //背景颜色
      bgColor: {
        type: String,
        default: ''
      },
      //
      mouseoutClose:{
          type:Boolean,
          default:true,
      },
      overflow:{
        type:String,
        default:'auto'
      }
    },

    mounted() {

      var el = this.$el;
      for (var i = 0; i < this.layer; i++) {
        if(el.parentNode) {
          el = el.parentNode;
        }
      }

      let position = window.getComputedStyle(el).position
      if(position === 'static') {
        el.style.position = 'relative'
      }

      this.el = el;
      if(this.trigger === 'hover') {
        this.el.addEventListener('mouseover', this.delayOpen);
      }

      if(this.trigger !== 'custom') {
        this.el.addEventListener('mouseout', this.delayClose, {passive: true});
        this.el.addEventListener('mousewheel', this.close, {passive: true});
        this.el.addEventListener('click', this.toggle);
        this.el.addEventListener('mousemove', this.mousemove)
      }

    },
    beforeDestroy() {

      if(this.trigger === 'hover') {
        this.el.removeEventListener('mouseover', this.delayOpen)
      }

      if(this.trigger !== 'custom') {
        this.el.removeEventListener('mouseout', this.delayClose)
        this.el.removeEventListener('mousewheel', this.close);
        this.el.removeEventListener('click', this.toggle)
        this.el.removeEventListener('mousemove', this.mousemove)
      }
    },
    methods: {
      mousemove(e) {
        if(e.buttons > 0) {
          this.$icitip.showtip = false;
        }
      },
      toggle(e) {
        if(this.$icitip.showtip) {
          this.close(e)
        }
        else {
          this.open(e)
        }
      },
      delayOpen(e) {
        this.timeout = setTimeout((event) => {
          this.open(event)
        }, 200, e)
      },

      open(e,positions) {
        if(e) {
          //鼠标移动并被按下
          if(e.buttons > 0 && e.type == 'mouseover') {
            return;
          }
        }

        if(!positions){
          positions = this.el.getBoundingClientRect();
        }

        positions = JSON.parse(JSON.stringify(positions));
        //计算上角的点
        positions.top -= this.offset;
        //计算左下角的点
        positions.bottom += this.offset;

        this.$icitip.open({
          slots: this.$slots.default,
          positions: positions,
          zIndex: this.zIndex,
          arrows: this.arrows,
          bgColor: this.bgColor,
          bodyClass:this.bodyClass,
          overflow:this.overflow,
          mouseoutClose:this.mouseoutClose,
        });

      },

      close(e) {
        clearTimeout(this.timeout)
        this.$icitip.close();
      },
      delayClose(e) {
        clearTimeout(this.timeout)
        this.$icitip.delayClose();
      },
    },
  }
</script>

<style scoped>
  .s{
    overflow: visible;
  }
</style>
