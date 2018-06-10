<script>
  export default {
    name: 'DesktopMenu',
    functional: true,
    render(h, ctx) {
      const {$style} = ctx;
      return (
        <nav class={['h-display-flex h-align-center', $style.emailWrapper]}>
          <a href="https://twitter.com/KriptoMobile" class={['h-padding-r-10 has-text-black', $style.iconTwitter]}>
            <v-icon icon="Twitter"/>
          </a>
          <span class={[$style.email, 'h-margin-l-10 h-display-flex h-align-center h-padding-l-20']}>
            <a href="mailto:info@kriptomobile.com" class={[$style.icon, 'h-display-inline-flex has-text-black']}>
              <v-icon icon="Envelope"/>
            </a>
            <span class={['h-margin-l-10', $style.link]}>
              <a href="mailto:info@kriptomobile.com" class="h-display-none h-display-lg-inline is-uppercase has-text-black">info@kriptomobile.com</a>
            </span>
          </span>
        </nav>
      )
    }
  }
</script>

<style module lang="sass">
  .emailWrapper
    order: 2
    +desktop
      order: 3
  .email
    font-size: 18px
    border-left: 1px solid #dddddd
  .icon
    position: relative
    top: 2px
  .iconTwitter
    position: relative
    top: 1px
  .link
    border-left: 1px solid #dddddd
    text-decoration: none
    font-weight: 600
    font-size: 16px
    +desktop
      border-left: none
</style>
