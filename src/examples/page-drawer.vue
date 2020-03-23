<template>
  <div>
    <div class="title">ici-drawer 抽屉弹窗</div>
    <baseComponent title="基本弹窗" html='<ici-drawer v-model="popup1"></ici-drawer>
<ici-button @click="popup1= true">打开弹窗</ici-button>'>
      <ici-drawer v-model="popup1"></ici-drawer>
      <ici-button @click="popup1= true">打开弹窗</ici-button>
    </baseComponent>
    <baseComponent title="全屏弹窗" html='<ici-drawer v-model="popup2" width="100%"><ici-button @click="popup2=false">关闭</ici-button></ici-drawer>
<ici-button @click="popup2= true">打开弹窗</ici-button>'>
      <ici-drawer v-model="popup2" width="100%"><ici-button @click="popup2=false">关闭</ici-button></ici-drawer>
      <ici-button @click="popup2= true">打开弹窗</ici-button>
    </baseComponent>
    <baseComponent title="设置宽度 width=200" html='<ici-drawer v-model="popup3" width="200" hide-mask><ici-button @click="popup3=false">关闭</ici-button></ici-drawer>
<ici-button @click="popup3= true">打开弹窗</ici-button>'>
      <ici-drawer v-model="popup3" width="200" hide-mask><ici-button @click="popup3=false">关闭</ici-button></ici-drawer>
      <ici-button @click="popup3= true">打开弹窗</ici-button>
    </baseComponent>
    <baseComponent title="设置方向 direction=left" html='<ici-drawer direction="left" v-model="popup4" width="500"></ici-drawer>
<ici-button @click="popup4= true">打开弹窗</ici-button>'>
      <ici-drawer direction="left" v-model="popup4" width="500"></ici-drawer>
      <ici-button @click="popup4= true">打开弹窗</ici-button>
    </baseComponent>

    <baseComponent title="设置方向 direction=bottom" html='<ici-drawer direction="bottom" v-model="popup5" width="500"></ici-drawer>
<ici-button @click="popup5= true">打开弹窗</ici-button>'>
      <ici-drawer direction="bottom" v-model="popup5" width="500"></ici-drawer>
      <ici-button @click="popup5= true">打开弹窗</ici-button>
    </baseComponent>

    <baseComponent title="设置方向 direction=top" html='<ici-drawer direction="top" v-model="popup6" width="500"></ici-drawer>
<ici-button @click="popup6= true">打开弹窗</ici-button>'>
      <ici-drawer direction="top" v-model="popup6" width="500"></ici-drawer>
      <ici-button @click="popup6= true">打开弹窗</ici-button>
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
