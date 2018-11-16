<template>
  <div v-if="false" class="ici-poptip">

  </div>
</template>

<script>
  export default {
    components: {},
    name: "ici-poptip",
    data() {
      return {};
    },
    props:{
      trigger:{
        type:String,
        default:'hover'
      }
    },
    mounted() {
      var el = this.$el.parentNode
      if(this.trigger === 'hover'){

        el.addEventListener('mouseover',()=>{
          this.__icipoptip.$slots = this.$slots
          this.__icipoptip.open();
        })
        el.addEventListener('mouseout',()=>{
          this.__icipoptip.close();
        })
      }

    },
    methods: {},
  }
</script>

<style scoped>

</style>
