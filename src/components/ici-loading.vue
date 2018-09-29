<template>
  <transition name="loading">
    <div :class="['ici-loading',{'ici-disabled':disabled},{'ici-block':block}]"
         :style="{background:block?maskColor:''}">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" :width="sizeValue[0]" :height="sizeValue[1]" viewBox="0 0 32 32"  :fill="backWhite?'#fff':color"  xml:space="preserve">

        <g v-if="type==1">
          <path transform="translate(2)" d="M0 12 V20 H4 V12z">
            <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
          </path>
          <path transform="translate(9)" d="M0 12 V20 H4 V12z">
            <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
          </path>
          <path transform="translate(16)" d="M0 12 V20 H4 V12z">
            <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
          </path>
          <path transform="translate(23)" d="M0 12 V20 H4 V12z">
            <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
          </path>
        </g>
        <g v-else-if="type==2">
          <circle transform="translate(8 0)" cx="0" cy="16" r="0">
            <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
              keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="translate(16 0)" cx="0" cy="16" r="0">
            <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
              keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
          </circle>
          <circle transform="translate(24 0)" cx="0" cy="16" r="0">
            <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
              keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
          </circle>
        </g>
         <g v-else-if="type==3">
          <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">
            <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </path>
          <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
            <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </path>
          <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
            <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
          </path>
        </g>
        <g v-else-if="type==4">
          <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
          <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
            <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
          </path>
        </g>
        <g v-else-if="type==5">
         <circle cx="16" cy="3" r="0">
           <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        </g>
        <g v-else-if="type==6">
         <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>
          </path>
          <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>
          </path>
          <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>
          </path>
          <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>
          </path>
          <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>
          </path>
          <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>
          </path>
          <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>
          </path>
          <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>
          </path>
        </g>
    </svg>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'a-loading',
    data() {
      return {};
    },
    computed: {
      sizeValue() {
        var obj = ['30px', '30px'];
        switch (this.size) {
          case 'mintiny':
            obj = ['10px', '10px'];
            break;
          case 'tiny':
            obj = ['18px', '18px'];
            break;
          case 'small':
            obj = ['22px', '22px'];
            break;
          case 'big':
            obj = ['50px', '50px'];
            break;
        }
        return obj;
      }
    },
    props: {
      size: {
        type: String,
        default: ''
      },
      backWhite: Boolean,
      disabled: Boolean,
      block: Boolean,
      color:{
        type:String,
        default:'#c01639'
      },
      maskColor: {
        type: String,
        default: 'rgba(255,255,255,.6)'
      },
      type:{
        type:[Number,String],
        default:'4'
      }
    },
  };
</script>

<style scoped lang="less">
  div.ici-loading {
    display: inline-block;
    flex-direction: column;
    justify-content: center;
    &.ici-block {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 10;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, .6);
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
    }
    &.ici-disabled {
      opacity: 0.5;
    }
  }

  svg {
    vertical-align: middle;
  }

  .rect-red {
    fill: #c01639;
  }

  .rect-black {
    fill: #3F3F3F;
  }

  .rect-white {
    fill: #fff !important;
  }

  .loading-enter-active, .loading-leave-active {
    transition: opacity .3s;
  }

  .loading-leave-active {
    position: absolute !important;
  }

  .loading-enter, .loading-leave-to {
    opacity: 0;
  }
</style>
