<template>
  <div class="ici-message-wrap" :class="{'message-top':position==='top','message-center':position==='center'}"
       :id="'ici-messages-'+rom">
    <div class="message-mask" :class="{'show':type=='loading'&& show}"></div>
    <div class="ici-message" :class="{'message-show':show}" @mouseover="mouseover" @mouseout="mouseout">
      <div class="ici-message-left" v-if="type">
        <ici-loading v-if="type=='loading'" back-white></ici-loading>
        <ici-icon v-else-if="type=='success'" color="#00d400" size="22px" name="icon-yduigouxuan"></ici-icon>
        <ici-icon v-else-if="type=='error'" size="22px" color="red" name="icon-msnui-alarm-circle"></ici-icon>
        <ici-icon v-else-if="type=='message'" color="#FFFBAB" size="20px" name="icon-tishi"></ici-icon>
        <ici-icon v-else :name="type" size="20px"></ici-icon>
      </div>
      <div class="ici-message-body" v-html="message"></div>
      <ici-button v-if="btn" plain size="small" borderless shape="pill" @click="clickBtn">{{btn.name}}</ici-button>
      <div v-show="showClose" class="ici-message-right" @click="close">
        <ici-icon name="icon-shanchudelete30" click-state></ici-icon>
      </div>
    </div>
  </div>
</template>
<script>
  /*
  * 提示message组
  * @v-model {Boolean} 控制弹窗 开或关
  * @ref open {function(val)} 开打提示，不会自动关闭，直接调用msg或close方法
  * @ref msg {function(val,msec)} 打开自动关闭提示，val提示内容，msec打开时间毫秒
  * @ref close {function} 关闭提示
  *
  * */

  var rom = Math.random();

  export default {
    name: "ici-message",
    data: function () {
      return {
        rom: rom,
        message: '',
        timeout: 0,
        msec: 2000,
        show: false,
        showClose: false,
        btn: null, //按钮
        position: '',
        type: '',
      }
    },

    mounted() {
      window.document.addEventListener('DOMContentLoaded', this._append);
    },
    methods: {
      clickBtn(){
        this.close();
        this.btn.click();
      },
      _append() {
        if (!window.document.getElementById('ici-messages-' + this.rom)) {
          if (this.$el) {
            window.document.body.appendChild(this.$el);
          }
          else {
            var message = window.document.createElement('div');

            window.document.body.appendChild(message);
            this.$mount(message);
          }

        }
      },

      open(obj) { //obj = {type:loading|success|error|message,duration:显示时间，showClose:显示关闭按钮,msg:显示内容}
        this._append();
        clearTimeout(this.timeout);
        if (this.show) {
          this.show = false;
          setTimeout(() => {
            this._openOption(obj)
          }, 100);
        }
        else {
          this._openOption(obj)
        }
      },
      _openOption(obj) {
        this.position = obj.position || '';
        this.show = true;
        this.type = obj.type || '';
        this.msec = obj.duration || 0;
        this.showClose = obj.showClose || false;
        this.message = obj.msg || '';
        this.btn = obj.btn || null;
        if (this.msec) {
          this.timeout = setTimeout(() => {
            this.show = false
          }, this.msec)
        }
      },
      mouseover(){
        if (this.msec) {
          clearTimeout(this.timeout);
        }
      },
      mouseout(){
        if (this.msec) {
          this.timeout = setTimeout(() => {
            this.show = false
          }, 1000)
        }
      },
      loading(val, opt) {
        let showClose = opt && typeof opt.showClose === 'boolean' ? opt.showClose : true
        this.open({
          type: 'loading',
          position: opt && opt.position,
          duration: opt && opt.duration,
          msg: val,
          showClose: showClose,
          btn: opt && opt.btn,
        })
        return this;
      },

      success(val, opt) {
        let showClose = opt && typeof opt.showClose === 'boolean' ? opt.showClose : true
        this.open({
          type: 'success',
          duration: opt && opt.duration || 2000,
          position: opt && opt.position,
          msg: val,
          showClose: showClose,
          btn: opt && opt.btn
        })
      },

      error(val, opt) {
        let showClose = opt && typeof opt.showClose === 'boolean' ? opt.showClose : true
        this.open({
          type: 'error',
          duration: opt && opt.duration || 2000,
          position: opt && opt.position,
          msg: val,
          showClose: showClose,
          btn: opt && opt.btn
        })
      },

      msg(val, opt) {
        let showClose = opt && typeof opt.showClose === 'boolean' ? opt.showClose : true
        this.open({
          type: 'message',
          duration: opt && opt.duration || 2000,
          position: opt && opt.position,
          msg: val,
          showClose: showClose,
          btn: opt && opt.btn
        });
      },
      close() {
        this.show = false;
      }
    }
  }
</script>

<style scoped lang="less">
  .ici-message-wrap {
    position: fixed !important;
    display: flex;
    justify-content: center;
    left: 25px;
    right: 25px;
    bottom: 30px;
    pointer-events: none;
    z-index: 99999;
    &.message-top {
      top: 30px;
      bottom: auto;
    }
    &.message-center {
      top: 50%;
      height: 0;
      align-items: center;
      bottom: auto;
    }
    .ici-message {
      display: flex;
      align-items: center;
      pointer-events: auto;
      background: #000;
      color: #fff;
      box-shadow: 0 0 4px grey;
      transition: all .3s;
      font-size: 16px;
      padding: 10px 20px;
      border-radius: 2px 2px 0 0;
      min-width: 290px;
      visibility: hidden;
      opacity: 0;
      transform: scale(.8);
      &.message-show {
        visibility: visible;
        opacity: 1;
        transform: scale(1);
      }
      .ici-message-left, ici-message-right {
        flex: none;
      }

      .ici-message-body {
        margin: 0 10px 0 5px;
        flex: auto;
      }
    }
  }

  .message-mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, .5);
    opacity: 0;
    transition: opacity .333s;
    &.show {
      opacity: 1;
      pointer-events: auto;
    }
  }
</style>
