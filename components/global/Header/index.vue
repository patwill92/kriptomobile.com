<template>
  <header ref="header" class="navbar is-fixed-top has-shadow is-spaced h-padding-tb-5 h-padding-tb-lg-10" role="navigation" aria-label="main navigation">
    <div class="container h-align-center h-justify-between" :class="$style.container">
      <div class="navbar-brand h-margin-l-0">
        <nuxt-link :class="$style.logoWrapper" class="navbar-item h-padding-0" to="/">
          <span class="h-display-inline-flex h-padding-l-10 h-padding-l-lg-0 has-text-black" :class="$style.icon">
            <v-icon icon="KripLogo"/>
          </span>
        </nuxt-link>
      </div>
        <Menu />
    </div>
  </header>
</template>

<script>
  import Menu from './Menu'

  export default {
    components: {
      Menu
    }
  }
</script>

<style module lang="sass">
  .container
    display: flex !important
    flex-wrap: wrap
  .icon
    font-size: 40px
  .logoWrapper
    order: 1
    &:hover
      color: hsl(0, 0%, 29%) !important
</style>
