<template>
    <div class="ici-message-wrap" :class="{'message-top':position==='top','message-center':position==='center'}" :id="'ici-messages-'+rom">
        <div class="ici-message" :class="{'message-show':show}">
            <div class="ici-message-left" v-if="type">
                <ici-loading v-if="type=='loading'" back-white></ici-loading>
                <ici-icon v-else-if="type=='success'" size="20px" name="icon-yduigouxuan"></ici-icon>
                <ici-icon v-else-if="type=='error'" size="20px" name="icon-msnui-alarm-circle"></ici-icon>
                <ici-icon v-else-if="type=='message'" size="20px" name="icon-tishi"></ici-icon>
                <ici-icon v-else :name="type" size="20px"></ici-icon>
            </div>
            <div class="ici-message-body" v-html="message"></div>
            <div v-show="showClose" class="ici-message-right" @click="close">
                <ici-icon name="icon-shanchudelete30"></ici-icon>
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
                position:'',
                type: '',
            }
        },

        mounted() {
            window.document.addEventListener('DOMContentLoaded', this._append);
        },
        methods: {
            _append() {

                if (!window.document.getElementById('ici-messages-' + this.rom)) {
                  if(this.$el){
                    window.document.body.appendChild(this.$el);
                  }else{
                    var message = window.document.createElement('div');
                    message.setAttribute('id', 'ici-messages-' + rom);
                    message.setAttribute('class','ici-message-wrap')
                    window.document.body.appendChild(message);
                    this.$mount(message);
                  }

                }
            },

            opens(obj) { //obj = {type:loading|success|error|message,duration:显示时间，showClose:显示关闭按钮,msg:显示内容}
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

                if (this.msec) {
                    this.timeout = setTimeout(() => {
                        this.show = false;
                    }, this.msec)
                }
            },
            open(val) {
                this.opens({
                    type: 'error',
                    duration: 0,
                    msg: val,
                    showClose: true
                })
            },
            loading(val, msec,pos) {
                this.opens({
                    type: 'loading',
                    position:pos,
                    duration: msec || 0,
                    msg: val,
                })
                return this;
            },
            success(val, msec,pos) {
                this.opens({
                    type: 'success',
                    duration: msec || 2000,
                    position:pos,
                    msg: val,
                    showClose: true
                })
            },
            error(val, msec,pos) {
                this.opens({
                    type: 'error',
                    duration: msec || 2000,
                    position:pos,
                    msg: val,
                    showClose: true
                })
            },
            msg(val, msec,pos) {
                this.opens({
                    type: 'icon-tishi',
                    duration: msec || 2000,
                    position:pos,
                    msg: val,
                    showClose: true
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
            height:0;
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
            padding: 15px 20px;
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

</style>
