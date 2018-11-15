<template>
    <div class="ici-poptip">
        sadfsdaf
    </div>
</template>

<script>
    export default {
        components: {},
        name: "ici-poptip",
        data() {
            return {
              id: 'ici-poptip-' + Math.random(),
            };
        },
        methods: {
          _append() {

            if (!window.document.getElementById(this.id)) {

              if (this.$el) {
                window.document.body.appendChild(this.$el);
              }
              else {
                var menu = window.document.createElement('div');
                window.document.body.appendChild(menu);
                this.$mount(menu); //绑定
              }
            }
          },
        },
    }
</script>

<style scoped>

</style>
