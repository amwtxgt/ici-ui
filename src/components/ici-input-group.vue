<template>
	<div class="fms-input-group">
		<div class="fms-input-icon">
			<slot name="icon"></slot>
		</div>
		<div class="fms-input-content" :style="{height:height=='auto'?'auto':height+'px',overflow:overflow}">
			<slot></slot>
		</div>
		<div class="fms-input-handle" :class="{'no-handle':noHandle}">
			<slot name="handle"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "fms-input-group",
		props:{
		  height:{
		    type:[Number,String],
        default:48
      },
      overflow:{
        type:String,
        default:'hidden'
      },
      noHandle:Boolean,
    },

	}
</script>

<style scoped lang="less">
	//input 组
	.fms-input-group {
		position: relative;
		box-sizing: border-box;
		display: flex;
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
			height: 30px;
			margin: 15px 15px 0 20px;
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
      margin-top:10px;
			width: 90px;
			z-index: 0;
			visibility: hidden;
			-webkit-user-select: none;
			transition: background .3s;
			flex-shrink: 0;
			outline: none;
			text-align: center;
			color: #999;
      height: 35px;
      &.no-handle{
        width: 20px;
      }
			>*{
				float:left;
				height: 40px;
				width: 40px;

				line-height: 40px !important;
				font-size: 20px !important;
				border: 0;
				border-radius: 50%;

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
        &.no-handle{
          visibility: hidden;
        }
			}
		}
	}
</style>
