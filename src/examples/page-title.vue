<template>
    <div>
      <p v-title="'dasfeawefawefawerf'">asdfawefawerf</p>
      <div v-title="'aaaaaaaaaaaadasfeawefawefaweasdasdsarfaaaaaaaaaa aadasfeawefawefaweasdasdsarfaaaaa aaaaaaadasfeawefawefaweasdasdsarfaaaaaaaaaaaadasfeawefawefaweasdasdsarfaaaaaaaaaaaadasfeawefawefaweasdasdsarf'">asdfawefawerf</div>
      <ici-button v-title="'aaaaaaaaaaaadasfeawefawefaweasdasdsarfaaaaaaaaaaa'">sdfasdf</ici-button>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <p v-title="'dasfeawefawefawerf'">asdfawefawerf</p>
      <div v-title="'aaaaaaaaaaaadasfeawefawefaweasdasdsarfaaaaaaaaaaaadasfeawefawefaweasdasdsarfaaaaaaaaaa aadasfeawefawefaweasdasdsarfaaaaa aaaaaaadasfeawefawef'">asdfawefawerf</div>
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
