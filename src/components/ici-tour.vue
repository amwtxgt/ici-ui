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
        <ici-button size="small" v-if="tours.length-1===cIndex" type="info" plain @click="finish()">Finish</ici-button>
        <ici-button size="small" v-else type="warning" plain @click="notRemind" v-title="'Do not remind again'">
          <ici-icon name="icon-shanchudelete30"/>
        </ici-button>
      </div>
    </div>
  </transition>
</template>

<script>

  /*
 * tours数组的对象参数
 * {
 *  content:'内容或html代码',
 *  index?:number //索引值在，第几个执行，如果不填，那只会有一个0索引
 *  position?:'right|left|top|bottom'
 *  width?:number
 *  x?:number,
 *  y?:number,
 *  buttons?:[{type:'primary'，name:'按钮名称',click:'单击事件'}]
 * }
 *
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
            this.updatePosition()
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
        if(this.cName){
          this.updatePosition()
        }

      }, true);
    },
    methods: {
      update(name){
        if(name !== this.cName) return;
        this.updateTours(name);
        this.updatePosition();
      },
      updatePosition() {

        console.log('开始更新')
        let tour = this.currentTour;

        if (!tour || !this.$refs.tour) return;

        if(tour.func){
          Object.assign(tour,tour.func())
        }

        this.arrowStyle.transform = `translate(0,0)`
        //浏览器大小
        let innerWidth = window.innerWidth,
          innerHeight = window.innerHeight;

        let rou = getComputedStyle(this.$refs.tour);
        //提示窗大小
        let rWidth = parseInt(rou.width);
        let rHeight = parseInt(rou.height);
        let rect
        //如果有传坐标按坐标位置，向四周扩散18大小
        // console.log(tour)
        if (typeof tour.x === "number" && typeof tour.y === "number") {
          let offset = 18;
          rect = {
            width: offset * 2,
            height: offset * 2,
            left: tour.x - offset,
            right: tour.x + offset,
            top: tour.y - offset,
            bottom: tour.y + offset,
          }
        } else {
          rect = tour.dom.getBoundingClientRect().toJSON();

        }
        // console.log(rect)

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

        let position = tour.position || 'right'; //方向默认右边
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

      updateTours(name) {

        if (this._tourMap[name]) {
          this.tours = this._tourMap[name].filter((v) => Boolean(v));
        }else{
          console.log('没有找到导航对象：'+name)
        }
      },

      //开始操作导航
      start(name) {
        this.cName = '';
        this.cName = name
        this.cIndex = 0;
        this.updateTours(name)
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

      finish(name) {
        if (name && name !== this.cName) return;
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
          this.cName = ''
          this.tours = null;
        }
      },
    },
  }
</script>

<style scoped>

</style>
