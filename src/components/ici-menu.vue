<template>
  <div :id="id" v-show="show" class="ici-menu-wrap" @mousedown="mousedown('mousedown',$event)"
       @mousewheel.passive.self="mousewheel">
    <ul class="ici-menu" ref="icimenu" v-if="menuList && menuList.length" :style="position" @mousedown.stop="">
      <li v-for="(item,i) of menuList" :key="'menu'+i"
          :class="{topline:item.topLine,bottomline:item.bottomLine,disabled:item.disabled}"
          @click="click($event,item.click,item.disabled)">
        <div>
          <ici-icon v-if="item.icon" :name="item.icon" :color="item.iconColor||'#666'" size="17px"></ici-icon>
        </div>
        <div :title="item.name" class="menu-name"><span>{{item.name}}</span></div>
        <div v-if="item.btns" class="flex-none">
          <ici-icon click-state v-for="(btn,index) of item.btns" :name="btn.icon" :key="'btn'+index"
                    @click="click($event,btn.click)" :color="btn.iconColor" size="16px"/>
        </div>

        <!--二级菜单-->
        <template v-if="item.children && item.children.length">
          &nbsp; &nbsp;<ici-icon name="icon-yduiqianjin"></ici-icon>
          <ul class="ici-menu-child" ref="icimenuchild">
            <li v-for="(child,i2) of item.children" :key="'child'+i2" @click="click($event,child.click,child.disabled)"
                :class="{topline:child.topLine,bottomline:child.bottomLine,disabled:child.disabled}">
              <div>
                <ici-icon v-if="child.icon" :name="child.icon" :color="child.iconColor" size="14px"></ici-icon>
              </div>
              <div class="menu-name"><span>{{child.name}}</span></div>
              <div v-if="child.btns" class="flex-none">
                <ici-icon click-state v-for="(btn,index) of child.btns" :name="btn.icon" :key="'btn'+index"
                          @click="click($event,btn.click)" :color="btn.iconColor" size="16px"/>
              </div>
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
  var rom = Math.random();
  export default {
    components: {},
    name: "ici-right-click-menu",
    data() {
      return {
        id: 'ici-menu-' + rom,
        show: false,
        position: {top: '0px', left: '0px'},
        menuList: []
      };
    },
    methods: {
      //主动事件
      dispatchEvent(e) {
        var x = e.clientX, y = e.clientY
        var el = document.elementFromPoint(x, y);
        var ev = document.createEvent("HTMLEvents");
        ev.initEvent('click', false, true);
        el.dispatchEvent(ev);
        document.removeEventListener('click', this.dispatchEvent)
      },

      //滚轮
      mousewheel(e) {
        this.show = false;
      },

      mousedown() {
        this.show = false;
        document.addEventListener('click', this.dispatchEvent);
      },

      open(menuList, e) {
        this._append()
        if (menuList) {
          this.menuList = menuList;
          this.show = true;
          this.$nextTick(() => {
            if (!this.$refs['icimenu']) return;
            this.setPosition(e);
          })
        }
      },

      setPosition(e) {

        var clientX = e.clientX,
          clientY = e.clientY,
          innerWidth = window.innerWidth,
          innerHeight = window.innerHeight

        var width = this.$refs['icimenu'].offsetWidth,
          height = this.$refs['icimenu'].offsetHeight
          console.log([this.$refs['icimenu']])

        //x坐标的位置,超过右边界时，移动刚好右边界
        var rightMargin = innerWidth - (clientX + width);
        if (rightMargin < 0) {
          clientX = clientX + rightMargin;
        }

        //y坐标的位置，超过下边界时，向上显示
        var bottomMargin = innerHeight - (clientY + height)
        if (bottomMargin < 0) {
          clientY = clientY - height;
        }

        this.position = {left: clientX + 'px', top: clientY + 'px'}

        //计算二级菜单
        if (this.$refs['icimenuchild']) {
          console.log(this.$refs['icimenuchild'])
          this.$refs['icimenuchild'].forEach((el) => {
            var parent = el.parentNode

            var left, top;
            console.log(rightMargin, el.offsetWidth)
            if (rightMargin - el.offsetWidth < 0) {

              //二级菜单移动到左边
              left = -el.offsetWidth + 'px'
            }
            else {
              console.log('右边',width)
              //移动到右边
              left = (width - 1) + 'px';
            }

            if (innerHeight - clientY - parent.offsetTop - el.offsetHeight < 0) {
              //二级菜单移动到上边
              top = (parent.offsetHeight - el.offsetHeight + 1) + 'px'
            }
            else {
              //移动到下边
              top = '-1px';
            }

            el.style.cssText = `left:${left};top:${top}`
          })
        }


      },
      click(e, click, disabled) {
        e.preventDefault()
        e.stopPropagation()
        if (click && !disabled) {
          click()
          this.show = false;
        }
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

<style scoped lang="less">

  .ici-menu-wrap {
    position: fixed;
    z-index: 99999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .ici-menu, .ici-menu-child {

    position: absolute;
    font-size: 13px;
    background: #fff;
    border: 1px solid #e5e5e5;
    box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, .1);
    li {
      position: relative;
      display: flex;
      text-align: -webkit-match-parent;
      list-style: none;
      padding: 7px 10px 7px 7px;
      cursor: default;
      color: #444;
      line-height: 20px;
      > :first-child {
        color: #666;
        width: 25px;
        flex: none;
      }
      .menu-name {
        flex: auto;
        > span {
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 250px;
        }
      }

      > i {
        flex: none;
      }
      &.topline {
        border-top: 1px solid #eee;
      }
      &.bottomline {
        border-bottom: 1px solid #eee;
      }
      &:hover {
        background: #eee;
        color: #000;
        .ici-menu-child {
          visibility: visible;
        }
      }
      &.disabled {
        color: #666;
        background: #f5f5f5;
      }
    }
  }

  .ici-menu-child {
    visibility: hidden;
    position: absolute;
    left: 100%;
    top: -1px;
  }
</style>
