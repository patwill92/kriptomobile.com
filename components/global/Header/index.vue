<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
    <Burger/>
    </div>
   <DesktopMenu/>
  </nav>
</template>

<script>
  import Burger from './Burger'
  import DesktopMenu from './DesktopMenu'

  export default {
    components: {
      Burger,
      DesktopMenu
    }
  }
</script>
