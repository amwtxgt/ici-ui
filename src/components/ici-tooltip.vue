<template>
    <div class="ici-tooltip">{{content}}</div>
</template>

<script>
    export default {
        components: {},
        name: "ici-tooltip",
        data() {
            return {
              content:''
            };
        },
        methods: {},
    }
</script>

<style scoped>
  .ici-tooltip{
    pointer-events: none;
    position: fixed;
    padding:2px 5px;
    background:#000;
    color:#fff;
    border-radius: 2px;
  }
</style>
