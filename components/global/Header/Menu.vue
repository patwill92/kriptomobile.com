<script>
  export default {
    name: 'DesktopMenu',
    functional: true,
    render(h, ctx) {
      const {props:{active}} = ctx;
      return (
        <nav class={[{'is-active': active}, 'navbar-menu']}>
          <div class="navbar-end">
            <nuxt-link class="navbar-item is-uppercase has-text-weight-bold" to="/">Home</nuxt-link>
            <nuxt-link class="navbar-item is-uppercase has-text-weight-bold" to="/contact">Contact</nuxt-link>
          </div>
        </nav>
      )
    }
  }
</script>
