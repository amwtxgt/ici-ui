<template>
  <div class="ici-tour tour-left" :style="tourStyle">
      <!--箭头-->
      <div class="tour-arrow"></div>
      <div class="tour-content"></div>
      <div class="tour-handler"></div>
  </div>
</template>

<script>
  export default {
    name: "ici-tour",
    data(){
      return {
        tours:null,
        cIndex:0,
      }
    },
    computed:{
      tourStyle(){
        let style =  {width:'320px'}

        return style
      },
    },
    methods: {
      //开始操作导航
      start(name){
       if(this.$tourMap[name]){
          this.tours = this.$tourMap[name].filter((v)=>Boolean(v));
       }
      },
      //停止导航
      stop(name){

      },
    },
  }
</script>

<style scoped>

</style>
