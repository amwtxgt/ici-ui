<template>
  <ici-popup :id="id" class="ici-modal" :value="show" @input="close" :width="450" mask :esc="option.showClose"
             :position="option.position" :mask-close="option.showClose" titleClass="ici-modal-title">
    <div slot="header">
      <ici-icon name="icon-msnui-alarm-circle" color="#C01639" size="22px" @></ici-icon>
      {{option.title?option.title:'Prompt'}}
    </div>
    <ici-icon v-if="option.showClose" slot="header" @click="close" color="#666" name="icon-shanchudelete30" size="20px" click-state />
    <div class="ici-modal-msg" v-html="option.content"></div>
    <div slot="footer-right">
      <ici-button type="ici" @click="ok" shape="pill" size="small">{{option.okText||'ok'}}</ici-button>
      <ici-button type="ici" @click="cancel" shape="pill" plain size="small">{{option.cancelText||'no'}}</ici-button>
    </div>
  </ici-popup>
</template>

<script>
  var rom = Math.random();
  export default {
    name: "ici-modal",
    data() {
      return {
        id: 'ici-popup-' + rom,
        show: false,
        option: {
          title: '',
          okText: "yes",
          showClose:false,
          position:'fixed',
          cancelText: "no",
          content: '',
          onOk: void 0,
          onCancel: void 0
        }
      };
    },
    methods: {
      initOption(){
        return {
          title: '',
          okText: "yes",
          showClose:false,
          position:'fixed',
          cancelText: "no",
          content: '',
          onOk: void 0,
          onCancel: void 0
        }
      },
      confirm(option) {
        this._append();
        this.option = Object.assign(this.initOption(),option);
        this.show = true;
      },
      ok() {
        if(!this.show) return;
        this.show = false;
        if (typeof this.option.onOk === 'function') {
          this.option.onOk()
        }
      },
      cancel() {
        this.show = false;
        if (typeof this.option.onCancel === 'function') {
          this.option.onCancel()
        }
      },
      close(){
        this.show = false;
      },
      _append() {
        if (!window.document.getElementById(this.id)) {

          if (!this.$el) {
            var menu = window.document.createElement('div');
            window.document.body.appendChild(menu);
            this.$mount(menu); //绑定
          }
        }
      },
    },
  }
</script>

<style lang="less">
  .ici-modal {
    z-index: 99999 !important;
    .ici-modal-msg {
      font-size: 15px;
      padding: 0px 20px 10px 50px;
      color:#666;
    }
  }
  .ici-modal-title{
    background:#fff !important;
  }

</style>
