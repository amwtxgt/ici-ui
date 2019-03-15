<template>
  <div>
    <div class="title">图标 ici-iconfont</div>
    <baseComponent title="基本" html='<ici-icon name="icon-qq"></ici-icon>'>
      <ici-color-icon click-state @click="abc" name="iconmaps" size="20px"></ici-color-icon>
    </baseComponent>

    <baseComponent title="尺寸" html='<ici-icon name="icon-qq" size="10px"></ici-icon>
<ici-icon name="icon-qq" size="20px"></ici-icon>
<ici-icon name="icon-qq" size="30px"></ici-icon>
<ici-icon name="icon-qq" size="40px"></ici-icon>'>
      <ici-icon name="icon-qq" size="10px"></ici-icon>
      <ici-icon name="icon-qq" size="20px"></ici-icon>
      <ici-icon name="icon-qq" size="30px"></ici-icon>
      <ici-icon name="icon-qq" size="40px"></ici-icon>
    </baseComponent>

    <baseComponent style="font-size:20px;" title="点击态 click-state" html='<ici-icon name="icon-qq"></ici-icon>'>
      <ici-icon name="icon-qq" click-state></ici-icon>
      <ici-icon name="icon-google_plus" click-state></ici-icon>
    </baseComponent>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        showloading: true,
      };
    },
    methods:{
      abc(){
        alert('asdfawef')
      }
    }
  };
</script>

<style scoped lang="less">
  .title {
    font-size: 30px;
    margin-bottom: 10px;
  }

  .icon-aaa {
    display: inline-block;
    text-align: center;
    width: 200px;
    padding: 5px;
    > span {
      display: block;
    }
  }
</style>
