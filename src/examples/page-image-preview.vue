<template>
    <div>
        <div class="title">button 按钮</div>
        <baseComponent title="基本按钮" html='   <img v-imgpreview="{}" width="200"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531971847625&di=356b9af450289a56b357eac16644ee06&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4a36acaf2edda3ccd53548ea0be93901203f9223.jpg" alt="">'>
          <img v-imgpreview="{}" width="200"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531971847625&di=356b9af450289a56b357eac16644ee06&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4a36acaf2edda3ccd53548ea0be93901203f9223.jpg" alt="">
        </baseComponent>
      <baseComponent title="基本按钮" html=' <img v-imgpreview="{}" width="200" src="http://ici.oss-cn-hongkong.aliyuncs.com/uploads/contacts/20180710/201807101559236533.jpg" alt="">'>
        <img v-imgpreview="{}" width="200"
             src="http://ici.oss-cn-hongkong.aliyuncs.com/uploads/contacts/20180710/201807101559236533.jpg" alt="">
      </baseComponent>
        <baseComponent title="data-id 指定图片" html='  <img width="200" class="img1" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531971847625&di=356b9af450289a56b357eac16644ee06&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4a36acaf2edda3ccd53548ea0be93901203f9223.jpg" alt="">
<ici-button type="primary" v-imgpreview="{}"  shape="rounded" data-id="img1">查看图片</ici-button>
<img width="200" class="img2" src="http://ici.oss-cn-hongkong.aliyuncs.com/uploads/contacts/20180724/201807241615347185.jpeg" alt="">
<ici-button type="primary" v-imgpreview="{}"  shape="rounded" data-id="img2">查看图片</ici-button>
<div style="color: #e96900">动作元素 data-id 属性对应img标签的class属性</div>'>
            <img width="200" class="img1" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531971847625&di=356b9af450289a56b357eac16644ee06&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4a36acaf2edda3ccd53548ea0be93901203f9223.jpg" alt="">
            <ici-button type="primary" v-imgpreview="{}"  shape="rounded" data-id="img1">查看图片</ici-button>
            <img width="200" class="img2" src="http://ici.oss-cn-hongkong.aliyuncs.com/uploads/contacts/20180724/201807241615347185.jpeg" alt="">
            <ici-button type="primary" v-imgpreview="{}"  shape="rounded" data-id="img2">查看图片</ici-button>
            <div style="color: #e96900">动作元素 data-id 属性对应img标签的class属性</div>
        </baseComponent>
      <baseComponent title="基本按钮" html='<div  v-bgpreview style="width:100px;height:100px;background:no-repeat center url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531971847625&di=356b9af450289a56b357eac16644ee06&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4a36acaf2edda3ccd53548ea0be93901203f9223.jpg);background-size:cover;"></div>'>
        <div  v-bgpreview style="width:100px;height:100px;background:no-repeat center url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531971847625&di=356b9af450289a56b357eac16644ee06&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4a36acaf2edda3ccd53548ea0be93901203f9223.jpg');background-size:cover;"></div>
      </baseComponent>
      <baseComponent title="基本按钮" html=' <div  v-bgpreview style="width:100px;height:30px;background:no-repeat center url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531971847625&di=356b9af450289a56b357eac16644ee06&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4a36acaf2edda3ccd53548ea0be93901203f9223.jpg);background-size:cover;"></div>'>
        <div  v-bgpreview style="width:100px;height:30px;background:no-repeat center url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531971847625&di=356b9af450289a56b357eac16644ee06&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4a36acaf2edda3ccd53548ea0be93901203f9223.jpg');background-size:cover;"></div>
      </baseComponent>
    </div>
</template>

<script>
	export default {
		name: 'page-image-preview',
		data() {
			return {
				loading:false,
                focus:false,
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
