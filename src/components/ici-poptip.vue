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
      zIndex:{
        type:[Number,String],
        default:10
      },
      arrows:{
        type:Boolean,
        default:true,
      }
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
        this.el.addEventListener('mouseover', this.open);
      }
      this.el.addEventListener('mouseout', this.close);
      this.el.addEventListener('mousewheel', this.close);
      this.el.addEventListener('click', this.toggle);
      this.el.addEventListener('mousemove', this.mousemove)
    },
    beforeDestroy() {

      if (this.trigger === 'hover') {
        this.el.removeEventListener('mouseover', this.open)
      }
      this.el.removeEventListener('mouseout', this.close)
      this.el.removeEventListener('mousewheel', this.close);
      this.el.removeEventListener('click', this.toggle)
      this.el.removeEventListener('mousemove', this.mousemove)
    },
    methods: {
      mousemove(e) {
        if (e.buttons > 0) {
          this.__icipoptip.showtip = false;
        }
      },
      toggle(e) {
        if (this.__icipoptip.showtip) {
          this.close(e)
        }
        else {
          this.open(e)
        }
      },
      open(e) {

        if (e.buttons > 0 && e.type == 'mouseover') {
          return;
        }


        var positions = this.el.getBoundingClientRect();
        positions =JSON.parse(JSON.stringify(positions))
        //计算上角的点
        positions.top -= this.offset;
        //计算左下角的点
        positions.bottom += this.offset;

        this.__icipoptip.open({
          slots: this.$slots.default,
          positions: positions,
          zIndex:this.zIndex,
          arrows:this.arrows,
        });

      },

      close(e) {
        this.__icipoptip.close();
      },
    },
  }
</script>

<style scoped>

</style>
