import LayLoading from './loading'

const install = function(Vue){
  Vue.prototype.$LayLoading = LayLoading
}

export { LayLoading }

export default {
  install
}