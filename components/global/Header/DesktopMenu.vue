<script>
  export default {
    name: 'DesktopMenu',
    functional: true,
    render(h) {
      return (
        <div class="navbar-menu">
          <div class="navbar-end">
            <nuxt-link class="navbar-item is-uppercase" to="/">Home</nuxt-link>
            <nuxt-link class="navbar-item is-uppercase" to="/contact">Contact</nuxt-link>
          </div>
        </div>
      )
    }
  }
</script>
