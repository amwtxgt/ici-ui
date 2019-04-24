<template>
  <transition name="fadehou">
    <div v-if="value" class="fms-input-hint" :style="{maxHeight:maxHeight}">
      <slot></slot>
      <!--加载图标-->
      <div v-show="loading">
        <div class="fms-input-hint-loading">
          <ici-loading></ici-loading>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "ici-hint",
    data() {
      return {};
    },
    props: {
      value: Boolean,
      loading: Boolean,
      maxHeight: {
        type: String,
        default: '300px',
      }
    },

  }
</script>

<style scoped lang="less">
  .fms-input-hint {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: auto;
    box-sizing: border-box;

    background-color: #ffffff;
    border-radius: 0 0 2px 2px;
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    z-index: 1;
    margin: 2px 0px;

    .fms-input-hint-loading {
      text-align: center;
      padding: 10px;
    }
  }

  .fadehou-enter-active, .fadehou-leave-active {
    transition: all .5s;
  }

  .fadehou-enter, .fadehou-leave-to{
    opacity: 0;
  }
</style>
