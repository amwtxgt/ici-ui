<template>
  <transition name="drawer">
    <div class="ici-drawer" :style="{'z-index': zIndex}" v-show="value" @click.stop="">
      <div class="ici-drawer-mask" @click.self.stop="close" v-if="!hideMask"></div>
      <div class="ici-drawer-body" :class="directionClass" :style="bodyStyle">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "ici-drawer",
    data() {
      return {
        translate3d: '',
        des: {
          left: 'drawer-left',
          right: 'drawer-right',
          top: 'drawer-top',
          bottom: 'drawer-bottom',
        }
      };
    },
    watch: {},
    props: {
      value: Boolean,
      hideMask: Boolean,
      width: {
        type: [Number, String],
        default: 450
      },
      zIndex: {
        type: [Number, String],
        default: 999
      },
      //方向
      direction: {
        type: String,
        default: 'right',
      },
    },

    computed: {
      directionClass() {

        if (this.des[this.direction]) {
          return this.des[this.direction]
        } else {
          return this.des.right
        }
      },
      bodyStyle() {
        let width = this.width + 'px'
        if (typeof this.width === "string" && parseInt(this.width).toString() !== this.width) {
          width = this.width;
        }
        let style = {}
        if(this.direction==='top' || this.direction ==='bottom'){
            style.height =  width;
        }else{
          style.width =  width;
        }

        return style
      },
    },

    methods: {
      close() {
        this.$emit('input', false)
      },
    },
    components: {}
  }
</script>
