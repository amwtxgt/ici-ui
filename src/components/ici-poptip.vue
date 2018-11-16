<template>
  <div v-if="false" class="ici-poptip"></div>
</template>

<script>
  export default {
    components: {},
    name: "ici-poptip",
    data() {
      return {
        el: null
      };
    },
    props: {
      trigger: {
        type: String,
        default: 'hover'
      },
      //偏移
      offset: {
        type: [Number, Object],
        default: 10
      },
      layer: {
        type: [Number],
        default: 1,
      },
    },
    mounted() {

      var el = this.$el;
      for (var i = 0; i < this.layer; i++) {
        if (el.parentNode) {
          el = el.parentNode;
        }
      }

      var position = window.getComputedStyle(el).position
      if (position === 'static') {
        el.style.position = 'relative'
      }

      this.el = el;
      if (this.trigger === 'hover') {
        this.el.addEventListener('mouseover', this.open, {capture: true});
        this.el.addEventListener('mouseout', this.close);
        this.el.addEventListener('mousedown',this.toggle)
      }
    },
    beforeDestroy() {

      if (this.trigger === 'hover') {
        this.el.removeEventListener('mouseover', this.open)
        this.el.removeEventListener('mouseout', this.close)
        this.el.removeEventListener('mousedown',this.toggle)
      }
    },
    methods: {
      toggle(e){
        if(this.__icipoptip.showtip){
            this.close(e)
        }else{
            this.open(e)
        }
      },
      open(e) {

        var positions = this.getPosition(e);

        this.__icipoptip.open({
          slots: this.$slots.default,
          positions: positions,
        });

      },

      //位置 {left, right, top, bottom} 左右上下的位置，
      getPosition(e) {

        //提取 transform 带来的偏移量
        var transform = /matrix\(1, 0, 0, 1, (\d+), (\d+)\)/.exec(window.getComputedStyle(this.el).transform);

        if (!transform) {
          transform = [0, 0, 0]
        }

        //鼠标在元素的位置
        var offsetX = e.layerX - transform[1],
          offsetY = e.layerY - transform[2],

          //鼠标在屏幕的位置
          clientX = e.clientX,
          clientY = e.clientY,

          //元素大小
          width = this.el.offsetWidth,
          height = this.el.offsetHeight;

        //计算左边位置
        var left = clientX - offsetX;
        var right = left + width;

        //计算上角的点
        var top = clientY - offsetY - this.offset;
        //计算左下角的点
        var bottom = top + height + this.offset * 2;
        return {left, right, top, bottom};
      },
      close(e) {
        this.__icipoptip.close();
      },
    },
  }
</script>

<style scoped>

</style>
