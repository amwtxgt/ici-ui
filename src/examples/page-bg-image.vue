<template>
  <div>
    <div class="title">背景图 ici-bgimg</div>
    <baseComponent title="默认" html='<ici-bgimg />' >
      <p>默认是一个正方形</p>
      <ici-bgimg :url="null"/>
    </baseComponent>
    <baseComponent title="图片 url" html='<ici-bgimg url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg" />'>

      <ici-bgimg url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg"/>
    </baseComponent>
    <baseComponent title="显示类型 showtype" html='<ici-bgimg show-type="contain" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg" />
<ici-bgimg show-type="cover" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg" />'>
      <p>showType：cover | contain 默认cover</p>
      <ici-bgimg show-type="contain" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg"/>
      <ici-bgimg show-type="cover" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg"/>
    </baseComponent>
    <baseComponent title="显示宽高 width height" html='<p>只设置width时，高度跟宽长一样</p>
<ici-bgimg width="100px" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg" />
<ici-bgimg  width="150px" show-type="cover" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg" />
<p>同时设置宽高</p>
<ici-bgimg width="100px" height="150px" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg" />
<ici-bgimg  width="150px" height="50px" show-type="cover" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg" />'>
      <p>只设置width时，高度跟宽长一样</p>
      <ici-bgimg width="100px" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg"/>
      <ici-bgimg width="150px" show-type="cover" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg"/>
      <p>同时设置宽高</p>
      <ici-bgimg width="100px" height="150px" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg"/>
      <ici-bgimg width="150px" height="50px" show-type="cover"
                 url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg"/>
    </baseComponent>

    <baseComponent title="添加内容 slot" html='<ici-bgimg>
  <ici-icon name="icon-paizhao" size="30px" click-state></ici-icon>
</ici-bgimg>

<ici-bgimg url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg">
  <ici-icon name="icon-shouye" style=" text-shadow: 0 0 3px #000;" color="#fff" size="30px"></ici-icon>
</ici-bgimg>'>
      <ici-bgimg>
        <ici-icon name="icon-paizhao" size="30px" click-state></ici-icon>
      </ici-bgimg>
      <ici-bgimg url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg">
        <ici-icon name="icon-shouye" style=" text-shadow: 0 0 3px #000;" color="#fff" size="30px"></ici-icon>
      </ici-bgimg>
    </baseComponent>
    <baseComponent title="添加编辑 slot=hanld" html='<ici-bgimg url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg">
  <ici-icon slot="handle" size="14px" name="icon-shouye" click-state></ici-icon>
  <ici-icon slot="handle" size="14px" name="icon-delete" click-state></ici-icon>
</ici-bgimg>'>

      <ici-bgimg url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg">
        <ici-icon slot="handle" size="14px" name="icon-shouye" click-state></ici-icon>
        <ici-icon slot="handle" size="14px" name="icon-delete" click-state></ici-icon>
        <ici-icon slot="handle" size="14px" name="icon-delete" click-state></ici-icon>
        <ici-icon slot="handle" size="14px" name="icon-delete" click-state></ici-icon>

      </ici-bgimg>
    </baseComponent>
    <baseComponent title="设置底色 bg-color" html='<ici-bgimg show-type="contain" bg-color="green" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg" />
<ici-bgimg show-type="contain" bg-color="pink">
  <ici-icon name="icon-paizhao" size="30px" color="#fff" click-state></ici-icon>
</ici-bgimg>'>

      <ici-bgimg show-type="contain" bg-color="green" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg"/>
      <ici-bgimg show-type="contain" bg-color="pink">
        <ici-icon name="icon-paizhao" size="30px" color="#fff" click-state></ici-icon>
      </ici-bgimg>

    </baseComponent>
    <baseComponent title="图片预览" html='<ici-bgimg v-imgpreview show-type="contain" bg-color="green" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg"/>
<ici-bgimg v-imgpreview  bg-color="green" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg"/>'>
      <ici-bgimg v-imgpreview show-type="contain" bg-color="green" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg">
        <ici-icon slot="handle" size="14px" name="icon-delete" click-state></ici-icon>
      </ici-bgimg>
      <ici-bgimg v-imgpreview  bg-color="green" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg"/>
    </baseComponent>
    <baseComponent title="圆形circle" html='<ici-bgimg circle  url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg"/>'>

      <ici-bgimg circle  url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg"/>
    </baseComponent>
    <baseComponent title="自定义样式" html='<ici-bgimg  style="box-shadow: 1px 1px 5px #000" bg-color="green" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg"/>'>

      <ici-bgimg  style="box-shadow: 1px 1px 5px #000" bg-color="green" url="https://ici.oss-cn-hongkong.aliyuncs.com/uploads/user/20190710/201907102155025323.png-face.jpg"/>
    </baseComponent>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        showloading: true,
      };
    },
  };
</script>

<style scoped lang="less">
  .title {
    font-size: 30px;
    margin-bottom: 10px;
  }

  .icon-aaa {
    display: inline-block;
    text-align: center;
    width: 200px;
    padding: 5px;
    > span {
      display: block;
    }
  }
</style>
