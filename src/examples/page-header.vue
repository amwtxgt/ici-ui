<template>
  <div class="pageheader">
    <div class="title">header 导航头部</div>
    <baseComponent title="基本" html='<ici-header></ici-header>'>
      <ici-header v-show="index===0"></ici-header>
      <i-button @click="index=0">查看效果</i-button>
    </baseComponent>
    <baseComponent title="固定 fixed" html='<ici-header fixed></ici-header>'>
      <ici-header v-show="index===9" fixed></ici-header>
      <i-button @click="index=9">查看效果</i-button>
    </baseComponent>
    <baseComponent title="左边 slot=left" html='<ici-header>
  <div slot="left" style="color:#fc1e70;font-size:30px;font-weight:bold">LOGO</div>
</ici-header>'>
      <ici-header v-show="index===1">
        <div slot="left" style="color:#fc1e70;font-size:30px;font-weight:bold">LOGO</div>
      </ici-header>
      <i-button @click="index=1">查看效果</i-button>
    </baseComponent>


    <baseComponent title="内容 slot default" html='<ici-header>
  <div slot="left" style="color:#fc1e70;font-size:30px;font-weight:bold">LOGO</div>
  <ici-search label="Product name"></ici-search>
</ici-header>'>
      <ici-header v-show="index===2">
        <div slot="left" style="color:#fc1e70;font-size:30px;font-weight:bold">LOGO</div>
        <ici-search label="Product name"></ici-search>
      </ici-header>
      <i-button @click="index=2">查看效果</i-button>
    </baseComponent>


    <baseComponent title="右边 slot=right" html='<ici-header">
<svg slot="left" class="fms-content-script-svg" xmlns="http://www.w3.org/2000/svg" width="70" height="50"
     viewBox="0 0 171.62 64.15">
  <path fill="#5c5d5d"
        d="M151.16,296.85l-23.87.08v-9.12A6.72,6.72,0,0,1,134,281.1h17.62V268H134a19.84,19.84,0,0,0-19.82,19.82v44.3h13.1V310l23.87-.08Z"
        transform="translate(-114.19 -268)"/>
  <path fill="#5c5d5d"
        d="M268.72,294l-10-2c-5.88-1.21-6.56-4.1-6.56-6.17a5.38,5.38,0,0,1,2.36-4.73,11.85,11.85,0,0,1,7-1.92c5.37,0,8.95,2.19,10.9,6.69l11.52,0-.5-1.86c-2.83-10.54-10.33-15.89-22.28-15.89-6.2,0-11.23,1.79-15,5.31a17.75,17.75,0,0,0-5.7,13.4c0,4.83,1.43,8.79,4.26,11.77a20.71,20.71,0,0,0,11,5.83l10.81,2.29c6.61,1.36,7.38,4.5,7.38,6.74a6.25,6.25,0,0,1-2.69,5.5,12.45,12.45,0,0,1-7.44,2.17c-7.82,0-12.46-2.83-14.14-8.63l-11.67,0,.49,1.87c3.1,11.79,11.24,17.77,24.21,17.77,6.83,0,12.42-1.76,16.61-5.24a17.61,17.61,0,0,0,6.5-14.17C285.81,302.58,280.06,296.27,268.72,294Z"
        transform="translate(-114.19 -268)"/>
  <path fill="#5c5d5d"
        d="M217.76,268.12h-3.65l-17.34,27.44L179,268.12h-4.59a13.27,13.27,0,0,0-13.27,13.27v50.75h13.1V285.19l18,28.38h7.72l18-28.6v47.17H231V281.39A13.27,13.27,0,0,0,217.76,268.12Z"
        transform="translate(-114.19 -268)"/>
  <polygon fill="#bf1638" points="74 0.17 90.49 0.17 82.26 13.69 74 0.17"/>
</svg>
<ici-search label="Product name"></ici-search>
<ici-button slot="right" shape="circle" type="default">
  <ici-icon name="icon-ai238" size="20px"></ici-icon>
</ici-button>
<ici-button slot="right" type="ici" shape="circle">敏</ici-button>
</ici-header>'>
      <ici-header v-show="index===3">
        <svg slot="left" class="fms-content-script-svg" xmlns="http://www.w3.org/2000/svg" width="70" height="50"
             viewBox="0 0 171.62 64.15">
          <path fill="#5c5d5d"
                d="M151.16,296.85l-23.87.08v-9.12A6.72,6.72,0,0,1,134,281.1h17.62V268H134a19.84,19.84,0,0,0-19.82,19.82v44.3h13.1V310l23.87-.08Z"
                transform="translate(-114.19 -268)"/>
          <path fill="#5c5d5d"
                d="M268.72,294l-10-2c-5.88-1.21-6.56-4.1-6.56-6.17a5.38,5.38,0,0,1,2.36-4.73,11.85,11.85,0,0,1,7-1.92c5.37,0,8.95,2.19,10.9,6.69l11.52,0-.5-1.86c-2.83-10.54-10.33-15.89-22.28-15.89-6.2,0-11.23,1.79-15,5.31a17.75,17.75,0,0,0-5.7,13.4c0,4.83,1.43,8.79,4.26,11.77a20.71,20.71,0,0,0,11,5.83l10.81,2.29c6.61,1.36,7.38,4.5,7.38,6.74a6.25,6.25,0,0,1-2.69,5.5,12.45,12.45,0,0,1-7.44,2.17c-7.82,0-12.46-2.83-14.14-8.63l-11.67,0,.49,1.87c3.1,11.79,11.24,17.77,24.21,17.77,6.83,0,12.42-1.76,16.61-5.24a17.61,17.61,0,0,0,6.5-14.17C285.81,302.58,280.06,296.27,268.72,294Z"
                transform="translate(-114.19 -268)"/>
          <path fill="#5c5d5d"
                d="M217.76,268.12h-3.65l-17.34,27.44L179,268.12h-4.59a13.27,13.27,0,0,0-13.27,13.27v50.75h13.1V285.19l18,28.38h7.72l18-28.6v47.17H231V281.39A13.27,13.27,0,0,0,217.76,268.12Z"
                transform="translate(-114.19 -268)"/>
          <polygon fill="#bf1638" points="74 0.17 90.49 0.17 82.26 13.69 74 0.17"/>
        </svg>
        <ici-search label="Product name"></ici-search>
        <ici-button slot="right" shape="circle" type="default">
          <ici-icon name="icon-ai238" size="20px"></ici-icon>
        </ici-button>
        <ici-button slot="right" type="ici" shape="circle">敏</ici-button>
      </ici-header>
      <i-button @click="index=3">查看效果</i-button>
    </baseComponent>

    <baseComponent title="颜色 color" html='<ici-header v-show="index===4" :color="color" fixed>
    <ici-search label="Product name"></ici-search>
    <ici-button slot="right" shape="circle" type="default">
      <ici-icon name="icon-ai238" size="20px"></ici-icon>
    </ici-button>
    <ici-button slot="right" type="ici" shape="circle">敏</ici-button>
  </ici-header>
  <i-button @click="index=4;color="red";">红色</i-button>
<i-button @click="index=4;color="green";">绿色</i-button>
<i-button @click="index=4;color="blue";">蓝色</i-button>'>
      <ici-header v-show="index===4" :color="color" fixed>
        <ici-search label="Product name"></ici-search>
        <ici-button slot="right" shape="circle" type="default">
          <ici-icon name="icon-ai238" size="20px"></ici-icon>
        </ici-button>
        <ici-button slot="right" type="ici" shape="circle">敏</ici-button>
      </ici-header>
      <i-button @click="index=4;color='red';">红色</i-button>
      <i-button @click="index=4;color='green';">绿色</i-button>
      <i-button @click="index=4;color='blue';">蓝色</i-button>
    </baseComponent>
  </div>
</template>

<script>
  export default {
    name: 'page-button',
    data() {
      return {
        index: 0,
        color:''
      };
    },

  };
</script>

<style lang="less">
  .title {
    font-size: 30px;
    margin-bottom: 10px;
  }

  button {
    margin: 5px !important;
  }

  .pageheader {
    border:1px #eee solid;
    position: relative;

  }

</style>
