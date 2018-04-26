<template>
  <div class="components flex">
    <div class="flex-none">
      <Menu theme="light"  :active-name="active"  @on-select="onselect">
        <MenuItem name="pageButton">
          按钮 ici-button
        </MenuItem>
        <MenuItem name="pageLoading">
          加载图标 ici-loading
        </MenuItem>
      </Menu>
    </div>
    <div class="flex-auto" style="overflow: scroll">
      <component v-bind:is="currentView" />
    </div>
  </div>
</template>

<script>
  import pageButton from '../examples/page-button.vue';
  import pageLoading from '../examples/page-loading.vue';
  var components = {pageButton,pageLoading};
  export default {
    name: 'app',
    data() {
      return {
        active:'pageLoading'
      };
    },
    computed:{
      currentView(){
        return components[this.active];
      }
    },
    props:{
      open:Boolean,
    },
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {
      onselect(e){
        this.active = e;
      }
    },
    components: components
  };
</script>

<style scoped lang="less">
  .components{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99998;
    background:#fff;
    >div:first-child{
      width:240px;
    }
    >div:last-child{
      padding:20px;
    }
  }
  .close{
    position: absolute;
    top:10px;
    right:30px;
  }
</style>
