<template>
  <div>
    <div class="title">字符串处理函数</div>
    <baseComponent title="去除空白" html='$funs.trim(" huang ")   //"huang"
$funs.trim("baahuangaa","ba")  //"ahuangaa"
$funs.trim("baahuangaa","gaa")  //"baahuan"'>

      <div class="title-funs">$funs.trim(str[,s])</div>
      <div class="funs-msg">去除左右边空(或指定内容)</div>

      <div class="title-funs">$funs.ltrim(str[,s])</div>
      <div class="funs-msg">去除左边空(或指定内容)</div>
      <div class="title-funs">$funs.rtrim(str[,s])</div>
      <div class="funs-msg">去除右边空(或指定内容)</div>
      <code>
      @param {string} str 需要求处理的字符串 <br>
      可选 @param {String} s 需要去除左右边的字符 默认为空白字符；
      </code>
    </baseComponent>

    <baseComponent title="生成md5" html='$funs.getMd5("文本")'>

      <div class="title-funs">$funs.getMd5(string)</div>
      <div class="funs-msg">复制文本，执行该函数，文本将会写入的粘贴板，后续用户可以进行粘贴操作</div>
      <code>
        @param {String} string 需要复制的文本
      </code>
      {{$funs.getMd5('sdf')}}
      {{trim('    sdf   ')}}
    </baseComponent>

    <baseComponent title="复制文本" html='$funs.copyText("复制的文本")'>

      <div class="title-funs">$funs.copyText(string)</div>
      <div class="funs-msg">复制文本，执行该函数，文本将会写入的粘贴板，后续用户可以进行粘贴操作</div>
      <code>
        @param {String} string 需要复制的文本
      </code>
    </baseComponent>

    <baseComponent title="换行转换" html='$funs.rnTobr("字符串")'>

      <div class="title-funs">$funs.rnTobr(string)</div>
      <div class="funs-msg">把\r\n换行符转成html的&lt;br>换行符</div>
      <code>
        @param {String} string 字符串
      </code>
    </baseComponent>
    <baseComponent title="加粗匹配的关键字" html='$funs.boldKey("我叫黄某某","某某")
// 我叫黄<b style="color:rgb(77,200,107)">某某</b>

$funs.boldKey("我叫黄某某","某某","red")
// 我叫黄<b style="color:red">某某</b>'>

      <div class="title-funs">$funs.boldKey(str, key[,color])</div>
      <div class="funs-msg">使用&lt;b>标签加粗匹配的关键字</div>
      <code>
        @param str匹配的内容 <br>
        @param key匹配关键字 <br>
        可选 @param color 匹配关键字的颜色，默认为绿色; <br>
      </code>
      <br>
      <div v-html="$funs.boldKey('我叫黄某某','某某')"></div>
      <div v-html="$funs.boldKey('我叫黄某某','某某','red')"></div>
    </baseComponent>

    <baseComponent title="首字母大字" html='$funs.capitalize("abc cde fgi") //Abc cde fgi
$funs.capitalize("abc cde fgi",true) //Abc Cde Fgi'>

      <div class="title-funs">$funs.capitalize(string[,isWord])</div>
      <div class="funs-msg">首字母大字</div>
      <code>
        @param {String} string 字符串 <br>
        @param {Boolean} isWord 是否是单词首字母大写
      </code>

    </baseComponent>
    <br>
    <div class="title">数组处理函数</div>
    <baseComponent title="判断元素是否在数组里" html='$funs.inArray(["你","好"],"好") //true
$funs.inArray(["你","好"],"不") //false'>

      <div class="title-funs">$funs.inArray(arr, item)</div>
      <div class="funs-msg">判断元素是否在数组里</div>
      <code>
        @param arr 原数组 <br>
        @param item 元素 <br>
        @return Boolean <br>
      </code>
    </baseComponent>

    <baseComponent title="一维数组去重" html='$funs.arrayUnique([1,2,3,1,3,2,5])
//[ 1, 2, 3, 5 ]'>

      <div class="title-funs">$funs.arrayUnique(arr)</div>
      <div class="funs-msg">一维数组去重</div>
      <code>
        @param arr {Array}  一维数组 <br>
        @return 去重后的一维数组
      </code>
    </baseComponent>

    <baseComponent title="从数组中删除元素" html='$funs.removeArrayItem([34,12,43,3,211,45,21],21)
     //[21]'>
      <div class="title-funs">$funs.removeArrayItem(arr, item)</div>
      <div class="funs-msg">从数组中删除元素，此操作会在原数中直接删除，只删除第一个匹配到的元素</div>
      <code>
        @param arr 原数组 <br>
        @param item 删除项 <br>
        @return Array 如果删除成功，返回被删除的元素，失败返回undefault
      </code>
    </baseComponent>
    <br>
    <div class="title">对象处理函数</div>
    <baseComponent title="是否是对象" html='$funs.isObject("asd") //false
$funs.isObject({}) //true'>
      <div class="title-funs">$funs.isObject(obj)</div>
      <div class="funs-msg">是否是对象</div>
      <code>
        @param obj 需要判断的对象 <br>
        @return Boolean
      </code>
    </baseComponent>
    <baseComponent title="对象是否为空" html='$funs.isEmptyObject({a:12}) //false
$funs.isEmptyObject({}) //true
$funs.isEmptyObject("asd") //true'>
      <div class="title-funs">$funs.isEmptyObject(obj)</div>
      <div class="funs-msg">对象是否为空</div>
      <code>
        @param obj 需要判断的对象 <br>
        @return Boolean ,当不是对象时返回为undefined
      </code>

    </baseComponent>
  </div>
</template>

<script>
  import {funs} from '../../lib/ici-ui.min';

  export default {
    data() {
      return {
        showloading: true,
      };
    },
    methods:{trim:funs.trim}
  };
</script>

<style scoped lang="less">
  .title-funs{
    font-size:18px;
    color: #02b81a;
    margin:15px 0 5px;
  }
  .funs-msg{
    color:#666;
    font-size:16px;
    padding:0px 0 12px;
  }
</style>
