<template>
  <div>
    <div class="title">input 单行输入</div>
    <baseComponent title="基本输入" html='<ici-input></ici-input>'>
      <ici-input @change="abc" :focus="true" border-class="border-aaa"></ici-input>
    </baseComponent>
    <baseComponent title="数据绑定 v-model" html='<ici-input v-model="name"></ici-input>'>
      <ici-input v-model="name3" ></ici-input>
      <br>
      <div>name 值：<b>{{name3}}</b></div>
    </baseComponent>
    <baseComponent title="添加筛选条件 filter = RegExp|String|Function" html='<ici-input v-model="name3" filter="abc"  label="过滤字符串 abc,当输入abc时自动过滤掉"></ici-input>
<ici-input v-model="name31" :filter="/[^0-9]+/" label="过滤非数字内容"></ici-input>
<ici-input v-model="name32" :filter="function(v){return v.replace(/[^0-9]/g,"").replace("abc","")}" label="函数过滤法"></ici-input>'>

      <ici-input v-model="name3" filter="abc"  label="过滤字符串 abc,当输入abc时自动过滤掉"></ici-input>
      <br>
      <ici-input v-model="name31" :filter="/[^0-9]+/" label="过滤非数字内容"></ici-input>
      <br>
      <ici-input v-model="name32" :filter="function(v){return v.replace(/[^0-9]/g,'').replace('abc','')}" label="函数过滤法"></ici-input>

    </baseComponent>

    <baseComponent title="带前缀 slot='prefix'" html='<ici-input required v-model="required">
  <div slot="prefix">
    <ici-icon name="icon-tianjia"></ici-icon>
  </div>
</ici-input>'>
      <ici-input required v-model="required">
        <div slot="prefix">
          <ici-icon name="icon-tianjia" size="20px"></ici-icon>NB
        </div>
      </ici-input>
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
      <ici-input hint-class="abc" :hint="[1,2,'',3,'',5,'as',1,2,'',3,'',5,'as',1,2,'',3,'',5,'as',1,2,'',3,'',5,'as']" v-model="password" label="密码" @select="select">
        <div slot="title">这是提示默认选中项 index为-1</div>
        <div slot-scope="list">{{list}}{{list.item}}</div>
      </ici-input>
    </baseComponent>
    <baseComponent title="异步提示" html=''>
      <ici-input :hint="asyncValue" v-model="ass" hintFocusShow>
        <div slot="title">
          这是提示默认选中项 index为-1
          <br>
          <ici-input></ici-input>
        </div>
        <div slot-scope="list">{{list}}{{list.item}}</div>
      </ici-input>
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
      <ici-input-group  height="auto" overflow="unset">
        <ici-icon slot="icon" name="icon-qq"></ici-icon>
        <ici-input label="asdasd"></ici-input>

      </ici-input-group>
      <ici-input-group>
        <ici-icon slot="icon" name="icon-qq"></ici-icon>
        <ici-input label="asdasd" hidden-label></ici-input>
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
        name31: '',
        name32: '',
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
      abc(e){
        console.log(e)
      },
      getFocus: function () {
        this.focus = true

      },
      select: function (val) {
        alert('你选择了第' + val + '条')
      }
    },
  };
</script>
<style>
  .border-aaa{
    border-color: #2db7f5!important;
  }
</style>
<style lang="less" scoped>
  .title {
    font-size: 30px;
    margin-bottom: 10px;
  }

  button {
    margin: 5px !important;
  }

</style>
