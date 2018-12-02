<template>
    <div>
      <p v-title="'asdffsadf'">asdfawefawerf</p>
      <div>asdfawefawerf</div>
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
