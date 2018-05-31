<template>
    <transition name="ici-popup">
        <div v-if="value" class="fms-popup-layer" :class="{mask:mask}">
            <div class="fms-popup">
                <div class="fms-popup-title">
                    <slot name="header">{{title}}</slot>
                </div>
                <div class="fms-popup-body">
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
            mask:Boolean,
        },
        mounted(){
           if(this._events.confirm){
               this.hasConfirm = true;
           }
        },
        methods: {
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
        pointer-events: none;
        position: absolute;
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
            min-width: 700px;
            align-items: stretch;
            display: flex;
            flex-shrink: 1;
            flex-direction: column;
            transition: transform .225s cubic-bezier(.8, 0.0, 0.2, 1) !important;
            position: relative;
            background-color: #fff;
            border-radius: 2px;
            box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24);
            max-width: 24em;
            outline: none;
            max-height: 100%;
            .fms-popup-title {
                &:empty{
                    background-color: #eee;
                    padding: 2px;
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
                position: relative;
                overflow: auto;
            }

            @media (min-height: 800px) {
                .fms-popup-body {
                    max-height: 540px;
                }
            }

            @media (min-height: 700px) {
                .fms-popup-body {
                    max-height: 440px;
                }
            }
            .fms-popup-footer {
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