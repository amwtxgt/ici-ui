<template>
  <div ref="scrollLoading" v-observe="_self" class="scroll-loading" @scroll.passive="onScroll"
       @mousewheel="mousewheel" @DOMMouseScroll="mousewheel">
    <div class="scroll-loading-icon" :class="{toploading:loading && hasTop}">
      <ici-loading size="small" disabled></ici-loading>
    </div>
    <slot></slot>
    <div class="scroll-loading-icon" :class="{toploading:loading && hasBottom}">
      <ici-loading size="small" disabled></ici-loading>
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
        height: 0, //限度高度
        hasTop: false,//是否触顶，
        hasBottom: false,//是否触底
        loading: false, //正在加载中
      };
    },
    props: {
      disabled: Boolean,
      onReachTop: Function, //触发顶部
      onReachBottom: Function, //触发底部
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
            mutations.forEach(function (record) {

              if (record.type == 'childList') {
                //监听结构发生变化
                if (record.addedNodes && record.addedNodes.length) {
                  record.addedNodes.forEach(v => {
                    if(v.clientHeight){
                      top += v.clientHeight
                    }
                  })
                }
                //do any code
              }

            });

            if (_this.scrollTop == 0) {
              top = top+100
              el.scrollTop += top;
            }

          });
          observer.observe(el, config);
        }
      }
    },
    created(){
      if(this.onReachTop){
        this.hasTop = true;
        this.scrollTop = 0;
      }
    },
    methods: {
      rollTop(){
        this.$refs['scrollLoading'].scrollTop=0
        this.scrollTop = 0;
      },
      rollBottom(){
        this.$refs['scrollLoading'].scrollTop = 5000000
      },
      mousewheel(e) {
        var t = this.$refs.scrollLoading;
        this.scrollHeight = t.scrollHeight
        this.height = t.parentElement.clientHeight;
        this.scrollTop = t.scrollTop;
        if (this.loading || this.disabled || (!this.hasTop && !this.hasBottom)) return;
        if (e.deltaY < 0) {

          if (this.hasTop) {
            console.log('向上')
            this.startLoad('top');
          }
        } else {
          if (this.hasBottom ) {
            this.startLoad('bottom');
            console.log('向下')
          }
        }
      },
      //顶部加载
      startLoad(type) {
        var reachFun = type == 'top' ? this.onReachTop : this.onReachBottom;
        if(reachFun){
          this.loading = true
          reachFun(() => {
            this.loading = false;
            this.hasTop = false;
            this.hasBottom = false;
          });
        }
      },
      onScroll(e) {

        if(this.loading){
          return false;
        }
        var t = this.$refs.scrollLoading;
        if(!t){
          return ;
        }
        this.scrollHeight = t.scrollHeight
        this.height = t.parentElement.clientHeight;
        this.scrollTop = t.scrollTop;

        if (this.scrollTop == 0) {
          this.hasTop = true
          this.hasBottom = false;
        } else if (this.scrollHeight === this.height + this.scrollTop) {
          this.hasTop = false
          this.hasBottom = true
        } else {
          this.hasTop = false
          this.hasBottom = false;
        }
      },
    },
  }
</script>

<style scoped lang="less">
  .scroll-loading {
    position: relative;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto !important;
    .scroll-loading-icon {
      line-height: 50px;
      height: 0;
      text-align: center;
      transform: scale(0);
      transition: none;
      &.toploading {
        transition: all .5s;
        transform: scale(1);
        height: 50px;
      }
    }
    &::-webkit-scrollbar{
      width:6px;
      height:10px;
    }
    &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-thumb{
      background-color: #888;
    }
    &::-webkit-scrollbar-track, &::-webkit-scrollbar-track{
      background-color: #f0f0f0;
    }
  }

</style>
