<template>
  <transition name="poptip">
    <div v-show="show" class="ici-poptip-view" @mouseover="mouseover" @mouseout="mouseout">
      <slot></slot>
    </div>
  </transition>

</template>

<script>
  export default {
    components: {},
    name: "ici-poptip",
    data() {
      return {
        id: 'ici-poptip-' + Math.random(),
        show: true,
      };
    },
    created() {
      this._append();
    },
    methods: {
      mouseover(){
        this.show = true;
        console.log('sdfsdf')
      },
      mouseout(){
        this.show = false;
        console.log('aaaa')
      },
      open() {
        this.show = true;
      },
      close() {
        this.show = false;
      },
      _append() {
        if (!window.document.getElementById(this.id)) {
          if (this.$el) {
            window.document.body.appendChild(this.$el);
          }
          else {
            var menu = window.document.createElement('div');
            window.document.body.appendChild(menu);
            this.$mount(menu); //绑定
          }
        }
      },
    },
  }
</script>

<style scoped lang="less">
  .poptip-enter-active, .poptip-leave-active {
    transition: opacity .3s;
  }
  .poptip-enter, .poptip-leave-to{
    opacity: 0;
  }
  .ici-poptip-view {
    position: fixed;
    z-index: 99999;
    top: 10px;
    right: 10px;
    padding: 10px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 1px 8px rgba(0, 0, 0, .3);

  }
</style>
