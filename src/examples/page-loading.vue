<template>
    <div>
        <div class="title">loading 加载中</div>
        <baseComponent title="基本" html='<ici-loading></ici-loading>'>
            <ici-loading></ici-loading>
        </baseComponent>
      <baseComponent title="类型 type 默认4" html='<ici-loading type="1"></ici-loading>
<ici-loading type="2"></ici-loading>
<ici-loading type="3"></ici-loading>
<ici-loading :type="4"></ici-loading>
<ici-loading :type="5"></ici-loading>
<ici-loading :type="6"></ici-loading>'>
        <ici-loading type="1"></ici-loading>
        <ici-loading type="2"></ici-loading>
        <ici-loading type="3"></ici-loading>
        <ici-loading :type="4"></ici-loading>
        <ici-loading :type="5"></ici-loading>
        <ici-loading :type="6"></ici-loading>
      </baseComponent>

      <baseComponent title="颜色 color 默认#ff7306 " html=''>
        <ici-loading color="green"></ici-loading>
        <ici-loading color="blue"></ici-loading>
        <ici-loading color="pink"></ici-loading>
        <ici-loading color="gray"></ici-loading>
      </baseComponent>

        <baseComponent title="尺寸" html='<ici-loading size="mintiny"></ici-loading>
<ici-loading size="tiny"></ici-loading>
<ici-loading size="small"></ici-loading>
<ici-loading ></ici-loading>
<ici-loading size="big"></ici-loading>'>
            <ici-loading size="mintiny"></ici-loading>
            <ici-loading size="tiny"></ici-loading>
            <ici-loading size="small"></ici-loading>
            <ici-loading></ici-loading>
            <ici-loading size="big"></ici-loading>
        </baseComponent>

        <baseComponent title="白色" html=' <ici-loading  back-white></ici-loading>'>
            <div style="background:#999999;padding:10px;display: inline-block">
                <ici-loading back-white></ici-loading>
            </div>
        </baseComponent>

        <baseComponent title="禁止状态" html='<ici-loading disabled></ici-loading>'>
            <ici-loading disabled></ici-loading>
        </baseComponent>

        <baseComponent title="块级加载" html='<div style="position: relative;width:100%;height:100px;border:1px solid #eee;padding:10px;">
    <p>
        我是一行文字 我是一行文字 我是一行文字 我是一行文字 <br>
        我是一行文字 <br>
        我是一行文字 <br>
        我是一行文字 <br>
    </p>
    <ici-loading block v-show="showloading"></ici-loading>
</div>
<script>
    export default {
        data() {
            return {
                showloading:false,
            };
        },
    };
</script>'>
            <div style="position: relative;width:100%;height:100px;border:1px solid #eee;padding:10px;">
                <p>
                    我是一行文字 我是一行文字 我是一行文字 我是一行文字 <br>
                    我是一行文字 <br>
                    我是一行文字 <br>
                    我是一行文字 <br>
                </p>
                <ici-loading block v-show="showloading"></ici-loading>
            </div>
            <br>
            <ici-button :type="showloading?'error':'primary'" size="tiny" relievo longshadow @click="showloading=!showloading">
                {{showloading?'关闭加载':'显示加载'}}
            </ici-button>
        </baseComponent>

      <baseComponent title="块级加载 改变遮罩颜色 mask-color" html='<div style="position: relative;width:100%;height:100px;border:1px solid #eee;padding:10px;">
    <p>
        我是一行文字 我是一行文字 我是一行文字 我是一行文字 <br>
        我是一行文字 <br>
        我是一行文字 <br>
        我是一行文字 <br>
    </p>
     <ici-loading block v-show="showloading2" mask-color="rgba(0,0,0)" back-white></ici-loading>
</div>
<script>
    export default {
        data() {
            return {
                showloading:false,
            };
        },
    };
</script>'>
        <div style="position: relative;width:100%;height:100px;border:1px solid #eee;padding:10px;">
          <p>
            我是一行文字 我是一行文字 我是一行文字 我是一行文字 <br>
            我是一行文字 <br>
            我是一行文字 <br>
            我是一行文字 <br>
          </p>
          <ici-loading block v-show="showloading2" mask-color="rgba(0,0,0)" back-white></ici-loading>
        </div>
        <br>
        <ici-button :type="showloading2?'error':'primary'" size="tiny" relievo longshadow @click="showloading2=!showloading2">
          {{showloading2?'关闭加载':'显示加载'}}
        </ici-button>
      </baseComponent>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showloading:true,
                showloading2:true,
            };
        },
    };
</script>

<style scoped>
    .title {
        font-size: 30px;
        margin-bottom: 10px;
    }
</style>
