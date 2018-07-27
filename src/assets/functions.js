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

export function ltrim(str, s) {
  if (typeof str == 'string') {
    if (!s) s = '\\s'
    var reg = new RegExp('^[' + s + ']*')
    return str.replace(reg, '')
  }
  else {
    return str
  }
}

export function rtrim(str, s) {
  if (typeof str == 'string') {
    if (!s) s = '\\s'
    var reg = new RegExp('[' + s + ']*$')
    return str.replace(reg, '')
  }
  else {
    return str
  }
}


/**
 * 创建一个纯函数的缓存版本。
 */
export function cached(fn) {
  var cache = Object.create(null);
  return (function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  })
}


//为一个只有一个字符串参数的promise函数创建一个带有缓存的promise函数
export function cachedPromise(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var key = ''
    if (typeof str === 'string' || typeof str === 'number') {
      key = str.toString();
    }
    else if (typeof str === 'object' && str !== null) {
      key = md5(JSON.stringify(str));
    }

    var hit = cache[key];
    if (hit) {
      return hit
    }
    else {
      cache[key] = fn(str)
      return cache[key];
    }
  }
}

//一维数组去重
export function arrayUnique (arr) {
  var res = [];
  var json = {};
  for (var i = 0; i < arr.length; i++) {
    var key = arr[i]
    if(typeof arr[i] ==='object' && arr[i]!=null){
      key = JSON.stringify(arr[i])
    }
    if (!json[key]) {
      res.push(arr[i]);
      json[key] = 1;
    }
  }
  return res;
}


//可编辑事件函数，去除html，只保留文本
export function contenteditable(e) {

  e.preventDefault();
  var text = null;

  if(window.clipboardData && clipboardData.setData) {
    // IE
    text = window.clipboardData.getData('text');
  } else {
    text = (e.originalEvent || e).clipboardData.getData('text/plain') || prompt('Enter the text here');
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
