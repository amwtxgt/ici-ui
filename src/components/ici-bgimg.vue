<template>
  <div class="bg-img" :style="style">
    <div class="bg-img-inner">
      <slot></slot>
    </div>
    <div class="handle-img" v-if="$slots.handle" @click.stop="stop">
      <slot name="handle"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ici-bgimg",
    data() {
      return {

      };
    },
    props: {
      width: {
        type: String,
        default: '100px'
      },
      height: {
        type: String,
        default: '',
      },
      url:{
        type:[String,null],
      },
      showType:{
        type:String,
        default:'cover'
      },
      bgColor:{
        type:String,
        default:'#fff'
      },
      circle:Boolean,
      margin:String,
    },
    mounted(){

    },
    computed: {
      style() {
        var style = {}
        style.width = this.width;
        style.height = this.height ? this.height : this.width;
        style.backgroundSize = this.showType;
        style.backgroundColor = this.bgColor;
        if(this.margin){
          style.margin = this.margin;
        }
        if(this.circle){
          style.borderRadius = '50%'
        }
        if(this.url){
          style.backgroundImage = `url(${this.url})`
        }
        return style;
      },
    },
    methods: {stop(){},},
    components: {}
  }
</script>

<style scoped lang="less">
  .bg-img{
    vertical-align: middle;
    display: inline-block;
    position: relative;
    border-radius: 5px;
    color:#fff;
    flex:none;
    background: no-repeat center;
    background-size: cover;
    text-align: center;
    .bg-img-inner{
      display: flex;
      align-items:center;
      justify-content: center;
      width:100%;
      height:100%;
    }
    .handle-img{
      line-height: 1em;
      position: absolute;
      display:flex;
      flex-wrap:wrap;
      justify-content:space-around;
      align-items: center;
      background:rgba(0,0,0,0.5);
      width:100%;
      padding:5px 0;
      color:#fff;
      max-height:100%;
      bottom:0;
      opacity: 0;
      transition: opacity .3s;
    }
    &:hover{
      .handle-img{
        opacity: 1;
      }
    }
  }

</style>
