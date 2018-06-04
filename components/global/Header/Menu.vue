<script>
  export default {
    name: 'DesktopMenu',
    functional: true,
    render(h, ctx) {
      const {$style, props: {twitterSection}} = ctx;
      return [
        <nav class={['h-display-flex h-align-center h-justify-center h-justify-lg-end', $style.nav]}>
          <div class="h-display-flex h-align-center h-justify-end">
            <a onClick={(e) => {
              e.preventDefault();
              const param = twitterSection.tweets.getBoundingClientRect().y;
              window.scroll({
                top: param,
                behavior: "smooth"
              });
            }} class={['navbar-item is-uppercase has-text-black', $style.medium]}>feed</a>
            <a href="mailto:info@kriptomobile.com" class={['navbar-item is-uppercase has-text-black', $style.medium]}>contact</a>
          </div>
        </nav>,
        <div class={['h-display-flex h-align-center', $style.emailWrapper]}>
          <span class={[$style.email, 'h-margin-l-10 h-display-flex h-align-center h-padding-lr-20']}>
            <a href="mailto:info@kriptomobile.com" class={[$style.icon, 'h-display-inline-flex has-text-black']}>
              <v-icon icon="Envelope"/>
            </a>
            <span class={['h-padding-l-10 h-padding-l-lg-0 h-margin-l-10', $style.link]}>
              <a href="mailto:info@kriptomobile.com" class="h-display-none h-display-lg-inline is-uppercase has-text-black">info@kriptomobile.com</a>
              <a href="https://twitter.com/KriptoMobile" class={['h-display-lg-none h-padding-l-5 has-text-black', $style.iconTwitter]}>
                <v-icon icon="Twitter"/>
              </a>
            </span>
          </span>
        </div>
      ]
    }
  }
</script>

<style module lang="sass">
  .nav
    order: 3
    flex-basis: 100%
    +desktop
      justify-self: flex-end
      order: 2
      flex: 1
    .medium
      cursor: pointer
      font-weight: 600
  .emailWrapper
    order: 2
    +desktop
      order: 3
  .email
    font-size: 18px
    +desktop
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
