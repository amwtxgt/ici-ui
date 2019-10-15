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
        type:[String,Object],
      },
      showType:{
        type:String,
        default:'cover'
      },
      bgColor:{
        type:String,
        default:''
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

        if(this.bgColor){
          style.backgroundColor = this.bgColor;
        }

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
    methods: {
      stop(e){}
    },
    components: {}
  }
</script>
