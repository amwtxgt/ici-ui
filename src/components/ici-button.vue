<template>
    <button tabindex="0" v-focus="focus" :type="htmlType" :disabled="disabled || loading" @click="$emit('click',$event)"
            :class="['ici-btn',sizeClass,typeClass,shapeClass,{'ici-btn-border':plain,'ici-btn-raised':relievo,'ici-btn-block':long}]">
        <div class="flex flex-center">
            <div v-show="loading">
                <ici-loading :size="loadingSize" :disabled="loading" />&nbsp;
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
    </button>
</template>

<script>

    export default {
        name: 'a-button',
        data() {
            return {
              loadingSizes:{
                tiny:'mintiny',
                small:'tiny',
                large:'',
                jumbo:'',
                giant:'big',
              }

            };
        },

        computed: {
            loadingSize(){
              if(this.size && this.loadingSizes[this.size]){
                return this.loadingSizes[this.size];
              }else{
                return 'small'
              }
            },
            sizeClass() {
                var size = '';
                switch (this.size) {
                    case 'tiny':
                        size = 'ici-btn-tiny';
                        break;
                    case 'small':
                        size = 'ici-btn-small';
                        break;
                    case 'large':
                        size = 'ici-btn-large';
                        break;
                    case 'jumbo':
                        size = 'ici-btn-jumbo';
                        break;
                    case 'giant':
                        size = 'ici-btn-giant';
                        break;
                }
                return size;
            },

            typeClass() {
                var type = '';
                switch (this.type) {
                    case 'primary':
                        type = 'ici-btn-primary';
                        break;
                    case 'info':
                        type = 'ici-btn-action';
                        break;
                    case 'warning':
                        type = 'ici-btn-highlight';
                        break;
                    case 'error':
                        type = 'ici-btn-caution';
                        break;
                    case 'inverse':
                        type = 'ici-btn-inverse';
                        break;
                    default :
                        type = ''
                }
                return type;
            },
            shapeClass() {
                var shape = '';
                switch (this.shape) {
                    case 'rounded':
                        shape = 'ici-btn-rounded';
                        break;
                    case 'pill':
                        shape = 'ici-btn-pill';
                        break;
                    case 'square':
                        shape = 'ici-btn-square';
                        break;
                    case 'box':
                        shape = 'ici-btn-box';
                        break;
                    case 'circle':
                        shape = 'ici-btn-circle';
                        break;
                }
                return shape;
            },

        },
        props: {
            focus: Boolean,
            disabled: Boolean,
            //原生的type
            htmlType: {
                type: String,
                default: 'button'
            },
            loading: Boolean,
            //按钮大小
            size: {
                type: String,
                default: ''
            },
            //按钮主题类型大小
            type: {
                type: String,
                default: ''
            },
            //按钮形状
            shape: {
                type: String,
                default: ''
            },

            //按钮是否是空心的
            plain: Boolean,

            //开启浮雕
            relievo: Boolean,
            //开启100%长度
            long: Boolean,
        },
        mounted() {
        },
        beforeDestroy() {
        },
        methods: {},
        components: {}
    };
</script>
