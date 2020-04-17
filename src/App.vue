<template>
  <div></div>
</template>

<script>
import { LayLoading } from './laydal'

export default {
  data(){
    return {}
  },
  created(){
    const layLoading = new LayLoading({theme: 'wave'});

    layLoading.open();

    setTimeout( ()=>{
      layLoading.close();
    }, 6000)

  }
}
</script>

