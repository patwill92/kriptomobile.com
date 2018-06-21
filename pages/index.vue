<template>
  <main class="h-padding-b-40">
    <Hero :image="image" :mounted="mounted"/>
    <section ref="tweets" class="h-padding-lr-10">
      <div :class="$style.cardContainer">
        <template v-for="tweet in getTweets">
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
          <button @click="fetchTweets" class="button is-primary is-outlined is-uppercase is-small">
            <span v-if="loading" :class="$style.loading" class="h-display-inline-flex">
              <LoadingIcon/>
            </span>
            <span :style="{opacity: loading ? 0 : 1}">Load More</span>
          </button>
        </div>
        <br><br>
        <div class="has-text-centered">
          <a href="mailto:info@kriptomobile.com" class="button is-black is-uppercase is-large">
            <span :class="$style.button" class="h-margin-r-10 h-display-inline-flex">
              <v-icon icon="Envelope"/>
            </span>
            Contact us
          </a>
        </div>
      </div>
    </section>
    <br><br><br>
    <TestComponent/>
  </main>
</template>

<script>
  import Hero from '@/components/home/Hero'
  import Card from '@/components/global/Card'
  import LoadingIcon from '@/components/global/icon/Loading'
  import TestComponent from '@/components/global/TestComponent'
  import {mapGetters, mapActions} from 'vuex'

  import {HYDRATE_TWEETS} from "../types";

  export default {
    data() {
      return {
        mounted: false,
        loading: false
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
      },
      getTweets() {
        return this.tweets.slice(0, this.tweets.length - 1)
      },
      lastTweet() {
        return this.tweets.slice(this.tweets.length - 1)[0]
      }
    },
    methods: {
      ...mapActions({
        hydrateTweets: `twitter/${HYDRATE_TWEETS}`
      }),
      fetchTweets() {
        this.loading = true;
        this.$axios.get(`${this.$endPoint}?id=${this.lastTweet.id}`)
          .then(res => {
            this.hydrateTweets(res.data.slice(1));
            this.loading = false;
          })
      }
    },
    components: {
      Hero,
      Card,
      LoadingIcon,
      TestComponent
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
    .loading
      position: absolute
      left: 50%
      transform: translateX(-50%)
</style>
