<template>
    <transition name="ici-popup">
        <div v-if="value" class="fms-popup-layer" :class="{mask:mask}" :style="{position:position}"
             v-focus="value" tabindex="0"
             @click.self="clickMark" @keydown.esc.stop="esc && $emit('input',false)">
            <div class="fms-popup" :style="{maxWidth:width+'px'}">
                <div class="fms-popup-title" :class="titleClass" >
                    <slot name="header">{{title}}</slot>
                </div>
                <div class="fms-popup-body" :class="{noscroll:noScroll}" :style="{'background-color': bgColor}">
                    <!--slot-->
                    <slot></slot>
                </div>
                <div class="fms-popup-footer">
                    <div class="fms-popup-footer-left">
                        <!--slot-->
                        <slot name="footer-left"></slot>
                    </div>
                    <div class="fms-popup-handle">
                        <!--slot-->
                        <slot name="footer-right">
                            <ici-button v-if="hasConfirm" @click="$emit('confirm')">confirm</ici-button>
                            <ici-button @click="$emit('input',false)">close</ici-button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

    export default {
        name: "ici-popup",
        data(){
            return {
                hasConfirm:false,
            }
        },
        props: {
            value: [Boolean, String],
            title: {
                type: String,
                default: ''
            },
            bgColor:{
              type:String,
              default:'#fff'
            },
            titleClass:{
              type:String,
              default:''
            },
            position:{
              type:String,
              default:'fixed'
            },
            esc:Boolean,
            mask:Boolean,
            noScroll:Boolean, //不出现滚动条
            markClose:Boolean, //点击遮罩层关闭
            width:{
              type:Number,
              default:700
            }
        },
        mounted(){
           if(this._events.confirm){
               this.hasConfirm = true;
           }
        },
        methods: {
          clickMark(){
            if(this.markClose){
              this.close()
            }
          },
            close() {
                this.$emit('input', false)
            }
        }
    }
</script>

<style scoped lang="less">

    .ici-popup-enter-active{
        transition: all .3s cubic-bezier(.8, 0.0, 0.2, 1) !important;
    }
    .ici-popup-leave-active{
        transition: all .3s cubic-bezier(.8, 0.0, 0.2, 1) .05s !important;
    }

    .ici-popup-enter, .ici-popup-leave-to {
        opacity: 0 !important;
        visibility: hidden !important;
    }

    .ici-popup-enter-to {
        opacity: 1 !important;
        visibility: visible !important;
    }

    .fms-popup-layer {
        &.mask{
            background-color:rgba(0,0,0,.2);
            pointer-events: auto;
        }
        outline: none;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        backface-visibility: hidden;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        z-index: 999;
        padding: 0 5%;
        &.ici-popup-enter-active{
            .fms-popup{
               .ici-popup-leave-active;
            }
        }
        &.ici-popup-leave-active{
            .fms-popup{
               .ici-popup-enter-active;
            }
        }
        &.ici-popup-enter, &.ici-popup-leave-to{
            .fms-popup{
                transform: scale(.8) !important;
            }
        }
        &.ici-popup-enter-to {
            .fms-popup{
                transform: scale(1) !important;
            }
        }
        .fms-popup {
            pointer-events: auto;

            width:100%;
            align-items: stretch;
            display: flex;
            flex-shrink: 1;
            flex-direction: column;
            transition: transform .225s cubic-bezier(.8, 0.0, 0.2, 1) !important;
            position: relative;
            background-color: #fff;
            border-radius: 2px;
            box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24);
            outline: none;
            max-height: 95%;
            .fms-popup-title {
                &:empty{
                    /*background-color: #eee;*/
                    /*padding: 0px;*/
                  display: none;
                }
                background-color: #f7f7f7;
                padding: 20px;
                font-size: 20px;
                align-items: center;
                display: flex;
                justify-content: space-between;
                vertical-align: middle;
                position: relative;
                -webkit-transition: box-shadow .1s ease-in-out;
                transition: box-shadow .1s ease-in-out;
                width: 100%;
                z-index: 1;
                /*滚动效果*/
                &.roll {
                    box-shadow: 0 0 10px silver;
                }
            }

            .fms-popup-body {
                width: 100%;
                padding: 10px 0;
                overflow: auto;
                &.noscroll{
                    overflow:visible;
                }
            }

            /*@media (min-height: 800px) {*/
                /*.fms-popup-body {*/
                    /*max-height: 540px;*/
                /*}*/
            /*}*/

            /*@media (min-height: 700px) {*/
                /*.fms-popup-body {*/
                    /*max-height: 440px;*/
                /*}*/
            /*}*/
            .fms-popup-footer {
                flex:none;
                padding: 5px 10px;
                display: flex;
                .fms-popup-footer-left {
                    flex: auto
                }
                .fms-popup-handle {
                    flex: auto;
                    text-align: right;
                }
            }
        }
    }
</style>
