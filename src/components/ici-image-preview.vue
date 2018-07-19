<template>
  <div class="image-preview-wrap" id="ici-image-preview" v-show="show">
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

<style scoped lang="less">
  .image-preview-wrap {
    z-index: 99999;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    .image-mask {
      position: absolute;
      background: #000;
      width: 100%;
      height: 100%;
      opacity: 0;
      pointer-events: none;
      transition: opacity 333ms cubic-bezier(.4, 0, .22, 1);
      &.image-mask-show {
        opacity: 1;
        pointer-events: auto;
      }
    }
    .img-content {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .img-content-inner {
        pointer-events: auto;
        max-width: 95%;
        max-height: 95%;
        transition: all 333ms cubic-bezier(.4, 0, .22, 1);
        transform: translate3d(0px, 0px, 0px) scale(1,1);

      }
    }
  }
</style>
