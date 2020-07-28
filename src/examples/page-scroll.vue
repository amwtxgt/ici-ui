<template>
  <div>
    <div class="title">ici-scroll 滚动组件</div>
    <baseComponent title="基本" html='<div style="height:100px;border:1px solid #eee;">
  <ici-scroll>
    <p style="padding:10px 5px;">我是一行</p>
    <p style="padding:10px 5px;">我是一行</p>
    <p style="padding:10px 5px;">我是一行</p>
    <p style="padding:10px 5px;">我是一行</p>
    <p style="padding:10px 5px;">我是一行</p>
  </ici-scroll>
</div>'>
      <h4>ici-scroll的高度为100%，所以要放在一个指定高度的盒子里</h4>
      <br>
      <div style="height:100px;border:1px solid #eee;">
        <ici-scroll style="padding:10px;">
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
        </ici-scroll>
      </div>
    </baseComponent>

    <baseComponent title="底部监听 :onReachBottom='监听函数'" html='<ici-scroll :onReachBottom="reachBottom"  bottom-text="正在加载中...">
  <p style="padding:10px 5px;">我是一行</p>
  <p style="padding:10px 5px;">我是一行</p>
  <p style="padding:10px 5px;">我是一行</p>
  <p style="padding:10px 5px;">我是一行</p>
  <p style="padding:10px 5px;">我是一行</p>
</ici-scroll>

reachBottom(cb){
  setTimeout(()=>{
    //等待3秒
    cb()
  },3000)
},'>
      <code>onReachBottom 属性接收一个函数，函数的第一个参数为callback，函数执行成功后，必须调用callback </code>
      <br><br>
      <div style="height:150px;border:1px solid #eee;">
        <ici-scroll :onReachBottom="reachBottom" bottom-text="正在加载中...">
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
        </ici-scroll>

      </div>
    </baseComponent>

    <baseComponent title="主动下拉/上拉刷新" html='<div style="height:150px;border:1px solid #eee;">
  <ici-scroll :onReachBottom="reachBottom" :onReachTop="reachTop" ref="reach">
    <p style="padding:10px 5px;">我是一行</p>
    <p style="padding:10px 5px;">我是一行</p>
    <p style="padding:10px 5px;">我是一行</p>
    <p style="padding:10px 5px;">我是一行</p>
    <p style="padding:10px 5px;">我是一行</p>
  </ici-scroll>
</div>
<ici-button @click="$refs.reach.reachBottom()">主动底部刷新 </ici-button>
<ici-button @click="$refs.reach.reachTop()">主动项部刷新</ici-button>'>
      <code>onReachBottom/onReachTop 属性接收一个函数，函数的第一个参数为callback，函数执行成功后，必须调用callback </code>
      <br><br>
      <div style="height:150px;border:1px solid #eee;">
        <ici-scroll :onReachBottom="reachBottom" :onReachTop="reachTop" ref="reach">
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
        </ici-scroll>
      </div>
      <ici-button @click="$refs.reach.reachBottom()">主动底部刷新 </ici-button>
      <ici-button @click="$refs.reach.reachTop()">主动项部刷新</ici-button>
    </baseComponent>

    <baseComponent title="顶部监听 :onReachTop='监听函数'" html='<ici-scroll :onReachTop="reachTop">
  <p style="padding:10px 5px;">我是一行</p>
  <p style="padding:10px 5px;">我是一行</p>
  <p style="padding:10px 5px;">我是一行</p>
  <p style="padding:10px 5px;">我是一行</p>
  <p style="padding:10px 5px;">我是一行</p>
</ici-scroll>

reachTop(cb){
  setTimeout(()=>{
    //等待3秒
    cb()
  },3000)
},'>
      <code>onReachTop 属性接收一个函数，函数的第一个参数为callback，函数执行成功后，必须调用callback </code>
      <br><br>
      <div style="height:150px;border:1px solid #eee;">
        <ici-scroll :onReachTop="reachTop">
          <p v-for="(v,index) of data" :key="index" style="padding:10px 5px;">{{v}}</p>

        </ici-scroll>
      </div>
    </baseComponent>

    <baseComponent title="禁用监听 disabled" html='<div style="height:150px;border:1px solid #eee;">
  <ici-scroll :onReachTop="reachTop" disabled>
    <p style="padding:10px 5px;">我是一行</p>
    <p style="padding:10px 5px;">我是一行</p>
    <p style="padding:10px 5px;">我是一行</p>
    <p style="padding:10px 5px;">我是一行</p>
    <p style="padding:10px 5px;">我是一行</p>
  </ici-scroll>
</div>'>
      <code>disabled="true" 时，监听函数不会执行</code>
      <br><br>
      <div style="height:150px;border:1px solid #eee;">
        <ici-scroll :onReachTop="reachTop" disabled>
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是一行</p>
        </ici-scroll>
      </div>
    </baseComponent>


    <baseComponent title="滚动到底部/顶部 rollBottom()/rollTop()" html='<div style="height:150px;border:1px solid #eee;">
  <ici-scroll :onReachTop="reachTop" disabled ref="iciscroll">
    <p style="padding:10px 5px;">我是一行</p>
    <p style="padding:10px 5px;">我是二行</p>
    <p style="padding:10px 5px;">我是三行</p>
    <p style="padding:10px 5px;">我是四行</p>
    <p style="padding:10px 5px;">我是五行</p>
    <p style="padding:10px 5px;">我是六行</p>
    <p style="padding:10px 5px;">我是七行</p>
    <p style="padding:10px 5px;">我是八行</p>
    <p style="padding:10px 5px;">我是九行</p>
  </ici-scroll>
</div>
<ici-button type="ici" @click="$refs.iciscroll.rollBottom()">点击我到底部</ici-button>
<ici-button type="ici" @click="$refs.iciscroll.rollTop()">点击我到顶部</ici-button>'>
      <code>组件自带函数 首先须拿到组件的实例 ref="iciscroll" 再用this.$refs.iciscroll.rollBottom()</code>
      <br><br>
      <div style="height:150px;border:1px solid #eee;">
        <ici-scroll :onReachTop="reachTop" disabled ref="iciscroll">
          <p style="padding:10px 5px;">我是一行</p>
          <p style="padding:10px 5px;">我是二行</p>
          <p style="padding:10px 5px;">我是三行</p>
          <p style="padding:10px 5px;">我是四行</p>
          <p style="padding:10px 5px;">我是五行</p>
          <p style="padding:10px 5px;">我是六行</p>
          <p style="padding:10px 5px;">我是七行</p>
          <p style="padding:10px 5px;">我是八行</p>
          <p style="padding:10px 5px;">我是九行</p>
        </ici-scroll>
      </div>
      <ici-button type="ici" @click="$refs.iciscroll.rollBottom()">点击我到底部</ici-button>
      <ici-button type="ici" @click="$refs.iciscroll.rollTop()">点击我到顶部</ici-button>
    </baseComponent>

  </div>
</template>

<script>
  function ar(index){
    let arr = []
    for(let a = index ;a<index+15;a++){
      arr.push(`我是第${a}行`)
    }
    return arr;
  }
  export default {
    name: 'page-popup',
    data() {
      return {
        data:ar(1)
      };
    },
    mounted() {
//      setInterval(() => {
//        this.popup9 = !this.popup9
//      }, 300)
    },
    beforeDestroy() {
    },
    methods: {
      reachBottom(cb){
        setTimeout(()=>{
          //等待3秒
          cb()
        },3000)
      },

      reachTop(cb){
        setTimeout(()=>{
          let length =  this.data.length;
          //等待3秒
          this.data.unshift(...ar(length))

          cb()
        },3000)
      },
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
