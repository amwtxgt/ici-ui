<template>
  <div :class="['loading',{disabled:disabled}]">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" :width="sizeValue[0]" :height="sizeValue[1]" viewBox="0 0 34 30"  xml:space="preserve">
        <rect :class="['rect-black',{'rect-white':backWhite}]" x="0" y="0" width="4" height="8">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"></animateTransform>
        </rect>
        <rect :class="['rect-red',{'rect-white':backWhite}]" x="8" y="0" width="4" height="8">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animateTransform>
        </rect>
        <rect :class="['rect-red',{'rect-white':backWhite}]" x="16" y="0" width="4" height="8">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animateTransform>
        </rect>
        <rect :class="['rect-black',{'rect-white':backWhite}]" x="24" y="0" width="4" height="8">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.45s" dur="0.6s" repeatCount="indefinite"></animateTransform>
        </rect>
    </svg>
  </div>

</template>

<script>
  export default {
    name: 'a-loading',
    data() {
      return {};
    },
    computed: {
      sizeValue() {
        var obj = ['34px', '30px'];
        switch (this.size) {
          case 'small':
            obj = ['26px', '22px'];
            break;
          case 'big':
            obj = ['54px', '50px'];
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
    },
  };
</script>

<style>
  div.loading {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }

  .disabled {
    opacity: 0.5;
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

</style>
