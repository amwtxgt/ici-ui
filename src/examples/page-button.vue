<template>
  <div>
    <div class="title">button 按钮</div>
    <baseComponent title="基本按钮" html='<ici-button>你好啊</ici-button>'>
      <ici-button>你好啊</ici-button>
    </baseComponent>
    <baseComponent title="按钮主题类型 type"
                   html='<ici-button type="primary">你好啊</ici-button>
<ici-button type="info">你好啊</ici-button>
<ici-button type="warning">你好啊</ici-button>
<ici-button type="error">你好啊</ici-button>
<ici-button type="ici">你好啊</ici-button>'>

      <ici-button type="primary">你好啊</ici-button>
      <ici-button type="info">你好啊</ici-button>
      <ici-button type="warning">你好啊</ici-button>
      <ici-button type="error">你好啊</ici-button>
      <ici-button type="inverse">你好啊</ici-button>
    </baseComponent>

    <baseComponent title="按钮形状 shape"
                   html='<ici-button type="primary" shape="rounded">你好啊</ici-button>
<ici-button type="info" shape="pill">你好啊</ici-button>
<ici-button type="warning" shape="square">你好</ici-button>
<ici-button type="error" shape="box">你好</ici-button>
<ici-button type="ici" shape="circle">你好</ici-button>'>
      <ici-button  shape="rounded">你好啊</ici-button>
      <ici-button type="primary" shape="rounded">你好啊</ici-button>
      <ici-button type="info" shape="pill">你好啊</ici-button>
      <ici-button type="warning" shape="square">你好</ici-button>
      <ici-button type="error" shape="box">你好</ici-button>
      <ici-button type="inverse" shape="circle">你好</ici-button>
    </baseComponent>

    <baseComponent title="按钮大小 size"
                   html='<ici-button type="primary"  size="tiny">你好啊</ici-button>
<ici-button type="info"  size="small">你好啊</ici-button>
<ici-button type="warning" size="large">你好</ici-button>
<ici-button type="error" size="jumbo">你好</ici-button>
<ici-button type="ici" size="giant">你好</ici-button>'>
      <ici-button size="tiny">你好啊</ici-button>
      <ici-button type="primary" size="tiny">你好啊</ici-button>
      <ici-button type="info" size="small">你好啊</ici-button>
      <ici-button type="warning" size="large">你好</ici-button>
      <ici-button type="error" size="jumbo">你好</ici-button>
      <ici-button type="inverse" size="giant">你好</ici-button>
    </baseComponent>

    <baseComponent title="空心按钮 plain"
                   html='<ici-button type="primary"  plain>你好啊</ici-button>
<ici-button type="info"  plain>你好啊</ici-button>
<ici-button type="warning" plain>你好</ici-button>
<ici-button type="error" plain>你好</ici-button>
<ici-button type="ici" plain>你好</ici-button>'>
      <ici-button plain>你好啊</ici-button>
      <ici-button type="primary" plain>你好啊</ici-button>
      <ici-button type="info" plain>你好啊</ici-button>
      <ici-button type="warning" plain>你好</ici-button>
      <ici-button type="error" plain>你好</ici-button>
      <ici-button type="inverse" plain>你好</ici-button>

    </baseComponent>


    <baseComponent title="立体按钮 relievo"
                   html='<ici-button type="primary"  relievo>你好啊</ici-button>
<ici-button type="info"   relievo>你好啊</ici-button>
<ici-button type="warning" relievo>你好</ici-button>
<ici-button type="error" relievo>你好</ici-button>
<ici-button type="ici" relievo>你好</ici-button>'>
      <div>
        <ici-button relievo>你好啊</ici-button>
        <ici-button type="primary" relievo>你好啊</ici-button>
        <ici-button type="info" relievo>你好啊</ici-button>
        <ici-button type="warning" relievo>你好</ici-button>
        <ici-button type="error" relievo>你好</ici-button>
        <ici-button type="inverse" relievo>你好</ici-button>
      </div>
    </baseComponent>
    <baseComponent title="长按钮 long"
                   html='<ici-button type="primary"  relievo long>你好啊</ici-button>
<ici-button type="info"   relievo long>你好啊</ici-button>
<ici-button type="warning" relievo long>你好</ici-button>
<ici-button type="error" relievo long>你好</ici-button>
<ici-button type="ici" relievo long>你好</ici-button>'>
      <div>
        <ici-button type="primary" relievo long>你好啊</ici-button>
        <ici-button type="info" relievo long>你好啊</ici-button>
        <ici-button type="warning" relievo long>你好</ici-button>
        <ici-button type="error" relievo long>你好</ici-button>
        <ici-button type="inverse" relievo long>你好</ici-button>
      </div>
    </baseComponent>

    <baseComponent title="禁用按钮 disabled"
                   html='<ici-button type="primary"  relievo longshadow disabled>你好啊</ici-button>
<ici-button type="error" relievo long disabled>你好</ici-button>'>
      <div>
        <ici-button type="primary" relievo longshadow disabled>你好啊</ici-button>
        <ici-button type="error" relievo long disabled>你好</ici-button>

      </div>
    </baseComponent>

    <baseComponent title="获取焦点 focus"
                   html='<ici-button type="info" plain :focus="focus">你好啊</ici-button>
<ici-button @click="focus=true">点击后上面的获得焦点</ici-button>'>
      <div>
        <ici-button type="info" plain :focus="focus">你好啊</ici-button>
        <br>
        <ici-button @click="focus=true">点击后上面的获得焦点</ici-button>

      </div>
    </baseComponent>

    <baseComponent title="加载中按钮 loading"
                   html='<ici-button type="primary"  relievo longshadow loading>你好啊</ici-button>
<ici-button type="error" relievo long :loading="loading" @click="loading = true">点我加载</ici-button>'>
      <div>
        <ici-button type="primary" relievo longshadow loading>你好啊</ici-button>
        <ici-button type="error" relievo long :loading="loading" @click="loading = true">点我加载</ici-button>
      </div>
    </baseComponent>

    <baseComponent title="原生type属性 htmlType"
                   html='<ici-button type="primary"  html-type="submit">你好啊</ici-button>
<ici-button type="info" html-type="reset">你好啊</ici-button>
<ici-button type="error" html-type="button">你好啊</ici-button>'>
      <div>
        <ici-button type="primary" html-type="submit">你好啊</ici-button>
        <ici-button type="info" html-type="reset">你好啊</ici-button>
        <ici-button type="error" html-type="button">你好啊</ici-button>
        <ici-button type="inverse" html-type="button">你好啊</ici-button>
      </div>
    </baseComponent>

  </div>
</template>

<script>
  export default {
    name: 'page-button',
    data() {
      return {
        loading: false,
        focus: false,
      };
    },
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {},
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

</style>
