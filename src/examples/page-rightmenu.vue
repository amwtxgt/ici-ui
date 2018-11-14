<template>
  <div>
    <div class="rightmenu" v-rightmenu="[]">
      右键点我
    </div>
    <br><br>
    <div class="title">左右键菜单 v-rightmenu v-leftmenu</div>
    <baseComponent title="基本" html='<div class="rightmenu" v-rightmenu="[{name: "我是菜单一"},{name: "我是菜单二"}]">
  右键点我
</div>
<br>
<div class="rightmenu" v-leftmenu="[{name: "我是菜单一"},{name: "我是菜单二"}]">
  左键点我
</div>'>
      <div class="rightmenu" v-rightmenu="[{name: '我是菜单一'},{name: '我是菜单二'}]">
        右键点我
      </div>
      <br>
      <div class="rightmenu" v-leftmenu="[{name: '我是菜单一'},{name: '我是菜单二'}]">
        左键点我
      </div>

    </baseComponent>


    <baseComponent title="添加菜单点击事件 click" html='<div class="rightmenu" v-rightmenu="menu1">
  右键点我
</div>

methods: {
  menu1() {
    return [
          {
            name: "我是菜单一",
            click() {alert("你点了菜单一")},
          }, {
            name: "我是菜单二",
            click(){alert("你点了菜单二")},
          }
      ]
    }
}'>

      <div class="rightmenu" v-rightmenu="menu1">
        右键点我
      </div>

    </baseComponent>


    <baseComponent title="添加图标及图标颜色  icon\iconColor" html='<div class="rightmenu" v-rightmenu="menu2">
  右键点我
</div>

methods: {
  menu2() {
    return [
          {
            name: "我是菜单一",
            click() {alert("你点了菜单一")},
            icon: "icon-qq",
            iconColor: "green",
          }, {
            name: "我是菜单二",
            click(){alert("你点了菜单二")},
            icon: "icon-tianjia",
            iconColor: "pink",
          }
      ]
    }
}'>

      <div class="rightmenu" v-rightmenu="menu2">
        右键点我
      </div>

    </baseComponent>



    <baseComponent title="添加二级菜单  children:[]" html='<div class="rightmenu" v-rightmenu="menu3">
  右键点我
</div>

methods: {
  menu3() {
    return [
          {
            name: "我是菜单一",
            click() {alert("你点了菜单一")},
            icon: "icon-qq",
            iconColor: "green",
          }, {
            name: "我是菜单二",
            click(){alert("你点了菜单二")},
            icon: "icon-tianjia",
            iconColor: "pink",
            children: [
              {
                name: "二级菜单1",
                click() {alert("你点了二级菜单1")},
              }, {
                icon: "icon-quanqiu",
                iconColor: "#999",
                name: "二级菜单2",
                click(){alert("你点了二级菜单2")},
              }
            ]
          }
      ]
    }
}'>

      <div class="rightmenu" v-rightmenu="menu3">
        右键点我
      </div>

    </baseComponent>


    <baseComponent title="添加图标按钮 btns = []" html='<div class="rightmenu" v-rightmenu="menu1">
  右键点我
</div>

methods: {
   menu4() {
        return [
          {
            name: "我是菜单一",
            click() {alert("你点了菜单一")},
            btns:[{
              icon:"icon-htmal5icon18",
              click(){
                alert("一个图标按钮")
              }
            }]
          }, {
            name: "我是菜单二",
            click(){alert("你点了菜单二")},
            btns:[{
              icon:"icon-telephone",
              iconColor:"blue",
              click(){
                alert("一个图标按钮")
              }
            },{
              icon:"icon-htmal5icon18",
              click(){
                alert("一个图标按钮")
              }
            },]
          }
        ]
      },
}'>

      <div class="rightmenu" v-rightmenu="menu4">
        右键点我
      </div>

    </baseComponent>



    <baseComponent title="上划线 topLine:true,下划线 bottomLine:true,不可用disabled:true" html='<div class="rightmenu" v-rightmenu="menu1">
  右键点我
</div>

methods: {
     menu() {
        return [
          {
            name: "我是菜单一",
            icon: "icon-qq",
            iconColor: "green",
            bottomLine:true,
            click: (e) => {
              alert("你点了菜单一")
            },
            btns: [{
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
            }]
          },
          {
            name: "我是菜单二sdf asdf awerf frawaef ",

            icon: "icon-wangzhi",
            click: (e) => {
              alert("你点了菜单二")
            }
          },
          {
            disabled: true,
            name: "我是菜单三",
            children: [
              {
                disabled: true,
                name: "我是菜单三的第一个",
                click: (e) => {
                  alert("我是菜单三的第一个")
                }
              },
              {
                name: "我是菜单三的第二个",
                icon: "icon-erweima",
                click: (e) => {
                  alert("我是菜单三的第二个")
                }
              },
            ],
          },
          {
            name: "我是菜单四",
            icon: "icon-sousuo",
            click: (e) => {
              alert("你点了菜单四")
            },
            btns: [{
              icon: "icon-tianjia",
              iconColor: "red",
              click() {
                console.log("你点击了一个btn")
              },
            }, {
              icon: "icon-tianjia",
              iconColor: "red",
              click() {
                console.log("你点击了一个btn")
              },
            }],
            children: [
              {
                name: "我是菜单三的第一个我是菜单三的第一个我是菜单三的第一个",
                click: (e) => {
                  alert("我是菜单三的第一个")
                },
                btns: [{
                  icon: "icon-tianjia",
                  iconColor: "red",
                  click() {
                    console.log("你点击了一个btn")
                  },
                }, {
                  icon: "icon-tianjia",
                  iconColor: "red",
                  click() {
                    console.log("你点击了一个btn")
                  },
                }]
              },
              {
                name: "我是菜单三的第二个",
                icon: "icon-erweima",
                click: (e) => {
                  alert("我是菜单三的第二个")
                }
              },
            ],

          },
        ]
      },
}'>

      <div class="rightmenu" v-rightmenu="menu">
        右键点我
      </div>

    </baseComponent>

  </div>
</template>

<script>

  export default {
    name: 'page-rightmenu',
    data() {
      return {
        popup1: false,
      };
    },
    mounted() {
//      setInterval(() => {
//        this.popup9 = !this.popup9
//      }, 300)
    },
    beforeDestroy() {
    },
    methods: {
      menu1() {
        return [
          {
            name: '我是菜单一',
            click() {alert('你点了菜单一')},
          }, {
            name: '我是菜单二',
            click(){alert('你点了菜单二')},
          }
        ]
      },
      menu2() {
        return [
          {
            name: "我是菜单一",
            icon: "icon-qq",
            iconColor: "green",
            click() {alert("你点了菜单一")},
          }, {
            icon: "icon-tianjia",
            iconColor: "pink",
            name: "我是菜单二",
            click(){alert("你点了菜单二")},
          }
        ]
      },
      menu3() {
        return [
          {
            name: "我是菜单一",
            icon: "icon-qq",
            iconColor: "green",
            click() {alert("你点了菜单一")},
          }, {
            icon: "icon-tianjia",
            iconColor: "pink",
            name: "我是菜单二",
            click(){alert("你点了菜单二")},
            children: [
              {
                name: "二级菜单1",
                click() {alert("你点了二级菜单1")},
              }, {
                icon: "icon-quanqiu",
                iconColor: "#999",
                name: "二级菜单2",
                click(){alert("你点了二级菜单2")},
              }
            ]
          }
        ]
      },
      menu4() {
        return [
          {
            name: "我是菜单一",
            click() {alert("你点了菜单一")},
            btns:[{
              icon:"icon-htmal5icon18",
              click(){
                alert("一个图标按钮")
              }
            }]
          }, {
            name: "我是菜单二",
            click(){alert("你点了菜单二")},
            btns:[{
              icon:"icon-telephone",
              iconColor:"blue",
              click(){
                alert("一个图标按钮")
              }
            },{
              icon:"icon-htmal5icon18",
              click(){
                alert("一个图标按钮")
              }
            },]
          }
        ]
      },
      menu() {
        return [
          {
            name: "我是菜单一",
            icon: "icon-qq",
            iconColor: "green",
            bottomLine:true,
            click: (e) => {
              alert("你点了菜单一")
            },
            btns: [{
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
            }]
          },
          {
            name: "我是菜单二sdf asdf awerf frawaef ",

            icon: "icon-wangzhi",
            click: (e) => {
              alert("你点了菜单二")
            }
          },
          {
            showline: true,
            name: "我是菜单三",
            disabled: true,
            children: [
              {
                disabled: true,
                name: "我是菜单三的第一个",
                click: (e) => {
                  alert("我是菜单三的第一个")
                }
              },
              {
                name: "我是菜单三的第二个",
                icon: "icon-erweima",
                click: (e) => {
                  alert("我是菜单三的第二个")
                }
              },
            ],
          },
          {
            name: "我是菜单四",
            icon: "icon-sousuo",
            click: (e) => {
              alert("你点了菜单四")
            },
            btns: [{
              icon: "icon-tianjia",
              iconColor: "red",
              click() {
                console.log("你点击了一个btn")
              },
            }, {
              icon: "icon-tianjia",
              iconColor: "red",
              click() {
                console.log("你点击了一个btn")
              },
            }],
            children: [
              {
                name: "我是菜单三的第一个我是菜单三的第一个我是菜单三的第一个",
                click: (e) => {
                  alert("我是菜单三的第一个")
                },
                btns: [{
                  icon: "icon-tianjia",
                  iconColor: "red",
                  click() {
                    console.log("你点击了一个btn")
                  },
                }, {
                  icon: "icon-tianjia",
                  iconColor: "red",
                  click() {
                    console.log("你点击了一个btn")
                  },
                }]
              },
              {
                name: "我是菜单三的第二个",
                icon: "icon-erweima",
                click: (e) => {
                  alert("我是菜单三的第二个")
                }
              },
            ],

          },
        ]
      },
    },
  };
</script>

<style lang="less" scoped>
  .rightmenu {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 16px;
    background: #eaa;
  }
</style>
