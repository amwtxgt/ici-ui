<template>
  <ici-popup class="ici-modal" :value="show" @input="cancel" :width="450" mask esc mask-close titleClass="ici-modal-title">
    <div slot="header">
      <ici-icon name="icon-msnui-alarm-circle" color="#C01639" size="22px"></ici-icon>
      {{option.title?option.title:'Prompt'}}
    </div>
    <div class="ici-modal-msg">
      {{option.content}}
    </div>
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
          cancelText: "no",
          content: '',
          onOk: void 0,
          onCancel: void 0
        }
      };
    },
    methods: {
      confirm(option) {
        this._append();
        if (this.show) {

        }
        this.option = option;
        this.show = true;
      },
      ok() {

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
