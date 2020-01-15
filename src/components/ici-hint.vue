<template>
    <transition name="fadehou">
        <div ref="icihint" v-if="value || focusShow && hintfocus" class="ici-hint" :style="{maxHeight:maxHeight}" tabindex="0"
             @focus.capture="focus" @blur.capture="blur">
            <slot></slot>
            <!--加载图标-->
            <div v-show="loading">
                <div class="ici-hint-loading">
                    <ici-loading></ici-loading>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ici-hint",
        data() {
            return {
                hintfocus: false,

            };
        },
        props: {
            value: Boolean,
            loading: Boolean,
            //是否在提示窗获取焦点时不自动不关闭窗体
            focusShow: Boolean,
            maxHeight: {
                type: String,
                default: '300px',
            }
        },
        methods: {
            //手动关闭
            close(){
                this.hintfocus = false;
                this.$emit('input',false)
            },
            focus(){
                this.hintfocus=true;
            },
            blur(){
                if (!this.hintfocus) return;
                setTimeout(()=>{
                    if(!document.activeElement || !this.$refs.icihint ||  !this.$refs.icihint.contains(document.activeElement)){
                        this.hintfocus = false
                    }
                })


//                this.hintfocus=false

            }
        }

    }
</script>

