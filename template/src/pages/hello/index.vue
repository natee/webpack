<style lang="less">
@import './style.css';
</style>

<template>
  <div>
    <p>\{{msg}}</p>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import api from '@/api';
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'hello',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: 'demo page'
    }
  }
}
</script>
