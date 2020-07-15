<template>
  <div class="components flex">
    <div class="flex-none">
      <Menu theme="light" :active-name="active" @on-select="onselect">
        <menu-item name="pageBgImg">
          背景图 ici-bg-img
        </menu-item>
        <menu-item name="pageField">
          数据选择 ici-Field
        </menu-item>
        <menu-item name="pageImagePreview">
          图片查看器 ici-image-preview
        </menu-item>
        <menu-item name="pageButton">
          按钮 ici-button
        </menu-item>
        <menu-item name="pageLoading">
          加载 ici-loading
        </menu-item>
        <menu-item name="pageIcon">
          图标 ici-icon
        </menu-item>
        <menu-item name="pageColorIcon">
          彩色图标 ici-color-icon
        </menu-item>
        <menu-item name="pageInput">
          输入 ici-input
        </menu-item>
        <menu-item name="pagePopup">
          弹窗 ici-popup
        </menu-item>
        <menu-item name="pageDrawer">
          抽屉弹窗 ici-drawer
        </menu-item>
        <menu-item name="pageMessage">
          消息 ici-msg
        </menu-item>
        <menu-item name="pageMenu">
          左右键菜单 ici-menu
        </menu-item>
        <menu-item name="pageScroll">
          滚动 ici-scroll
        </menu-item>
        <menu-item name="pageSearch">
          搜索 ici-search
        </menu-item>
        <menu-item name="pageHeader">
          导航头部 ici-header
        </menu-item>
        <menu-item name="pagePoptip">
          title提示 ici-poptip
        </menu-item>
        <menu-item name="pageTour">
          操作导航 ici-tour
        </menu-item>
      </Menu>
    </div>
    <div class="flex-auto" style="overflow-y: scroll;overflow-x: visible">
      <component v-bind:is="currentView"/>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import pageButton from '../examples/page-button.vue';
  import pageLoading from '../examples/page-loading.vue';
  import pageIcon from '../examples/page-icon.vue';
  import pageInput from '../examples/page-input.vue';
  import pagePopup from '../examples/page-popup.vue';
  import pageDrawer from '../examples/page-drawer.vue';
  import pageMessage from '../examples/page-message.vue';
  import pageSearch from '../examples/page-search.vue';
  import pageHeader from '../examples/page-header.vue';
  import pageImagePreview from '../examples/page-image-preview.vue'
  import pageField from '../examples/page-field'
  import pageBgImg from '../examples/page-bg-image'
  import pageFuns from '../examples/page-funs.vue'
  import pageScroll from '../examples/page-scroll.vue'
  import pageMenu from '../examples/page-rightmenu.vue'
  import pagePoptip from '../examples/page-poptip'
  import pageTitle from '../examples/page-title'
  import pageColorIcon from '../examples/page-color-icon'
  import pageTour from '../examples/page-tour'
  var components = {
    pageButton,
    pageLoading,
    pageIcon,
    pageInput,
    pagePopup,
    pageDrawer,
    pageMessage,
    pageSearch,
    pageHeader,
    pageImagePreview,
    pageField,
    pageBgImg,
    pageFuns,
    pageScroll,
    pagePoptip,
    pageTitle,
    pageMenu,
    pageColorIcon,
    pageTour
  };
  export default {
    name: 'app',
    data() {
      return {
        active: 'pageTour'
      };
    },
    computed: {
      currentView() {
        return components[this.active];
      }
    },
    props: {
      open: Boolean,
    },
    mounted() {
      console.log(pageButton)
      console.log(pageButton instanceof Vue)
    },
    beforeDestroy() {

    },
    methods: {
      onselect(e) {
        this.active = e;
      }
    },
    components: components
  };
</script>

<style scoped lang="less">
  .components {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background: #fff;
    > div:first-child {
      width: 240px;
    }
    > div:last-child {
      padding: 20px;
    }
  }

  .close {
    position: absolute;
    top: 10px;
    right: 30px;
  }
</style>
