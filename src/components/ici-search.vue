<template>
  <div class="ici-search-wrap">
    <div class="ici-search">
      <ici-icon class="ici-font" name="icon-sousuo" size="20px" color="rgba(0, 0, 0, .3)"></ici-icon>
      <input type="text" :value="value" @blur="blur" @input="input" v-focus="focus" @focus="focusEvent" @paste="paste"
             @keydown.up.down.stop.prevent="keydown" @keyup.enter.stop.prevent="enter" :placeholder="label">
      <ici-icon class="ici-delete" :class="{show:value}" name="icon-shanchudelete30" size="18px" @click="reset"/>
    </div>

    <ici-hint class="ici-hint-addclass" :class="hintClass" v-model="showHint" :loading="hint===true" max-height="600px">
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
        <div v-if="!hint.length" class="text-center">
          <slot name="no-data">
            <div style="font-size:16px">
              <ici-icon name="icon-sousuo" size="20px" color="#aaa"></ici-icon>
              <span class="text-999">No data found</span>
            </div>
          </slot>
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
      hintClass:String,
      hint: {
        type: [Array, Boolean],
      },
      focus: Boolean,
    },
    mounted() {
      if(this.$slots.title) {
        this.showTitle = true;
      }
    },
    computed: {
      showHint: function () {
        if(!this.hasFocus || !this.hint) {
          return false;
        }
        else if(this.hint === true && this.hasFocus) {
          return true;
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
      paste(e){
//        let pastedText = e.clipboardData.getData('text/plain');
//
//        if(pastedText) {
//          //有文本时，触发文本事件
//          this.$emit('input',this.$funs.trim(pastedText))
//        }
       setTimeout(()=>{
         this.$emit('input',this.$funs.trim(this.value));
       },10)
      },
      enter: function (e) {

        if(this.selectIndex !== -2) {
          this.$emit('select', this.selectIndex);
        }

        e.target.blur();
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
        if(!this.hint || !this.hint.length) return false;
        var min = 0, max = this.hint.length;
        if(this.showTitle) {
          min = -1
        }

        if(e.key == 'ArrowUp') {
          if(this.selectIndex > min) {
            this.selectIndex--
          }
          else {
            this.selectIndex = max - 1;
          }
        }
        else {
          if(this.selectIndex < max - 1) {
            if(this.selectIndex == -2 && !this.showTitle) {
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

