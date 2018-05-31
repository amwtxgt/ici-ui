<template>
    <transition name="popup">
        <div v-if="value" class="fms-popup-layer">
            <div class="fms-popup">
                <div class="fms-popup-title">
                    <slot name="header">
                    <div class="fms-title-inner" v-if="title">{{title}}</div>
                    </slot>
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
                            <ici-button type="warning" size="small" plain borderless shape="pill" @click="$emit('input',false)">CLOSE</ici-button>
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
        props: {
            value: [Boolean, String],
            title: {
                type: String,
                default: ''
            },
        },
        methods: {
            close() {
                this.$emit('input', false)
            }
        }
    }
</script>

<style scoped lang="less">
    .fms-popup-layer {
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
        padding: 0 5%;
        .fms-popup {
            pointer-events: auto;
            min-width: 700px;
            align-items: stretch;
            display: flex;
            flex-shrink: 1;
            flex-direction: column;
            transition: transform .225s cubic-bezier(0.0, 0.0, 0.2, 1);
            position: relative;
            background-color: #fff;
            border-radius: 2px;
            box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24);
            max-width: 24em;
            outline: none;
            max-height: 100%;
            .fms-popup-title {
                position: relative;
                -webkit-transition: box-shadow .1s ease-in-out;
                transition: box-shadow .1s ease-in-out;
                width: 100%;
                z-index: 1;
                /*滚动效果*/
                &.roll {
                    box-shadow: 0 0 10px silver;
                }
                .fms-title-inner {
                    align-items: center;
                    background-color: #f7f7f7;
                    display: flex;
                    justify-content: space-between;
                    padding: 20px;
                    font-size: 20px;
                    vertical-align: middle;
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
                height: 50px;
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