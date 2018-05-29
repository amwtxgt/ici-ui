<template>
	<div class="radio_field" v-if="values && values.length" :key="Math.random()">
		<div class="radio_field" v-for="(item,index) of newValue" :key="`radio_field${item.index}${item.value}`">
			<span :class="{'read-write':editIndex===item.index,'new':item.index>0,'active':item.value==value}"
					@blur="blur(item.index,$event)" @keydown.stop.prevent.enter="blur(item.index,$event)"
					@dblclick="dblclick(item.index,$event)" @longtap="dblclick(item.index,$event)"
					@click="select(item.value,$event)" @tap.stop.prevent="select(item.value,$event)">{{item.value}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "radio_field",
		data() {
			return {
				editIndex: -1,
				copyValues: [],
			}
		},

		created() {
			this.copyValues = JSON.parse(JSON.stringify(this.values));
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

			select(val) {
				this.$emit('input', val);
			},
			blur(index, e) {
				//如果不是在编辑状态下切换过来的，结束
				if (this.editIndex == -2) {
					return;
				}

				if (!funs.trim(e.target.innerText)) {
					this.$delete(this.copyValues, index)
				} else {
					this.$set(this.copyValues, index, e.target.innerText)
				}
				this.editIndex = -2;
				this.$emit('input', e.target.innerText);
			},

			dblclick(index, e) {
				console.log(e)
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

	.radio_field {
		display: inline-block;
	}

</style>