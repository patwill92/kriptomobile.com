<template>
  <main>
    <Hero/>
    {{getTweets}}
  </main>
</template>

<script>
  import Hero from '@/components/home/Hero'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        getTweets: 'twitter/getTweets'
      })
    },
    components: {
      Hero
    }
  }
</script>
