<template>
  <div class="ici-message-wrap" :class="{'message-top':position==='top','message-center':position==='center'}"
       :id="'ici-messages-'+rom">
    <transition name="ici-mask">
      <div class="message-mask"  v-if="type=='loading' && show"></div>
    </transition>
    <div class="ici-message" :class="{'message-show':show}" @mouseover="mouseover" @mouseout="mouseout">
      <div class="ici-message-left" v-if="type">
        <ici-loading v-if="type=='loading'" back-white></ici-loading>
        <ici-icon v-else-if="type=='success'" color="#00d400" size="22px" name="icon-yduigouxuan"></ici-icon>
        <ici-icon v-else-if="type=='error'" size="22px" color="red" name="icon-msnui-alarm-circle"></ici-icon>
        <ici-icon v-else-if="type=='message'" color="#FFFBAB" size="20px" name="icon-tishi"></ici-icon>
        <ici-icon v-else :name="type" size="20px"></ici-icon>
      </div>
      <div class="ici-message-body" v-html="message"></div>
      <template v-if="btns && btns instanceof Array">
        <ici-button class="ici-msg-btns flex-none" v-for="(btn,index) of btns" :key="btn.name+''+index" :type="btn.type||'error'"
                    size="small" shape="pill" @click="clickBtn(index)">
          <ici-icon v-if="btn.icon" :name="btn.icon"></ici-icon>
          {{btn.name}}
        </ici-button>
      </template>

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
  import IciIcon from './ici-icon'
  export default {
    name: "ici-message",
    components:{IciIcon},
    data: function () {
      return {
        rom: rom,
        message: '',
        timeout: 0,
        msec: 2000,
        show: false,
        showClose: false,
        btns: null, //按钮
        position: '',
        type: '',
      }
    },

    mounted() {
      window.document.addEventListener('DOMContentLoaded', this._append);
    },
    beforeDestroy(){
      window.document.removeEventListener('DOMContentLoaded', this._append);
    },
    methods: {
      clickBtn(index) {
        this.close();
        this.btns[index].click();
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
        this.btns = obj.btns || null;
        if (this.msec) {
          this.timeout = setTimeout(() => {
            this.show = false
          }, this.msec)
        }
      },
      mouseover() {
        if (this.msec) {
          clearTimeout(this.timeout);
        }
      },
      mouseout() {
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
          btns: opt && opt.btns,
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
          btns: opt && opt.btns
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
          btns: opt && opt.btns
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
          btns: opt && opt.btns
        });
      },
      close() {
        this.show = false;
      }
    }
  }
</script>
