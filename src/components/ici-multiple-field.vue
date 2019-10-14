<template>
  <div class="multiple_field" v-if="values && values.length">
    <div class="multiple_field" v-for="(item,index) of copyValues" :key="`multiple_field${index}-${item.value}`">
			<span :style="{fontSize:size}" :class="{'read-write':editIndex===index,'active':value.some(val=>val==item.value)}"
            :contenteditable="editIndex===index" @paste="$funs.contenteditable" v-focus="editIndex==index"
            @blur.stop.prevent="blur(index,$event)" @keydown.stop.prevent.enter="blur(index,$event)"
            @dblclick.stop.prevent="dblclick(index,$event)" @click="select(item.value)">{{item.content}}</span>
      <ici-icon v-show="editIndex==-2 && remove" class="close" color="#fff" @click.native="del(index)" click-state
                size="14px"
                name="icon-shanchudelete30"/>
    </div>
    <ici-button class="radio-btn" shape="circle" type="hollow" size="small" v-show="editIndex==-2 && editable"
                @click.native="editIndex=-1">
      <ici-icon color="#0bb20c" name="icon-tianjia"></ici-icon>
    </ici-button>
    <span v-if="editIndex==-1" v-focus="editIndex==-1" class="addspan new active" :class="{'read-write':editIndex==-1}"
          @blur.stop.prevent="addblur($event)" @keydown.stop.prevent.enter="addblur($event)"></span>
  </div>
</template>

<script>
  import fieldMixin from '../mixins/fieldMixin'

  export default {
    name: "ici-multiple-field",
    mixins: [fieldMixin],
    computed: {
      newValue() {
        var arr = [];
        this.copyValues.forEach((val, index) => {
          arr.push({
            value: val,
            index: index,
          })
        });

        return arr;
      }
    },
    props: {
      value: {
        type: Array,
        default() {
          return []
        }
      },
      remove: Boolean,
    },
    created(){
      var delIndex = []
      this.value.forEach((v,index)=>{
       if(!this.copyValues.some(val=>val.value==v)){
         delIndex.push(index)
       }
      })
      var delIndex = delIndex.reverse()
     var  d = JSON.parse(JSON.stringify(this.value))
      delIndex.forEach(v=>{
        d.splice(v,1)
      })
      this.$emit('input',d)

    },
    methods: {

      add() {
        this.copyValues[this.copyValues.length - 1]
      },

      //选择或取消
      select(value, dbclick = false) {

        if (this.editIndex > -1 && !dbclick) {
          return;
        }
        var vls = JSON.parse(JSON.stringify(this.value));
        var idx = 0;


        var bool = this.value.some((vals, index) => {
          if (vals === value) {
            idx = index;
            return true
          }
        });

        if (!bool) {
          //新增
          vls.push(value);
        }
        else if (!dbclick) {
          vls.splice(idx, 1);
        }

        this.$emit('input', vls);
      },

      //删除
      del(index) {

        var oldValue = this.copyValues[index]
        this.$delete(this.copyValues, index);

        var vls = JSON.parse(JSON.stringify(this.value));

        vls.some((val, i) => {
          if (val === oldValue) {
            vls.splice(i, 1)
            return true;
          }
        });

        this.$emit('input', vls);
        this.editIndex = -2;
      },


      blur(index, e) {
        //如果不是在编辑状态下切换过来的，结束
        if (this.editIndex == -2) {
          return;
        }

        var vls = [];
        var oldValue = this.copyValues[index]; //修改前的内容
        var currentValue = this.$funs.trim(e.target.innerText);

        //没有内容，删除
        if (!currentValue) {

          //选中的value,是否有被删除的部分
          vls = JSON.parse(JSON.stringify(this.value));
          vls.some((val, i) => {
            if (val === oldValue.value) {
              vls.splice(i, 1)
              return true;
            }
          });

          this.$delete(this.copyValues, index);

        }
        else {

          this.$set(this.copyValues, index, {content: currentValue, value: currentValue});

          vls = JSON.parse(JSON.stringify(this.value));

          var bool = vls.some((val, i) => {
            if (val === oldValue.value) {
              vls[i] = currentValue
              return true;
            }
          });

          if (!bool) {
            vls.push(currentValue)
          }

          vls = this.$funs.arrayUnique(vls);
        }

        this.$emit('input', vls);
        this.editIndex = -2;
      },

      dblclick(index, e) {
        if (this.editable && !this.valueMapping) {
          this.select(e.target.innerText, true);
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
    cursor: pointer;
    display: inline-block;
    margin: 5px 5px 5px 0;
    padding: 2px 15px;
    outline: none;
    color: #777;
    border: 1px dashed #bbb;
    border-radius: 50px;
    transition: all 0.3s;
    background: #fff;
    &:hover + .close {
      visibility: visible;
    }

    &.active {
      background: #ee8615;
      color: rgba(255, 255, 255, .7);
      border: 1px solid #ee8615;
    }
  }

  .read-write {
    background: #fff !important;
    color: #666 !important;
    box-shadow: inset 0 3px 4px 0 rgba(0, 0, 0, .5);
    -webkit-user-modify: read-write-plaintext-only;
  }

  .read-write:after {
    text-shadow: 1px 1px 5px #999;
  }

  .multiple_field {
    position: relative;
    display: inline-block;

  }

  .close {
    visibility: hidden;
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, .5);
    padding: 2px;
    &:hover {
      visibility: visible;
    }
  }

  .radio-btn {
    margin-left: 0 !important;
  }
</style>
