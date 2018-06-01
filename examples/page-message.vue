<template>
    <div>
        <div class="title">message 消息</div>
        <baseComponent title="基本消息 $icimsg.msg" html='<ici-button @click="$icimsg.msg("我是基本消息")">打开消息</ici-button>'>
            <ici-button @click="$icimsg.msg('我是基本消息')">打开消息</ici-button>
        </baseComponent>
        <baseComponent title="加载中 $icimsg.loading" html='<p>基本，不是自动关闭</p>
    <ici-button @click="$icimsg.loading("我在加载中")">打开加载</ici-button>
<p>添加超时时间，超时后关闭</p>
<ici-button @click="$icimsg.loading("我在加载中",5000)">打开加载 5秒后自动关闭</ici-button>
<p>手动关闭加载</p>
<ici-button @click="$icimsg.close()">关闭加载</ici-button>'>
            <p>基本，不会自动关闭</p>
            <ici-button @click="$icimsg.loading('我在加载中')">打开加载</ici-button>
            <p>添加超时时间，超时后关闭</p>
            <ici-button @click="$icimsg.loading('我在加载中',5000)">打开加载 5秒后自动关闭</ici-button>
            <p>手动关闭加载</p>
            <ici-button @click="$icimsg.close()">关闭加载</ici-button>
        </baseComponent>

        <baseComponent title="成功 $icimsg.success" html='<p>基本，默认两秒后关闭</p>
    <ici-button @click="$icimsg.success("我成功了")">打开消息</ici-button>
<p>自定义关闭时间</p>
<ici-button @click="$icimsg.success("我成功了",5000)">5秒后关闭</ici-button>'>
            <p>基本，默认两秒后关闭</p>
            <ici-button @click="$icimsg.success('我成功了')">打开消息</ici-button>
            <p>自定义关闭时间</p>
            <ici-button @click="$icimsg.success('我成功了',5000)">5秒后关闭</ici-button>
        </baseComponent>

        <baseComponent title="失败 $icimsg.error" html='<p>基本，默认两秒后关闭</p>
    <ici-button @click="$icimsg.error("我失败了")">打开消息</ici-button>
<p>自定义关闭时间</p>
<ici-button @click="$icimsg.error("我失败了",5000)">5秒后关闭</ici-button>'>
            <p>基本，默认两秒后关闭</p>
            <ici-button @click="$icimsg.error('我失败了')">打开消息</ici-button>
            <p>自定义关闭时间</p>
            <ici-button @click="$icimsg.error('我失败了',5000)">5秒后关闭</ici-button>
        </baseComponent>

        <baseComponent title="位置 默认为下边" html=''>

            <ici-button  @click="$icimsg.msg('我是上边',5000,'top')">上边</ici-button>
            <ici-button  @click="$icimsg.msg('我是中边',5000,'center')">中边</ici-button>
            <ici-button  @click="$icimsg.msg('我是下边',5000)">下边</ici-button>
        </baseComponent>

    </div>
</template>

<script>

    export default {
        name: 'page-popup',
        data() {
            return {
                popup1: false,
                popup2: false,
            };
        },
        mounted() {
        },
        beforeDestroy() {
        },
        methods: {
            abc(){
                console.log('sdfsdf');

                this.$refs['message'].msg('sdfgfsdfsd')
            }
        },
    };
</script>

<style lang="less" scoped>
    .title {
        font-size: 30px;
        margin-bottom: 10px;
    }

    button {
        margin: 5px !important;
    }
    p{
        font-size:14px;
        color:#666;
        margin-top:10px;
        border-left:2px solid #ccc;
        padding-left:5px;
    }
</style>
