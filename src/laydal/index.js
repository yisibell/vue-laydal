import Layer from './layer/layer.js'
import Modal from './modal/index.js'
import jQuery from './layer/jquery.js'

const install = function(Vue){
  Vue.prototype.$layer = layer
  Vue.component( Modal.name , Modal )
}

export let layer = Layer;
export let modal = Modal;
export let $ = jQuery;

export default {
  install
}