import MD5 from 'js-md5'
export const getMd5 = MD5;

/*
* 去除左右边空(或指定内容)
* @param {string} str 需要求处理的字符串
* @param {String} s 可选 需要去除左右边的字符 默认为空白字符；
* */
export function trim(str, s) {
  if (typeof str == 'string') {
    var l = ltrim(str, s)
    var r = rtrim(l, s)
    return r;
  }
  else {
    return str
  }
}

/*
* 去除左边空(或指定内容)
* @param {string} str 需要求处理的字符串
* @param {String} s 可选 需要去除左边的字符 默认为空白字符；
* */
export function ltrim(str, s) {
  if (typeof str == 'string') {
    if (!s) s = '\\s'
    var reg = new RegExp('^(' + s + ')*')
    return str.replace(reg, '')
  }
  else {
    return str
  }
}

/*
* 去除右边空(或指定内容)
* @param {string} str 需要求处理的字符串
* @param {String} s 可选 需要去除右边的字符 默认为空白字符；
* */
export function rtrim(str, s) {
  if (typeof str == 'string') {
    if (!s) s = '\\s'
    var reg = new RegExp('(' + s + ')*$')
    return str.replace(reg, '')
  }
  else {
    return str
  }
}

/*
* 复制文本，执行该函数，文本将会写入的粘贴板，后续用户可以进行粘贴操作
* @param {String} string 需要复制的文本
* */
export function copyText(string) {
  var oInput = document.getElementById('ici-copy');

  if (!oInput) {
    var oInput = document.createElement('input');
    oInput.setAttribute('id', 'ici-copy');
    oInput.setAttribute('type', 'text');
    oInput.style.position = 'fixed';
    oInput.style.bottom = '-40px';
    oInput.style.left = '-40px';
    document.body.appendChild(oInput);
  }

  oInput.value = string;
  oInput.select(); // 选择对象
  document.execCommand("Copy"); // 执行浏览器复制命令
  //console.log('复制成功');
}

/*
* 把\r\n换行符转成html的<br>换行符
* @param {String} string 字符串
* */
export function rnTobr(string){
  if(typeof string ==="string" && string.indexOf('\n')>-1){
    return string.replace(/\n/g,'<br>')
  }else{
    return string;
  }
}


//加粗匹配的关键字
//@param str匹配的内容
//@param key匹配关键字
//可选 @param color 匹配关键字的颜色，默认为绿色;

export function boldKey(str, key,color) {
  if(!color) color = 'rgb(77,200,107)';
  if (typeof str === 'string' && typeof key === 'string') {
    var s = key.replace(/([\(\)\[\]\*])/g, '\\$1').replace(/\+/g, '');
    return str.replace(new RegExp('(' + s + ')', 'ig'), `<b style="color:${color}">$1</b>`)
  }
  else {
    return str;
  }
}

/*
* 一维数组去重
* @param arr {Array}  一维数组
* @return 去重后的一维数组
* */
export function arrayUnique (arr) {
  var res = [];
  var json = {};
  for (var i = 0; i < arr.length; i++) {
    var key = arr[i]
    if(typeof arr[i] ==='object' && arr[i]!=null){
      key = JSON.stringify(arr[i])
    }
    if (!json[key] && arr[i]) {
      res.push(arr[i]);
      json[key] = 1;
    }
  }
  return res;
}

/**
 * 判断元素是否在数组里
 * @param arr 原数组
 * @param item 元素
 * @return Boolean
 */
export function inArray (arr, item) {
  if(arr && arr.length && item &&  arr.some((v)=>v===item)){
    return true;
  }else{
    return false
  }
}

/**
 * 从数组中删除元素，此操作会在原数中直接删除，只删除第一个匹配到的元素
 * @param arr 原数组
 * @param item 删除项
 * @return Array 如果删除成功，返回被删除的元素，失败返回undefault
 */
export function removeArrayItem (arr, item) {
  if (arr && arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}


//可编辑事件函数，去除html，只保留文本
export function contenteditable(e) {

  e.preventDefault();
  var text = null;

  if(window.clipboardData && clipboardData.setData) {
    // IE
    text = window.clipboardData.getData('text');
  } else {
    text = (e.originalEvent || e).clipboardData.getData('text/plain') || prompt('Enter the text here!');
  }
  if (document.body.createTextRange) {
    if (document.selection) {
      textRange = document.selection.createRange();
    } else if (window.getSelection) {
      sel = window.getSelection();
      var range = sel.getRangeAt(0);

      // 创建临时元素，使得TextRange可以移动到正确的位置
      var tempEl = document.createElement("span");
      tempEl.innerHTML = "&#FEFF;";
      range.deleteContents();
      range.insertNode(tempEl);
      textRange = document.body.createTextRange();
      textRange.moveToElementText(tempEl);
      tempEl.parentNode.removeChild(tempEl);
    }
    textRange.text = text;
    textRange.collapse(false);
    textRange.select();
  } else {
    // Chrome之类浏览器
    document.execCommand("insertText", false, text);
  }
}

/*
* 是否是对象
* @param obj 需要判断的对象
* */
export function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

/*
* 对象是否为空
* @param obj 需要判断的对象
* */
export function isEmptyObject(obj) {
  //不是对象返回true
  if(isObject(obj)) {
    for (var i in obj) {
      return false;
    }
    return true;
  }
}
