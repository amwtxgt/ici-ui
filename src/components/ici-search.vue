<template>
  <div class="ici-search-wrap ">
    <div class="flex flex-center">
      <div class="ici-search flex-auto">
        <slot name="left">
          <ici-icon class="ici-font" name="icon-sousuo" size="16px" color="rgba(0, 0, 0, .3)"></ici-icon>
        </slot>
        <input type="text" :value="value" @blur="blur" @input="input" @focus="focusEvent" @paste="paste"
               @keydown.up.down.stop.prevent="keydown" @keyup.enter.stop.prevent="enter" :placeholder="label"
               @keyup.esc.stop.prevent="$emit('esc')" ref="input" @mouseup.stop="onmouseup">
        <ici-icon class="ici-delete" :class="{show:value}" name="icon-shanchudelete30" size="16px" @click="reset"/>
        <slot name="right"></slot>
      </div>
      <slot name="wrap-right"></slot>
    </div>
    <ici-hint ref="icihint" class="ici-hint-addclass" :class="hintClass" v-model="showHint" :loading="hint===true"
              max-height="600px" :focus-show="hintFocusShow">
      <!--列表头部-->
      <div v-if="showTitle" class="fms-input-hint-li flex-none" @mousedown="select(-1)">
        <slot name="title"></slot>
      </div>

      <!--列表内容-->
      <ici-scroll ref="sesarch_scroll" class="flex-auto" v-if="hint instanceof Array" :onReachBottom="onReachBottom">
        <!--组件内部不知道，数组内的对象属性，所以需要暴露出去-->
        <div v-for="(item,index) of hint" @mousedown="select(index)"
             class="fms-input-hint-li" :class="{active:selectIndex==index}">
          <slot :item="item" :index="index"></slot>
        </div>
        <div v-if="!hint.length" class="text-center">
          <slot name="no-data">
            <div style="font-size:16px">
              <ici-icon name="icon-sousuo" size="20px" color="#aaa"></ici-icon>
              <span class="text-999">No data found</span>
            </div>
          </slot>
        </div>

      </ici-scroll>
    </ici-hint>

  </div>
</template>

<script>
  /*
  * 输入框组件
  * @v-model {string} 输入框值
  * @prop label {string} 输入框标签

  * @prop hint {array|boolean} 提示信息 三种状态 false:不开启提示； true:开启提示并显示正在加载； array提示信息列表
  * @prop hintFocusShow {Boolean} 提示信息窗在获取焦点的时候不关闭
  * @prop focusSelectAll 获取焦点时全选文本
  * @prop onReachBottom 提示信息窗底部触发
  * @slot-scope props.item {Array} props.list等于hint
  * @emit select {function(index)} 当提示信息存在时，用户选中事件，index表示用户选中第几个
  * @emit enter {function(index)} 用户回车确认事件
  * @emit blur {function()}
  * */
  export default {
    name: "header-saerch",
    data() {
      return {
        selectIndex: -2, //选中的文字提示，-2不选，-1选中默认，>-1选中的索引,
        showTitle: false,
        hasFocus: false,
        justFocus:false,//是否刚刚获取焦点
      };
    },
    props: {
      value: String,
      label: {
        type: String,
        default: 'Search'
      },
      onReachBottom: Function, //触发底部
      hintFocusShow: Boolean,
      focusSelectAll: Boolean,//获取焦点时全选文本
      hintClass: String,
      hint: {
        type: [Array, Boolean],
      },
    },
    mounted() {
      if (this.$slots.title) {
        this.showTitle = true;
      }
    },
    computed: {
      showHint: {
        get() {
          if (!this.hasFocus || !this.hint) {
            return false;
          } else {
            return true;
          }
        },
        set(v) {
          this.hasFocus = v;
        },
      },
      //是否有值
      isSubstantial: function () {
        return Boolean(this.value)
      }
    },
    methods: {
      onmouseup() {
        if(this.justFocus && this.focusSelectAll && this.$refs.input){
          setTimeout(()=>{
            this.$refs.input.select();
          },1)
        }
        this.justFocus = false;
      },
      toFocus() {
        if (this.$refs.input && this.$refs.input.focus) {
          this.$refs.input.focus();
        }
      },
      reachBottom() {
        if (this.$refs.sesarch_scroll) {
          this.$refs.sesarch_scroll.reachBottom()
        }
      },
      hintClose() {
        let hint = this.$refs.icihint;
        if (this.$refs.icihint) {
          hint.close()
        }
      },
      paste(e) {

        setTimeout(() => {
          this.$emit('input', this.$funs.trim(this.value));
        }, 10)
      },
      enter: function (e) {

        if (this.selectIndex > -1) {
          this.$emit('select', this.selectIndex);
          e.target.blur();
        }

        this.$emit('enter', this.selectIndex);

      },
      input: function (e) {
        this.selectIndex = -2;
        this.hasFocus = true;
        this.$emit('input', e.target.value);
      },
      focusEvent: function () {
        this.hasFocus = true;
        this.justFocus = true;
        if (this.focusSelectAll && this.$refs.input) {
          this.$refs.input.select()
        }
      },
      blur: function (e) {

        setTimeout(() => {
          this.hasFocus = false;
          let val = e.target.value.replace(/(^\s*)|(\s*$)/g, "");
          this.$emit('input', val);
          this.$emit('blur');
        }, 1)
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
          } else {
            this.selectIndex = max - 1;
          }
        } else {
          if (this.selectIndex < max - 1) {
            if (this.selectIndex == -2 && !this.showTitle) {
              this.selectIndex = 0;
            } else {
              this.selectIndex++
            }
          } else {
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
