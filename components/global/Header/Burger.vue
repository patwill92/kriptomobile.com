<script>
  export default {
    name: 'Burger',
    functional: true,
    render(h) {
      return (
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="true">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      )
    }
  }
</script>
