<template>
    <div>
        <div class="title">loading 加载中</div>
        <baseComponent title="基本" html='<ici-loading></ici-loading>'>
            <ici-button>
              asd
              <ici-poptip>
                <ici-button @click="abc">abc</ici-button>
              </ici-poptip>
            </ici-button>
          <div class="abc">
            sdfs
            <ici-poptip>
              <ici-button @click="abc">abc</ici-button>
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
</style>
