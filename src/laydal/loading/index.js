import THEMETYPES from './dom/types.js'
import HTML from './dom'
import $ from 'jquery'

import './css/laydal-LayLoading.css'

const LayLoading = function ({ 
      theme = [THEMETYPES[0]] ,  //LayLoading 样式
      bgcolor = '#27A2FF'         //LayLoading 颜色
    } = {} ){

  this.theme = theme;   
  this.bgcolor = bgcolor; 
  this.dom = null;  //当前 LayLoading 实例 dom 

}

LayLoading.fn = LayLoading.prototype = {
  constructor : LayLoading,
  name: "LayLoading"
}

LayLoading.extend = LayLoading.fn.extend = function(option){
  for ( let k in option ){
    if ( option.hasOwnProperty( k ) )
    this[k] = option[k];
  }
}

LayLoading.fn.extend({
  // 打开 LayLoading 
  open(){

    var theme = this.theme,
        bgcolor = this.bgcolor,
        html = HTML[theme];

    this.dom = $(html);  // 生成 jquery 实例
    this.dom.find('.bgc').css({backgroundColor: bgcolor})

    $('body').children('.laydal-LayLoading').remove();
    $('body').prepend( this.dom );

  },
  //关闭 LayLoading
  close(){
    $( this.dom ).remove();
    this.dom = null;
  }

})

export default LayLoading;





