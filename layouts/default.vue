<template>
  <div>
    <Footer/>
    <nuxt/>
    <Header/>
  </div>
</template>

<script>
  import Footer from '@/components/global/Footer'
  import Header from '@/components/global/Header'

  export default {
    components: {
      Footer,
      Header
    }
  }
</script>

<style>

</style>
