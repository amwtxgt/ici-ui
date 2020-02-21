<template>
  <div>
    <div class="title">search 搜索框</div>
    <baseComponent title="基本" html='<ici-search v-model="search" label="asdfasdfsadf"></ici-search>
<p>值：{ {search}}</p>'>
      <ici-search v-model="search" label="asdfasdfsadf"></ici-search>
      <p>值：{{search}}</p>
    </baseComponent>
    <baseComponent title="label" html='<ici-search v-model="search1" label="我是搜索提示" />
<p>值：{ {search1}}</p>'>
      <ici-search v-model="search1" label="我是搜索提示"/>
      <p>值：{{search1}}</p>
    </baseComponent>
    <baseComponent title="输入提示 hint" html='
<ici-search v-model="search1" @select="select"  label="我是搜索提示" :hint="[1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6]" >
    <div slot="title">哈哈哈</div>
    <div slot-scope="list">
        { {list.item}}
    </div>
</ici-search>'>
      <ici-search v-model="search1" @select="select" label="我是搜索提示"
                  :hint="[1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6]">
        <div slot="title">哈哈哈</div>
        <div slot-scope="list">
          {{list.item}}
        </div>
      </ici-search>
      <p>值：{{search1}}</p>
    </baseComponent>

    <baseComponent title="获得焦点" html='<ici-search ref="sear" v-model="search1" label="我是搜索提示"/>
<ici-button @click="$refs.sear.toFocus()">获取焦点</ici-button>'>
      <ici-search ref="sear" v-model="search1" label="我是搜索提示"/>
      <ici-button @click="$refs.sear.toFocus()">获取焦点</ici-button>
    </baseComponent>

    <baseComponent title="获得焦点的时候全选" html='<ici-search ref="sear" v-model="search1" label="我是搜索提示"/>
<ici-button @click="$refs.sear.toFocus()">获取焦点</ici-button>'>
      <ici-search ref="sear2" v-model="search1" focus-select-all label="我是搜索提示"/>
      <ici-button @click="$refs.sear2.toFocus()">获取焦点</ici-button>
    </baseComponent>


  <baseComponent title="右侧增加内容" html='<ici-search v-model="search1" focus-select-all label="我是搜索提示">
  <div class="flex-none" slot="right">哈哈哈哈</div>
</ici-search>'>
    <ici-search v-model="search1" focus-select-all label="我是搜索提示">
      <div class="flex-none" slot="right">哈哈哈哈</div>
    </ici-search>
  </baseComponent>

    <baseComponent title="外部右侧增加内容" html='<ici-search v-model="search1" @select="select" label="我是搜索提示"
            :hint="[1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6]">
  <div slot="title">哈哈哈</div>
  <div slot-scope="list">
    {\{list.item}}
  </div>
  <div slot="wrap-right" class="flex-none">
     我在外部
  </div>
</ici-search>'>
      <ici-search v-model="search1" @select="select" label="我是搜索提示"
                  :hint="[1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6]">
        <div slot="title">哈哈哈</div>
        <div slot-scope="list">
          {{list.item}}
        </div>
        <div slot="wrap-right" class="flex-none">
           我在外部
        </div>
      </ici-search>
      <p>值：{{search1}}</p>
    </baseComponent>
  </div>
</template>

<script>
  export default {
    name: 'page-button',
    data() {
      return {
        search: '',
        search1: '',
      };
    },
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {

      select(index) {
        console.log('你选中了第：' + index)
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
