<template>
  <transition name="drawer">
    <div class="ici-drawer" :style="{'z-index': zIndex}" v-show="value">
      <div class="ici-drawer-mask" @click.self="close"></div>
      <div class="ici-drawer-body" :class="direction=='left'?'drawer-left':'drawer-right'" :style="bodyStyle">
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
        translate3d: ''
      };
    },
    watch: {},
    props: {
      value: Boolean,
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
      bodyStyle() {
        let style = {
          width: `${this.width}px`,
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
