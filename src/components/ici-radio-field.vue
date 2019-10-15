<template>
  <div class="ici-radio-field" v-if="values && values instanceof Array">
    <div class="ici-radio-field" v-for="(item,index) of copyValues" :key="`ici-radio-field${index}${item.value}`">
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
    name: "ici-radio-field",
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
