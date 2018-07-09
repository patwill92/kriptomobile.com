<script>
  export default {
    name: 'Hero',
    functional: true,
    render(h, ctx) {
      const {$style, props: {mounted}} = ctx;
      const ieClass = mounted &&
      !!document.documentMode ?
        $style.iEHero :
        '';
      return (
        <section class={["hero is-black h-margin-b-30", ieClass]}>
          <div class="hero-body h-padding-lr-10">
            <div class="container">
              <span class="h-display-inline-flex has-text-white" class={$style.icon}>
                <v-icon icon="KripLogo"/>
              </span>
              <h2 class={['title has-text-white is-uppercase h-margin-t-15', $style.title]}>
                Money is changing, so should your phone.
              </h2>
            </div>
          </div>
        </section>
      )
    }
  }
</script>

<style module lang="sass">
  .logo
    max-width: 200px
    height: auto
    .title
      font-weight: 300 !important
  .iEHero
    margin-top: 62px
    +desktop
      margin-top: 76px
  .icon
    font-size: 120px
    line-height: 120px
</style>
