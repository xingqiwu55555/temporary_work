<template>
  <div>
    <Head />
  </div>
</template>

<script>
  import Head from '../components/Head'

  export default {
    components: {Head},
    data () {
      return {}
    },
    methods: {
      showModel(type){
        this.setType = type;
      }
    }
  }
</script>

<style scoped>
  
</style>
