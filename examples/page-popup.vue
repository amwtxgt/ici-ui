<template>
    <div>
        <div class="title">popup 弹窗</div>
        <baseComponent title="基本按钮" html='<ici-button>你好啊</ici-button>'>
            <ici-popup v-model="popup1" title="asdasdas">
                <!--<div slot="header">我是title</div>-->
            </ici-popup>
            <ici-button @click="popup1= true">打开弹窗</ici-button>
        </baseComponent>
    </div>
</template>

<script>
	export default {
		name: 'page-popup',
		data() {
			return {
                popup1:false
            };
		},
		mounted() {
		},
		beforeDestroy() {
		},
		methods: {

    },
	};
</script>

<style  lang="less">
    .title {
        font-size: 30px;
        margin-bottom:10px;
    }
    button{
      margin:5px !important;
    }

</style>
