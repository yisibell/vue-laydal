import Layer from './layer/layer.js'
import Modal from './modal/index.js'
import jQuery from './layer/jquery.js'
import loading from './loading'

const install = function(Vue){
  Vue.prototype.$layer = layer
  Vue.component( Modal.name , Modal )
}

  let layer = Layer;
  let modal = Modal;
  let $ = jQuery;
  let Loading = loading;

export { layer , modal , $ , Loading }


export default {
  install
}