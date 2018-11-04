<template>
  <div>
    <br><br>
    <div class="title">右键菜单</div>
    <baseComponent title="基本" html=''>
      <div class="rightmenu" v-rightmenu="menu">右键点我</div>
      <ici-button  v-rightmenu="menu">右键点我</ici-button>
      <br><br>
    </baseComponent>
    <baseComponent title="基本弹窗" html=''>
      <div class="rightmenu" v-rightmenu="menu"></div>
      <br><br>
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
      menu(){
        return [
          {
            name: '我是菜单一',
            icon: 'icon-qq',
            iconColor:'green',

            click: (e) => {
              console.log(this)
              alert('你点了菜单一')
            },
            btns:[{
              icon:'icon-tianjia',
              iconColor:'red',
              click(){
                console.log('你点击了一个btn')
              },
            },{
              icon:'icon-tianjia',
              iconColor:'red',
              click(){
                console.log('你点击了一个btn')
              },
            }]
          },
          {
            name: '我是菜单二sdf asdf awerf frawaef ',
            disabled:true,
            icon: 'icon-wangzhi',
            click: (e) => {
              alert('你点了菜单二')
            }
          },
          {
            showline: true,
            name: '我是菜单三',
            children: [
              {
                disabled:true,
                name: '我是菜单三的第一个',
                click: (e) => {
                  alert('我是菜单三的第一个')
                }
              },
              {
                name: '我是菜单三的第二个',
                icon: 'icon-erweima',
                click: (e) => {
                  alert('我是菜单三的第二个')
                }
              },
            ],
          },
          {
            name: '我是菜单四',
            icon: 'icon-sousuo',
            click: (e) => {
              alert('你点了菜单四')
            },
            btns:[{
              icon:'icon-tianjia',
              iconColor:'red',
              click(){
                console.log('你点击了一个btn')
              },
            },{
              icon:'icon-tianjia',
              iconColor:'red',
              click(){
                console.log('你点击了一个btn')
              },
            }],
            children: [
              {
                name: '我是菜单三的第一个我是菜单三的第一个我是菜单三的第一个',
                click: (e) => {
                  alert('我是菜单三的第一个')
                },
                btns:[{
                  icon:'icon-tianjia',
                  iconColor:'red',
                  click(){
                    console.log('你点击了一个btn')
                  },
                },{
                  icon:'icon-tianjia',
                  iconColor:'red',
                  click(){
                    console.log('你点击了一个btn')
                  },
                }]
              },
              {
                name: '我是菜单三的第二个',
                icon: 'icon-erweima',
                click: (e) => {
                  alert('我是菜单三的第二个')
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
  .rightmenu{
      width:100px;
      height:100px;
      background:#eaa;
  }
</style>
