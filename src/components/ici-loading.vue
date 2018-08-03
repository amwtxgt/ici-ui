<template>
    <transition name="loading">
        <div :class="['ici-loading',{'ici-disabled':disabled},{'ici-block':block}]">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" :width="sizeValue[0]" :height="sizeValue[1]" viewBox="0 0 34 30"  xml:space="preserve">
                <rect :class="['rect-black',{'rect-white':backWhite}]" x="0" y="0" width="4" height="8">
                    <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"></animateTransform>
                </rect>
                <rect :class="['rect-red',{'rect-white':backWhite}]" x="8" y="0" width="4" height="8">
                    <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animateTransform>
                </rect>
                <rect :class="['rect-red',{'rect-white':backWhite}]" x="16" y="0" width="4" height="8">
                    <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animateTransform>
                </rect>
                <rect :class="['rect-black',{'rect-white':backWhite}]" x="24" y="0" width="4" height="8">
                    <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.45s" dur="0.6s" repeatCount="indefinite"></animateTransform>
                </rect>
            </svg>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'a-loading',
        data() {
            return {};
        },
        computed: {
            sizeValue() {
                var obj = ['34px', '30px'];
                switch (this.size) {
                    case 'tiny':
                        obj = ['20px', '18px'];
                        break;
                    case 'small':
                        obj = ['26px', '22px'];
                        break;
                    case 'big':
                        obj = ['54px', '50px'];
                        break;
                }
                return obj;
            }
        },
        props: {
            size: {
                type: String,
                default: ''
            },
            backWhite: Boolean,
            disabled: Boolean,
            block: Boolean,
        },
    };
</script>

<style scoped lang="less">
    div.ici-loading {
        display: inline-block;
        flex-direction: column;
        justify-content: center;
        &.ici-block {
            position: absolute;
            width: 100%;
            height: 100%;
           overflow: hidden;
            z-index: 10;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, .6);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
        }
        &.ici-disabled {
            opacity: 0.5;
        }
    }

    svg {
        vertical-align: middle;
    }



    .rect-red {
        fill: #c01639;
    }

    .rect-black {
        fill: #3F3F3F;
    }

    .rect-white {
        fill: #fff !important;
    }

    .loading-enter-active, .loading-leave-active {
        transition: opacity .3s;
    }
    .loading-leave-active{
        position: absolute !important;
    }

    .loading-enter, .loading-leave-to {
        opacity: 0;
    }
</style>
