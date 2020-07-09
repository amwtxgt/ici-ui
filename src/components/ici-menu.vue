<!--<template>-->

<!--  <ul @blur="blur" class="ici-menu" ref="icimenu" v-if="menuList && menuList.length && show" :style="position"-->
<!--      tabindex="0"-->
<!--      @mousedown.stop="" @contextmenu.stop.prevent>-->
<!--    <menu-item v-for="(item,i) of menuList" :item="item" :key="'menu'+i"/>-->
<!--  </ul>-->

<!--</template>-->

<script>
  /*
  [
    //两种方式传入，一种菜单方式，一种组件方式
    {
      name: "我是菜单一",
      rightName: '菜单右侧name'
      icon?: "icon-qq",
      colorIcon:'icon-qq' //直接使用彩色的icon,iconColor将失败
      iconColor?: "green",
      topLine?:true //顶部画线
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
    {
      component:vue component //当有传入组件 属性name、rightName、key、disabled、click将失效
      props?://要传入component的props
      icon?: "icon-qq",
      iconColor?: "green",
      topLine?:true //顶部画线
      bottomLine?:true, //底部画分隔线
    }
  ]
  */
  import MenuItem from './menu/menu-item'

  let rom = Math.random();
  export default {
    components: {MenuItem},
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

      blur() {
        this.show = false;
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
            this.$refs['icimenu'].focus()
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
    render(createElement) {

      if (!this.menuList || !this.menuList.length || !this.show) {
        return null
      }

      return createElement('ul', {
          class: 'ici-menu',
          ref: 'icimenu',
          style: this.position,
          attrs: {
            tabindex: '0'
          },
          on: {
            mousedown: (e) => {
              e.stopPropagation()
            },
            contextmenu: (e) => {
              e.stopPropagation()
              e.preventDefault()
            },
            blur: this.blur
          }
        },
        this.menuList.map((item) => {

          let porps={
            value: this.show
          }

          let icon = ''

         if(item.colorIcon){
           icon = createElement('ici-color-icon', {
             props: {
               name: item.colorIcon,
               size: '17px'
             }
           })
         }else if(item.icon){
           icon = createElement('ici-icon', {
             props: {
               name: item.icon,
               color: item.iconColor || 'var(--text-regular,#666)',
               size: '17px'
             }
           })
         }

          if(item.props){
            Object.assign(porps,item.props)
          }

          if (item.component) {
            return createElement('li', {
              class: {
                topline: item.topLine,
                bottomline: item.bottomLine,
              }
            }, [
              createElement('div', {class: 'menu-icon'}, [
                icon
              ]),
              createElement(item.component, {props: porps})
            ])
          } else {
            return createElement(MenuItem, {

              props: {item: item, value: this.show}, on: {
                input: (v) => {
                  this.show = v
                }
              }
            })
          }
        })
      )
    }
  }
</script>
