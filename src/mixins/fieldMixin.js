export default {
  data() {
    return {
      editIndex: -2,  //编辑位置控制，-2无编辑位置，-1新增编辑 ，>=0编辑位置的索引
      copyValues: [],
      valueMapping:false, //值映射
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
      type: [String,Number],
      default: ''
    },
    size:{
      type:String,
      default:'14px'
    },
    editable: Boolean,
  },
  created(){
    var v = JSON.parse(JSON.stringify(this.$funs.arrayUnique(this.values)));
    if(v.every((val)=>val && val.value && val.content)) {
      this.valueMapping = true;
      this.copyValues = v;
    }else if(v.every((val)=>val instanceof Array)){
      var d = []
      v.forEach((v2)=>{
        v2.forEach((v3)=>{
          var v4 =this.$funs.trim(v3);
          if(v4){
            d.push({
              content:v4,
              value:v4,
            })
          }
        })
      })
      this.copyValues = d;
    }else{
      v.forEach((val)=>{
        this.copyValues.push({
          content:val,
          value:val,
        })
      })
    }
  },
  methods:{
    //添加时，失去焦点的操作
    addblur(e) {
      var v = this.$funs.trim(e.target.innerText)

      if (v && this.editIndex >= -1 && !this.copyValues.some(val => val.value === v)) {
        this.copyValues.push({content:v,value:v})
        this.blur(this.copyValues.length - 1, e)
      } else {
        this.editIndex = -2;
      }
    },

  }
}
