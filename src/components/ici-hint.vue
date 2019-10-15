<template>
  <transition name="fadehou">
    <div v-if="value" class="ici-hint" :style="{maxHeight:maxHeight}">
      <slot></slot>
      <!--加载图标-->
      <div v-show="loading">
        <div class="ici-hint-loading">
          <ici-loading></ici-loading>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "ici-hint",
    data() {
      return {};
    },
    props: {
      value: Boolean,
      loading: Boolean,
      maxHeight: {
        type: String,
        default: '300px',
      }
    },

  }
</script>

