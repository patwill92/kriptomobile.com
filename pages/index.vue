<template>
  <main class="h-padding-b-40">
    <Hero/>
    <section class="h-padding-lr-10">
      <div class="container">
        <template v-for="tweet in tweets">
          <Card :name="tweet.name"
                :key="tweet.text"
                :avatar="tweet.avatar"
                :image="tweet.image"
                :date="tweet.date"
                :text="tweet.text"
                :username="tweet.username"/>
        </template>
        <div class="has-text-centered">
          <a  href="mailto:info@kriptomobile.com" class="button is-black is-uppercase is-large">
            <span class="h-margin-r-10">
              <v-icon icon="Envelope"/>
            </span>
            find out more
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import Hero from '@/components/home/Hero'
  import Card from '@/components/global/Card'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        tweets: 'twitter/getTweets'
      })
    },
    components: {
      Hero,
      Card
    }
  }
</script>
