<template>

  <div class="modal" :class="[isshow ? 'show' : 'fade']" role="dialog">
    <transition name="modal">
    <div class="modal-dialog" v-show="isshow" role="document" :style="{width:width}">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideModal()"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title"><slot name="title">Modal title</slot></h4>
        </div>
        <div class="modal-body" :style="{height: height}" style="overflow-y:auto">
          <slot name="body">
            <p>this is the modal body...</p>
          </slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal" @click.stop="hideModal()" v-show="!hideclosebtn">{{closeText}}</button>
          <button type="button" class="btn btn-primary" v-show="!hidesavebtn">{{saveText}}</button>
        </div>
      </div>
    </div>
    </transition>
  </div>

</template>

<script>

export default {
  name: "modal",
  data(){
    return {
      
    }
  },
  model: {
    prop: 'isshow',
    event: 'hide'
  },
  props: {
    isshow: Boolean,
   
    width: {
      type: String,
      default: '580px'
    },
    height: {
      type: String,
      default: 'auto'
    },
    closeText: {
      type: String,
      default: '关闭'
    },
    saveText: {
      type: String,
      default: '保存'
    },
    hideclosebtn: {
      type: Boolean,
      default: false
    },
    hidesavebtn: {
      type: Boolean,
      default: false
    }
  },
  watch:{
    isshow: function(newVal , oldVal){
      newVal ? this.$emit("shown") : this.$emit("hidden")
    }
  },
  methods: {
    hideModal(){
      this.$emit("hide")
    }
  }
  
}
</script>


<style lang="scss" scoped>
@import './css/bootstrap.min.css';
.modal{
  background-color: rgba(128,128,128,.5);
}
.modal-enter-active {
  animation: vodal-slideDown-enter .5s;
}
.modal-leave-active {
  animation: vodal-slideDown-leave .5s;
}


@keyframes vodal-slideDown-enter {
    from {
        -webkit-transform: translate3d(0, -100px, 0);
        transform: translate3d(0, -100px, 0);
    }
}

@keyframes vodal-slideDown-leave {
    to {
        -webkit-transform: translate3d(0, -100px, 0);
        transform: translate3d(0, -100px, 0);
    }
}

</style>

