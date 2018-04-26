<template>
   <div>
     <div class="title">loading 加载中</div>
     <baseComponent title="基本" html='<ici-loading></ici-loading>'>
      <ici-loading></ici-loading>
     </baseComponent>

     <baseComponent title="尺寸" html='<ici-loading></ici-loading>'>
       <ici-loading size="small"></ici-loading>
       <ici-loading ></ici-loading>
       <ici-loading size="big"></ici-loading>
     </baseComponent>
     <baseComponent title="禁止状态" html='<ici-loading disabled></ici-loading>'>
       <ici-loading disabled></ici-loading>
     </baseComponent>
   </div>
</template>

<script>
	export default {
		name: 'page-loading',
		data() {
			return {};
		},
		mounted() {
		},
		beforeDestroy() {
		},
		methods: {},
		components: {}
	};
</script>

<style scoped>

</style>
