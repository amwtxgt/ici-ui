<template>
  <header class="ici-header" :style="style" :class="{'ici-header-fixed':fixed}">
    <div class="ici-header-left">
      <slot name="left"><h2>slot=left</h2></slot>
    </div>
    <div class="ici-header-center">
      <slot>slot default</slot>
    </div>
    <div class="ici-header-right">
      <slot name="right">slot=right</slot>
    </div>
  </header>
</template>

<script>
  export default {
    name: "ici-header",
    data() {
      return {};
    },
    props: {
      color: {
        type: String,
        default: ''
      },
      position:{
        type:String,
        default:'absolute'
      },
      fixed:Boolean,
    },
    computed:{

      style(){
        let style = {position:this.position}
        if(this.color){
          style.backgroundColor = this.color;
        }
        return style;
      },
    }
  }
</script>
