<template>
  <div class="scroll-loading-wrap">
    <div class="scroll-loading-icon loading-top" :class="{toploading:loading && hasTop}">
      <ici-loading class="scroll-loading-inner" size="small">
        <span class="loading-Text" v-if="topText">{{topText}}</span>
      </ici-loading>

    </div>
    <div ref="scrollLoading" class="scroll-loading" @scroll.passive="onScroll" :style="{overflowY:overflow}"
         @mousewheel.passive="mousewheel" @DOMMouseScroll.passive="mousewheel" v-observe="_self">
      <slot></slot>
    </div>
    <div class="scroll-loading-icon loading-bottom" :class="{toploading:loading && hasBottom}">
      <ici-loading class="scroll-loading-inner" size="small">
        <span class="loading-Text" v-if="bottomText">{{bottomText}}</span>
      </ici-loading>

    </div>
  </div>
</template>

<script>
  export default {
    name: "scroll-loading",
    data() {
      return {
        scrollHeight: 0, //滚动区域总高度
        scrollTop: 1, //滚动距离上面的位置
        direction: 'bottom', //top ,bottom
        height: 0, //窗体高度
        hasTop: false,//是否触顶，
        hasBottom: false,//是否触底
        loading: false, //正在加载中
      };
    },
    props: {
      disabled: Boolean,
      onReachTop: Function, //触发顶部
      onReachBottom: Function, //触发底部
      bottomText: String,
      topText: String,
      offset: { //距离顶/底部指定距离时触发，当为数组时，分别指定[顶部,底部]
        type: [Number, Array],
        default: 50,
      },

      overflow: {
        type: String,
        default: 'auto'
      }
    },
    directives: {
      observe: {
        // 指令的定义
        inserted: function (el, binding) {
          var _this = binding.value;

          //浏览器兼容
          var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

          var config = {childList: true, 'subtree': true}//配置对象

          var observer = new MutationObserver(function (mutations) {//构造函数回调
            var top = 0
            if(_this.scrollTop == 0 && _this.direction == 'top') {
              mutations.forEach(function (record) {

                if(record.type == 'childList') {
                  //监听结构发生变化
                  if(record.addedNodes && record.addedNodes.length) {
                    record.addedNodes.forEach(v => {
                      if(v.clientHeight) {
                        top += v.clientHeight
                      }
                    })
                  }
                  //do any code`
                }
              });

              top = top + 100
              el.scrollTop += top;
            }
          });
          observer.observe(el, config);
        }
      }
    },
    created() {
      if(this.onReachTop) {
        this.hasTop = true;
        this.scrollTop = 0;
      }
      console.log(this)
    },
    methods: {
      rollTop() {
        this.$refs['scrollLoading'].scrollTop = 0
        this.scrollTop = 0;
      },
      rollBottom() {
        this.$refs['scrollLoading'].scrollTop = 5000000;
      },

      //手动触发向上
      reachTop() {
        this.startLoad('top')
      },

      //手动触发向下
      reachBottom() {
        this.startLoad('bottom')
      },

      mousewheel(e) {

        if(e.deltaY < 0) {
          this.onScroll('top')
        }
        else {
          this.onScroll('bottom')
        }

        if(this.loading || this.disabled || (!this.hasTop && !this.hasBottom)) return;

        if(e.deltaY < 0) {

          if(this.hasTop) {

            this.startLoad('top');
          }
        }
        else {

          if(this.hasBottom) {
            this.startLoad('bottom');
          }
        }
      },
      //顶部加载
      startLoad(type) {
        this.direction = type;
        let reachFun;

        if(type == 'top') {
          this.hasTop = true;
          this.hasBottom = false;
          reachFun = this.onReachTop;
        }
        else {
          this.hasTop = false;
          this.hasBottom = true;
          reachFun = this.onReachBottom;
        }

        if(reachFun) {
          this.loading = true
          reachFun(() => {
            this.loading = false;
            this.hasTop = false;
            this.hasBottom = false;
          });
        }
        else {
          this.loading = false;
          this.hasTop = false;
          this.hasBottom = false;
        }


      },
      onScroll(direction) {

        if(this.loading) {
          return false;
        }

        let t = this.$refs.scrollLoading;

        if(!t) {
          return;
        }

        var tStyle = window.getComputedStyle(t)

        this.scrollHeight = t.scrollHeight
        this.height = parseInt(tStyle.height);
        this.scrollTop = t.scrollTop;
        let offsetTop, offsetBottom
        if(this.offset instanceof Array && this.offset.length >= 2) {
          offsetTop = ~~this.offset[0];
          offsetBottom = ~~this.offset[1];
        }
        else {
          offsetTop = ~~this.offset;
          offsetBottom = ~~this.offset;
        }
        if(direction === 'top') {

          if(this.scrollTop <= offsetTop) {
            this.hasTop = true
            this.hasBottom = false;
            return
          }
        }
        else {

          if(this.scrollHeight <= this.height + this.scrollTop + offsetBottom) {
            this.hasTop = false
            this.hasBottom = true
            return
          }
        }
        this.hasTop = false
        this.hasBottom = false;
      },
    },
  }
</script>

<style scoped lang="less">
  .scroll-loading-wrap {
    position: relative;
    height: 100%;
    overflow:hidden;
    display: flex;
    flex-direction: column;
  }

  .scroll-loading {
    height: 100%;
    overflow-x: hidden;
    position: relative;
    &::-webkit-scrollbar {
      width: 6px;
      height: 10px;
    }

    &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-thumb {
      background-color: #888;
    }

    &::-webkit-scrollbar-track, &::-webkit-scrollbar-track {
      background-color: #f0f0f0;
    }
  }

  .scroll-loading-icon {
    z-index: 50;
    width: 100%;
    position: absolute;
    text-align: center;
    transform: scale(.2) translate(0, 0px);
    transition: all .3s .2s;
    opacity: 0;
    pointer-events: none;
    &.loading-top {
      top: 0px;

      &.toploading {
        transition: all .5s;
        opacity: 1;
        transform: scale(1) translate(0, 20px);
      }
    }

    &.loading-bottom {
      bottom: 0px;

      &.toploading {
        transition: all .5s ease-in;
        opacity: 1;
        transform: scale(1) translate(0, -20px);
      }
    }

    .scroll-loading-inner {
      border-radius: 40px;
      padding: 4px;
      background: rgba(255, 255, 255, .9);
      box-shadow: 1px 1px 5px 0 rgba(50, 50, 50, .3);
    }

    .loading-Text {
      vertical-align: middle;
      padding: 0 7px 0 0px;
    }
  }


</style>
