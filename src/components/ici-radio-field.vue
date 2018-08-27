<template>
  <div class="radio_field" v-if="values && values instanceof Array">
    <div class="radio_field" v-for="(item,index) of copyValues" :key="`radio_field${index}${item.value}`">
			<span :style="{fontSize:size}" :class="{'read-write':editIndex===index ,'active':item.value==value}"
            :contenteditable="editIndex===index"  @blur="blur(index,$event)"
            @keydown.stop.prevent.enter="blur(index,$event)"
            @paste="$funs.contenteditable"
            @dblclick="dblclick(index,$event)" v-focus="editIndex==index"
            @click="select(item.value,$event)">{{item.content}}</span>
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
  import fieldMixin from '../mixins/fieldMixin'
  export default {
    name: "radio_field",
    mixins: [fieldMixin],
    props: {
      value: {
        type: [String,Number],
        default: ''
      },
    },
    methods: {

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
        } else {
          this.$set(this.copyValues, index, {content:v,value:v})
        }
        this.editIndex = -2;
        this.$emit('input', v);
      },

      dblclick(index, e) {
        if (this.editable && !this.valueMapping) {
          this.editIndex = index
          this.select(e.target.innerText, true);
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
    padding: 2px 15px;
    color: #777;
    border: 1px dashed #bbb;
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
