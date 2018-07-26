<template>
	<div class="multiple_field" v-if="values && values.length">
		<div class="multiple_field" v-for="item of newValue" :key="`multiple_field${item.index}-${item.value}`">
			<span  :style="{fontSize:size}" :class="{'read-write':editIndex===item.index,'active':value.some(val=>val==item.value)}"
            :contenteditable="editIndex===item.index" @paste="$funs.contenteditable"  v-focus="editIndex==item.index"
				@blur.stop.prevent="blur(item.index,$event)" @keydown.stop.prevent.enter="blur(item.index,$event)"
				@dblclick.stop.prevent="dblclick(item.index,$event)" @click="select(item.value)">{{item.value}}</span>
			<ici-icon v-show="editIndex==-2 && remove" class="close" color="#fff" @click.native="del(item.index)" click-state size="14px"
						 name="icon-shanchudelete30" />
		</div>
		<ici-button  class="radio-btn" shape="circle" type="hollow" size="small" v-show="editIndex==-2 && editable"
                @click.native="editIndex=-1" >
      <ici-icon color="#0bb20c"  name="icon-tianjia"></ici-icon>
		</ici-button>
		<span v-if="editIndex==-1" v-focus="editIndex==-1" class="addspan new active" :class="{'read-write':editIndex==-1}"
				@blur.stop.prevent="addblur($event)" @keydown.stop.prevent.enter="addblur($event)"></span>
	</div>
</template>

<script>
	export default {
		name: "ici-multiple-field",
		data() {
			return {
				editIndex: -2, //编辑位置控制，-2无编辑位置，-1新增编辑 ，>=0编辑位置的索引
				copyValues: [],
			}
		},

		created() {
      var v = JSON.parse(JSON.stringify(this.values));
      console.log('asdfsadf',v)
      if(v[0] && v[0][0] instanceof Array){
        var d = []
        v.forEach((v2)=>{
          v2.forEach((v3)=>{
            var v4 =this.$funs.trim(v3);
            if(v4){
              d.push(v4)
            }
          })
        })
        this.copyValues = d;
      }else{
        this.copyValues = v;
      }


		},
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
			values: {
				type: Array,
				default() {
					return []
				}
			},
			value: {
				type: Array,
				default() {
					return []
				}
			},
      editable: Boolean,
      remove:Boolean,
      size:{
			  type:String,
        default:'14px'
      }
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
				} else if (!dbclick) {
					vls.splice(idx, 1);
				}

				this.$emit('input', vls);
			},

			//删除
			del(index) {

				var oldValue = this.copyValues[index]
				this.$delete(this.copyValues,index);

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
				//删除项
				if (!currentValue) {

					this.$delete(this.copyValues, index);

					vls = JSON.parse(JSON.stringify(this.value));

          //选中的value,是否有被删除的部分
					vls.some((val, i) => {
						if (val === oldValue) {
							vls.splice(i, 1)
							return true;
						}
					});

				} else {

					this.$set(this.copyValues, index, currentValue);

					vls = JSON.parse(JSON.stringify(this.value));

					var bool = vls.some((val, i) => {
						if (val === oldValue) {
							vls[i] = currentValue
							return true;
						}
					});

					if (!bool) {
						vls.push(currentValue)
					}

					vls =  this.$funs.arrayUnique(vls);
				}

				this.$emit('input', vls);
				this.editIndex = -2;
			},

			//添加时，失去焦点的操作
			addblur(e) {
			  var v = this.$funs.trim(e.target.innerText);

        if (v && this.editIndex >= -1 && !this.copyValues.some(val => val === v)) {
          this.copyValues.push(v)
          this.blur(this.newValue.length - 1, e)

        } else {

          this.editIndex = -2;
        }

			},
			dblclick(index, e) {
        if(this.editable){
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
		padding: 5px 15px;
    outline: none;
		color: #aaa;
		border: 1px dashed #ddd;
		border-radius: 50px;
		transition: all 0.3s;
		&:hover + .close {
			visibility: visible;
		}

		&.active {
			background: #C01639;
			color: rgba(255,255,255,.7);
			border: 1px solid #C01639;
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
