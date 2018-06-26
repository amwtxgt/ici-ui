<template>
    <div>
        <div class="title">popup 弹窗</div>
        <baseComponent title="基本弹窗" html='<ici-popup v-model="popup1"></ici-popup>
<ici-button @click="popup1= true">打开弹窗</ici-button>'>
            <ici-popup v-model="popup1"></ici-popup>
            <ici-button @click="popup1= true">打开弹窗</ici-button>
        </baseComponent>

        <baseComponent title="添加标题" html='<ici-popup v-model="popup2" title="我是标题"></ici-popup>
<ici-button @click="popup2= true">使用title属性</ici-button>
<ici-popup v-model="popup3">
    <div slot="header"><ici-icon name="icon-zhongguoditu"></ici-icon> 我是slot标题</div>
</ici-popup>
<ici-button @click="popup3= true">使用slot</ici-button>'>
            <ici-popup v-model="popup2" title="我是标题11111"></ici-popup>
            <ici-button @click="popup2= true">使用title属性</ici-button>
            <ici-popup v-model="popup3">
                <div slot="header"><ici-icon name="icon-zhongguoditu"></ici-icon> 我是slot标题</div>
            </ici-popup>
            <ici-button @click="popup3= true">使用slot</ici-button>
        </baseComponent>

        <baseComponent title="添加内容" html='<ici-popup v-model="popup4" title="我是标题">
    <div style="padding:10px 20px;">这里是内容这里是内容这里是内容</div>
</ici-popup>
<ici-button @click="popup4= true">打开弹窗</ici-button>'>
            <ici-popup v-model="popup4" title="我是标题">
                <div style="padding:10px 20px;">这里是内容这里是内容这里是内容</div>
            </ici-popup>
            <ici-button @click="popup4= true">打开弹窗</ici-button>
        </baseComponent>

        <baseComponent title="添加遮罩 mask" html='<ici-popup mask v-model="popup7" title="我是标题">
    <div style="padding:10px 20px;">这里是内容这里是内容这里是内容</div>
</ici-popup>
<ici-button @click="popup7= true">打开弹窗</ici-button>'>
            <ici-popup v-model="popup7" mask title="我是标题">
                <div style="padding:10px 20px;">这里是内容这里是内容这里是内容</div>
            </ici-popup>
            <ici-button @click="popup7= true">打开弹窗</ici-button>
        </baseComponent>

        <baseComponent title="添加确认事件 @confirm" html='<ici-popup v-model="popup5" title="我是标题" @confirm="popup5=false">
    <div style="padding:10px 20px;">这里是内容这里是内容这里是内容</div>
</ici-popup>
<ici-button @click="popup5 = true">打开弹窗</ici-button>'>
            <p>
                在属性添加@confirm事件,会自动添加confirm按钮
            </p>
            <ici-popup v-model="popup5" title="我是标题" @confirm="popup5=false">
                <div style="padding:10px 20px;">这里是内容这里是内容这里是内容</div>
            </ici-popup>
            <ici-button @click="popup5 = true">打开弹窗</ici-button>
        </baseComponent>

        <baseComponent title="自定义底部" html='<ici-popup v-model="popup6" title="我是标题" @confirm="popup6=false">
    <div slot="footer-left">
        <ici-button type="ici" size="small">左边自定义1</ici-button>
    </div>
    <div slot="footer-right">
        <ici-button type="ici" size="small" @click="popup6=false">右边自定义关闭</ici-button>
        <ici-button type="ici" size="small" @click="popup6=false">右边自定义2</ici-button>
    </div>
</ici-popup>
<ici-button @click="popup6 = true">打开弹窗</ici-button>'>
            <ici-popup v-model="popup6" title="我是标题" @confirm="popup6=false">
                <div slot="footer-left">
                    <ici-button type="ici" size="small">左边自定义1</ici-button>
                </div>
                <div slot="footer-right">
                    <ici-button type="ici" size="small" @click="popup6=false">右边自定义关闭</ici-button>
                    <ici-button type="ici" size="small" @click="popup6=false">右边自定义2</ici-button>
                </div>
            </ici-popup>
            <ici-button @click="popup6 = true">打开弹窗</ici-button>
        </baseComponent>
      <baseComponent title="大小" html=' <ici-popup v-model="popup8" :width="300"></ici-popup>
<ici-button @click="popup8= true">打开弹窗</ici-button>'>
        <ici-popup v-model="popup8" :width="300">
          <div slot="header">sdf</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
          <div>sdfsdfds</div>
        </ici-popup>
        <ici-button @click="popup8= true">打开弹窗</ici-button>
      </baseComponent>
    </div>
</template>

<script>
	export default {
		name: 'page-popup',
		data() {
			return {
                popup1:false,
                popup2:false,
                popup3:false,
                popup4:false,
                popup5:false,
                popup6:false,
                popup7:false,
                popup8:false
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
