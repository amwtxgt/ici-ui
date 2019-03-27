<template>
  <div>
    <div class="title">彩色图标 ici-color-icon</div>
    <baseComponent title="基本" html='<ici-color-icon click-state @click="abc" name="iconmaps" size="20px"/>'>
      <ici-color-icon click-state @click="abc" name="iconmaps" size="20px"></ici-color-icon>
    </baseComponent>

    <baseComponent title="尺寸" html='<ici-color-icon name="iconmaps" size="10px"/>
<ici-color-icon name="iconmaps" size="20px"/>
<ici-color-icon name="iconmaps" size="30px"/>
<ici-color-icon name="iconmaps" size="40px"/>'>
      <ici-color-icon name="iconmaps" size="10px"/>
      <ici-color-icon name="iconmaps" size="20px"/>
      <ici-color-icon name="iconmaps" size="30px"/>
      <ici-color-icon name="iconmaps" size="40px"/>
    </baseComponent>

    <baseComponent style="font-size:20px;" title="点击态 click-state" html=' <ici-color-icon name="iconmaps" size="30px" click-state />'>

      <ici-color-icon name="iconmaps" size="30px" click-state />
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
