<template>
    <div>
      <modal @hidden="hidden" @shown="shown" v-model="show" @hide="hideModal">
      </modal>
      <button @click="show = true">click</button>
    </div>
</template>

<script>
import {layer , modal} from './laydal'

export default {
  data(){
    return {
      show: false
    }
  },
  components:{
    modal
  },
  methods: {
    hidden(){
      console.log("hidden");
    },
    shown(){
      console.log("shown");
    },
    hideModal(){
      this.show = false;
    }
  }
}
</script>

