<template>
    <div>
        <div class="title-mall">{{title}}</div>
        <div class="flex code-use">
            <div class="message">
                <slot></slot>
            </div>
            <div class="code">
                <pre v-highlight class="html">{{html}}</pre>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'base-component',
		data() {
			return {};
		},
        props:{
			title:String,
			html:String,
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
    .title-mall{
        font-size:22px;
        color:#1B9AF7;
        margin:15px 0 5px;
    }
    .code-use{
        border:1px solid #aaa;
        border-radius:10px;

    }
    .message,.code{
        padding:15px;
        width:50%;
        flex:auto;
    }
    .message{
        border-right:2px dashed #eee;
    }
    button{
        margin:5px;
    }
</style>
