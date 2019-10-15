<template>
  <i :class="['ici-icon',name,{'ici-click-state':clickState},{'icon-active':active}]" @click="$emit('click',$event)"
     :style="style">
    <slot></slot>
  </i>
</template>

<script>
  export default {
    name: "ici-icon",
    computed: {
      style() {
        let style = {};

        if(this.size){
          style.lineHeight = this.size;
          style.fontSize = this.size;
        }

        if(this.color) style.color = this.color

        return style
      }
    },
    props: {
      name: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      },

      color: {
        type: String,
        default: ''
      },
      clickState: Boolean,
      active: Boolean,
    }
  }
</script>
