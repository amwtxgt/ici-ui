<template>
  <li :class="{topline:item.topLine,bottomline:item.bottomLine,disabled:item.disabled}"
      @click="click($event,item.click,item.disabled)">
    <div class="menu-icon">
      <ici-color-icon v-if="item.colorIcon" :name="item.colorIcon" size="17px" />
      <ici-icon v-else-if="item.icon" :name="item.icon" :color="item.iconColor||'var(--text-regular,#666)'"
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
        <menu-item  v-for="(child,i2) of item.children" :item="child" v-model="show" :key="'child'+i2"></menu-item>
      </ul>
    </template>
  </li>
</template>

<script>
  import MenuItem from './menu-item.vue'
  export default {
    components:{MenuItem},
    name: "menu-item",
    props: {
      item: Object,
      value:Boolean,
    },
    computed:{
      show:{
        get(){
          return this.value
        },
        set(v){
          this.$emit('input',v)
        }
      }
    },
    methods: {
      click(e, click, disabled) {
        e.preventDefault()
        e.stopPropagation()
        if (click && !disabled) {
          click()
          this.show = false;
        }
      },
    }
  }
</script>

<style scoped>

</style>
