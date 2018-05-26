<script>
  export default {
    name: 'DesktopMenu',
    functional: true,
    render(h, ctx) {
      const {props:{active}} = ctx;
      return (
        <nav class={[{'is-active': active}, 'navbar-menu']}>
          <div class="navbar-end">
            <nuxt-link class="navbar-item is-uppercase has-text-weight-bold has-text-primary" to="/">Home</nuxt-link>
            <nuxt-link class="navbar-item is-uppercase has-text-weight-bold has-text-primary" to="/about">Contact</nuxt-link>
          </div>
        </nav>
      )
    }
  }
</script>
