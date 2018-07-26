<template>
  <div class="radio_field" v-if="values && values instanceof Array">
    <div class="radio_field" v-for="(item) of newValue" :key="`radio_field${item.index}${item.value}`">
			<span :style="{fontSize:size}" :class="{'read-write':editIndex===item.index,'active':item.value==value}"
            :contenteditable="editIndex===item.index"
            @blur="blur(item.index,$event)" @keydown.stop.prevent.enter="blur(item.index,$event)"
            @paste="$funs.contenteditable"
            @dblclick="dblclick(item.index,$event)" v-focus="editIndex==item.index"
            @click="select(item.value,$event)">{{item.value}}</span>
    </div>

      <ici-button class="radio-btn" shape="circle" type="hollow" size="small"  @click.native="editIndex=-1"
                  v-show="editIndex==-2 && copyValues.length==0 && editable">
        <ici-icon color="#0bb20c" size="14px" name="icon-tianjia" />
      </ici-button>
      <span v-if="editIndex==-1" v-focus="editIndex==-1" class="addspan active" :class="{'read-write':editIndex==-1}"
            @blur.stop.prevent="addblur($event)" @keydown.stop.prevent.enter="addblur($event)"></span>

  </div>
</template>

<script>

  export default {
    name: "radio_field",
    data() {
      return {
        editIndex: -2,  //编辑位置控制，-2无编辑位置，-1新增编辑 ，>=0编辑位置的索引
        copyValues: [],
      }
    },

    created() {
      this.copyValues = JSON.parse(JSON.stringify(this.$funs.arrayUnique(this.values)));
    },
    computed: {
      newValue() {
        var arr = [];
        if (this.copyValues instanceof Array) {
          this.copyValues.forEach((val, index) => {
            if (!arr.some(val2 => val == val2.value)) {
              if (val) {
                arr.push({
                  value: val,
                  index: index,
                })
              }
            }
          });
        }
        return arr;
      }
    },
    props: {
      values: {
        type: Array,
        default() {
          return []
        }
      },
      value: {
        type: String,
        default: ''
      },
      size:{
        type:String,
        default:'14px'
      },
      editable: Boolean,
    },
    methods: {
      //添加时，失去焦点的操作
      addblur(e) {
        var v = this.$funs.trim(e.target.innerText)
        console.log(v)
        if (v && this.editIndex >= -1 && !this.copyValues.some(val => val === v)) {
          this.copyValues.push(v)
          this.blur(this.newValue.length - 1, e)

        }
        else {
          console.log('asdfsdf')
          this.editIndex = -2;
        }

      },
      select(val) {
        this.$emit('input', val);
      },
      blur(index, e) {
        //如果不是在编辑状态下切换过来的，结束
        if (this.editIndex == -2) {
          return;
        }
        var v = this.$funs.trim(e.target.innerText);
        if (!v) {
          this.$delete(this.copyValues, index)
        }
        else {
          this.$set(this.copyValues, index, v)
        }
        this.editIndex = -2;
        this.$emit('input', v);
      },

      dblclick(index, e) {
        if (this.editable) {
          this.editIndex = index
        }
      }
    }
  }
</script>

<style scoped lang="less">
  span {
    &.addspan {
      min-width: 70px;
    }
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none;
    cursor: pointer;
    display: inline-block;
    margin: 5px 5px 5px 0;
    padding: 5px 15px;
    color: #aaa;
    border: 1px dashed #ddd;
    border-radius: 50px;
    transition: all .3s;
    background: #fff;
    &.active {
      background: #C01639;
      color: rgba(255,255,255,.7);
      border: 1px solid #C01639;

    }

  }

  .radio-btn {
    margin-left: 0 !important;
  }

  .read-write {
    background: #fff !important;
    color: #666 !important;
    box-shadow: inset 0 0 7px 0 rgba(0, 0, 0, .5);
    -webkit-user-modify: read-write-plaintext-only;
    user-modify: read-write-plaintext-only;
  }

  .read-write:after {
    text-shadow: 1px 1px 5px #999;
  }

  .radio_field {
    display: inline-block;
  }

</style>
