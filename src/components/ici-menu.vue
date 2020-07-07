<template>
  <div :id="id" v-show="show" class="ici-menu-wrap" @mousedown="mousedown('mousedown',$event)" ref="menuwrap"
       @mousewheel.passive.self="mousewheel" @contextmenu.stop.prevent>
    <ul class="ici-menu" ref="icimenu" v-if="menuList && menuList.length" :style="position" @mousedown.stop="">
      <li v-for="(item,i) of menuList" :key="'menu'+i"
          :class="{topline:item.topLine,bottomline:item.bottomLine,disabled:item.disabled}"
          @click="click($event,item.click,item.disabled)">
        <div>
          <ici-icon v-if="item.icon" :name="item.icon" :color="item.iconColor||'var(--text-regular,#666)'"
                    size="17px"></ici-icon>
        </div>
        <div :title="item.name" class="menu-name">
          <span v-html="item.name"></span>
          <span v-if="item.key" style="text-transform:uppercase;">({{item.key}})</span>
        </div>
        <div v-if="item.btns" class="flex-none">
          <template v-for="(btn,index) of item.btns">
            <div class="html-btn" v-if="btn.html" @click="click($event,btn.click)" v-html="btn.html"></div>
            <ici-icon v-else click-state :name="btn.icon" :key="'btn'+index"
                      @click="click($event,btn.click)" :color="btn.iconColor" size="16px"/>
          </template>
        </div>
        <div class="flex-none" style="padding-left:10px;" v-if="item.rightName">{{item.rightName}}</div>

        <!--二级菜单-->
        <template v-if="item.children && item.children.length">
          &nbsp; &nbsp;<ici-icon name="icon-yduiqianjin"></ici-icon>
          <ul class="ici-menu-child" ref="icimenuchild">
            <li v-for="(child,i2) of item.children" :key="'child'+i2" @click="click($event,child.click,child.disabled)"
                :class="{topline:child.topLine,bottomline:child.bottomLine,disabled:child.disabled}">
              <div>
                <ici-icon v-if="child.icon" :name="child.icon" :color="child.iconColor" size="14px"></ici-icon>
              </div>
              <div class="menu-name"><span v-html="child.name"></span></div>
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
  /*
  [
    {
      name: "我是菜单一",
      rightName: '菜单右侧name'
      icon?: "icon-qq",
      iconColor?: "green",
      bottomLine?:true, //底部画分隔线
      key?:'c', //快捷键
      disabled?: true,
      click: (e) => {
        alert("你点了菜单一")
      },
      btns: [{
        html:'<div>自定义html</div>'
        icon: "icon-tianjia",
        iconColor: "red",
        click() {
          console.log("你点击了一个btn")
        },
      }, {
        topLine:true,
        icon: "icon-tianjia",
        iconColor: "red",
        click() {
          console.log("你点击了一个btn")
        },
      }],
      children: [],
    },
  ]
  */
  let rom = Math.random();
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
    watch: {
      show() {
        this.init();
      },
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        if (this.show) {
          document.addEventListener('keydown', this.shortcutKey)
        } else {
          document.removeEventListener('keydown', this.shortcutKey)
        }
      },

      shortcutKey(e) {
        let key = e.key.toUpperCase();
        this.menuList.some((v) => {
          if (v.key && v.key.toUpperCase() === key && v.click) {
            v.click();
            this.show = false
            return true;
          }
          if (v.children) {
            return v.children.some((v) => {
              if (v.key && v.key.toUpperCase() === key && v.click) {
                v.click();
                this.show = false
                return true;
              }

            })
          }
        })

        e.preventDefault();
        e.stopPropagation()
        return false;
      },
      //主动事件
      dispatchEvent(e) {
        let x = e.clientX, y = e.clientY;
        let el = document.elementFromPoint(x, y);
        let ev = document.createEvent("HTMLEvents");
        ev.initEvent('click', false, true);
        el.dispatchEvent(ev);
        document.removeEventListener('click', this.dispatchEvent)
      },

      //滚轮
      mousewheel(e) {
        this.show = false;
      },

      //点击外面消失
      mousedown() {

        this.show = false;
        document.addEventListener('click', this.dispatchEvent);
      },

      open(menuList, position) {
        if (!position) {
          //如果没传坐标，用事件的鼠标位置
          if (window.event && window.event.clientX) {
            position = {
              x: window.event.clientX,
              y: window.event.clientY,
            }
          } else {
            position = {
              x: 0,
              y: 0,
            }
          }
        }
        this._append()
        if (menuList) {
          this.menuList = menuList;
          this.show = true;
          this.$nextTick(() => {
            if (!this.$refs['icimenu']) return;
            this.setPosition(position);
          })
        }
      },

      setPosition(e) {

        let clientX = e.x,
          clientY = e.y,
          innerWidth = window.innerWidth,
          innerHeight = window.innerHeight

        var width = this.$refs['icimenu'].offsetWidth,
          height = this.$refs['icimenu'].offsetHeight

        //x坐标的位置,超过右边界时，移动刚好右边界
        var rightMargin = innerWidth - (clientX + width);
        if (rightMargin < 15) {
          clientX = clientX + rightMargin - 15;
        }

        //y坐标的位置，超过下边界时，向上显示
        var bottomMargin = innerHeight - (clientY + height)
        if (bottomMargin < 0) {
          clientY = clientY - height;
        }

        this.position = {left: clientX + 'px', top: clientY + 'px'}

        //计算二级菜单
        if (this.$refs['icimenuchild']) {
          this.$refs['icimenuchild'].forEach((el) => {
            var parent = el.parentNode

            let left, top;
            if (rightMargin - el.offsetWidth < 15) {

              //二级菜单移动到左边
              left = -el.offsetWidth + 'px'
            } else {
              //移动到右边
              left = (width - 2) + 'px';
            }

            if (innerHeight - clientY - parent.offsetTop - el.offsetHeight < 0) {
              //二级菜单移动到上边
              top = (parent.offsetHeight - el.offsetHeight + 1) + 'px'
            } else {
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
          } else {
            var menu = window.document.createElement('div');
            window.document.body.appendChild(menu);
            this.$mount(menu); //绑定
          }
        }
      },
    },
  }
</script>
