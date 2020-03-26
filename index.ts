import Vue from 'vue'
interface iciUi {
  iciButton:Vue.Component,
  iciLoading:Vue.Component,
  iciIcon:Vue.Component,
  iciMultipleField:Vue.Component,
  iciRadioField:Vue.Component,
  iciInput:Vue.Component,
  iciInputGroup:Vue.Component,
  iciPopup:Vue.Component,
  iciModal:Vue.Component,
  iciSearch:Vue.Component,
  iciHint:Vue.Component,
  iciHeader:Vue.Component,
  iciBgimg:Vue.Component,
  iciDrawer:Vue.Component,
  iciScroll:Vue.Component,
  iciPoptip:Vue.Component,
  iciColorIcon:Vue.Component,
  install (vue: typeof Vue, options: {locale: any, i18n: any, size: string,store:any}): void
  funs:any,
}


let d:iciUi;

export default d