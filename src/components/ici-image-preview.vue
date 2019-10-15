<template>
  <div class="ici-preview-wrap" id="ici-image-preview" v-show="show">
    <div class="image-mask" @click="closePic" :class="{'image-mask-show':showInner}"></div>
    <div class="img-content">
      <img class="img-content-inner" @click.stop.prevent="closePic" :style="[imgStyle,big]" :src="thumb_pic" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "ici-image-preview",
    data() {
      return {
        show: false,
        showInner:false,
        thumb_pic: '',
        pic: '',
        imgStyle:{},
        thumb:{},
        big:{
          width:0,
          height:0,
        }
      };
    },
    watch:{
      show(val){
        if(val){
          this.imgStyle = this.thumb
          setTimeout(()=>{
            this.showInner = val
            this.imgStyle = {}
          },50)
        }else{
          this.showInner = val
        }
      },
    },
    mounted() {
      window.document.addEventListener('DOMContentLoaded', this._append);
    },
    beforeDestroy(){
      window.document.removeEventListener('DOMContentLoaded', this._append);
    },
    methods: {
      _append() {
        if (!window.document.getElementById('ici-image-preview')) {
          if (this.$el) {
            window.document.body.appendChild(this.$el);
          }
          else {
            var message = window.document.createElement('div');
            message.setAttribute('id', 'ici-image-preview');
            message.setAttribute('class', 'ici-image-preview')
            window.document.body.appendChild(message);
            this.$mount(message);
          }

        }
      },
      showPic(obj) {
        this._append()

        this.thumb_pic = obj.thumb_pic;
        this.pic = obj.pic;
        this.thumb = obj.thumb;
        this.big = obj.big;
        this.$nextTick(() => {
          this.show = true;
        })
      },

      closePic() {
        this.showInner = false;
        this.imgStyle = this.thumb
        setTimeout(()=>{
          this.show = false;
        },333)

      },
    },
    components: {}
  }
</script>
