<template>
  <transition name="drawer">
    <div class="drawer-popup" :style="{'z-index': zIndex}" v-show="value">
      <div class="drawer-popup-mask"  @click.self="close"></div>
      <div class="drawer-popup-body"  :class="direction=='left'?'drawer-left':'drawer-right'" :style="bodyStyle">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "drawer-popup",
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

<style scoped lang="less">

  .drawer-enter-active, .drawer-leave-active {
    transition: opacity 333ms;
  }

  .drawer-enter-to, .drawer-leave {
    .drawer-popup-mask {
      opacity: 1;
    }
  }

  .drawer-enter, .drawer-leave-to {
    .drawer-popup-mask {
      opacity: 0;
      pointer-events: none;
    }

    .drawer-right {
      transform: translate3d(100%, 0, 0) !important;
    }

    .drawer-left {
      transform: translate3d(-100%, 0, 0) !important;
    }
  }

  .drawer-popup {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    .drawer-popup-mask {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transform: translate3d(0, 0, 0);
      transition: opacity 333ms cubic-bezier(.4, 0, .22, 1);
    }

    .drawer-popup-body {
      max-width: 100%;
      height: 100%;
      position: absolute;
      pointer-events: auto;
      z-index: 11;
      top: 0;
      background: #eee;
      transform: translate3d(0, 0, 0);
      transition: all 333ms cubic-bezier(.4, 0, .22, 1);
      &.drawer-left{
        left: 0;
      }
      &.drawer-right{
        right: 0;
      }
    }
  }
</style>
