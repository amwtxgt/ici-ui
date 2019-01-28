<template>
  <transition name="drawer">
    <div class="right-popup" v-show="value">
      <div class="right-popup-mask" @click.self="close"></div>
      <div class="right-popup-body" :style="bodyStyle">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "right-popup",
    data() {
      return {
        translate3d:''
      };
    },
    watch:{

    },
    props: {
      value: Boolean,
      width: {
        type: [Number, String],
        default: 450
      },
    },

    computed: {
      bodyStyle() {
        var style = {
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
    .right-popup-mask {
      opacity: 1;
    }
  }

  .drawer-enter, .drawer-leave-to /* .fade-leave-active below version 2.1.8 */ {
    .right-popup-mask {
      opacity: 0;
      pointer-events: none;
    }
    .right-popup-body{
      transform: translate3d(100%, 0, 0) !important;
    }
  }

  .right-popup {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    .right-popup-mask {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transform: translate3d(0, 0, 0);
      transition: opacity 333ms cubic-bezier(.4, 0, .22, 1);
    }
    .right-popup-body {
      max-width: 100%;
      height: 100%;
      position: absolute;
      pointer-events: auto;
      z-index: 11;
      top: 0;
      right: 0;
      background: #eee;
      transform: translate3d(0, 0, 0);
      transition: all 333ms cubic-bezier(.4, 0, .22, 1);
    }
  }
</style>
