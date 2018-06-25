<template>
  <div class="ici-search-wrap">
    <div class="ici-search">
      <ici-icon class="ici-font" name="icon-sousuo" size="20px" color="rgba(0, 0, 0, .3)"></ici-icon>
      <input type="text" :value="value" @blur="blur" @input="input" v-focus="focus" @focus="focusEvent"
             @keydown.up.down.stop.prevent="keydown" @keyup.enter.stop.prevent="enter" :placeholder="label">
      <ici-icon class="ici-delete" :class="{show:value}" name="icon-shanchudelete30" size="18px" @click="reset">
      </ici-icon>
    </div>
    <ici-hint class="ici-hint-addclass" v-model="showHint" :loading="hint===true">
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
</template>

<script>
  /*
  * 输入框组件
  * @v-model {string} 输入框值
  * @prop label {string} 输入框标签
  * @prop focus {Boolean} 是否获取焦点
  * @prop hint {array|boolean} 提示信息 三种状态 false:不开启提示； true:开启提示并显示正在加载； array提示信息列表
  * @slot-scope props.item {Array} props.list等于hint
  * @emit select {function(index)} 当提示信息存在时，用户选中事件，index表示用户选中第几个
  * @emit enter {function(index)} 用户回车确认事件
  * */
  export default {
    name: "header-saerch",
    data() {
      return {
        selectIndex: -2, //选中的文字提示，-2不选，-1选中默认，>-1选中的索引,
        showTitle: false,
        hasFocus: false,
      };
    },
    props: {
      value: String,
      label: {
        type: String,
        default: 'Search'
      },
      hint: {
        type: [Array, Boolean],
      },
      focus: Boolean,
    },
    mounted() {
      if (this.$slots.title) {
        this.showTitle = true;
      }
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
        return Boolean(this.value)
      }
    },
    methods: {
      enter: function (e) {
        if (this.selectIndex !== -2) {
          this.$emit('select', this.selectIndex);
        }
        e.target.blur()
        this.$emit('enter', this.selectIndex);

      },
      input: function (e) {
        this.selectIndex = -2;
        this.$emit('input', e.target.value);
      },
      focusEvent: function () {
        this.hasFocus = true;
      },
      blur: function (e) {
        this.hasFocus = false;
        var val = e.target.value.replace(/(^\s*)|(\s*$)/g, "");
        this.$emit('input', val);
        this.$emit('blur');
      },
      select: function (index) {
        this.$emit('select', index)
      },
      keydown(e) {
        if (!this.hint || !this.hint.length) return false;
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
      },
      reset() {
        this.$emit('input', '')
        this.$emit('close');
      }
    },
  }
</script>

<style scoped lang="less">
  .ici-search-wrap {
    position: relative;
  }

  .ici-search {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    background: rgba(205, 205, 205, .5);
    height: 42px;
    border-radius: 7px;
    .ici-font, .ici-delete {
      padding: 0 10px;
      flex: none;
    }

    .ici-delete {
      visibility: hidden;
      &.show {
        cursor: pointer;
        visibility: visible;
        color: #aaa !important;
        &:hover {
          color: #888 !important;
        }
        &:active {
          color: #666 !important;
        }
      }
    }
    input {
      flex: auto;
      background: transparent;
      font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif, "Microsoft YaHei", "微软雅黑";
      display: block;
      width: 100%;
      color: #333;
      border: none;
      font-size: 18px;
      outline: none;
      &::placeholder {
        color: rgba(0, 0, 0, .3) !important;
        font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif, "Microsoft YaHei", "微软雅黑" ;
      }
    }
  }

  .fms-input-hint-li {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 8px 10px;
    border-bottom: 1px solid #eee;
    &.active, &:hover {
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

  .ici-hint-addclass {
    border-radius: 5px !important;
    overflow: hidden;
  }
</style>
