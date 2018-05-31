<template>
	<div class="ici-message" :class="{show:show}">
		<div>{{message}}</div>
	</div>
</template>
<script>
	/*
	* 提示message组
	* @v-model {Boolean} 控制弹窗 开或关
	* @ref open {function(val)} 开打提示，不会自动关闭，直接调用msg或close方法
	* @ref msg {function(val,msec)} 打开自动关闭提示，val提示内容，msec打开时间毫秒
	* @ref close {function} 关闭提示
	*
	* */
    var fmsDom = window.document.createElement('div');
    fmsDom.setAttribute('id', 'ici-messages');
	export default {
	    el:fmsDom,
		name: "ici-message",
		data: function () {
			return {
				message: '',
				timeout: 0,
				msec: 2000,
				show: false,
			}
		},
		methods: {
			msg(val, msec) {
				clearTimeout(this.timeout);
				this.message = val || '';

				if (this.show) {
					this.show = false;
					setTimeout(() => {
						this.show = true;
						this.timeout = setTimeout(() => {
							this.show = false;
						}, msec || this.msec)
					}, 100)
				} else {
					this.show = true;
					this.timeout = setTimeout(() => {
						this.show = false;
					}, msec || this.msec)
				}

			},
			open(val) {
				clearTimeout(this.timeout)
				this.message = val || '';
				if (this.show) {
					this.show = false;
					setTimeout(() => {
						this.show = true;
					}, 100)
				} else {
					this.show = true;
				}
			},
			close() {
				this.show = false;
			}
		}
	}
</script>

<style scoped lang="less">
	.ici-message {
		position: fixed;
		bottom: 30px;
		left: 50%;
		margin-left: -145px;
		z-index: 99999;
		background: #000;
		color: #fff;
		box-shadow: 0 0 4px grey;
		transition: all .3s;
		font-size: 16px;
		padding: 0 20px;
		border-radius: 2px 2px 0 0;
		line-height: 50px;
		width: 290px;
		height: 50px;
		visibility: hidden;
		opacity: 0;
		transform: scale(.8);
		&.show {
			visibility: visible;
			opacity: 1;
			transform: scale(1);
		}
	}
</style>