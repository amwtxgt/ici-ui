<template>
	<div class="multiple_field" v-if="values && values.length">
		<div class="multiple_field" v-for="(item,index) of newValue"
			  :key="`multiple_field${item.index1}-${item.index2}${item.value}`">
			<span
				:class="{'read-write':editIndex===index,'new':item.newData,'active':value.some(val=>val==item.value)}"
				@blur.stop.prevent="blur(index,$event)" @keydown.stop.prevent.enter="blur(index,$event)"
				@dblclick.stop.prevent="dblclick(index,$event)" @longtap="dblclick(index,$event)"
				@click="select(item.value)" @tap.stop.prevent="select(item.value)">{{item.value}}</span>
			<iconfont v-show="editIndex==-2" class="close pointer" color="#fff" @click.native="del(index)"
						 name="icon-shanchudelete30"></iconfont>
		</div>
		<yd-button type="hollow" v-show="editIndex==-2" @click.native="editIndex=-1">
			<iconfont class="pointer" color="#0bb20c" name="icon-tianjia"></iconfont>
		</yd-button>
		<span v-if="editIndex==-1" v-focus class="addspan new active" :class="{'read-write':editIndex==-1}"
				@blur.stop.prevent="addblur($event)" @keydown.stop.prevent.enter="addblur($event)"></span>
	</div>
</template>

<script>
	export default {
		name: "multiple_field",
		data() {
			return {
				editIndex: -2, //编辑位置控制，-2无编辑位置，-1新增编辑 ，>=0编辑位置的索引
				copyValues: [],
			}
		},

		created() {
			this.copyValues = JSON.parse(JSON.stringify(this.values));
		},
		computed: {
			newValue() {
				var arr = [];

				this.copyValues.forEach((val, index) => {
					val.forEach((val2, index2) => {

						if (!arr.some(val3 => val2 == val3.value)) {
							if (val2) {
								arr.push({
									value: val2,
									newData: index !== 0,
									index1: index,
									index2: index2
								})
							}
						}
					});
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
		},
		directives: {
			focus: {
				// 指令的定义
				inserted: function (el) {
					el.focus()
				}
			},
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
				var va = this.newValue[index];
				var oldValue = va.value
				this.$delete(this.copyValues[va.index1], va.index2);

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
				var va = this.newValue[index]
				var oldValue = this.copyValues[va.index1][va.index2];

				if (!funs.trim(e.target.innerText)) {

					this.$delete(this.copyValues[va.index1], va.index2);

					vls = JSON.parse(JSON.stringify(this.value));

					vls.some((val, i) => {
						if (val === oldValue) {
							vls.splice(i, 1)
							return true;
						}
					});

				} else {

					this.$set(this.copyValues[va.index1], va.index2, e.target.innerText);

					vls = JSON.parse(JSON.stringify(this.value));

					var bool = vls.some((val, i) => {
						if (val === oldValue) {
							vls[i] = e.target.innerText
							return true;
						}
					});

					if (!bool) {
						vls.push(e.target.innerText)
					}

					vls = funs.arrayUnique(vls);
				}

				this.$emit('input', vls);
				this.editIndex = -2;
			},

			//添加时，失去焦点的操作
			addblur(e) {

				if (e.target.innerText && this.editIndex >= -1) {
					this.copyValues[this.copyValues.length - 1].push(e.target.innerText)
					this.blur(this.newValue.length - 1, e)
				} else {
					this.editIndex = -2;
				}

			},
			dblclick(index, e) {

				this.select(e.target.innerText, true);
				setTimeout(() => {
					e.target.focus()
				}, 0)
				this.editIndex = index
			}
		}
	}
</script>

<style scoped lang="less">
	span {
		&.addspan {
			min-width: 70px;
		}
		cursor: pointer;
		position: relative;
		display: inline-block;
		margin: 5px 5px 5px 0;
		padding: 5px 15px;
		color: #aaa;
		border: 1px solid #ddd;
		border-radius: 5px;
		transition: all 0.3s;
		&:hover + .close {
			visibility: visible;
		}

		&.active {
			background: #C01639;
			color: #fff;
			border: 1px solid #C01639;
			&.new {
				background: #0bb20c;
				color: #fff;
				border: 1px solid #0bb20c;
				&:after {
					color: #fff !important;
				}
			}
		}
		&.new:after {
			font-family: "iconfont" !important;
			font-style: normal;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			position: absolute;
			content: '\e673';
			color: #aaa;
			font-size: 23px;
			line-height: 23px;
			top: -1px;
			left: -1px;
		}
	}

	.read-write {
		background: #fff !important;
		color: #666 !important;
		box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, .5);
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
		line-height: 12px;
		padding: 2px;
		border-radius: 50%;
		&:hover {
			visibility: visible;
		}
	}
</style>