<template>
	<div class="fms-input-group">
		<div class="fms-input-icon" :style="iconStyle">
			<slot name="icon"></slot>
		</div>
		<div class="fms-input-content" :style="{height:height=='auto'?'auto':height+'px',overflow:overflow}">
			<slot></slot>
		</div>
		<div class="fms-input-handle" :class="{'no-handle':noHandle}" :style="handleStyle">
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
      iconStyle:[String,Object],
      handleStyle:[String,Object],
      overflow:{
        type:String,
        default:'hidden'
      },
      noHandle:Boolean,
    },

	}
</script>
