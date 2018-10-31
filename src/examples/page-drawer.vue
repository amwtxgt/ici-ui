<template>
  <div>
    <div class="title">ici-drawer 抽屉弹窗</div>
    <baseComponent title="基本弹窗" html='<ici-drawer v-model="popup1"></ici-drawer>'>
      <ici-drawer v-model="popup1"></ici-drawer>
      <ici-button @click="popup1= true">打开弹窗</ici-button>
    </baseComponent>
    <baseComponent title="设置宽度 width=200" html='<ici-drawer v-model="popup2" width="200"></ici-drawer>'>
      <ici-drawer v-model="popup2" width="200"></ici-drawer>
      <ici-button @click="popup2= true">打开弹窗</ici-button>
    </baseComponent>
  </div>
</template>

<script>
  export default {
    name: 'page-popup',
    data() {
      return {
        popup1: false,
        popup2: false,
        popup3: false,
        popup4: false,
        popup5: false,
        popup6: false,
        popup7: false,
        popup8: false,
        popup9: false,
        popup10:false
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
