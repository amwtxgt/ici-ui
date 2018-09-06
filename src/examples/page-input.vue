<template>
  <div>
    <div class="title">input 单行输入</div>
    <baseComponent title="基本输入" html='<ici-input></ici-input>'>
      <ici-input :focus="true"></ici-input>
    </baseComponent>
    <baseComponent title="返白 white" html='<ici-input v-model="name"></ici-input>'>
      <div style="background:#000">
        <ici-input v-model="name" white></ici-input>
        <br>
      </div>
      <div>name 值：<b>{{name}}</b></div>
    </baseComponent>
    <baseComponent title="数据绑定 v-model" html='<ici-input v-model="name"></ici-input>'>
      <ici-input v-model="name3" :filter="/[^0-9 \.\+]+/"></ici-input>
      <br>
      <div>name 值：<b>{{name3}}</b></div>
    </baseComponent>

    <baseComponent title="必填" html='<ici-input required v-model="required"></ici-input>'>
      <ici-input required v-model="required"></ici-input>
    </baseComponent>
    <baseComponent title="带前缀 prefix" html='<p style="color:#999">无真实前缀值</p>
<ici-input :prefix="{content:"我是前缀"}" v-model="prefix2"></ici-input>
最终值：{\{prefix2}}
<p style="color:#999">有真实前缀值,value,真实值最终会添加在真实value前面</p>
<ici-input :prefix="{content:"我是前缀值显示值",value:"我是前缀真实值"}" v-model="prefix1"></ici-input>
最终值：{\{prefix1}}'>
      <p style="color:#999">无真实前缀值</p>
      <ici-input :prefix="{content:'我是前缀'}" v-model="prefix2"></ici-input>
      最终值：{{prefix2}}
      <br><br>
      <p style="color:#999">有真实前缀值,value,真实值最终会添加在真实value前面</p>
      <ici-input :prefix="pre" v-model="prefix1"></ici-input>
      最终值：{{prefix1}}
      <br><br>
    </baseComponent>
    <baseComponent title="带前缀 slot='prefix'" html='<ici-input required v-model="required"></ici-input>'>
      <ici-input required v-model="required">
        <div slot="prefix">
          <ici-icon name="icon-tianjia"></ici-icon>
        </div>
      </ici-input>
    </baseComponent>
    <baseComponent title="过滤 filter" html='<ici-input :filter="/abc/" v-model="filter"></ici-input>'>
      <p style="color:#999">例子中，会自动过滤abc,请尝试写入abc</p>
      <ici-input :filter="/abc/g" v-model="filter"></ici-input>
      <div>name 值：<b>{{filter}}</b></div>
    </baseComponent>
    <baseComponent title="带输入提示 label（需要数据绑定后有效）" html='<ici-input v-model="name4" label="这是提示输入信息"></ici-input>'>
      <ici-input v-model="name4" label="这是提示输入信息"></ici-input>
      <br>
      <div>name 值：<b>{{name4}}</b></div>
    </baseComponent>
    <baseComponent title="带输入提示 label 有value是隐藏 hidden-label"
                   html='<ici-input v-model="name5" label="这是提示输入信息" hidden-label></ici-input>'>
      <ici-input v-model="name5" label="这是提示输入信息" hidden-label></ici-input>
      <br>
      <div>name 值：<b>{{name5}}</b></div>
    </baseComponent>
    <baseComponent title="获取焦点 focus和失去焦点事件 @blur" html='<ici-input v-model="name" :focus="focus" @blur="focus=false" label="这是提示输入信息"></ici-input>
data() {
   return {
       focus: false,
     };
},'>
      <ici-input v-model="name2" :focus="focus" @blur="focus=false"></ici-input>
      <br>
      <ici-button type="ici" @click="getFocus">获取focus</ici-button>
    </baseComponent>
    <baseComponent title="密码框 password" html=' <ici-input password v-model="password" label="请输入密码"></ici-input>'>
      <ici-input password v-model="password" label="密码"></ici-input>
    </baseComponent>
    <baseComponent title="带提示 属性：hint slot：slot-scope 事件：@select" html='<ici-input :hint="[1,2,3]" v-model="password" label="密码" @select="select">
    <div slot="title">这是提示默认选中项 index为-1</div>
    <div slot-scope="list">\{\{list.item\}\}</div>
    <!--这里的list等于hint传入的值 ，list.item表示hint数组的某一项-->
</ici-input>'>
      <ici-input :hint="[1,2,'',3,'',5]" v-model="password" label="密码" @select="select">
        <div slot="title">这是提示默认选中项 index为-1</div>
        <div slot-scope="list">{{list}}{{list.item}}</div>
      </ici-input>
    </baseComponent>
    <baseComponent title="异步提示" html=''>
      <ici-input :hint="asyncValue" v-model="ass">
        <div slot="title">这是提示默认选中项 index为-1</div>
        <div slot-scope="list">{{list}}{{list.item}}</div>
      </ici-input>
      <br><br><br>
      <br><br><br>
      <br><br><br>

    </baseComponent>
    <div class="title">input组 ici-input-group</div>
    <baseComponent title="基本输入" html='<ici-input-group>
  <ici-icon slot="icon" name="icon-qq"></ici-icon>
  <ici-input label="asdasd"></ici-input>
  <ici-icon slot="handle" name="icon-qq"></ici-icon>
  <ici-icon slot="handle" name="icon-qq"></ici-icon>
</ici-input-group>'>
      <ici-input-group>
        <ici-icon slot="icon" name="icon-qq"></ici-icon>
        <ici-input label="asdasd"></ici-input>
        <ici-icon slot="handle" name="icon-qq"></ici-icon>
        <ici-icon slot="handle" name="icon-qq"></ici-icon>
      </ici-input-group>
    </baseComponent>
  </div>
</template>

<script>
  export default {
    name: 'page-input',
    data() {
      return {
        pre:{content:'我是前缀值显示值',value:'我是前缀真实值'},
        asyncValue: false,
        ass: '',
        name: 'asfasda',
        name2: '',
        name3: '',
        name4:'',
        name5:'',
        prefix1: '',
        filter: '',
        prefix2: '',
        password: '',
        required: 'aaa',
        focus: false,
        timeout: 0,
      };
    },
    watch: {
      ass() {
        clearTimeout(this.timeout)
        this.asyncValue = true;
        this.timeout = setTimeout(() => {
          this.asyncValue = [0, 4, 5, 8, 4]
        }, 3000)
      }
    },
    mounted() {

    },
    beforeDestroy() {
    },
    methods: {

      getFocus: function () {
        this.focus = true

      },
      select: function (val) {
        alert('你选择了第' + val + '条')
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

</style>
