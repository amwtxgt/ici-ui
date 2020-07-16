<template>
  <transition name="tour">
    <div v-if="currentTour" ref="tour" class="ici-tour" :class="posClass" :style="tourStyle">
      <!--箭头-->
      <div class="tour-arrow" :style="arrowStyle"></div>

      <div class="tour-content" v-html="currentTour.content"></div>
      <div class="tour-handler">

        <ici-button size="small" v-if="cIndex>0" type="info" plain @click="cIndex--" v-title="'Previous'">
          <ici-icon name="icon-back"/>
        </ici-button>
        <ici-button size="small" v-if="cIndex<tours.length-1" type="info" plain @click="cIndex++" v-title="'Next'">
          <ici-icon name="icon-forward"/>
        </ici-button>
        <ici-button size="small" v-if="tours.length-1===cIndex" type="info" plain @click="finish">Finish</ici-button>
        <ici-button size="small" v-else type="warning" plain @click="notRemind" v-title="'Do not remind again'">
          <ici-icon name="icon-shanchudelete30"/>
        </ici-button>
      </div>
    </div>
  </transition>
</template>

<script>
  /*
  * [{
  *   position?:'right'
  *   dom:'绑定的dom对象',
  *   content:'内容或html代码',
  *   buttons?:[{type:'primary',name:'按钮',click(){}}], //按钮，最多3个
  * }]
  * */
  let arrow = 16
  export default {
    name: "ici-tour",
    data() {
      return {
        tours: [],
        cIndex: 0,
        cName: '',
        x: '0px',
        y: '0px',
        posClass: 'tour-right',
        arrowStyle: {
          transform: 0
        }, //箭头追加样式
        finishCB: null, //成功的回调
        closeCB: null, //关闭的回调
      }
    },
    computed: {
      currentTour() {
        if (this.tours && this.tours[this.cIndex]) {
          this.$nextTick().then(() => {
            this.setPosition()
          })

          return this.tours[this.cIndex]
        } else {
          return null;
        }
      },
      tourStyle() {
        let style = {width: '320px', left: this.x, top: this.y}

        if (this.currentTour && this.currentTour.width) {

          style.width = this.currentTour.width + 'px'
        }
        return style
      },
    },
    mounted() {
      document.addEventListener('scroll', () => {
        this.setPosition()
      }, true)
    },
    methods: {

      setPosition() {


        if (!this.currentTour || !this.$refs.tour) return;

        this.arrowStyle.transform = `translate(0,0)`
        //浏览器大小
        let innerWidth = window.innerWidth,
          innerHeight = window.innerHeight;

        let rou = getComputedStyle(this.$refs.tour);
        //提示窗大小
        let rWidth = parseInt(rou.width)
        let rHeight = parseInt(rou.height)

        let rect = this.currentTour.dom.getBoundingClientRect();
        // console.log(rect)
        rect = rect.toJSON();
        rect.width += arrow * 2
        rect.height += arrow * 2
        rect.left -= arrow
        rect.right += arrow
        rect.top -= arrow
        rect.bottom += arrow


        //计算上下右的空隙
        let topWidth = rect.top;
        let bottomWidth = innerHeight - rect.bottom;
        let leftWidth = rect.left;
        let rightWidth = innerWidth - rect.right;

        //最终要定位的位置
        let x = 0, y = 0

        let position = this.currentTour.position || 'left'; //方向默认右边
        let oCenterY = rect.bottom - (rect.height / 2);
        let oCenterX = rect.right - (rect.width / 2);
        //该分支用于改变，postion
        switch (position) {
          case "left":
            if (leftWidth < rWidth && rightWidth > rWidth) position = 'right'
            if (oCenterY <= 0) position = 'bottom'
            if (oCenterY > innerHeight) position = 'top'
            break;
          case "top":
            if (topWidth < rHeight && bottomWidth > rHeight) position = 'bottom'
            break;
          case "bottom":
            if (bottomWidth < rHeight && topWidth > rHeight) position = 'top'
            break;
          default:

            if (rightWidth < rWidth && leftWidth > rWidth) position = 'left'
            if (oCenterY <= 0) position = 'bottom'
            if (oCenterY > innerHeight) position = 'top'
        }


        this.posClass = 'tour-' + position;


        if (['left', 'right'].includes(position)) {

          y = oCenterY - rHeight / 2

          if (y < 0 && oCenterY >= 0) {

            this.arrowStyle.transform = `translate(0,${y}px)`
            y = 0

          }

          if (y + rHeight > innerHeight) {
            y = innerHeight - rHeight
          }

        }

        if (['top', 'bottom'].includes(position)) {

          x = oCenterX - rWidth / 2
          if (x < 0 && oCenterX >= 0) {
            this.arrowStyle.transform = `translate(${x}px,0)`
            x = 0
          }

          if (x + rWidth > innerWidth && oCenterX <= innerWidth) {

            this.arrowStyle.transform = `translate(${x + rWidth - innerWidth}px,0)`
            x = innerWidth - rWidth
          }
        }

        switch (position) {
          case "left":
            if (leftWidth >= rWidth) {
              x = leftWidth - rWidth;
            } else {
              x = 0;
            }
            break;
          case "top":
            if (topWidth >= rHeight) {
              if (innerHeight >= topWidth + arrow) {
                y = topWidth - rHeight;
              } else {
                y = innerHeight - rHeight - arrow;
              }
            } else {
              y = 0
            }
            break;
          case "bottom":
            if (bottomWidth >= rHeight) {
              if (innerHeight > bottomWidth + arrow) {
                y = rect.bottom;
              } else {
                y = arrow;
              }

            } else {
              y = innerHeight - rHeight;
            }
            break;
          default:

            if (rightWidth >= rWidth) {
              x = rect.right;
            } else {
              x = innerWidth - rWidth;
            }
        }

        this.x = x + 'px';
        this.y = y + 'px';


      },

      //开始操作导航
      start(name) {
        this.cName = '';
        if (this.$tourMap[name]) {
          this.cName = name
          this.cIndex = 0;
          this.tours = this.$tourMap[name].filter((v) => Boolean(v));
        } else {
          this.$icimsg.error('不存在操作导航：' + name)
        }
        let _this = this;
        let d = {
          finish(cb) {
            _this.finishCB = cb;
            return this;
          },
          close(cb) {
            _this.closeCB = cb;
            return this;
          },
        }
        return d
      },

      finish() {
        this.stop()

        if (this.finishCB && typeof this.finishCB === "function") {
          this.finishCB()
        }
      },
      notRemind() {

        this.stop()

        if (this.closeCB && typeof this.closeCB === "function") {
          this.closeCB()
        }
      },
      //停止导航
      stop(name) {
        if (name) {
          if (this.cName === name) {
            this.cIndex = 0;
            this.tours = null;
          }
        } else {
          this.cIndex = 0;
          this.tours = null;
        }


      },
    },
  }
</script>

<style scoped>

</style>
