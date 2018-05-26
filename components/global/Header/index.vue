<template>
  <header class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="h-font-50 navbar-item has-text-primary" to="/">
          <v-icon icon="Logo"/>
        </nuxt-link>
        <Burger :active="active" :toggleActive="toggleActive"/>
      </div>
      <Menu :active="active"/>
    </div>
  </header>
</template>

<script>
  import Burger from './Burger'
  import Menu from './Menu'

  export default {
    data() {
      return {
        active: false
      }
    },
    methods: {
      toggleActive() {
        this.active = !this.active;
      }
    },
    components: {
      Burger,
      Menu
    }
  }
</script>
