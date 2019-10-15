<template>
  <div ref="tooltip" :id="id" :class="['ici-tooltip',{show:show}]" v-html="content"></div>
</template>

<script>
  export default {
    components: {},
    name: "ici-tooltip",
    data() {
      return {
        id: 'ici-tooltip-' + Math.random(),
        show: false,
        offset:23,
        content: ''
      };
    },
    methods: {
      open(obj) {
        this._append();
        this.content = obj.content;
        this.show = true;
        let el = this.$refs.tooltip;
        el.style.cssText = '';
        this.$nextTick(() => {

          //浏览器大小
          let innerWidth = window.innerWidth,
            innerHeight = window.innerHeight;

          //浮窗大小
          var width = el.offsetWidth;
          var height = el.offsetHeight;

          let cssText = '', top = '', left = ''

          if (obj.x+(width-width/3) > innerWidth) {
            left = innerWidth - width-10;
          }
          else if(obj.x-width/3<0) {
            left = 10
          }else{
            left = obj.x-width/3
          }
          if (height + obj.y + this.offset > innerHeight) {
            top = obj.y - height - this.offset
          }
          else {
            top = obj.y + this.offset
          }

          cssText += `top:${top}px;`
          cssText += `left:${left}px`;

          el.style.cssText = cssText;
        })
      },
      close() {
        this.show = false
      },
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
