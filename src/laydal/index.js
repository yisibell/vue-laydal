import Layer from './layer/layer.js'
import Modal from './modal/index.js'

const install = function(Vue){
  Vue.prototype.$layer = layer
  Vue.component( Modal.name , Modal )
}

export let layer = Layer;
export let modal = Modal;

export default {
  install
}