<template>
  <div>
    <div class="title">button 按钮</div>

    <baseComponent title="基本按钮" html='<ici-button  type="primary" v-tour:导航1="{content:"这是一条有意思的内容4",width:1000,index:4}">这里</ici-button>
<ici-button type="primary" v-tour:导航1="{content:"这是一条有意思的内容2",width:200,index:1}">这里</ici-button>
<ici-bgimg style="float: right;background:#ddd" v-tour:导航1="{content:"这是一条有意思的内容3",width:1000,index:3}">传值</ici-bgimg>
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
<ici-bgimg style="float: right;background:#ddd"  v-tour:导航1="{content:"这是一条有意思的内容2",width:1000,index:2}">传值1</ici-bgimg>
 mounted() {
    this.$tour.start("导航1").finish(()=>{
  console.log("导航完成")
  }).close(()=>{
  console.log("关闭导航")
  })
  },'>
      <ici-button  type="primary" v-tour:导航1="{content:'这是一条有意思的内容4',width:1000,index:4}">这里</ici-button>
        <ici-button type="primary" v-tour:导航1="{content:'这是一条有意思的内容2',width:200,index:1}">这里</ici-button>
        <ici-bgimg style="float: right;background:#ddd" v-tour:导航1="{content:'这是一条有意思的内容3',width:1000,index:3}">传值</ici-bgimg>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <ici-bgimg style="float: right;background:#ddd"  v-tour:导航1="{content:'这是一条有意思的内容2',width:1000,index:2}">传值1</ici-bgimg>
        <ici-button type="info" @click="start">开始导航</ici-button>
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

    methods: {
      start(){
        this.$tour.start('导航1').finish(()=>{
          console.log('导航完成')
        }).close(()=>{
          console.log('关闭导航')
        })
      }
    },
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
