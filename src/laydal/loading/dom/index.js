import THEMETYPES from './types.js'

//loading 结构
var HTML = {
  
  [THEMETYPES[0]] : 
  `<div class="sk-three-bounce laydal-loading">
    <div class="sk-child sk-bounce1 bgc"></div>
    <div class="sk-child sk-bounce2 bgc"></div>
    <div class="sk-child sk-bounce3 bgc"></div>
  </div>`,

  [THEMETYPES[1]] :
  ` <div class="spinner laydal-loading">
      <div class="spinner-container container1">
        <div class="circle1 bgc"></div>
        <div class="circle2 bgc"></div>
        <div class="circle3 bgc"></div>
        <div class="circle4 bgc"></div>
      </div>
      <div class="spinner-container container2">
        <div class="circle1 bgc"></div>
        <div class="circle2 bgc"></div>
        <div class="circle3 bgc"></div>
        <div class="circle4 bgc"></div>
      </div>
      <div class="spinner-container container3">
        <div class="circle1 bgc"></div>
        <div class="circle2 bgc"></div>
        <div class="circle3 bgc"></div>
        <div class="circle4 bgc"></div>
      </div>
    </div>`,

    [THEMETYPES[2]] :
    `<div class="sk-wave laydal-loading">
      <div class="sk-rect sk-rect1 bgc"></div>
      <div class="sk-rect sk-rect2 bgc"></div>
      <div class="sk-rect sk-rect3 bgc"></div>
      <div class="sk-rect sk-rect4 bgc"></div>
      <div class="sk-rect sk-rect5 bgc"></div>
    </div>`
}


export default HTML;