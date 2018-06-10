<template>
  <main class="h-padding-b-40">
    <Hero :image="image" :mounted="mounted"/>
    <section ref="tweets" class="h-padding-lr-10">
      <div :class="$style.cardContainer">
        <template v-for="tweet in tweets">
          <Card :name="tweet.name"
                :key="tweet.text"
                :avatar="tweet.avatar"
                :image="tweet.image"
                :date="tweet.date"
                :text="tweet.text"
                :imageUrl="tweet.imageUrl"
                :linkUrl="tweet.linkUrl"
                :username="tweet.username"/>
        </template>
        <div class="has-text-centered">
          <a  href="mailto:info@kriptomobile.com" class="button is-black is-uppercase is-large">
            <span :class="$style.button" class="h-margin-r-10 h-display-inline-flex">
              <v-icon icon="Envelope"/>
            </span>
            Contact us
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
    data() {
      return {
        mounted: false
      }
    },
    mounted() {
      this.mounted = true;
      this.$parent.$parent.$refs.tweets = this.$refs.tweets
    },
    computed: {
      ...mapGetters({
        tweets: 'twitter/getTweets'
      }),
      image() {
        return require('@/assets/images/KLogo.png')
      }
    },
    components: {
      Hero,
      Card
    }
  }
</script>

<style module lang="sass">
  .cardContainer
    margin: auto
    max-width: 600px
  .button
    position: relative
    top: 2px
</style>
