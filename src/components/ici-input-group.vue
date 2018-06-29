<template>
	<div class="fms-input-group">
		<div class="fms-input-icon">
			<slot name="icon"></slot>
		</div>
		<div class="fms-input-content">
			<slot></slot>
		</div>
		<div class="fms-input-handle">
			<slot name="handle"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "fms-input-group",
		data() {
			return {};
		},
		mounted() {
		},
		beforeDestroy() {
		},
		methods: {},
		components: {}
	}
</script>

<style scoped lang="less">
	//input 组
	.fms-input-group {
		position: relative;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		padding-right: 5px;
		width: 100%;
		.fms-input-icon-pic {
			top: 0px;
			position: absolute;
			width: 60px;
			height: 60px;
			background: no-repeat center;
			background-size: contain;
			border: 1px solid #eee;
		}
		.fms-input-icon {
			width: 40px;
			height: 40px;
			margin: 10px 15px 0 20px;
			font-size: 20px;
			display: inline-block;
			flex-shrink: 0;
			text-align: right;

			.fms-iconfont {
				padding-top: 10px;
				color: #666 !important;
			}
		}
		.fms-input-content{
			flex:auto;
			display: flex;
			position: relative;
			>*{
				margin:0 5px;
			}
		}
		.fms-input-handle {
			position: relative;
			width: 90px;
			z-index: 0;
			visibility: hidden;
			-webkit-user-select: none;
			transition: background .3s;
			flex-shrink: 0;
			outline: none;
			overflow: hidden;
			text-align: center;
			color: #999;
			>*{
				float:left;
				height: 45px;
				width: 45px;
				line-height: 45px !important;
				font-size: 20px !important;
				border: 0;
				border-radius: 50%;
				margin-right:-5px;
				cursor: pointer;
				display: inline-block;
				&:hover {
					background: #f3f3f3;
				}
				&:active {
					background: #ddd;
				}
			}
		}
		&:hover {
			.fms-input-handle {
				visibility: visible;
			}
		}
	}
</style>
