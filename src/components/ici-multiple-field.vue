<template>
  <div class="ici-multiple-field" v-if="values && values.length">
    <div class="ici-multiple-field" v-for="(item,index) of copyValues" :key="`ici-multiple-field${index}-${item.value}`">
			<span :style="{fontSize:size}" :class="{'read-write':editIndex===index,'active':value.some(val=>val==item.value)}"
            :contenteditable="editIndex===index" @paste="$funs.contenteditable" v-focus="editIndex==index"
            @blur.stop.prevent="blur(index,$event)" @keydown.stop.prevent.enter="blur(index,$event)"
            @dblclick.stop.prevent="dblclick(index,$event)" @click="select(item.value)">{{item.content}}</span>
      <ici-icon v-show="editIndex==-2 && remove" class="close" color="#fff" @click.native="del(index)" click-state
                size="14px"
                name="icon-shanchudelete30"/>
    </div>
    <ici-button class="radio-btn" shape="circle" type="primary" size="small" v-show="editIndex==-2 && editable"
                @click.native="editIndex=-1">
      <ici-icon name="icon-tianjia"></ici-icon>
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
