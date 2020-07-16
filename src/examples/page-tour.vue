<template>
  <div>
    <div class="title">button 按钮</div>
    <baseComponent title="基本按钮" html='<ici-button>你好啊</ici-button>'>
      <ici-tour></ici-tour>
    </baseComponent>
  </div>
</template>

<script>
  export default {
    name: 'page-button',
    data() {
      return {
        loading: false,
        focus: false,
      };
    },
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {},
  };
</script>

<style lang="less" scoped>
  .title {
    font-size: 30px;
    margin-bottom: 10px;
  }

  button {
    margin: 5px !important;
  }

</style>
