<template>
    <div class="fms-input" :class="{substantial:isSubstantial}">
        <div v-if="prefix" class="prefix">{{prefix.content}}</div>
        <div class="input-inner">
            <input @blur="blur" class="fms-input-input" type="text" :type="password?'password':'text'"
                   :value="inputValue" @input="input" v-focus="focus"
                   @keyup.enter="$emit('keyup-enter')"
                   @keydown.up.down.stop.prevent="keydown" @keyup.enter.stop.prevent="enter">
            <label class="fms-input-label">{{label}}</label>
            <div class="fms-input-status"></div>

            <div v-show="hint" class="fms-input-hint" :class="{hintnone:hint && hint.length===0 && !showTitle}">
                <!--列表头部-->
                <div v-if="showTitle" class="fms-input-hint-li fms-input-hint-li-add" @mousedown="select(-1)"
                     :class="{active:selectIndex==-1}">
                    <slot name="title"></slot>
                </div>

                <!--加载图标-->
                <div v-if="hint === true">
                    <div class="fms-input-hint-loading">
                        <ici-loading></ici-loading>
                    </div>
                </div>
                <!--列表内容-->
                <div v-else-if="hint instanceof Array">
                    <!--组件内部不知道，数组内的对象属性，所以需要暴露出去-->
                    <div v-for="(item,index) of hint" @mousedown="select(index)"
                         class="fms-input-hint-li" :class="{active:selectIndex==index}">
                        <slot :item="item" :index="index"></slot>
                    </div>
                </div>
            </div>

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
            isSubstantial: function () {
                return Boolean(this.inputValue)
            }
        },
        mounted() {
            if (this.$slots.title) {
                this.showTitle = true;
            }
            console.log('thisthisthisthis', this);
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
            enter: function () {
                if (this.selectIndex !== -2) {
                    this.$emit('select', this.selectIndex)
                }

            },
            input: function (e) {
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
            blur: function (e) {
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
        label {
            text-align: left;
            -webkit-transform-origin: bottom left;
            transform-origin: bottom left;
            -webkit-transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
            transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
            -webkit-transition-property: color, bottom, transform;
            transition-property: color, bottom, transform;
            color: rgba(0, 0, 0, 0.38);
            font: 400 16px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
            pointer-events: none;
            position: absolute;
            bottom: 3px;
            margin-bottom: 0;
            left: 0;
            width: 100%;
        }
        &.substantial {
            label {
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
            &:focus {
                + .fms-input-label {
                    color: rgb(193, 39, 71);
                    transform: scale(.75) translateY(-30px);
                }
                + .fms-input-label + .fms-input-status {
                    opacity: 1;
                    margin-left: 0%;
                    width: 100%;
                }
                + .fms-input-label + .fms-input-status + .fms-input-hint {
                    visibility: visible;
                    opacity: 1;
                    &.hintnone{
                        visibility: hidden;
                        opacity: 0;
                    }
                }
            }
        }
        .fms-input-status {
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

        .fms-input-hint {
            position: absolute;
            top: 30px;
            left: 0;
            visibility: hidden;
            opacity: 0;
            transition: all .3s;
            width: 100%;
            box-sizing: border-box;
            border: 1px solid rgba(0, 0, 0, .2);
            background-color: #ffffff;
            border-radius: 0 0 2px 2px;
            box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
            z-index: 1;
            margin-bottom: 5px;
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
                .fms-input-hint-name {
                    padding-left: 10px;
                    font-size: 14px !important;
                    flex: auto;
                    small {
                        color: #999;
                    }
                }
                .fms-input-hint-content {
                    border-radius: 5px;
                    padding: 2px 5px;
                    margin-left: 10px;
                    font-size: .8em;
                    text-align: center;
                    flex: none;
                    a {
                        color: #C12747 !important;
                    }
                }
            }

            .fms-input-hint-loading {
                text-align: center;
                padding: 5px;
            }
        }
    }
</style>