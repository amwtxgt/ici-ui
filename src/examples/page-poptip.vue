<template>
  <div>
    <br>
    <div class="title">poptip 提示框</div>

    <baseComponent title="基本" html='<ici-poptip :layer="3" z-index="999999">
  asdfasfdawwaef
  asdfasfdawwaef
  asdfasfdawwaef
</ici-poptip>'>
      <ici-button>
        鼠标移到我这
        <ici-poptip :layer="3" z-index="999999">
          asdfasfdawwaef
          asdfasfdawwaef
          asdfasfdawwaef
        </ici-poptip>
      </ici-button>

    </baseComponent>

    <baseComponent title="移出不关闭" html='<ici-button>
    鼠标移到我这
    <ici-poptip :layer="3" z-index="999999" :mouseout-close="false" ref="abcde">
      asdfasfdawwaef
    </ici-poptip>
  </ici-button>
  <ici-button @mouseover.native="$icitip.close()">移到这里才关闭</ici-button>
</baseComponent>'>
      <ici-button>
        鼠标移到我这
        <ici-poptip :layer="3" z-index="999999" :mouseout-close="false" ref="abcde">
          asdfasfdawwaef
        </ici-poptip>
      </ici-button>
      <ici-button @mouseover.native="$icitip.close()">移到这里才关闭</ici-button>
    </baseComponent>

    <baseComponent title="单击弹窗" html=' <ici-button>
  鼠标单击我
  <ici-poptip z-index="999999" trigger="click">
    asdfasfdawwaef
    asdfasfdawwaef
    asdfasfdawwaef
  </ici-poptip>
</ici-button>'>
      <ici-button>
        鼠标单击我
        <ici-poptip z-index="999999" trigger="click">
          asdfasfdawwaef
          asdfasfdawwaef
          asdfasfdawwaef
        </ici-poptip>
      </ici-button>

    </baseComponent>

    <baseComponent title="自定义控制弹窗" html='<ici-button>
  <ici-poptip z-index="999999" trigger="custom" ref="abc">
    自定义乌
    asdfasfdawwaef
    asdfasfdawwaef
    asdfasfdawwaef
  </ici-poptip>
</ici-button>
<ici-button  @click="$refs.abc.open()">打开弹窗</ici-button>
<ici-button @click="$refs.abc.close()">关闭弹窗</ici-button>'>
      <ici-button>
        <ici-poptip z-index="999999" trigger="custom" ref="abc">
          自定义乌
          asdfasfdawwaef
          asdfasfdawwaef
          asdfasfdawwaef
        </ici-poptip>
      </ici-button>
      <ici-button  @click="$refs.abc.open()">打开弹窗</ici-button>
      <ici-button @click="$refs.abc.close()">关闭弹窗</ici-button>
    </baseComponent>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        aaa: '123456789',
        open:false,
      };
    },
    methods: {
      abc() {
        this.$icimsg.msg(this.aaa)
      },
      opens(val){
        console.log('asdfwe');
        this.open = val
      },
    }
  };
</script>

<style scoped>
  .title {
    font-size: 30px;
    margin-bottom: 10px;
  }

  .abc {
    position: relative;
  }
</style>
