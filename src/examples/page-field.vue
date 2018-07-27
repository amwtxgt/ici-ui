<template>
  <div>
    <div class="title">数据选择 ici-field</div>
    <baseComponent title="单选" html='  <ici-radio-field v-model="radio1" :values="["aaa","bbb","ccc"]"></ici-radio-field>'>
      <ici-radio-field v-model="radio1" :values="['1212','AASDF']"></ici-radio-field>
    </baseComponent>
    <baseComponent title="单选 可编辑" html='  <ici-radio-field v-model="radio1" editable :values="["aaa","bbb","ccc"]"></ici-radio-field>'>
      <ici-radio-field v-model="radio1" editable :values="['EBG','SDGESDF']"></ici-radio-field>
    </baseComponent>
    <baseComponent title="多选" html=' <ici-multiple-field :values="["aaa","bbb","ccc"]"  v-model="multiple" ></ici-multiple-field>'>
      <ici-multiple-field :values="['aaa','bbb','ccc']"  v-model="multiple" ></ici-multiple-field>
    </baseComponent>
    <baseComponent title="多选 可编辑" html=' <ici-multiple-field :values="["aaa","bbb","ccc"]" editable v-model="multiple" ></ici-multiple-field>'>
      <ici-multiple-field :values="['aaa','bbb','ccc']" editable v-model="multiple" ></ici-multiple-field>
    </baseComponent>
    <baseComponent title="多选 可编辑 可删除" html=' <ici-multiple-field :values="["aaa","bbb","ccc"]" editable remove  v-model="multiple" ></ici-multiple-field>'>
      <ici-multiple-field :values="[['aaa','bbb','ccc'],['aaaa']]" editable remove v-model="multiple" ></ici-multiple-field>
    </baseComponent>
    <baseComponent title="单选 值映射 （值映射时，编辑删除无效）" html='<ici-radio-field v-model="radio1" :values="[{content:"我是一",value:1},{content:"我是二",value:"sdfs"},{content:"我是三",value:3}]"></ici-radio-field>'>
      <ici-radio-field v-model="radio1" :values="[{content:'我是一',value:1},{content:'我是二',value:'sdfs'},{content:'我是三',value:3}]"></ici-radio-field>
    </baseComponent>
    <baseComponent title="多选 值映射 （值映射时，编辑删除无效）" html=' <ici-multiple-field v-model="multiple" :values="[{content:"我是一",value:1},{content:"我是二",value:"sdfs"},{content:"我是三",value:3}]"></ici-multiple-field>'>
      <ici-multiple-field v-model="multiple" :values="[{content:'我是一',value:1},{content:'我是二',value:'sdfs'},{content:'我是三',value:3}]"></ici-multiple-field>
    </baseComponent>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio1:'aaa',
        multiple:['aaa','bbb']
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
