import $ from '../layer/jquery.js'
import THEMETYPES from './dom/types.js'
import HTML from './dom'

import './css/laydal-loading.css'

var Loading = function ({ 
      theme = [THEMETYPES[0]] ,  //loading 样式
      bgcolor = '#27A2FF'         //loading 颜色
    } = {} ){

  this.theme = theme;   
  this.bgcolor = bgcolor; 
  this.dom = null;  //当前 loading 实例 dom 

}


Loading.fn = Loading.prototype = {
  constructor : Loading,
  name: "loading"
}

Loading.extend = Loading.fn.extend = function(option){
  for ( let k in option ){
    if ( option.hasOwnProperty( k ) )
    this[k] = option[k];
  }
}


Loading.fn.extend({
  // 打开 loading 
  open(){

    var theme = this.theme,
        bgcolor = this.bgcolor,
        html = HTML[theme];

    this.dom = $(html);  // 生成 jquery 实例
    this.dom.find('.bgc').css({backgroundColor: bgcolor})

    $('body').children('.laydal-loading').remove();
    $('body').prepend( this.dom );

  },
  //关闭 loading
  close(){
    $( this.dom ).remove();
    this.dom = null;
  }

})


export default Loading;





