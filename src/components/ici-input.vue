<template>
    <div class="ici-input" :class="{'active':hasFocus}">
        <div v-if="showPrefix" class="prefix" :style="prefixStyle">
            <slot name="prefix"></slot>
        </div>
        <div class="input-inner">
            <input @blur="blur" class="ici-input-input" :class="borderClass" :type="password?'password':'text'" @paste.stop=''
                   :style="inputStyle"
                   @change="$emit('change',$event)" :value="value" @input="input" v-focus="focus" @focus="focusEvent" ref="inputs"
                   :placeholder="placeholder?placeholder:label" @keydown.up.down.stop.prevent="keydown"
                   @keyup.enter.stop.prevent="enter">
            <ici-hint ref="icihint" v-model="showHint" :loading="hint===true" :class="hintClass" :focus-show="hintFocusShow">
                <!--列表头部-->
                <div v-if="showTitle" class="ici-input-hint-li ici-input-hint-li-add" @mousedown="select(-1)"
                     :class="{active:selectIndex==-1}">
                    <slot name="title"></slot>
                </div>

                <!--列表内容-->
                <div v-if="hint instanceof Array">
                    <!--组件内部不知道，数组内的对象属性，所以需要暴露出去-->
                    <div v-for="(item,index) of hint" @mousedown="select(index)"
                         class="ici-input-hint-li" :class="{active:selectIndex==index}" v-show="item">
                        <slot :item="item" :index="index"></slot>
                    </div>
                </div>
            </ici-hint>
        </div>
    </div>
</template>

<script>
    /*
    * 输入框组件
    * @v-model {string} 输入框值
    * @prop label {string} 输入框标签
    * @prop fontsize {string} 文字大小
    * @prop focus {Boolean} 是否获取焦点
    * @prop password {Boolean} 是否是密码
    * @prop filter {String|RegExp|function} 过滤value, 当filter是一个函数时，函数的第一个参数为input的value值，函数需要return 一个新值
    * @prop hint {array|boolean} 提示信息 三种状态 false:不开启提示； true:开启提示并显示正在加载； array提示信息列表
    * @prop hintFocusShow 提示信息窗在获取焦点的时候不关闭
    * @slot-scope props.item {Array} props.list等于hint
    * @emit select {function(index)} 当提示信息存在时，用户选中事件，index表示用户选中第几个
    * @emit keyup-enter {function(index)} 用户回车确认事件
    * */
    export default {
        name: "ici-input",
        data() {
            return {
                selectIndex: -2, //选中的文字提示，-2不选，-1选中默认，>-1选中的索引,
                showTitle: false,
                showPrefix: false,
                hasFocus: false,
            }
        },
        props: {
            value: [String, Number],
            hintFocusShow: Boolean,
            label: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            hintClass: String,
            hint: {
                type: [Array, Boolean],
            },
            password: Boolean, //是否以密码方式
            focus: Boolean,
            inputStyle: [String, Object],
            prefixStyle: {
                type: [String, Object],
                default: ''
            },

            borderClass: {
                type: String,
                default: 'default-border-color'
            },
            filter: [Boolean, RegExp, String, Function],
        },
        watch: {},
        computed: {
            showHint: function () {

                if (!this.hasFocus || !this.hint) {
                    return false;
                } else if (this.hint === true && this.hasFocus) {
                    return true;
                } else if (this.hint.length === 0 && !this.showTitle) {
                    return false
                } else {
                    return true;
                }
            },

            //是否有值
            isSubstantial: function () {
                return Boolean(this.value)
            }
        },
        mounted() {

            if (this.$slots.title) {
                this.showTitle = true;
            }

            if (this.$slots.prefix) {
                this.showPrefix = true
            }
            let e = {target: this.$refs.inputs}
            this.input(e)
        },

        methods: {
            hintClose() {
                let hint = this.$refs.icihint;
                if (this.$refs.icihint) {
                    hint.close()
                }
            },
            clear() {
                this.$emit('input', '');
            },
            updateValue(val) {
                let e = {target: {value: val}}
                this.input(e)
            },

            enter: function (e) {
                e.target.blur()

                if (this.selectIndex !== -2) {
                    this.$emit('select', this.selectIndex);
                    return;
                }

                this.$emit('keyup-enter', this.selectIndex)
            },

            input: function (e) {
                this.selectIndex = -2;
                let v = e.target.value;

                if (this.filter) {
                    if (this.filter instanceof RegExp || typeof this.filter === "string") v = v.replace(this.filter, '');
                    else if (typeof this.filter === "function") v = this.filter(v);
                }

                if (v === this.value) e.target.value = v;

                this.$emit('input', v)
            },

            focusEvent: function (e) {
                this.hasFocus = true;
                this.$emit('focus', e)
            },

            blur: function (e) {
                setTimeout(() => {
                    this.hasFocus = false;
                }, 1)
                //去除前面和后面的空白字符
                let val = e.target.value.replace(/(^\s*)|(\s*$)/g, "");

                this.$emit('input', val);

                this.$emit('blur');
            },
            select: function (index) {
                this.$emit('select', index)
            },

            keydown(e) {
                if (!this.hint.length) return false;

                var min = 0, max = this.hint.length - 1;
                if (this.showTitle) {
                    min = -1
                }

                if (e.key == 'ArrowUp') {
                    if (this.selectIndex > min) {
                        this.selectIndex--
                    } else {
                        this.selectIndex = max;
                    }
                    if (!this.hint[this.selectIndex] && this.selectIndex != -1) {
                        this.selectIndex = this.selectIndex > min ? this.selectIndex - 1 : max;
                    }
                } else {
                    if (this.selectIndex < max) {
                        if (this.selectIndex == -2 && !this.showTitle) {
                            this.selectIndex = 0;
                        } else {
                            this.selectIndex++
                        }
                        if (!this.hint[this.selectIndex]) {
                            this.selectIndex = this.selectIndex < max ? this.selectIndex + 1 : min;
                        }
                    } else {
                        this.selectIndex = min;
                    }
                }
            }
        }
    }
</script>
