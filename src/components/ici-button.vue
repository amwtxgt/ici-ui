<template>
  <button tabindex="0" v-focus="focus" :type="htmlType" :disabled="disabled || loading" @click="$emit('click',$event)"
          :class="['ici-btn',sizeClass,typeClass,shapeClass,longshadowClass,
    {'ici-btn-plain':plain,'ici-btn-border':plain},
    {'ici-btn-bless':borderless},
    {'ici-btn-3d':open3d},
    {'ici-btn-raised':relievo},
    {'ici-btn-block':long}]">
    <div class="flex flex-center">
      <div v-show="loading">
        <ici-loading size="small" :disabled="loading"></ici-loading>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </button>
</template>

<script>

  export default {
    name: 'a-button',
    data() {
      return {};
    },

    computed: {

      sizeClass() {
        var size = '';
        switch (this.size) {
          case 'tiny':
            size = 'ici-btn-tiny';
            break;
          case 'small':
            size = 'ici-btn-small';
            break;
          case 'large':
            size = 'ici-btn-large';
            break;
          case 'jumbo':
            size = 'ici-btn-jumbo';
            break;
          case 'giant':
            size = 'ici-btn-giant';
            break;
        }
        return size;
      },
      typeClass() {
        var type = '';
        switch (this.type) {
          case 'primary':
            type = 'ici-btn-primary';
            break;
          case 'info':
            type = 'ici-btn-action';
            break;
          case 'warning':
            type = 'ici-btn-highlight';
            break;
          case 'error':
            type = 'ici-btn-caution';
            break;
          case 'ici':
            type = 'ici-btn-royal';
            break;
          default :
            type = this.type
        }
        return type;
      },
      shapeClass() {
        var shape = '';
        switch (this.shape) {
          case 'rounded':
            shape = 'ici-btn-rounded';
            break;
          case 'pill':
            shape = 'ici-btn-pill';
            break;
          case 'square':
            shape = 'ici-btn-square';
            break;
          case 'box':
            shape = 'ici-btn-box';
            break;
          case 'circle':
            shape = 'ici-btn-circle';
            break;
        }
        return shape;
      },
      longshadowClass() {
        var longshadow = '';
        switch (this.longshadow) {
          case true:
          case 'right':
            longshadow = 'ici-btn-longshadow-right';
            break;
          case 'left':
            longshadow = 'ici-btn-longshadow-left';
            break;
        }
        return longshadow;
      }
    },
    props: {
      focus: Boolean,
      disabled: Boolean,
      //原生的type
      htmlType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      //按钮大小
      size: {
        type: String,
        default: ''
      },
      //按钮主题类型大小
      type: {
        type: String,
        default: ''
      },
      //按钮形状
      shape: {
        type: String,
        default: ''
      },
      longshadow: {
        type: [Boolean, String]
      },
      //按钮是否是空心的
      plain: Boolean,
      //按钮是否是要边框
      borderless: Boolean,
      //开启3D效果
      open3d: Boolean,
      //开启浮雕
      relievo: Boolean,
      //开启100%长度
      long: Boolean,
    },
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {},
    components: {}
  };
</script>

<style lang="less" scoped>
  .ici-btn {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #666;
    background-color: #EEE;
    border-color: #EEE;
    font-weight: 300;
    font-size: 16px;
    font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif, "Microsoft YaHei", "微软雅黑";
    text-decoration: none;
    text-align: center;
    line-height: 40px;
    height: 40px;
    padding: 0 40px;
    margin: 0;
    display: inline-block;
    appearance: none;
    cursor: pointer;
    border: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: .3s;
    transition-duration: .3s
  }

  .ici-btn:visited {
    color: #666
  }

  .ici-btn:hover, .ici-btn:focus {
    background-color: #f6f6f6;
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 3px rgba(0,0,0,.2);
  }

  .ici-btn:active, .ici-btn.active, .ici-btn.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
    text-decoration: none;
    background-color: #eee;
    border-color: #cfcfcf;
    color: #d4d4d4;
    -webkit-transition-duration: 0s;
    transition-duration: 0s;
    -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);

  }

  .ici-btn.disabled, .ici-btn.is-disabled, .ici-btn:disabled {
    top: 0 !important;
    background: #EEE !important;
    border: 1px solid #DDD !important;
    text-shadow: 0 1px 1px white !important;
    color: #CCC !important;
    cursor: default !important;
    appearance: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    opacity: .8 !important
  }

  .ici-btn-uppercase {
    text-transform: uppercase
  }

  .ici-btn-lowercase {
    text-transform: lowercase
  }

  .ici-btn-capitalize {
    text-transform: capitalize
  }

  .ici-btn-small-caps {
    font-variant: small-caps
  }

  .ici-btn-icon-txt-large {
    font-size: 36px !important
  }

  .ici-btn-width-small {
    padding: 0 10px !important
  }



  .ici-btn-plain, .ici-btn-plain-flat {
    background-color: #FFF;
    border-color: #FFF;
    color: #1b9af7
  }

  .ici-btn-plain:visited, .ici-btn-plain-flat:visited {
    color: #1b9af7
  }

  .ici-btn-plain:hover, .ici-btn-plain:focus, .ici-btn-plain-flat:hover, .ici-btn-plain-flat:focus {
    background-color: white;
    border-color: white;
    color: #1b9af7
  }

  .ici-btn-plain:active, .ici-btn-plain.active, .ici-btn-plain.is-active, .ici-btn-plain-flat:active, .ici-btn-plain-flat.active, .ici-btn-plain-flat.is-active {
    background-color: white;
    border-color: white;
    color: #e6e6e6
  }

  .ici-btn-inverse, .ici-btn-inverse-flat {
    background-color: #222;
    border-color: #222;
    color: #EEE
  }

  .ici-btn-inverse:visited, .ici-btn-inverse-flat:visited {
    color: #EEE
  }

  .ici-btn-inverse:hover, .ici-btn-inverse:focus, .ici-btn-inverse-flat:hover, .ici-btn-inverse-flat:focus {
    background-color: #3c3c3c;
    border-color: #3c3c3c;
    color: #EEE
  }

  .ici-btn-inverse:active, .ici-btn-inverse.active, .ici-btn-inverse.is-active, .ici-btn-inverse-flat:active, .ici-btn-inverse-flat.active, .ici-btn-inverse-flat.is-active {
    background-color: #222;
    border-color: #222;
    color: #090909
  }


  .ici-btn-primary, .ici-btn-primary-flat {
    background-color: #1b9af7;
    border-color: #1b9af7;
    color: #FFF
  }

  .ici-btn-primary:visited, .ici-btn-primary-flat:visited {
    color: #FFF
  }

  .ici-btn-primary:hover, .ici-btn-primary:focus, .ici-btn-primary-flat:hover, .ici-btn-primary-flat:focus {
    background-color: #4cb0f9;
    border-color: #4cb0f9;
    color: #FFF;
  }

  .ici-btn-primary:active, .ici-btn-primary.active, .ici-btn-primary.is-active, .ici-btn-primary-flat:active, .ici-btn-primary-flat.active, .ici-btn-primary-flat.is-active {
    background-color: #2798eb;
    border-color: #42b983;
    color: #0880d7;

  }

  .ici-btn-action, .ici-btn-action-flat {
    background-color: #a5de37;
    border-color: #a5de37;
    color: #FFF
  }

  .ici-btn-action:visited, .ici-btn-action-flat:visited {
    color: #FFF
  }

  .ici-btn-action:hover, .ici-btn-action:focus, .ici-btn-action-flat:hover, .ici-btn-action-flat:focus {
    background-color: #b9e563;
    border-color: #b9e563;
    color: #FFF
  }

  .ici-btn-action:active, .ici-btn-action.active, .ici-btn-action.is-active, .ici-btn-action-flat:active, .ici-btn-action-flat.active, .ici-btn-action-flat.is-active {
    background-color: #a1d243;
    border-color: #a1d243;
    color: #8bc220
  }

  .ici-btn-highlight, .ici-btn-highlight-flat {
    background-color: #feae1b;
    border-color: #feae1b;
    color: #FFF
  }

  .ici-btn-highlight:visited, .ici-btn-highlight-flat:visited {
    color: #FFF
  }

  .ici-btn-highlight:hover, .ici-btn-highlight:focus, .ici-btn-highlight-flat:hover, .ici-btn-highlight-flat:focus {
    background-color: #fec04e;
    border-color: #fec04e;
    color: #FFF
  }

  .ici-btn-highlight:active, .ici-btn-highlight.active, .ici-btn-highlight.is-active, .ici-btn-highlight-flat:active, .ici-btn-highlight-flat.active, .ici-btn-highlight-flat.is-active {
    background-color: #f3ab26;
    border-color: #f3ab26;
    color: #e59501
  }

  .ici-btn-caution, .ici-btn-caution-flat {
    background-color: #ff4351;
    border-color: #ff4351;
    color: #FFF
  }

  .ici-btn-caution:visited, .ici-btn-caution-flat:visited {
    color: #FFF
  }

  .ici-btn-caution:hover, .ici-btn-caution:focus, .ici-btn-caution-flat:hover, .ici-btn-caution-flat:focus {
    background-color: #ff7680;
    border-color: #ff7680;
    color: #FFF
  }

  .ici-btn-caution:active, .ici-btn-caution.active, .ici-btn-caution.is-active, .ici-btn-caution-flat:active, .ici-btn-caution-flat.active, .ici-btn-caution-flat.is-active {
    background-color: #f64c59;
    border-color: #f64c59;
    color: #ff1022
  }

  .ici-btn-royal, .ici-btn-royal-flat {
    background-color: #cc2142;
    border-color: #cc2142;
    color: #FFF
  }

  .ici-btn-royal:visited, .ici-btn-royal-flat:visited {
    color: #FFF
  }

  .ici-btn-royal:hover, .ici-btn-royal:focus, .ici-btn-royal-flat:hover, .ici-btn-royal-flat:focus {
    background-color: #ff6671;
    border-color: #ff6671;
    color: #FFF
  }

  .ici-btn-royal:active, .ici-btn-royal.active, .ici-btn-royal.is-active, .ici-btn-royal-flat:active, .ici-btn-royal-flat.active, .ici-btn-royal-flat.is-active {
    background-color: #e0325b;
    border-color: #e0325b;
    color: #ad1c38
  }

  .ici-btn-block, .ici-btn-stacked {
    display: block
  }

  .ici-btn-square {
    border-radius: 0
  }

  .ici-btn-box {
    border-radius: 10px
  }

  .ici-btn-rounded {
    border-radius: 4px
  }

  .ici-btn-pill {
    border-radius: 200px
  }

  .ici-btn-circle {
    border-radius: 100%
  }

  .ici-btn-circle, .ici-btn-box, .ici-btn-square {
    padding: 0 !important;
    width: 40px
  }

  .ici-btn-circle.ici-btn-giant, .ici-btn-box.ici-btn-giant, .ici-btn-square.ici-btn-giant {
    width: 70px
  }

  .ici-btn-circle.ici-btn-jumbo, .ici-btn-box.ici-btn-jumbo, .ici-btn-square.ici-btn-jumbo {
    width: 60px
  }

  .ici-btn-circle.ici-btn-large, .ici-btn-box.ici-btn-large, .ici-btn-square.ici-btn-large {
    width: 50px
  }

  .ici-btn-circle.ici-btn-normal, .ici-btn-box.ici-btn-normal, .ici-btn-square.ici-btn-normal {
    width: 40px
  }

  .ici-btn-circle.ici-btn-small, .ici-btn-box.ici-btn-small, .ici-btn-square.ici-btn-small {
    width: 30px
  }

  .ici-btn-circle.ici-btn-tiny, .ici-btn-box.ici-btn-tiny, .ici-btn-square.ici-btn-tiny {
    width: 24px
  }

  .ici-btn-border, .ici-btn-border-thin, .ici-btn-border-thick {
    background: 0;
    border-width: 2px;
    border-style: solid;
    line-height: 36px
  }

  .ici-btn-border:hover, .ici-btn-border-thin:hover, .ici-btn-border-thick:hover {
    background-color: rgba(255, 255, 255, 0.9)
  }

  .ici-btn-border:active, .ici-btn-border-thin:active, .ici-btn-border-thick:active, .ici-btn-border.active, .active.ici-btn-border-thin, .active.ici-btn-border-thick, .ici-btn-border.is-active, .is-active.ici-btn-border-thin, .is-active.ici-btn-border-thick {
    -webkit-box-shadow: none;
    box-shadow: none;
    text-shadow: none;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: .3s;
    transition-duration: .3s
  }

  .ici-btn-border-thin {
    border-width: 1px
  }

  .ici-btn-border-thick {
    border-width: 3px
  }



  .ici-btn-border.ici-btn-plain, .ici-btn-plain.ici-btn-border-thin, .ici-btn-plain.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-plain, .ici-btn-border-thick.ici-btn-plain {
    color: #FFF
  }

  .ici-btn-border.ici-btn-plain:hover, .ici-btn-plain.ici-btn-border-thin:hover, .ici-btn-plain.ici-btn-border-thick:hover, .ici-btn-border.ici-btn-plain:focus, .ici-btn-plain.ici-btn-border-thin:focus, .ici-btn-plain.ici-btn-border-thick:focus, .ici-btn-border-thin.ici-btn-plain:hover, .ici-btn-border-thin.ici-btn-plain:focus, .ici-btn-border-thick.ici-btn-plain:hover, .ici-btn-border-thick.ici-btn-plain:focus {
    background-color: rgba(255, 255, 255, 0.9);
    color: rgba(27, 154, 247, 0.9)
  }

  .ici-btn-border.ici-btn-plain:active, .ici-btn-plain.ici-btn-border-thin:active, .ici-btn-plain.ici-btn-border-thick:active, .ici-btn-border.ici-btn-plain.active, .ici-btn-plain.active.ici-btn-border-thin, .ici-btn-plain.active.ici-btn-border-thick, .ici-btn-border.ici-btn-plain.is-active, .ici-btn-plain.is-active.ici-btn-border-thin, .ici-btn-plain.is-active.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-plain:active, .ici-btn-border-thin.ici-btn-plain.active, .ici-btn-border-thin.ici-btn-plain.is-active, .ici-btn-border-thick.ici-btn-plain:active, .ici-btn-border-thick.ici-btn-plain.active, .ici-btn-border-thick.ici-btn-plain.is-active {
    background-color: rgba(255, 255, 255, 0.7);
    color: rgba(27, 154, 247, 0.5);
    opacity: .3
  }

  .ici-btn-border.ici-btn-inverse, .ici-btn-inverse.ici-btn-border-thin, .ici-btn-inverse.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-inverse, .ici-btn-border-thick.ici-btn-inverse {
    color: #222
  }

  .ici-btn-border.ici-btn-inverse:hover, .ici-btn-inverse.ici-btn-border-thin:hover, .ici-btn-inverse.ici-btn-border-thick:hover, .ici-btn-border.ici-btn-inverse:focus, .ici-btn-inverse.ici-btn-border-thin:focus, .ici-btn-inverse.ici-btn-border-thick:focus, .ici-btn-border-thin.ici-btn-inverse:hover, .ici-btn-border-thin.ici-btn-inverse:focus, .ici-btn-border-thick.ici-btn-inverse:hover, .ici-btn-border-thick.ici-btn-inverse:focus {
    background-color: rgba(60, 60, 60, 0.9);
    color: rgba(238, 238, 238, 0.9)
  }

  .ici-btn-border.ici-btn-inverse:active, .ici-btn-inverse.ici-btn-border-thin:active, .ici-btn-inverse.ici-btn-border-thick:active, .ici-btn-border.ici-btn-inverse.active, .ici-btn-inverse.active.ici-btn-border-thin, .ici-btn-inverse.active.ici-btn-border-thick, .ici-btn-border.ici-btn-inverse.is-active, .ici-btn-inverse.is-active.ici-btn-border-thin, .ici-btn-inverse.is-active.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-inverse:active, .ici-btn-border-thin.ici-btn-inverse.active, .ici-btn-border-thin.ici-btn-inverse.is-active, .ici-btn-border-thick.ici-btn-inverse:active, .ici-btn-border-thick.ici-btn-inverse.active, .ici-btn-border-thick.ici-btn-inverse.is-active {
    background-color: rgba(34, 34, 34, 0.7);
    color: rgba(238, 238, 238, 0.5);
    opacity: .3
  }


  .ici-btn-border.ici-btn-primary, .ici-btn-primary.ici-btn-border-thin, .ici-btn-primary.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-primary, .ici-btn-border-thick.ici-btn-primary {
    color: #1b9af7
  }

  .ici-btn-border.ici-btn-primary:hover, .ici-btn-primary.ici-btn-border-thin:hover, .ici-btn-primary.ici-btn-border-thick:hover, .ici-btn-border.ici-btn-primary:focus, .ici-btn-primary.ici-btn-border-thin:focus, .ici-btn-primary.ici-btn-border-thick:focus, .ici-btn-border-thin.ici-btn-primary:hover, .ici-btn-border-thin.ici-btn-primary:focus, .ici-btn-border-thick.ici-btn-primary:hover, .ici-btn-border-thick.ici-btn-primary:focus {
    background-color: rgba(76, 176, 249, 0.9);
    color: rgba(255, 255, 255, 0.9)
  }

  .ici-btn-border.ici-btn-primary:active, .ici-btn-primary.ici-btn-border-thin:active, .ici-btn-primary.ici-btn-border-thick:active, .ici-btn-border.ici-btn-primary.active, .ici-btn-primary.active.ici-btn-border-thin, .ici-btn-primary.active.ici-btn-border-thick, .ici-btn-border.ici-btn-primary.is-active, .ici-btn-primary.is-active.ici-btn-border-thin, .ici-btn-primary.is-active.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-primary:active, .ici-btn-border-thin.ici-btn-primary.active, .ici-btn-border-thin.ici-btn-primary.is-active, .ici-btn-border-thick.ici-btn-primary:active, .ici-btn-border-thick.ici-btn-primary.active, .ici-btn-border-thick.ici-btn-primary.is-active {
    background-color: rgba(39, 152, 235, 0.7);
    color: rgba(255, 255, 255, 0.5);
    opacity: .3
  }

  .ici-btn-border.ici-btn-action, .ici-btn-action.ici-btn-border-thin, .ici-btn-action.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-action, .ici-btn-border-thick.ici-btn-action {
    color: #a5de37
  }

  .ici-btn-border.ici-btn-action:hover, .ici-btn-action.ici-btn-border-thin:hover, .ici-btn-action.ici-btn-border-thick:hover, .ici-btn-border.ici-btn-action:focus, .ici-btn-action.ici-btn-border-thin:focus, .ici-btn-action.ici-btn-border-thick:focus, .ici-btn-border-thin.ici-btn-action:hover, .ici-btn-border-thin.ici-btn-action:focus, .ici-btn-border-thick.ici-btn-action:hover, .ici-btn-border-thick.ici-btn-action:focus {
    background-color: rgba(185, 229, 99, 0.9);
    color: rgba(255, 255, 255, 0.9)
  }

  .ici-btn-border.ici-btn-action:active, .ici-btn-action.ici-btn-border-thin:active, .ici-btn-action.ici-btn-border-thick:active, .ici-btn-border.ici-btn-action.active, .ici-btn-action.active.ici-btn-border-thin, .ici-btn-action.active.ici-btn-border-thick, .ici-btn-border.ici-btn-action.is-active, .ici-btn-action.is-active.ici-btn-border-thin, .ici-btn-action.is-active.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-action:active, .ici-btn-border-thin.ici-btn-action.active, .ici-btn-border-thin.ici-btn-action.is-active, .ici-btn-border-thick.ici-btn-action:active, .ici-btn-border-thick.ici-btn-action.active, .ici-btn-border-thick.ici-btn-action.is-active {
    background-color: rgba(161, 210, 67, 0.7);
    color: rgba(255, 255, 255, 0.5);
    opacity: .3
  }

  .ici-btn-border.ici-btn-highlight, .ici-btn-highlight.ici-btn-border-thin, .ici-btn-highlight.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-highlight, .ici-btn-border-thick.ici-btn-highlight {
    color: #feae1b
  }

  .ici-btn-border.ici-btn-highlight:hover, .ici-btn-highlight.ici-btn-border-thin:hover, .ici-btn-highlight.ici-btn-border-thick:hover, .ici-btn-border.ici-btn-highlight:focus, .ici-btn-highlight.ici-btn-border-thin:focus, .ici-btn-highlight.ici-btn-border-thick:focus, .ici-btn-border-thin.ici-btn-highlight:hover, .ici-btn-border-thin.ici-btn-highlight:focus, .ici-btn-border-thick.ici-btn-highlight:hover, .ici-btn-border-thick.ici-btn-highlight:focus {
    background-color: rgba(254, 192, 78, 0.9);
    color: rgba(255, 255, 255, 0.9)
  }

  .ici-btn-border.ici-btn-highlight:active, .ici-btn-highlight.ici-btn-border-thin:active, .ici-btn-highlight.ici-btn-border-thick:active, .ici-btn-border.ici-btn-highlight.active, .ici-btn-highlight.active.ici-btn-border-thin, .ici-btn-highlight.active.ici-btn-border-thick, .ici-btn-border.ici-btn-highlight.is-active, .ici-btn-highlight.is-active.ici-btn-border-thin, .ici-btn-highlight.is-active.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-highlight:active, .ici-btn-border-thin.ici-btn-highlight.active, .ici-btn-border-thin.ici-btn-highlight.is-active, .ici-btn-border-thick.ici-btn-highlight:active, .ici-btn-border-thick.ici-btn-highlight.active, .ici-btn-border-thick.ici-btn-highlight.is-active {
    background-color: rgba(243, 171, 38, 0.7);
    color: rgba(255, 255, 255, 0.5);
    opacity: .3
  }

  .ici-btn-border.ici-btn-caution, .ici-btn-caution.ici-btn-border-thin, .ici-btn-caution.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-caution, .ici-btn-border-thick.ici-btn-caution {
    color: #ff4351
  }

  .ici-btn-border.ici-btn-caution:hover, .ici-btn-caution.ici-btn-border-thin:hover, .ici-btn-caution.ici-btn-border-thick:hover, .ici-btn-border.ici-btn-caution:focus, .ici-btn-caution.ici-btn-border-thin:focus, .ici-btn-caution.ici-btn-border-thick:focus, .ici-btn-border-thin.ici-btn-caution:hover, .ici-btn-border-thin.ici-btn-caution:focus, .ici-btn-border-thick.ici-btn-caution:hover, .ici-btn-border-thick.ici-btn-caution:focus {
    background-color: rgba(255, 118, 128, 0.9);
    color: rgba(255, 255, 255, 0.9)
  }

  .ici-btn-border.ici-btn-caution:active, .ici-btn-caution.ici-btn-border-thin:active, .ici-btn-caution.ici-btn-border-thick:active, .ici-btn-border.ici-btn-caution.active, .ici-btn-caution.active.ici-btn-border-thin, .ici-btn-caution.active.ici-btn-border-thick, .ici-btn-border.ici-btn-caution.is-active, .ici-btn-caution.is-active.ici-btn-border-thin, .ici-btn-caution.is-active.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-caution:active, .ici-btn-border-thin.ici-btn-caution.active, .ici-btn-border-thin.ici-btn-caution.is-active, .ici-btn-border-thick.ici-btn-caution:active, .ici-btn-border-thick.ici-btn-caution.active, .ici-btn-border-thick.ici-btn-caution.is-active {
    background-color: rgba(246, 76, 89, 0.7);
    color: rgba(255, 255, 255, 0.5);
    opacity: .3
  }

  .ici-btn-border.ici-btn-royal, .ici-btn-royal.ici-btn-border-thin, .ici-btn-royal.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-royal, .ici-btn-border-thick.ici-btn-royal {
    color: #cc2142
  }

  .ici-btn-border.ici-btn-royal:hover, .ici-btn-royal.ici-btn-border-thin:hover, .ici-btn-royal.ici-btn-border-thick:hover, .ici-btn-border.ici-btn-royal:focus, .ici-btn-royal.ici-btn-border-thin:focus, .ici-btn-royal.ici-btn-border-thick:focus, .ici-btn-border-thin.ici-btn-royal:hover, .ici-btn-border-thin.ici-btn-royal:focus, .ici-btn-border-thick.ici-btn-royal:hover, .ici-btn-border-thick.ici-btn-royal:focus {
    background-color: rgba(255, 100, 137, 0.9);
    color: rgba(255, 255, 255, 0.9)
  }

  .ici-btn-border.ici-btn-royal:active, .ici-btn-royal.ici-btn-border-thin:active, .ici-btn-royal.ici-btn-border-thick:active, .ici-btn-border.ici-btn-royal.active, .ici-btn-royal.active.ici-btn-border-thin, .ici-btn-royal.active.ici-btn-border-thick, .ici-btn-border.ici-btn-royal.is-active, .ici-btn-royal.is-active.ici-btn-border-thin, .ici-btn-royal.is-active.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-royal:active, .ici-btn-border-thin.ici-btn-royal.active, .ici-btn-border-thin.ici-btn-royal.is-active, .ici-btn-border-thick.ici-btn-royal:active, .ici-btn-border-thick.ici-btn-royal.active, .ici-btn-border-thick.ici-btn-royal.is-active {
    background-color: rgba(224, 50, 91, 0.7);
    color: rgba(255, 255, 255, 0.5);
    opacity: .3
  }

  .ici-btn-border.ici-btn-giant, .ici-btn-giant.ici-btn-border-thin, .ici-btn-giant.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-giant, .ici-btn-border-thick.ici-btn-giant {
    line-height: 66px
  }

  .ici-btn-border.ici-btn-jumbo, .ici-btn-jumbo.ici-btn-border-thin, .ici-btn-jumbo.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-jumbo, .ici-btn-border-thick.ici-btn-jumbo {
    line-height: 56px
  }

  .ici-btn-border.ici-btn-large, .ici-btn-large.ici-btn-border-thin, .ici-btn-large.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-large, .ici-btn-border-thick.ici-btn-large {
    line-height: 46px
  }

  .ici-btn-border.ici-btn-normal, .ici-btn-normal.ici-btn-border-thin, .ici-btn-normal.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-normal, .ici-btn-border-thick.ici-btn-normal {
    line-height: 36px
  }

  .ici-btn-border.ici-btn-small, .ici-btn-small.ici-btn-border-thin, .ici-btn-small.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-small, .ici-btn-border-thick.ici-btn-small {
    line-height: 26px
  }

  .ici-btn-border.ici-btn-tiny, .ici-btn-tiny.ici-btn-border-thin, .ici-btn-tiny.ici-btn-border-thick, .ici-btn-border-thin.ici-btn-tiny, .ici-btn-border-thick.ici-btn-tiny {
    line-height: 20px
  }

  .ici-btn-bless {
    background: 0;
    border: 0;
    padding: 0 8px !important;
    color: #EEE;
    font-size: 20.8px;
    font-weight: 200
  }

  .ici-btn-bless:hover, .ici-btn-bless:focus {
    background: 0
  }

  .ici-btn-bless:active, .ici-btn-bless.active, .ici-btn-bless.is-active {
    -webkit-box-shadow: none;
    box-shadow: none;
    text-shadow: none;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    opacity: .3
  }

  .ici-btn-bless.ici-btn-plain {
    color: #FFF
  }

  .ici-btn-bless.ici-btn-inverse {
    color: #222
  }

  .ici-btn-bless.ici-btn-primary {
    color: #1b9af7
  }

  .ici-btn-bless.ici-btn-action {
    color: #a5de37
  }

  .ici-btn-bless.ici-btn-highlight {
    color: #feae1b
  }

  .ici-btn-bless.ici-btn-caution {
    color: #ff4351
  }

  .ici-btn-bless.ici-btn-royal {
    color: #cc2142
  }

  .ici-btn-bless.ici-btn-giant {
    font-size: 36.4px;
    height: 52.4px;
    line-height: 52.4px
  }

  .ici-btn-bless.ici-btn-jumbo {
    font-size: 31.2px;
    height: 47.2px;
    line-height: 47.2px
  }

  .ici-btn-bless.ici-btn-large {
    font-size: 26px;
    height: 42px;
    line-height: 42px
  }

  .ici-btn-bless.ici-btn-normal {
    font-size: 20.8px;
    height: 36.8px;
    line-height: 36.8px
  }

  .ici-btn-bless.ici-btn-small {
    font-size: 15.6px;
    height: 31.6px;
    line-height: 31.6px
  }

  .ici-btn-bless.ici-btn-tiny {
    font-size: 12.48px;
    height: 28.48px;
    line-height: 28.48px
  }

  .ici-btn-raised {
    border-color: #e1e1e1;
    border-style: solid;
    border-width: 1px;
    line-height: 38px;
    background: -webkit-gradient(linear, left top, left bottom, from(#f6f6f6), to(#e1e1e1));
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.15);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.15)
  }

  .ici-btn-raised:hover, .ici-btn-raised:focus {
    background: -webkit-gradient(linear, left top, left bottom, from(white), to(gainsboro));
  }

  .ici-btn-raised:active, .ici-btn-raised.active, .ici-btn-raised.is-active {
    background: #eee;
    -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0 white;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0 white
  }

  .ici-btn-raised.ici-btn-primary {
    border-color: #088ef0;
    background: -webkit-gradient(linear, left top, left bottom, from(#34a5f8), to(#088ef0));
  }

  .ici-btn-raised.ici-btn-primary:hover, .ici-btn-raised.ici-btn-primary:focus {
    background: -webkit-gradient(linear, left top, left bottom, from(#42abf8), to(#0888e6));
  }

  .ici-btn-raised.ici-btn-primary:active, .ici-btn-raised.ici-btn-primary.active, .ici-btn-raised.ici-btn-primary.is-active {
    border-color: #0880d7;
    background: #2798eb
  }

  .ici-btn-raised.ici-btn-plain {
    border-color: #f2f2f2;
    background: -webkit-gradient(linear, left top, left bottom, from(white), to(#f2f2f2));
  }

  .ici-btn-raised.ici-btn-plain:hover, .ici-btn-raised.ici-btn-plain:focus {
    background: -webkit-gradient(linear, left top, left bottom, from(white), to(#ededed));
  }

  .ici-btn-raised.ici-btn-plain:active, .ici-btn-raised.ici-btn-plain.active, .ici-btn-raised.ici-btn-plain.is-active {
    border-color: #e6e6e6;
    background: white
  }

  .ici-btn-raised.ici-btn-inverse {
    border-color: #151515;
    background: -webkit-gradient(linear, left top, left bottom, from(#2f2f2f), to(#151515));
  }

  .ici-btn-raised.ici-btn-inverse:hover, .ici-btn-raised.ici-btn-inverse:focus {
    background: -webkit-gradient(linear, left top, left bottom, from(#363636), to(#101010));
  }

  .ici-btn-raised.ici-btn-inverse:active, .ici-btn-raised.ici-btn-inverse.active, .ici-btn-raised.ici-btn-inverse.is-active {
    border-color: #090909;
    background: #222
  }

  .ici-btn-raised.ici-btn-action {
    border-color: #9ad824;
    background: -webkit-gradient(linear, left top, left bottom, from(#afe24d), to(#9ad824));
  }

  .ici-btn-raised.ici-btn-action:hover, .ici-btn-raised.ici-btn-action:focus {
    background: -webkit-gradient(linear, left top, left bottom, from(#b5e45a), to(#94cf22));
  }

  .ici-btn-raised.ici-btn-action:active, .ici-btn-raised.ici-btn-action.active, .ici-btn-raised.ici-btn-action.is-active {
    border-color: #8bc220;
    background: #a1d243
  }

  .ici-btn-raised.ici-btn-highlight {
    border-color: #fea502;
    background: -webkit-gradient(linear, left top, left bottom, from(#feb734), to(#fea502))
  }

  .ici-btn-raised.ici-btn-highlight:hover, .ici-btn-raised.ici-btn-highlight:focus {
    background: -webkit-gradient(linear, left top, left bottom, from(#febc44), to(#f49f01));
  }

  .ici-btn-raised.ici-btn-highlight:active, .ici-btn-raised.ici-btn-highlight.active, .ici-btn-raised.ici-btn-highlight.is-active {
    border-color: #e59501;
    background: #f3ab26
  }

  .ici-btn-raised.ici-btn-caution {
    border-color: #ff2939;
    background: -webkit-gradient(linear, left top, left bottom, from(#ff5c69), to(#ff2939));

  }

  .ici-btn-raised.ici-btn-caution:hover, .ici-btn-raised.ici-btn-caution:focus {
    background: -webkit-gradient(linear, left top, left bottom, from(#ff6c77), to(#ff1f30));
  }

  .ici-btn-raised.ici-btn-caution:active, .ici-btn-raised.ici-btn-caution.active, .ici-btn-raised.ici-btn-caution.is-active {
    border-color: #ff1022;
    background: #f64c59
  }

  .ici-btn-raised.ici-btn-royal {
    border-color: #bf1638;
    background: -webkit-gradient(linear, left top, left bottom, from(#ed3a64), to(#bf1638));
  }

  .ici-btn-raised.ici-btn-royal:hover, .ici-btn-raised.ici-btn-royal:focus {
    background: -webkit-gradient(linear, left top, left bottom, from(#f2416b), to(#b22043));
  }

  .ici-btn-raised.ici-btn-royal:active, .ici-btn-raised.ici-btn-royal.active, .ici-btn-raised.ici-btn-royal.is-active {
    border-color: #ad1c38;
    background: #e0325b
  }

  .ici-btn-3d {
    position: relative;
    top: 0;
    -webkit-box-shadow: 0 7px 0 #bbb, 0 8px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0 7px 0 #bbb, 0 8px 3px rgba(0, 0, 0, 0.2)
  }

  .ici-btn-3d:hover, .ici-btn-3d:focus {
    -webkit-box-shadow: 0 7px 0 #bbb, 0 8px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0 7px 0 #bbb, 0 8px 3px rgba(0, 0, 0, 0.2)
  }

  .ici-btn-3d:active, .ici-btn-3d.active, .ici-btn-3d.is-active {
    top: 5px;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: .15s;
    transition-duration: .15s;
    -webkit-box-shadow: 0 2px 0 #bbb, 0 3px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 0 #bbb, 0 3px 3px rgba(0, 0, 0, 0.2)
  }

  .ici-btn-3d.ici-btn-primary {
    -webkit-box-shadow: 0 7px 0 #0880d7, 0 8px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 7px 0 #0880d7, 0 8px 3px rgba(0, 0, 0, 0.3)
  }

  .ici-btn-3d.ici-btn-primary:hover, .ici-btn-3d.ici-btn-primary:focus {
    -webkit-box-shadow: 0 7px 0 #077ace, 0 8px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 7px 0 #077ace, 0 8px 3px rgba(0, 0, 0, 0.3)
  }

  .ici-btn-3d.ici-btn-primary:active, .ici-btn-3d.ici-btn-primary.active, .ici-btn-3d.ici-btn-primary.is-active {
    -webkit-box-shadow: 0 2px 0 #0662a6, 0 3px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 0 #0662a6, 0 3px 3px rgba(0, 0, 0, 0.2)
  }

  .ici-btn-3d.ici-btn-plain {
    -webkit-box-shadow: 0 7px 0 #e6e6e6, 0 8px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 7px 0 #e6e6e6, 0 8px 3px rgba(0, 0, 0, 0.3)
  }

  .ici-btn-3d.ici-btn-plain:hover, .ici-btn-3d.ici-btn-plain:focus {
    -webkit-box-shadow: 0 7px 0 #e0e0e0, 0 8px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 7px 0 #e0e0e0, 0 8px 3px rgba(0, 0, 0, 0.3)
  }

  .ici-btn-3d.ici-btn-plain:active, .ici-btn-3d.ici-btn-plain.active, .ici-btn-3d.ici-btn-plain.is-active {
    -webkit-box-shadow: 0 2px 0 #ccc, 0 3px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 0 #ccc, 0 3px 3px rgba(0, 0, 0, 0.2)
  }

  .ici-btn-3d.ici-btn-inverse {
    -webkit-box-shadow: 0 7px 0 #090909, 0 8px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 7px 0 #090909, 0 8px 3px rgba(0, 0, 0, 0.3)
  }

  .ici-btn-3d.ici-btn-inverse:hover, .ici-btn-3d.ici-btn-inverse:focus {
    -webkit-box-shadow: 0 7px 0 #030303, 0 8px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 7px 0 #030303, 0 8px 3px rgba(0, 0, 0, 0.3)
  }

  .ici-btn-3d.ici-btn-inverse:active, .ici-btn-3d.ici-btn-inverse.active, .ici-btn-3d.ici-btn-inverse.is-active {
    -webkit-box-shadow: 0 2px 0 black, 0 3px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 0 black, 0 3px 3px rgba(0, 0, 0, 0.2)
  }

  .ici-btn-3d.ici-btn-action {
    -webkit-box-shadow: 0 7px 0 #8bc220, 0 8px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 7px 0 #8bc220, 0 8px 3px rgba(0, 0, 0, 0.3)
  }

  .ici-btn-3d.ici-btn-action:hover, .ici-btn-3d.ici-btn-action:focus {
    -webkit-box-shadow: 0 7px 0 #84b91f, 0 8px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 7px 0 #84b91f, 0 8px 3px rgba(0, 0, 0, 0.3)
  }

  .ici-btn-3d.ici-btn-action:active, .ici-btn-3d.ici-btn-action.active, .ici-btn-3d.ici-btn-action.is-active {
    -webkit-box-shadow: 0 2px 0 #6b9619, 0 3px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 0 #6b9619, 0 3px 3px rgba(0, 0, 0, 0.2)
  }

  .ici-btn-3d.ici-btn-highlight {
    -webkit-box-shadow: 0 7px 0 #e59501, 0 8px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 7px 0 #e59501, 0 8px 3px rgba(0, 0, 0, 0.3)
  }

  .ici-btn-3d.ici-btn-highlight:hover, .ici-btn-3d.ici-btn-highlight:focus {
    -webkit-box-shadow: 0 7px 0 #db8e01, 0 8px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 7px 0 #db8e01, 0 8px 3px rgba(0, 0, 0, 0.3)
  }

  .ici-btn-3d.ici-btn-highlight:active, .ici-btn-3d.ici-btn-highlight.active, .ici-btn-3d.ici-btn-highlight.is-active {
    -webkit-box-shadow: 0 2px 0 #b27401, 0 3px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 0 #b27401, 0 3px 3px rgba(0, 0, 0, 0.2)
  }

  .ici-btn-3d.ici-btn-caution {
    -webkit-box-shadow: 0 7px 0 #ff1022, 0 8px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 7px 0 #ff1022, 0 8px 3px rgba(0, 0, 0, 0.3)
  }

  .ici-btn-3d.ici-btn-caution:hover, .ici-btn-3d.ici-btn-caution:focus {
    -webkit-box-shadow: 0 7px 0 #ff0618, 0 8px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 7px 0 #ff0618, 0 8px 3px rgba(0, 0, 0, 0.3)
  }

  .ici-btn-3d.ici-btn-caution:active, .ici-btn-3d.ici-btn-caution.active, .ici-btn-3d.ici-btn-caution.is-active {
    -webkit-box-shadow: 0 2px 0 #dc0010, 0 3px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 0 #dc0010, 0 3px 3px rgba(0, 0, 0, 0.2)
  }

  .ici-btn-3d.ici-btn-royal {
    -webkit-box-shadow: 0 7px 0 #ad1c38, 0 8px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 7px 0 #ad1c38, 0 8px 3px rgba(0, 0, 0, 0.3)
  }

  .ici-btn-3d.ici-btn-royal:hover, .ici-btn-3d.ici-btn-royal:focus {
    -webkit-box-shadow: 0 7px 0 #9e1b3a, 0 8px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 7px 0 #9e1b3a, 0 8px 3px rgba(0, 0, 0, 0.3)
  }

  .ici-btn-3d.ici-btn-royal:active, .ici-btn-3d.ici-btn-royal.active, .ici-btn-3d.ici-btn-royal.is-active {
    -webkit-box-shadow: 0 2px 0 #8c193a, 0 3px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 0 #8c193a, 0 3px 3px rgba(0, 0, 0, 0.2)
  }

  @-webkit-keyframes glowing {
    from {
      -webkit-box-shadow: 0 0 0 rgba(44, 154, 219, 0.3);
      box-shadow: 0 0 0 rgba(44, 154, 219, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(44, 154, 219, 0.8);
      box-shadow: 0 0 20px rgba(44, 154, 219, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(44, 154, 219, 0.3);
      box-shadow: 0 0 0 rgba(44, 154, 219, 0.3)
    }
  }

  @keyframes glowing {
    from {
      -webkit-box-shadow: 0 0 0 rgba(44, 154, 219, 0.3);
      box-shadow: 0 0 0 rgba(44, 154, 219, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(44, 154, 219, 0.8);
      box-shadow: 0 0 20px rgba(44, 154, 219, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(44, 154, 219, 0.3);
      box-shadow: 0 0 0 rgba(44, 154, 219, 0.3)
    }
  }

  @-webkit-keyframes glowing-primary {
    from {
      -webkit-box-shadow: 0 0 0 rgba(27, 154, 247, 0.3);
      box-shadow: 0 0 0 rgba(27, 154, 247, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(27, 154, 247, 0.8);
      box-shadow: 0 0 20px rgba(27, 154, 247, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(27, 154, 247, 0.3);
      box-shadow: 0 0 0 rgba(27, 154, 247, 0.3)
    }
  }

  @keyframes glowing-primary {
    from {
      -webkit-box-shadow: 0 0 0 rgba(27, 154, 247, 0.3);
      box-shadow: 0 0 0 rgba(27, 154, 247, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(27, 154, 247, 0.8);
      box-shadow: 0 0 20px rgba(27, 154, 247, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(27, 154, 247, 0.3);
      box-shadow: 0 0 0 rgba(27, 154, 247, 0.3)
    }
  }

  @-webkit-keyframes glowing-plain {
    from {
      -webkit-box-shadow: 0 0 0 rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 0 rgba(255, 255, 255, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 0 rgba(255, 255, 255, 0.3)
    }
  }

  @keyframes glowing-plain {
    from {
      -webkit-box-shadow: 0 0 0 rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 0 rgba(255, 255, 255, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 0 rgba(255, 255, 255, 0.3)
    }
  }

  @-webkit-keyframes glowing-inverse {
    from {
      -webkit-box-shadow: 0 0 0 rgba(34, 34, 34, 0.3);
      box-shadow: 0 0 0 rgba(34, 34, 34, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(34, 34, 34, 0.8);
      box-shadow: 0 0 20px rgba(34, 34, 34, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(34, 34, 34, 0.3);
      box-shadow: 0 0 0 rgba(34, 34, 34, 0.3)
    }
  }

  @keyframes glowing-inverse {
    from {
      -webkit-box-shadow: 0 0 0 rgba(34, 34, 34, 0.3);
      box-shadow: 0 0 0 rgba(34, 34, 34, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(34, 34, 34, 0.8);
      box-shadow: 0 0 20px rgba(34, 34, 34, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(34, 34, 34, 0.3);
      box-shadow: 0 0 0 rgba(34, 34, 34, 0.3)
    }
  }

  @-webkit-keyframes glowing-action {
    from {
      -webkit-box-shadow: 0 0 0 rgba(165, 222, 55, 0.3);
      box-shadow: 0 0 0 rgba(165, 222, 55, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(165, 222, 55, 0.8);
      box-shadow: 0 0 20px rgba(165, 222, 55, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(165, 222, 55, 0.3);
      box-shadow: 0 0 0 rgba(165, 222, 55, 0.3)
    }
  }

  @keyframes glowing-action {
    from {
      -webkit-box-shadow: 0 0 0 rgba(165, 222, 55, 0.3);
      box-shadow: 0 0 0 rgba(165, 222, 55, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(165, 222, 55, 0.8);
      box-shadow: 0 0 20px rgba(165, 222, 55, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(165, 222, 55, 0.3);
      box-shadow: 0 0 0 rgba(165, 222, 55, 0.3)
    }
  }

  @-webkit-keyframes glowing-highlight {
    from {
      -webkit-box-shadow: 0 0 0 rgba(254, 174, 27, 0.3);
      box-shadow: 0 0 0 rgba(254, 174, 27, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(254, 174, 27, 0.8);
      box-shadow: 0 0 20px rgba(254, 174, 27, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(254, 174, 27, 0.3);
      box-shadow: 0 0 0 rgba(254, 174, 27, 0.3)
    }
  }

  @keyframes glowing-highlight {
    from {
      -webkit-box-shadow: 0 0 0 rgba(254, 174, 27, 0.3);
      box-shadow: 0 0 0 rgba(254, 174, 27, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(254, 174, 27, 0.8);
      box-shadow: 0 0 20px rgba(254, 174, 27, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(254, 174, 27, 0.3);
      box-shadow: 0 0 0 rgba(254, 174, 27, 0.3)
    }
  }

  @-webkit-keyframes glowing-caution {
    from {
      -webkit-box-shadow: 0 0 0 rgba(255, 67, 81, 0.3);
      box-shadow: 0 0 0 rgba(255, 67, 81, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(255, 67, 81, 0.8);
      box-shadow: 0 0 20px rgba(255, 67, 81, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(255, 67, 81, 0.3);
      box-shadow: 0 0 0 rgba(255, 67, 81, 0.3)
    }
  }

  @keyframes glowing-caution {
    from {
      -webkit-box-shadow: 0 0 0 rgba(255, 67, 81, 0.3);
      box-shadow: 0 0 0 rgba(255, 67, 81, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(255, 67, 81, 0.8);
      box-shadow: 0 0 20px rgba(255, 67, 81, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(255, 67, 81, 0.3);
      box-shadow: 0 0 0 rgba(255, 67, 81, 0.3)
    }
  }

  @-webkit-keyframes glowing-royal {
    from {
      -webkit-box-shadow: 0 0 0 rgba(123, 114, 233, 0.3);
      box-shadow: 0 0 0 rgba(123, 114, 233, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(123, 114, 233, 0.8);
      box-shadow: 0 0 20px rgba(123, 114, 233, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(123, 114, 233, 0.3);
      box-shadow: 0 0 0 rgba(123, 114, 233, 0.3)
    }
  }

  @keyframes glowing-royal {
    from {
      -webkit-box-shadow: 0 0 0 rgba(123, 114, 233, 0.3);
      box-shadow: 0 0 0 rgba(123, 114, 233, 0.3)
    }
    50% {
      -webkit-box-shadow: 0 0 20px rgba(123, 114, 233, 0.8);
      box-shadow: 0 0 20px rgba(123, 114, 233, 0.8)
    }
    to {
      -webkit-box-shadow: 0 0 0 rgba(123, 114, 233, 0.3);
      box-shadow: 0 0 0 rgba(123, 114, 233, 0.3)
    }
  }

  .ici-btn-glow {
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: glowing;
    animation-name: glowing
  }

  .ici-btn-glow:active, .ici-btn-glow.active, .ici-btn-glow.is-active {
    -webkit-animation-name: none;
    animation-name: none
  }

  .ici-btn-glow.ici-btn-primary {
    -webkit-animation-name: glowing-primary;
    animation-name: glowing-primary
  }

  .ici-btn-glow.ici-btn-plain {
    -webkit-animation-name: glowing-plain;
    animation-name: glowing-plain
  }

  .ici-btn-glow.ici-btn-inverse {
    -webkit-animation-name: glowing-inverse;
    animation-name: glowing-inverse
  }

  .ici-btn-glow.ici-btn-action {
    -webkit-animation-name: glowing-action;
    animation-name: glowing-action
  }

  .ici-btn-glow.ici-btn-highlight {
    -webkit-animation-name: glowing-highlight;
    animation-name: glowing-highlight
  }

  .ici-btn-glow.ici-btn-caution {
    -webkit-animation-name: glowing-caution;
    animation-name: glowing-caution
  }

  .ici-btn-glow.ici-btn-royal {
    -webkit-animation-name: glowing-royal;
    animation-name: glowing-royal
  }

  .ici-btn-dropdown {
    position: relative;
    overflow: visible;
    display: inline-block
  }

  .ici-btn-dropdown-list {
    display: none;
    position: absolute;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    z-index: 1000;
    min-width: 100%;
    list-style-type: none;
    background: rgba(255, 255, 255, 0.95);
    border-style: solid;
    border-width: 1px;
    border-color: #d4d4d4;
    font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif, "Microsoft YaHei", "微软雅黑";
    -webkit-box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
  }

  .ici-btn-dropdown-list.is-below {
    top: 100%;
    border-top: 0;
    border-radius: 0 0 3px 3px
  }

  .ici-btn-dropdown-list.is-above {
    bottom: 100%;
    top: auto;
    border-bottom: 0;
    border-radius: 3px 3px 0 0;
    -webkit-box-shadow: 0 -2px 7px rgba(0, 0, 0, 0.2);
    box-shadow: 0 -2px 7px rgba(0, 0, 0, 0.2)
  }

  .ici-btn-dropdown-list > li {
    padding: 0;
    margin: 0;
    display: block
  }

  .ici-btn-dropdown-list > li > a {
    display: block;
    line-height: 40px;
    font-size: 12.8px;
    padding: 5px 10px;
    float: none;
    color: #666;
    text-decoration: none
  }

  .ici-btn-dropdown-list > li > a:hover {
    color: #5e5e5e;
    background: #f6f6f6;
    text-decoration: none
  }

  .ici-btn-dropdown-divider {
    border-top: 1px solid #e6e6e6
  }

  .ici-btn-dropdown.ici-btn-dropdown-primary .ici-btn-dropdown-list {
    background: rgba(27, 154, 247, 0.95);
    border-color: #0880d7
  }

  .ici-btn-dropdown.ici-btn-dropdown-primary .ici-btn-dropdown-list .ici-btn-dropdown-divider {
    border-color: #0888e6
  }

  .ici-btn-dropdown.ici-btn-dropdown-primary .ici-btn-dropdown-list > li > a {
    color: #FFF
  }

  .ici-btn-dropdown.ici-btn-dropdown-primary .ici-btn-dropdown-list > li > a:hover {
    color: #f2f2f2;
    background: #088ef0
  }

  .ici-btn-dropdown.ici-btn-dropdown-plain .ici-btn-dropdown-list {
    background: rgba(255, 255, 255, 0.95);
    border-color: #e6e6e6
  }

  .ici-btn-dropdown.ici-btn-dropdown-plain .ici-btn-dropdown-list .ici-btn-dropdown-divider {
    border-color: #ededed
  }

  .ici-btn-dropdown.ici-btn-dropdown-plain .ici-btn-dropdown-list > li > a {
    color: #1b9af7
  }

  .ici-btn-dropdown.ici-btn-dropdown-plain .ici-btn-dropdown-list > li > a:hover {
    color: #088ef0;
    background: #f2f2f2
  }

  .ici-btn-dropdown.ici-btn-dropdown-inverse .ici-btn-dropdown-list {
    background: rgba(34, 34, 34, 0.95);
    border-color: #090909
  }

  .ici-btn-dropdown.ici-btn-dropdown-inverse .ici-btn-dropdown-list .ici-btn-dropdown-divider {
    border-color: #101010
  }

  .ici-btn-dropdown.ici-btn-dropdown-inverse .ici-btn-dropdown-list > li > a {
    color: #EEE
  }

  .ici-btn-dropdown.ici-btn-dropdown-inverse .ici-btn-dropdown-list > li > a:hover {
    color: #e1e1e1;
    background: #151515
  }

  .ici-btn-dropdown.ici-btn-dropdown-action .ici-btn-dropdown-list {
    background: rgba(165, 222, 55, 0.95);
    border-color: #8bc220
  }

  .ici-btn-dropdown.ici-btn-dropdown-action .ici-btn-dropdown-list .ici-btn-dropdown-divider {
    border-color: #94cf22
  }

  .ici-btn-dropdown.ici-btn-dropdown-action .ici-btn-dropdown-list > li > a {
    color: #FFF
  }

  .ici-btn-dropdown.ici-btn-dropdown-action .ici-btn-dropdown-list > li > a:hover {
    color: #f2f2f2;
    background: #9ad824
  }

  .ici-btn-dropdown.ici-btn-dropdown-highlight .ici-btn-dropdown-list {
    background: rgba(254, 174, 27, 0.95);
    border-color: #e59501
  }

  .ici-btn-dropdown.ici-btn-dropdown-highlight .ici-btn-dropdown-list .ici-btn-dropdown-divider {
    border-color: #f49f01
  }

  .ici-btn-dropdown.ici-btn-dropdown-highlight .ici-btn-dropdown-list > li > a {
    color: #FFF
  }

  .ici-btn-dropdown.ici-btn-dropdown-highlight .ici-btn-dropdown-list > li > a:hover {
    color: #f2f2f2;
    background: #fea502
  }

  .ici-btn-dropdown.ici-btn-dropdown-caution .ici-btn-dropdown-list {
    background: rgba(255, 67, 81, 0.95);
    border-color: #ff1022
  }

  .ici-btn-dropdown.ici-btn-dropdown-caution .ici-btn-dropdown-list .ici-btn-dropdown-divider {
    border-color: #ff1f30
  }

  .ici-btn-dropdown.ici-btn-dropdown-caution .ici-btn-dropdown-list > li > a {
    color: #FFF
  }

  .ici-btn-dropdown.ici-btn-dropdown-caution .ici-btn-dropdown-list > li > a:hover {
    color: #f2f2f2;
    background: #ff2939
  }

  .ici-btn-dropdown.ici-btn-dropdown-royal .ici-btn-dropdown-list {
    background: rgba(123, 114, 233, 0.95);
    border-color: #ad1c38
  }

  .ici-btn-dropdown.ici-btn-dropdown-royal .ici-btn-dropdown-list .ici-btn-dropdown-divider {
    border-color: #b22043
  }

  .ici-btn-dropdown.ici-btn-dropdown-royal .ici-btn-dropdown-list > li > a {
    color: #FFF
  }

  .ici-btn-dropdown.ici-btn-dropdown-royal .ici-btn-dropdown-list > li > a:hover {
    color: #f2f2f2;
    background: #bf1638
  }

  .ici-btn-group {
    position: relative;
    display: inline-block
  }

  .ici-btn-group:after {
    content: " ";
    display: block;
    clear: both
  }

  .ici-btn-group .ici-btn, .ici-btn-group .ici-btn-dropdown {
    float: left
  }

  .ici-btn-group .ici-btn:not(:first-child):not(:last-child), .ici-btn-group .ici-btn-dropdown:not(:first-child):not(:last-child) {
    border-radius: 0;
    border-right: 0
  }

  .ici-btn-group .ici-btn:first-child, .ici-btn-group .ici-btn-dropdown:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0
  }

  .ici-btn-group .ici-btn:last-child, .ici-btn-group .ici-btn-dropdown:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
  }

  .ici-btn-wrap {
    border: 1px solid #e3e3e3;
    display: inline-block;
    padding: 9px;
    background: -webkit-gradient(linear, left top, left bottom, from(#f2f2f2), to(#FFF));
    border-radius: 200px;
    -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04)
  }

  .ici-btn-longshadow, .ici-btn-longshadow-right {
    overflow: hidden
  }

  .ici-btn-longshadow.ici-btn-primary, .ici-btn-longshadow-right.ici-btn-primary {
    text-shadow: 0 0 #0880d7, 1px 1px #0880d7, 2px 2px #0880d7, 3px 3px #0880d7, 4px 4px #0880d7, 5px 5px #0880d7, 6px 6px #0880d7, 7px 7px #0880d7, 8px 8px #0880d7, 9px 9px #0880d7, 10px 10px #0880d7, 11px 11px #0880d7, 12px 12px #0880d7, 13px 13px #0880d7, 14px 14px #0880d7, 15px 15px #0880d7, 16px 16px #0880d7, 17px 17px #0880d7, 18px 18px #0880d7, 19px 19px #0880d7, 20px 20px #0880d7, 21px 21px #0880d7, 22px 22px #0880d7, 23px 23px #0880d7, 24px 24px #0880d7, 25px 25px #0880d7, 26px 26px #0880d7, 27px 27px #0880d7, 28px 28px #0880d7, 29px 29px #0880d7, 30px 30px #0880d7, 31px 31px #0880d7, 32px 32px #0880d7, 33px 33px #0880d7, 34px 34px #0880d7, 35px 35px #0880d7, 36px 36px #0880d7, 37px 37px #0880d7, 38px 38px #0880d7, 39px 39px #0880d7, 40px 40px #0880d7, 41px 41px #0880d7, 42px 42px #0880d7, 43px 43px #0880d7, 44px 44px #0880d7, 45px 45px #0880d7, 46px 46px #0880d7, 47px 47px #0880d7, 48px 48px #0880d7, 49px 49px #0880d7, 50px 50px #0880d7, 51px 51px #0880d7, 52px 52px #0880d7, 53px 53px #0880d7, 54px 54px #0880d7, 55px 55px #0880d7, 56px 56px #0880d7, 57px 57px #0880d7, 58px 58px #0880d7, 59px 59px #0880d7, 60px 60px #0880d7, 61px 61px #0880d7, 62px 62px #0880d7, 63px 63px #0880d7, 64px 64px #0880d7, 65px 65px #0880d7, 66px 66px #0880d7, 67px 67px #0880d7, 68px 68px #0880d7, 69px 69px #0880d7, 70px 70px #0880d7, 71px 71px #0880d7, 72px 72px #0880d7, 73px 73px #0880d7, 74px 74px #0880d7, 75px 75px #0880d7, 76px 76px #0880d7, 77px 77px #0880d7, 78px 78px #0880d7, 79px 79px #0880d7, 80px 80px #0880d7, 81px 81px #0880d7, 82px 82px #0880d7, 83px 83px #0880d7, 84px 84px #0880d7, 85px 85px #0880d7
  }

  .ici-btn-longshadow.ici-btn-primary:active, .ici-btn-longshadow.ici-btn-primary.active, .ici-btn-longshadow.ici-btn-primary.is-active, .ici-btn-longshadow-right.ici-btn-primary:active, .ici-btn-longshadow-right.ici-btn-primary.active, .ici-btn-longshadow-right.ici-btn-primary.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4)
  }

  .ici-btn-longshadow.ici-btn-plain, .ici-btn-longshadow-right.ici-btn-plain {
    text-shadow: 0 0 #e6e6e6, 1px 1px #e6e6e6, 2px 2px #e6e6e6, 3px 3px #e6e6e6, 4px 4px #e6e6e6, 5px 5px #e6e6e6, 6px 6px #e6e6e6, 7px 7px #e6e6e6, 8px 8px #e6e6e6, 9px 9px #e6e6e6, 10px 10px #e6e6e6, 11px 11px #e6e6e6, 12px 12px #e6e6e6, 13px 13px #e6e6e6, 14px 14px #e6e6e6, 15px 15px #e6e6e6, 16px 16px #e6e6e6, 17px 17px #e6e6e6, 18px 18px #e6e6e6, 19px 19px #e6e6e6, 20px 20px #e6e6e6, 21px 21px #e6e6e6, 22px 22px #e6e6e6, 23px 23px #e6e6e6, 24px 24px #e6e6e6, 25px 25px #e6e6e6, 26px 26px #e6e6e6, 27px 27px #e6e6e6, 28px 28px #e6e6e6, 29px 29px #e6e6e6, 30px 30px #e6e6e6, 31px 31px #e6e6e6, 32px 32px #e6e6e6, 33px 33px #e6e6e6, 34px 34px #e6e6e6, 35px 35px #e6e6e6, 36px 36px #e6e6e6, 37px 37px #e6e6e6, 38px 38px #e6e6e6, 39px 39px #e6e6e6, 40px 40px #e6e6e6, 41px 41px #e6e6e6, 42px 42px #e6e6e6, 43px 43px #e6e6e6, 44px 44px #e6e6e6, 45px 45px #e6e6e6, 46px 46px #e6e6e6, 47px 47px #e6e6e6, 48px 48px #e6e6e6, 49px 49px #e6e6e6, 50px 50px #e6e6e6, 51px 51px #e6e6e6, 52px 52px #e6e6e6, 53px 53px #e6e6e6, 54px 54px #e6e6e6, 55px 55px #e6e6e6, 56px 56px #e6e6e6, 57px 57px #e6e6e6, 58px 58px #e6e6e6, 59px 59px #e6e6e6, 60px 60px #e6e6e6, 61px 61px #e6e6e6, 62px 62px #e6e6e6, 63px 63px #e6e6e6, 64px 64px #e6e6e6, 65px 65px #e6e6e6, 66px 66px #e6e6e6, 67px 67px #e6e6e6, 68px 68px #e6e6e6, 69px 69px #e6e6e6, 70px 70px #e6e6e6, 71px 71px #e6e6e6, 72px 72px #e6e6e6, 73px 73px #e6e6e6, 74px 74px #e6e6e6, 75px 75px #e6e6e6, 76px 76px #e6e6e6, 77px 77px #e6e6e6, 78px 78px #e6e6e6, 79px 79px #e6e6e6, 80px 80px #e6e6e6, 81px 81px #e6e6e6, 82px 82px #e6e6e6, 83px 83px #e6e6e6, 84px 84px #e6e6e6, 85px 85px #e6e6e6
  }

  .ici-btn-longshadow.ici-btn-plain:active, .ici-btn-longshadow.ici-btn-plain.active, .ici-btn-longshadow.ici-btn-plain.is-active, .ici-btn-longshadow-right.ici-btn-plain:active, .ici-btn-longshadow-right.ici-btn-plain.active, .ici-btn-longshadow-right.ici-btn-plain.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4)
  }

  .ici-btn-longshadow.ici-btn-inverse, .ici-btn-longshadow-right.ici-btn-inverse {
    text-shadow: 0 0 #090909, 1px 1px #090909, 2px 2px #090909, 3px 3px #090909, 4px 4px #090909, 5px 5px #090909, 6px 6px #090909, 7px 7px #090909, 8px 8px #090909, 9px 9px #090909, 10px 10px #090909, 11px 11px #090909, 12px 12px #090909, 13px 13px #090909, 14px 14px #090909, 15px 15px #090909, 16px 16px #090909, 17px 17px #090909, 18px 18px #090909, 19px 19px #090909, 20px 20px #090909, 21px 21px #090909, 22px 22px #090909, 23px 23px #090909, 24px 24px #090909, 25px 25px #090909, 26px 26px #090909, 27px 27px #090909, 28px 28px #090909, 29px 29px #090909, 30px 30px #090909, 31px 31px #090909, 32px 32px #090909, 33px 33px #090909, 34px 34px #090909, 35px 35px #090909, 36px 36px #090909, 37px 37px #090909, 38px 38px #090909, 39px 39px #090909, 40px 40px #090909, 41px 41px #090909, 42px 42px #090909, 43px 43px #090909, 44px 44px #090909, 45px 45px #090909, 46px 46px #090909, 47px 47px #090909, 48px 48px #090909, 49px 49px #090909, 50px 50px #090909, 51px 51px #090909, 52px 52px #090909, 53px 53px #090909, 54px 54px #090909, 55px 55px #090909, 56px 56px #090909, 57px 57px #090909, 58px 58px #090909, 59px 59px #090909, 60px 60px #090909, 61px 61px #090909, 62px 62px #090909, 63px 63px #090909, 64px 64px #090909, 65px 65px #090909, 66px 66px #090909, 67px 67px #090909, 68px 68px #090909, 69px 69px #090909, 70px 70px #090909, 71px 71px #090909, 72px 72px #090909, 73px 73px #090909, 74px 74px #090909, 75px 75px #090909, 76px 76px #090909, 77px 77px #090909, 78px 78px #090909, 79px 79px #090909, 80px 80px #090909, 81px 81px #090909, 82px 82px #090909, 83px 83px #090909, 84px 84px #090909, 85px 85px #090909
  }

  .ici-btn-longshadow.ici-btn-inverse:active, .ici-btn-longshadow.ici-btn-inverse.active, .ici-btn-longshadow.ici-btn-inverse.is-active, .ici-btn-longshadow-right.ici-btn-inverse:active, .ici-btn-longshadow-right.ici-btn-inverse.active, .ici-btn-longshadow-right.ici-btn-inverse.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4)
  }

  .ici-btn-longshadow.ici-btn-action, .ici-btn-longshadow-right.ici-btn-action {
    text-shadow: 0 0 #8bc220, 1px 1px #8bc220, 2px 2px #8bc220, 3px 3px #8bc220, 4px 4px #8bc220, 5px 5px #8bc220, 6px 6px #8bc220, 7px 7px #8bc220, 8px 8px #8bc220, 9px 9px #8bc220, 10px 10px #8bc220, 11px 11px #8bc220, 12px 12px #8bc220, 13px 13px #8bc220, 14px 14px #8bc220, 15px 15px #8bc220, 16px 16px #8bc220, 17px 17px #8bc220, 18px 18px #8bc220, 19px 19px #8bc220, 20px 20px #8bc220, 21px 21px #8bc220, 22px 22px #8bc220, 23px 23px #8bc220, 24px 24px #8bc220, 25px 25px #8bc220, 26px 26px #8bc220, 27px 27px #8bc220, 28px 28px #8bc220, 29px 29px #8bc220, 30px 30px #8bc220, 31px 31px #8bc220, 32px 32px #8bc220, 33px 33px #8bc220, 34px 34px #8bc220, 35px 35px #8bc220, 36px 36px #8bc220, 37px 37px #8bc220, 38px 38px #8bc220, 39px 39px #8bc220, 40px 40px #8bc220, 41px 41px #8bc220, 42px 42px #8bc220, 43px 43px #8bc220, 44px 44px #8bc220, 45px 45px #8bc220, 46px 46px #8bc220, 47px 47px #8bc220, 48px 48px #8bc220, 49px 49px #8bc220, 50px 50px #8bc220, 51px 51px #8bc220, 52px 52px #8bc220, 53px 53px #8bc220, 54px 54px #8bc220, 55px 55px #8bc220, 56px 56px #8bc220, 57px 57px #8bc220, 58px 58px #8bc220, 59px 59px #8bc220, 60px 60px #8bc220, 61px 61px #8bc220, 62px 62px #8bc220, 63px 63px #8bc220, 64px 64px #8bc220, 65px 65px #8bc220, 66px 66px #8bc220, 67px 67px #8bc220, 68px 68px #8bc220, 69px 69px #8bc220, 70px 70px #8bc220, 71px 71px #8bc220, 72px 72px #8bc220, 73px 73px #8bc220, 74px 74px #8bc220, 75px 75px #8bc220, 76px 76px #8bc220, 77px 77px #8bc220, 78px 78px #8bc220, 79px 79px #8bc220, 80px 80px #8bc220, 81px 81px #8bc220, 82px 82px #8bc220, 83px 83px #8bc220, 84px 84px #8bc220, 85px 85px #8bc220
  }

  .ici-btn-longshadow.ici-btn-action:active, .ici-btn-longshadow.ici-btn-action.active, .ici-btn-longshadow.ici-btn-action.is-active, .ici-btn-longshadow-right.ici-btn-action:active, .ici-btn-longshadow-right.ici-btn-action.active, .ici-btn-longshadow-right.ici-btn-action.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4)
  }

  .ici-btn-longshadow.ici-btn-highlight, .ici-btn-longshadow-right.ici-btn-highlight {
    text-shadow: 0 0 #e59501, 1px 1px #e59501, 2px 2px #e59501, 3px 3px #e59501, 4px 4px #e59501, 5px 5px #e59501, 6px 6px #e59501, 7px 7px #e59501, 8px 8px #e59501, 9px 9px #e59501, 10px 10px #e59501, 11px 11px #e59501, 12px 12px #e59501, 13px 13px #e59501, 14px 14px #e59501, 15px 15px #e59501, 16px 16px #e59501, 17px 17px #e59501, 18px 18px #e59501, 19px 19px #e59501, 20px 20px #e59501, 21px 21px #e59501, 22px 22px #e59501, 23px 23px #e59501, 24px 24px #e59501, 25px 25px #e59501, 26px 26px #e59501, 27px 27px #e59501, 28px 28px #e59501, 29px 29px #e59501, 30px 30px #e59501, 31px 31px #e59501, 32px 32px #e59501, 33px 33px #e59501, 34px 34px #e59501, 35px 35px #e59501, 36px 36px #e59501, 37px 37px #e59501, 38px 38px #e59501, 39px 39px #e59501, 40px 40px #e59501, 41px 41px #e59501, 42px 42px #e59501, 43px 43px #e59501, 44px 44px #e59501, 45px 45px #e59501, 46px 46px #e59501, 47px 47px #e59501, 48px 48px #e59501, 49px 49px #e59501, 50px 50px #e59501, 51px 51px #e59501, 52px 52px #e59501, 53px 53px #e59501, 54px 54px #e59501, 55px 55px #e59501, 56px 56px #e59501, 57px 57px #e59501, 58px 58px #e59501, 59px 59px #e59501, 60px 60px #e59501, 61px 61px #e59501, 62px 62px #e59501, 63px 63px #e59501, 64px 64px #e59501, 65px 65px #e59501, 66px 66px #e59501, 67px 67px #e59501, 68px 68px #e59501, 69px 69px #e59501, 70px 70px #e59501, 71px 71px #e59501, 72px 72px #e59501, 73px 73px #e59501, 74px 74px #e59501, 75px 75px #e59501, 76px 76px #e59501, 77px 77px #e59501, 78px 78px #e59501, 79px 79px #e59501, 80px 80px #e59501, 81px 81px #e59501, 82px 82px #e59501, 83px 83px #e59501, 84px 84px #e59501, 85px 85px #e59501
  }

  .ici-btn-longshadow.ici-btn-highlight:active, .ici-btn-longshadow.ici-btn-highlight.active, .ici-btn-longshadow.ici-btn-highlight.is-active, .ici-btn-longshadow-right.ici-btn-highlight:active, .ici-btn-longshadow-right.ici-btn-highlight.active, .ici-btn-longshadow-right.ici-btn-highlight.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4)
  }

  .ici-btn-longshadow.ici-btn-caution, .ici-btn-longshadow-right.ici-btn-caution {
    text-shadow: 0 0 #ff1022, 1px 1px #ff1022, 2px 2px #ff1022, 3px 3px #ff1022, 4px 4px #ff1022, 5px 5px #ff1022, 6px 6px #ff1022, 7px 7px #ff1022, 8px 8px #ff1022, 9px 9px #ff1022, 10px 10px #ff1022, 11px 11px #ff1022, 12px 12px #ff1022, 13px 13px #ff1022, 14px 14px #ff1022, 15px 15px #ff1022, 16px 16px #ff1022, 17px 17px #ff1022, 18px 18px #ff1022, 19px 19px #ff1022, 20px 20px #ff1022, 21px 21px #ff1022, 22px 22px #ff1022, 23px 23px #ff1022, 24px 24px #ff1022, 25px 25px #ff1022, 26px 26px #ff1022, 27px 27px #ff1022, 28px 28px #ff1022, 29px 29px #ff1022, 30px 30px #ff1022, 31px 31px #ff1022, 32px 32px #ff1022, 33px 33px #ff1022, 34px 34px #ff1022, 35px 35px #ff1022, 36px 36px #ff1022, 37px 37px #ff1022, 38px 38px #ff1022, 39px 39px #ff1022, 40px 40px #ff1022, 41px 41px #ff1022, 42px 42px #ff1022, 43px 43px #ff1022, 44px 44px #ff1022, 45px 45px #ff1022, 46px 46px #ff1022, 47px 47px #ff1022, 48px 48px #ff1022, 49px 49px #ff1022, 50px 50px #ff1022, 51px 51px #ff1022, 52px 52px #ff1022, 53px 53px #ff1022, 54px 54px #ff1022, 55px 55px #ff1022, 56px 56px #ff1022, 57px 57px #ff1022, 58px 58px #ff1022, 59px 59px #ff1022, 60px 60px #ff1022, 61px 61px #ff1022, 62px 62px #ff1022, 63px 63px #ff1022, 64px 64px #ff1022, 65px 65px #ff1022, 66px 66px #ff1022, 67px 67px #ff1022, 68px 68px #ff1022, 69px 69px #ff1022, 70px 70px #ff1022, 71px 71px #ff1022, 72px 72px #ff1022, 73px 73px #ff1022, 74px 74px #ff1022, 75px 75px #ff1022, 76px 76px #ff1022, 77px 77px #ff1022, 78px 78px #ff1022, 79px 79px #ff1022, 80px 80px #ff1022, 81px 81px #ff1022, 82px 82px #ff1022, 83px 83px #ff1022, 84px 84px #ff1022, 85px 85px #ff1022
  }

  .ici-btn-longshadow.ici-btn-caution:active, .ici-btn-longshadow.ici-btn-caution.active, .ici-btn-longshadow.ici-btn-caution.is-active, .ici-btn-longshadow-right.ici-btn-caution:active, .ici-btn-longshadow-right.ici-btn-caution.active, .ici-btn-longshadow-right.ici-btn-caution.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4)
  }

  .ici-btn-longshadow.ici-btn-royal, .ici-btn-longshadow-right.ici-btn-royal {
    text-shadow: 0 0 #ad1c38, 1px 1px #ad1c38, 2px 2px #ad1c38, 3px 3px #ad1c38, 4px 4px #ad1c38, 5px 5px #ad1c38, 6px 6px #ad1c38, 7px 7px #ad1c38, 8px 8px #ad1c38, 9px 9px #ad1c38, 10px 10px #ad1c38, 11px 11px #ad1c38, 12px 12px #ad1c38, 13px 13px #ad1c38, 14px 14px #ad1c38, 15px 15px #ad1c38, 16px 16px #ad1c38, 17px 17px #ad1c38, 18px 18px #ad1c38, 19px 19px #ad1c38, 20px 20px #ad1c38, 21px 21px #ad1c38, 22px 22px #ad1c38, 23px 23px #ad1c38, 24px 24px #ad1c38, 25px 25px #ad1c38, 26px 26px #ad1c38, 27px 27px #ad1c38, 28px 28px #ad1c38, 29px 29px #ad1c38, 30px 30px #ad1c38, 31px 31px #ad1c38, 32px 32px #ad1c38, 33px 33px #ad1c38, 34px 34px #ad1c38, 35px 35px #ad1c38, 36px 36px #ad1c38, 37px 37px #ad1c38, 38px 38px #ad1c38, 39px 39px #ad1c38, 40px 40px #ad1c38, 41px 41px #ad1c38, 42px 42px #ad1c38, 43px 43px #ad1c38, 44px 44px #ad1c38, 45px 45px #ad1c38, 46px 46px #ad1c38, 47px 47px #ad1c38, 48px 48px #ad1c38, 49px 49px #ad1c38, 50px 50px #ad1c38, 51px 51px #ad1c38, 52px 52px #ad1c38, 53px 53px #ad1c38, 54px 54px #ad1c38, 55px 55px #ad1c38, 56px 56px #ad1c38, 57px 57px #ad1c38, 58px 58px #ad1c38, 59px 59px #ad1c38, 60px 60px #ad1c38, 61px 61px #ad1c38, 62px 62px #ad1c38, 63px 63px #ad1c38, 64px 64px #ad1c38, 65px 65px #ad1c38, 66px 66px #ad1c38, 67px 67px #ad1c38, 68px 68px #ad1c38, 69px 69px #ad1c38, 70px 70px #ad1c38, 71px 71px #ad1c38, 72px 72px #ad1c38, 73px 73px #ad1c38, 74px 74px #ad1c38, 75px 75px #ad1c38, 76px 76px #ad1c38, 77px 77px #ad1c38, 78px 78px #ad1c38, 79px 79px #ad1c38, 80px 80px #ad1c38, 81px 81px #ad1c38, 82px 82px #ad1c38, 83px 83px #ad1c38, 84px 84px #ad1c38, 85px 85px #ad1c38
  }

  .ici-btn-longshadow.ici-btn-royal:active, .ici-btn-longshadow.ici-btn-royal.active, .ici-btn-longshadow.ici-btn-royal.is-active, .ici-btn-longshadow-right.ici-btn-royal:active, .ici-btn-longshadow-right.ici-btn-royal.active, .ici-btn-longshadow-right.ici-btn-royal.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4)
  }

  .ici-btn-longshadow-left {
    overflow: hidden
  }

  .ici-btn-longshadow-left.ici-btn-primary {
    text-shadow: 0 0 #0880d7, -1px 1px #0880d7, -2px 2px #0880d7, -3px 3px #0880d7, -4px 4px #0880d7, -5px 5px #0880d7, -6px 6px #0880d7, -7px 7px #0880d7, -8px 8px #0880d7, -9px 9px #0880d7, -10px 10px #0880d7, -11px 11px #0880d7, -12px 12px #0880d7, -13px 13px #0880d7, -14px 14px #0880d7, -15px 15px #0880d7, -16px 16px #0880d7, -17px 17px #0880d7, -18px 18px #0880d7, -19px 19px #0880d7, -20px 20px #0880d7, -21px 21px #0880d7, -22px 22px #0880d7, -23px 23px #0880d7, -24px 24px #0880d7, -25px 25px #0880d7, -26px 26px #0880d7, -27px 27px #0880d7, -28px 28px #0880d7, -29px 29px #0880d7, -30px 30px #0880d7, -31px 31px #0880d7, -32px 32px #0880d7, -33px 33px #0880d7, -34px 34px #0880d7, -35px 35px #0880d7, -36px 36px #0880d7, -37px 37px #0880d7, -38px 38px #0880d7, -39px 39px #0880d7, -40px 40px #0880d7, -41px 41px #0880d7, -42px 42px #0880d7, -43px 43px #0880d7, -44px 44px #0880d7, -45px 45px #0880d7, -46px 46px #0880d7, -47px 47px #0880d7, -48px 48px #0880d7, -49px 49px #0880d7, -50px 50px #0880d7, -51px 51px #0880d7, -52px 52px #0880d7, -53px 53px #0880d7, -54px 54px #0880d7, -55px 55px #0880d7, -56px 56px #0880d7, -57px 57px #0880d7, -58px 58px #0880d7, -59px 59px #0880d7, -60px 60px #0880d7, -61px 61px #0880d7, -62px 62px #0880d7, -63px 63px #0880d7, -64px 64px #0880d7, -65px 65px #0880d7, -66px 66px #0880d7, -67px 67px #0880d7, -68px 68px #0880d7, -69px 69px #0880d7, -70px 70px #0880d7, -71px 71px #0880d7, -72px 72px #0880d7, -73px 73px #0880d7, -74px 74px #0880d7, -75px 75px #0880d7, -76px 76px #0880d7, -77px 77px #0880d7, -78px 78px #0880d7, -79px 79px #0880d7, -80px 80px #0880d7, -81px 81px #0880d7, -82px 82px #0880d7, -83px 83px #0880d7, -84px 84px #0880d7, -85px 85px #0880d7
  }

  .ici-btn-longshadow-left.ici-btn-primary:active, .ici-btn-longshadow-left.ici-btn-primary.active, .ici-btn-longshadow-left.ici-btn-primary.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4)
  }

  .ici-btn-longshadow-left.ici-btn-plain {
    text-shadow: 0 0 #e6e6e6, -1px 1px #e6e6e6, -2px 2px #e6e6e6, -3px 3px #e6e6e6, -4px 4px #e6e6e6, -5px 5px #e6e6e6, -6px 6px #e6e6e6, -7px 7px #e6e6e6, -8px 8px #e6e6e6, -9px 9px #e6e6e6, -10px 10px #e6e6e6, -11px 11px #e6e6e6, -12px 12px #e6e6e6, -13px 13px #e6e6e6, -14px 14px #e6e6e6, -15px 15px #e6e6e6, -16px 16px #e6e6e6, -17px 17px #e6e6e6, -18px 18px #e6e6e6, -19px 19px #e6e6e6, -20px 20px #e6e6e6, -21px 21px #e6e6e6, -22px 22px #e6e6e6, -23px 23px #e6e6e6, -24px 24px #e6e6e6, -25px 25px #e6e6e6, -26px 26px #e6e6e6, -27px 27px #e6e6e6, -28px 28px #e6e6e6, -29px 29px #e6e6e6, -30px 30px #e6e6e6, -31px 31px #e6e6e6, -32px 32px #e6e6e6, -33px 33px #e6e6e6, -34px 34px #e6e6e6, -35px 35px #e6e6e6, -36px 36px #e6e6e6, -37px 37px #e6e6e6, -38px 38px #e6e6e6, -39px 39px #e6e6e6, -40px 40px #e6e6e6, -41px 41px #e6e6e6, -42px 42px #e6e6e6, -43px 43px #e6e6e6, -44px 44px #e6e6e6, -45px 45px #e6e6e6, -46px 46px #e6e6e6, -47px 47px #e6e6e6, -48px 48px #e6e6e6, -49px 49px #e6e6e6, -50px 50px #e6e6e6, -51px 51px #e6e6e6, -52px 52px #e6e6e6, -53px 53px #e6e6e6, -54px 54px #e6e6e6, -55px 55px #e6e6e6, -56px 56px #e6e6e6, -57px 57px #e6e6e6, -58px 58px #e6e6e6, -59px 59px #e6e6e6, -60px 60px #e6e6e6, -61px 61px #e6e6e6, -62px 62px #e6e6e6, -63px 63px #e6e6e6, -64px 64px #e6e6e6, -65px 65px #e6e6e6, -66px 66px #e6e6e6, -67px 67px #e6e6e6, -68px 68px #e6e6e6, -69px 69px #e6e6e6, -70px 70px #e6e6e6, -71px 71px #e6e6e6, -72px 72px #e6e6e6, -73px 73px #e6e6e6, -74px 74px #e6e6e6, -75px 75px #e6e6e6, -76px 76px #e6e6e6, -77px 77px #e6e6e6, -78px 78px #e6e6e6, -79px 79px #e6e6e6, -80px 80px #e6e6e6, -81px 81px #e6e6e6, -82px 82px #e6e6e6, -83px 83px #e6e6e6, -84px 84px #e6e6e6, -85px 85px #e6e6e6
  }

  .ici-btn-longshadow-left.ici-btn-plain:active, .ici-btn-longshadow-left.ici-btn-plain.active, .ici-btn-longshadow-left.ici-btn-plain.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4)
  }

  .ici-btn-longshadow-left.ici-btn-inverse {
    text-shadow: 0 0 #090909, -1px 1px #090909, -2px 2px #090909, -3px 3px #090909, -4px 4px #090909, -5px 5px #090909, -6px 6px #090909, -7px 7px #090909, -8px 8px #090909, -9px 9px #090909, -10px 10px #090909, -11px 11px #090909, -12px 12px #090909, -13px 13px #090909, -14px 14px #090909, -15px 15px #090909, -16px 16px #090909, -17px 17px #090909, -18px 18px #090909, -19px 19px #090909, -20px 20px #090909, -21px 21px #090909, -22px 22px #090909, -23px 23px #090909, -24px 24px #090909, -25px 25px #090909, -26px 26px #090909, -27px 27px #090909, -28px 28px #090909, -29px 29px #090909, -30px 30px #090909, -31px 31px #090909, -32px 32px #090909, -33px 33px #090909, -34px 34px #090909, -35px 35px #090909, -36px 36px #090909, -37px 37px #090909, -38px 38px #090909, -39px 39px #090909, -40px 40px #090909, -41px 41px #090909, -42px 42px #090909, -43px 43px #090909, -44px 44px #090909, -45px 45px #090909, -46px 46px #090909, -47px 47px #090909, -48px 48px #090909, -49px 49px #090909, -50px 50px #090909, -51px 51px #090909, -52px 52px #090909, -53px 53px #090909, -54px 54px #090909, -55px 55px #090909, -56px 56px #090909, -57px 57px #090909, -58px 58px #090909, -59px 59px #090909, -60px 60px #090909, -61px 61px #090909, -62px 62px #090909, -63px 63px #090909, -64px 64px #090909, -65px 65px #090909, -66px 66px #090909, -67px 67px #090909, -68px 68px #090909, -69px 69px #090909, -70px 70px #090909, -71px 71px #090909, -72px 72px #090909, -73px 73px #090909, -74px 74px #090909, -75px 75px #090909, -76px 76px #090909, -77px 77px #090909, -78px 78px #090909, -79px 79px #090909, -80px 80px #090909, -81px 81px #090909, -82px 82px #090909, -83px 83px #090909, -84px 84px #090909, -85px 85px #090909
  }

  .ici-btn-longshadow-left.ici-btn-inverse:active, .ici-btn-longshadow-left.ici-btn-inverse.active, .ici-btn-longshadow-left.ici-btn-inverse.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4)
  }

  .ici-btn-longshadow-left.ici-btn-action {
    text-shadow: 0 0 #8bc220, -1px 1px #8bc220, -2px 2px #8bc220, -3px 3px #8bc220, -4px 4px #8bc220, -5px 5px #8bc220, -6px 6px #8bc220, -7px 7px #8bc220, -8px 8px #8bc220, -9px 9px #8bc220, -10px 10px #8bc220, -11px 11px #8bc220, -12px 12px #8bc220, -13px 13px #8bc220, -14px 14px #8bc220, -15px 15px #8bc220, -16px 16px #8bc220, -17px 17px #8bc220, -18px 18px #8bc220, -19px 19px #8bc220, -20px 20px #8bc220, -21px 21px #8bc220, -22px 22px #8bc220, -23px 23px #8bc220, -24px 24px #8bc220, -25px 25px #8bc220, -26px 26px #8bc220, -27px 27px #8bc220, -28px 28px #8bc220, -29px 29px #8bc220, -30px 30px #8bc220, -31px 31px #8bc220, -32px 32px #8bc220, -33px 33px #8bc220, -34px 34px #8bc220, -35px 35px #8bc220, -36px 36px #8bc220, -37px 37px #8bc220, -38px 38px #8bc220, -39px 39px #8bc220, -40px 40px #8bc220, -41px 41px #8bc220, -42px 42px #8bc220, -43px 43px #8bc220, -44px 44px #8bc220, -45px 45px #8bc220, -46px 46px #8bc220, -47px 47px #8bc220, -48px 48px #8bc220, -49px 49px #8bc220, -50px 50px #8bc220, -51px 51px #8bc220, -52px 52px #8bc220, -53px 53px #8bc220, -54px 54px #8bc220, -55px 55px #8bc220, -56px 56px #8bc220, -57px 57px #8bc220, -58px 58px #8bc220, -59px 59px #8bc220, -60px 60px #8bc220, -61px 61px #8bc220, -62px 62px #8bc220, -63px 63px #8bc220, -64px 64px #8bc220, -65px 65px #8bc220, -66px 66px #8bc220, -67px 67px #8bc220, -68px 68px #8bc220, -69px 69px #8bc220, -70px 70px #8bc220, -71px 71px #8bc220, -72px 72px #8bc220, -73px 73px #8bc220, -74px 74px #8bc220, -75px 75px #8bc220, -76px 76px #8bc220, -77px 77px #8bc220, -78px 78px #8bc220, -79px 79px #8bc220, -80px 80px #8bc220, -81px 81px #8bc220, -82px 82px #8bc220, -83px 83px #8bc220, -84px 84px #8bc220, -85px 85px #8bc220
  }

  .ici-btn-longshadow-left.ici-btn-action:active, .ici-btn-longshadow-left.ici-btn-action.active, .ici-btn-longshadow-left.ici-btn-action.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4)
  }

  .ici-btn-longshadow-left.ici-btn-highlight {
    text-shadow: 0 0 #e59501, -1px 1px #e59501, -2px 2px #e59501, -3px 3px #e59501, -4px 4px #e59501, -5px 5px #e59501, -6px 6px #e59501, -7px 7px #e59501, -8px 8px #e59501, -9px 9px #e59501, -10px 10px #e59501, -11px 11px #e59501, -12px 12px #e59501, -13px 13px #e59501, -14px 14px #e59501, -15px 15px #e59501, -16px 16px #e59501, -17px 17px #e59501, -18px 18px #e59501, -19px 19px #e59501, -20px 20px #e59501, -21px 21px #e59501, -22px 22px #e59501, -23px 23px #e59501, -24px 24px #e59501, -25px 25px #e59501, -26px 26px #e59501, -27px 27px #e59501, -28px 28px #e59501, -29px 29px #e59501, -30px 30px #e59501, -31px 31px #e59501, -32px 32px #e59501, -33px 33px #e59501, -34px 34px #e59501, -35px 35px #e59501, -36px 36px #e59501, -37px 37px #e59501, -38px 38px #e59501, -39px 39px #e59501, -40px 40px #e59501, -41px 41px #e59501, -42px 42px #e59501, -43px 43px #e59501, -44px 44px #e59501, -45px 45px #e59501, -46px 46px #e59501, -47px 47px #e59501, -48px 48px #e59501, -49px 49px #e59501, -50px 50px #e59501, -51px 51px #e59501, -52px 52px #e59501, -53px 53px #e59501, -54px 54px #e59501, -55px 55px #e59501, -56px 56px #e59501, -57px 57px #e59501, -58px 58px #e59501, -59px 59px #e59501, -60px 60px #e59501, -61px 61px #e59501, -62px 62px #e59501, -63px 63px #e59501, -64px 64px #e59501, -65px 65px #e59501, -66px 66px #e59501, -67px 67px #e59501, -68px 68px #e59501, -69px 69px #e59501, -70px 70px #e59501, -71px 71px #e59501, -72px 72px #e59501, -73px 73px #e59501, -74px 74px #e59501, -75px 75px #e59501, -76px 76px #e59501, -77px 77px #e59501, -78px 78px #e59501, -79px 79px #e59501, -80px 80px #e59501, -81px 81px #e59501, -82px 82px #e59501, -83px 83px #e59501, -84px 84px #e59501, -85px 85px #e59501
  }

  .ici-btn-longshadow-left.ici-btn-highlight:active, .ici-btn-longshadow-left.ici-btn-highlight.active, .ici-btn-longshadow-left.ici-btn-highlight.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4)
  }

  .ici-btn-longshadow-left.ici-btn-caution {
    text-shadow: 0 0 #ff1022, -1px 1px #ff1022, -2px 2px #ff1022, -3px 3px #ff1022, -4px 4px #ff1022, -5px 5px #ff1022, -6px 6px #ff1022, -7px 7px #ff1022, -8px 8px #ff1022, -9px 9px #ff1022, -10px 10px #ff1022, -11px 11px #ff1022, -12px 12px #ff1022, -13px 13px #ff1022, -14px 14px #ff1022, -15px 15px #ff1022, -16px 16px #ff1022, -17px 17px #ff1022, -18px 18px #ff1022, -19px 19px #ff1022, -20px 20px #ff1022, -21px 21px #ff1022, -22px 22px #ff1022, -23px 23px #ff1022, -24px 24px #ff1022, -25px 25px #ff1022, -26px 26px #ff1022, -27px 27px #ff1022, -28px 28px #ff1022, -29px 29px #ff1022, -30px 30px #ff1022, -31px 31px #ff1022, -32px 32px #ff1022, -33px 33px #ff1022, -34px 34px #ff1022, -35px 35px #ff1022, -36px 36px #ff1022, -37px 37px #ff1022, -38px 38px #ff1022, -39px 39px #ff1022, -40px 40px #ff1022, -41px 41px #ff1022, -42px 42px #ff1022, -43px 43px #ff1022, -44px 44px #ff1022, -45px 45px #ff1022, -46px 46px #ff1022, -47px 47px #ff1022, -48px 48px #ff1022, -49px 49px #ff1022, -50px 50px #ff1022, -51px 51px #ff1022, -52px 52px #ff1022, -53px 53px #ff1022, -54px 54px #ff1022, -55px 55px #ff1022, -56px 56px #ff1022, -57px 57px #ff1022, -58px 58px #ff1022, -59px 59px #ff1022, -60px 60px #ff1022, -61px 61px #ff1022, -62px 62px #ff1022, -63px 63px #ff1022, -64px 64px #ff1022, -65px 65px #ff1022, -66px 66px #ff1022, -67px 67px #ff1022, -68px 68px #ff1022, -69px 69px #ff1022, -70px 70px #ff1022, -71px 71px #ff1022, -72px 72px #ff1022, -73px 73px #ff1022, -74px 74px #ff1022, -75px 75px #ff1022, -76px 76px #ff1022, -77px 77px #ff1022, -78px 78px #ff1022, -79px 79px #ff1022, -80px 80px #ff1022, -81px 81px #ff1022, -82px 82px #ff1022, -83px 83px #ff1022, -84px 84px #ff1022, -85px 85px #ff1022
  }

  .ici-btn-longshadow-left.ici-btn-caution:active, .ici-btn-longshadow-left.ici-btn-caution.active, .ici-btn-longshadow-left.ici-btn-caution.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4)
  }

  .ici-btn-longshadow-left.ici-btn-royal {
    text-shadow: 0 0 #ad1c38, -1px 1px #ad1c38, -2px 2px #ad1c38, -3px 3px #ad1c38, -4px 4px #ad1c38, -5px 5px #ad1c38, -6px 6px #ad1c38, -7px 7px #ad1c38, -8px 8px #ad1c38, -9px 9px #ad1c38, -10px 10px #ad1c38, -11px 11px #ad1c38, -12px 12px #ad1c38, -13px 13px #ad1c38, -14px 14px #ad1c38, -15px 15px #ad1c38, -16px 16px #ad1c38, -17px 17px #ad1c38, -18px 18px #ad1c38, -19px 19px #ad1c38, -20px 20px #ad1c38, -21px 21px #ad1c38, -22px 22px #ad1c38, -23px 23px #ad1c38, -24px 24px #ad1c38, -25px 25px #ad1c38, -26px 26px #ad1c38, -27px 27px #ad1c38, -28px 28px #ad1c38, -29px 29px #ad1c38, -30px 30px #ad1c38, -31px 31px #ad1c38, -32px 32px #ad1c38, -33px 33px #ad1c38, -34px 34px #ad1c38, -35px 35px #ad1c38, -36px 36px #ad1c38, -37px 37px #ad1c38, -38px 38px #ad1c38, -39px 39px #ad1c38, -40px 40px #ad1c38, -41px 41px #ad1c38, -42px 42px #ad1c38, -43px 43px #ad1c38, -44px 44px #ad1c38, -45px 45px #ad1c38, -46px 46px #ad1c38, -47px 47px #ad1c38, -48px 48px #ad1c38, -49px 49px #ad1c38, -50px 50px #ad1c38, -51px 51px #ad1c38, -52px 52px #ad1c38, -53px 53px #ad1c38, -54px 54px #ad1c38, -55px 55px #ad1c38, -56px 56px #ad1c38, -57px 57px #ad1c38, -58px 58px #ad1c38, -59px 59px #ad1c38, -60px 60px #ad1c38, -61px 61px #ad1c38, -62px 62px #ad1c38, -63px 63px #ad1c38, -64px 64px #ad1c38, -65px 65px #ad1c38, -66px 66px #ad1c38, -67px 67px #ad1c38, -68px 68px #ad1c38, -69px 69px #ad1c38, -70px 70px #ad1c38, -71px 71px #ad1c38, -72px 72px #ad1c38, -73px 73px #ad1c38, -74px 74px #ad1c38, -75px 75px #ad1c38, -76px 76px #ad1c38, -77px 77px #ad1c38, -78px 78px #ad1c38, -79px 79px #ad1c38, -80px 80px #ad1c38, -81px 81px #ad1c38, -82px 82px #ad1c38, -83px 83px #ad1c38, -84px 84px #ad1c38, -85px 85px #ad1c38
  }

  .ici-btn-longshadow-left.ici-btn-royal:active, .ici-btn-longshadow-left.ici-btn-royal.active, .ici-btn-longshadow-left.ici-btn-royal.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4)
  }

  .ici-btn-giant {
    font-size: 28px;
    height: 70px;
    line-height: 70px;
    padding: 0 70px
  }

  .ici-btn-jumbo {
    font-size: 24px;
    height: 60px;
    line-height: 60px;
    padding: 0 60px
  }

  .ici-btn-large {
    font-size: 20px;
    height: 50px;
    line-height: 50px;
    padding: 0 50px
  }

  .ici-btn-normal {
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    padding: 0 40px
  }

  .ici-btn-small {
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    padding: 0 30px
  }

  .ici-btn-tiny {
    font-size: 9.6px;
    height: 24px;
    line-height: 24px;
    padding: 0 24px
  }

  .ici-btn-block {
    width: 100%;
  }


</style>
