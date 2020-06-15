<template>
  <div class="bg-img" :style="style.body">
    <img v-if="url" @load="loaded" class="img-fit" :src="url" :style="style.img" :alt="alt">
    <div class="size tc-base" v-if="showSize">{{naturalWidth+'×'+naturalHeight}}</div>
    <div class="bg-img-inner">
      <slot></slot>
    </div>
    <div class="handle-img" v-if="$slots.handle" @click.stop="stop">
      <slot name="handle"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ici-bgimg",
    data() {
      return {
        naturalWidth: 0,
        naturalHeight: 0
      };
    },
    watch: {
      url() {
        this.naturalWidth = 0;
        this.naturalHeight = 0;
      },
    },
    props: {
      alt: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '100px'
      },
      height: {
        type: String,
        default: '',
      },
      url: {
        type: [String, Object],
      },
      showType: {
        type: String,
        default: 'cover'
      },
      bgColor: {
        type: String,
        default: ''
      },
      circle: Boolean,
      margin: String,
      showSize: Boolean, //显示大小
    },
    mounted() {

    },
    computed: {
      style() {
        let body = {
          width: this.width,
          height:this.height ? this.height : this.width
        }

        let img = {
          'object-fit':this.showType
        }


        if (this.bgColor) {
          body.backgroundColor = this.bgColor;
        }

        if (this.margin) {
          body.margin = this.margin;
        }

        if (this.circle) {
          body.borderRadius = '50%'
          img.borderRadius = '50%'
        }

        return {
          body,img
        };
      },
    },
    methods: {
      stop(e) {
      },
      loaded(e) {
        let img = e.target
        if (img) {
          this.naturalWidth = img.naturalWidth;
          this.naturalHeight = img.naturalHeight;
        }
      },
    },
    components: {}
  }
</script>
