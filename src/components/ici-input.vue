<template>
    <div class="fms-input">
        <div v-if="prefix" class="prefix">{{prefix.content}}</div>
        <div class="input-inner">
            <input @blur="blur" class="fms-input-input" :type="password?'password':'text'"
                   :value="inputValue" @input="input" v-focus="focus" @focus="focusEvent"
                   @keydown.up.down.stop.prevent="keydown" @keyup.enter.stop.prevent="enter">
            <label class="fms-input-label" :class="{substantial:isSubstantial,'input-label-foucs':hasFocus}">
                {{label}}
            </label>
            <div class="fms-input-status" :class="{'input-status-foucs':hasFocus}"></div>
            <ici-hint v-model="showHint" :loading="hint===true">
                <!--列表头部-->
                <div v-if="showTitle" class="fms-input-hint-li fms-input-hint-li-add" @mousedown="select(-1)"
                     :class="{active:selectIndex==-1}">
                    <slot name="title"></slot>
                </div>

                <!--列表内容-->
                <div v-if="hint instanceof Array">
                    <!--组件内部不知道，数组内的对象属性，所以需要暴露出去-->
                    <div v-for="(item,index) of hint" @mousedown="select(index)"
                         class="fms-input-hint-li" :class="{active:selectIndex==index}">
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
    * @prop focus {Boolean} 是否获取焦点
    * @prop password {Boolean} 是否是密码
    * @prop required {Boolean} 是否是必填
    * @prop prefix {Boolean|Object} 前缀：Object{content:'前缀内容',value:真实值}
    * @prop filter {String|RegExp} 过滤value
    * @prop hint {array|boolean} 提示信息 三种状态 false:不开启提示； true:开启提示并显示正在加载； array提示信息列表
    * @slot-scope props.item {Array} props.list等于hint
    * @emit select {function(index)} 当提示信息存在时，用户选中事件，index表示用户选中第几个
    * @emit keyup-enter {function(index)} 用户回车确认事件
    * */
    export default {
        name: "ici-input",
        data() {
            return {
                selectIndex: -2, //选中的文字提示，-2不选，-1选中默认，>-1选中的索引,
                inputValue: '',
                initValue: '',//初始内容
                showTitle: false,
                hasFocus: false,
            }
        },
        props: {
            value: String,
            label: {
                type: String,
                default: ''
            },
            hint: {
                type: [Array, Boolean],
            },
            password: Boolean, //是否以密码方式
            focus: Boolean,
            required: Boolean,
            filter: [Boolean, RegExp, String],
            prefix: [Boolean, Object],//Object 格式为{content:String,value:String},value:真实值
        },
        computed: {

            showHint: function () {

                if (!this.hasFocus || !this.hint) {
                    return false;
                }
                else if (this.hint === true && this.hasFocus) {
                    return true;
                }
                else if (this.hint.length === 0 && !this.showTitle) {
                    return false
                }
                else {
                    return true;
                }
            },
            //是否有值
            isSubstantial: function () {
                return Boolean(this.inputValue)
            }
        },
        mounted() {
            if (this.$slots.title) {
                this.showTitle = true;
            }
            if (this.value) {
                this.inputValue = this.value;
                //是否有过滤
                if (this.filter) {
                    this.inputValue = this.inputValue.replace(this.filter, '');
                }

                if (this.prefix && this.prefix.value && this.inputValue.indexOf(this.prefix.value) === 0) {
                    var reg = new RegExp('^' + this.prefix.value, 'g');
                    this.inputValue = this.inputValue.replace(reg, '');
                }

            }

            //初始内容
            this.initValue = this.inputValue;

        },
        methods: {
            enter: function (e) {
                if (this.selectIndex !== -2) {
                    this.$emit('select', this.selectIndex)
                }

                e.target.blur()
                this.$emit('keyup-enter')
            },
            input: function (e) {
                this.selectIndex = -2;
                this.inputValue = e.target.value

                if (this.inputValue) {
                    if (this.filter) {
                        this.inputValue = this.inputValue.replace(this.filter, '');
                    }

                    if (this.prefix && this.prefix.value && this.inputValue.indexOf(this.prefix.value) === 0) {
                        this.inputValue = this.inputValue.replace(new RegExp('^' + this.prefix.value, 'g'), '');
                    }
                }

                if (this.inputValue && this.prefix && this.prefix.value) {
                    this.$emit('input', this.prefix.value + this.inputValue);
                }
                else {
                    this.$emit('input', this.inputValue);
                }
            },

            focusEvent: function () {
                this.hasFocus = true;
            },
            blur: function (e) {
                this.hasFocus = false;
                var val = e.target.value.replace(/(^\s*)|(\s*$)/g, "");
                if (!val && this.required) {
                    this.inputValue = this.initValue;

                    if (this.prefix && this.prefix.value) {
                        this.$emit('input', this.prefix.value + this.inputValue);
                    }
                    else {
                        this.$emit('input', this.inputValue);
                    }
                    return;
                }
                else {
                    this.initValue = this.inputValue = val;
                    if (val && this.prefix && this.prefix.value) {
                        this.$emit('input', this.prefix.value + this.inputValue);
                    }
                    else {
                        this.$emit('input', this.inputValue);
                    }
                }
                this.$emit('blur');
            },
            select: function (index) {
                this.$emit('select', index)
            },
            keydown(e) {
                if (!this.hint.length) return false;

                var min = 0, max = this.hint.length;
                if (this.showTitle) {
                    min = -1
                }

                if (e.key == 'ArrowUp') {
                    if (this.selectIndex > min) {
                        this.selectIndex--
                    }
                    else {
                        this.selectIndex = max - 1;
                    }
                }
                else {
                    if (this.selectIndex < max - 1) {
                        if (this.selectIndex == -2 && !this.showTitle) {
                            this.selectIndex = 0;
                        }
                        else {
                            this.selectIndex++
                        }
                    }
                    else {
                        this.selectIndex = min;
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less">

    .fms-input {
        position: relative;
        display: flex;
        align-items: flex-end;
        flex-wrap: nowrap;
        width: 100%;
        padding-top: 3px;
        label.fms-input-label {
            text-align: left;
            -webkit-transform-origin: bottom left;
            transform-origin: bottom left;
            -webkit-transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
            transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
            -webkit-transition-property: color, bottom, transform;
            transition-property: color, bottom, transform;
            color: rgba(0, 0, 0, 0.38);
            font: 400 16px Roboto,RobotoDraft,Helvetica,Arial,sans-serif,"Microsoft YaHei","微软雅黑";
            pointer-events: none;
            position: absolute;
            bottom: 3px;
            margin-bottom: 0;
            left: 0;
            width: 100%;
            &.substantial {
                transform: scale(.75) translateY(-30px);
            }
            &.input-label-foucs {
                color: rgb(193, 39, 71);
                transform: scale(.75) translateY(-30px);
            }
        }

        .prefix {
            flex: none;
            padding-right: 5px;
            height: 22px !important;
            color: #666 !important;
            font-size: 14px !important;
        }
        .input-inner {
            position: relative;
            flex: auto;
        }

        input {
            display: block;
            width: 100%;
            height: 26px !important;
            font-size: 14px !important;
            flex-grow: 1;
            flex-shrink: 1;
            background-color: transparent;
            margin: 0 !important;
            outline: none;
            padding: 0 !important;
            color: #666 !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            border: none !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2) !important;
        }
        .fms-input-status {
            &.input-status-foucs {
                opacity: 1;
                margin-left: 0%;
                width: 100%;
            }
            position: absolute;
            transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
            width: 0%;
            margin-left: 50%;
            height: 2px;
            background: rgb(193, 39, 71);
            bottom: 0;
            left: 0;
        }
    }

    .fms-input-hint-li {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 5px 10px;
        border-bottom: 1px solid #ddd;
        &.active {
            background: #eee;
        }
        &.fms-input-hint-li-add {
            display: block;
            padding: 10px 10px;
            text-align: center;
            &:hover {
                background: #eee;
            }
        }
        &:last-child {
            border-width: 0px;
        }
        .fms-input-hint-icon {
            width: 35px;
            height: 35px;
            flex: none;
            background: #eee no-repeat center;
            background-size: contain;
        }
    }
</style>
