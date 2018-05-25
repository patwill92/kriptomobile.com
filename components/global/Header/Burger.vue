<script>
  export default {
    name: 'Burger',
    functional: true,
    render(h, ctx) {
      const {props: {active, toggleActive}} = ctx;
      return (
        <a onClick={toggleActive} role="button" class={['navbar-burger', {'is-active': active}]} aria-label="menu" aria-expanded="true">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      )
    }
  }
</script>
