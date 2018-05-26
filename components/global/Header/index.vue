<template>
  <header class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
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
