<template>
  <header class="ici-header" :style="{'background-color':color}" :class="{'ici-header-fixed':fixed}">
    <div class="ici-header-left">
      <slot name="left"><h2>slot=left</h2></slot>
    </div>
    <div class="ici-header-center">
      <slot>slot default</slot>
    </div>
    <div class="ici-header-right">
      <slot name="right">slot=right</slot>
    </div>
  </header>
</template>

<script>
  export default {
    name: "ici-header",
    data() {
      return {};
    },
    props: {
      color: {
        type: String,
        default: '#fff'
      },
      fixed:Boolean,
    },
  }
</script>

<style scoped lang="less">
  .ici-header-center, .ici-header-left, .ici-header-right, .ici-header {
    display: flex;
    align-items: center;
  }

  header.ici-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    padding: 0 20px 0 20px;
    background: #fff;
    z-index: 80;
    box-shadow: 0 1px 8px rgba(0, 0, 0, .3);
    &.ici-header-fixed{
      position: fixed !important;
    }
    .ici-header-left {
      margin-right: 20px;
    }
    .ici-header-right {
      text-align: right;
      justify-content: flex-end;
      flex: none;
      height: 100%;
    }
    .ici-header-center {
      flex: auto;
    }
  }

</style>
