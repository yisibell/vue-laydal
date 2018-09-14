<template>
    <div>
      <modal v-model="show" @confirm="yes"></modal>
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
    yes(){
      this.show = false;
    }
  }
}
</script>

