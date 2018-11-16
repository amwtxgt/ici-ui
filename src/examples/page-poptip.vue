<template>
    <div>
      <div class="abc" style="border:1px solid #ddd;width:50px;height:50px;position: absolute;right:400px">
        <ici-poptip>
          <ici-bgimg url="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4277559698,2554476952&fm=173&app=49&f=JPEG?w=218&h=146&s=F664D44EC8E02D36FB4E8DA80300E019"></ici-bgimg>
          <ici-bgimg url="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4277559698,2554476952&fm=173&app=49&f=JPEG?w=218&h=146&s=F664D44EC8E02D36FB4E8DA80300E019"></ici-bgimg>
          <ici-bgimg url="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4277559698,2554476952&fm=173&app=49&f=JPEG?w=218&h=146&s=F664D44EC8E02D36FB4E8DA80300E019"></ici-bgimg>
          <ici-bgimg url="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4277559698,2554476952&fm=173&app=49&f=JPEG?w=218&h=146&s=F664D44EC8E02D36FB4E8DA80300E019"></ici-bgimg>
        </ici-poptip>
      </div>
        <div class="title">loading 加载中</div>
        <br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br>


        <baseComponent title="基本" html='<ici-loading></ici-loading>'>
            <ici-button>
              asd
              <ici-poptip :layer="3">
                <ici-button @click="abc">abc</ici-button>
                asdfasfdawwaef
                <br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br>
                asdfasfdawwaef
                asdfasfdawwaef
              </ici-poptip>
            </ici-button>
          <div class="abc">
            sdfs
            <ici-poptip>
              <ici-button @click="abc">azfasfa</ici-button>
            </ici-poptip>
          </div>
          <div class="abc" style="border:1px solid #ddd;width:50px;height:50px;transform: translate3d(50px,50px,0)">
            <ici-poptip>
              <ici-bgimg url="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4277559698,2554476952&fm=173&app=49&f=JPEG?w=218&h=146&s=F664D44EC8E02D36FB4E8DA80300E019"></ici-bgimg>
            </ici-poptip>
          </div>

        </baseComponent>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               aaa:'123456789'
            };
        },
      methods:{
          abc(){
            this.$icimsg.msg(this.aaa)
          },
      }
    };
</script>

<style scoped>
    .title {
        font-size: 30px;
        margin-bottom: 10px;
    }
  .abc{
    position: relative;
  }
</style>
