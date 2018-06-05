<script>
  export default {
    name: 'Hero',
    functional: true,
    render(h, ctx) {
      const {$style, props: {image, mounted}} = ctx;
      const ieClass = mounted &&
      !!document.documentMode ?
        $style.iEHero :
        '';
      return (
        <section class={["hero is-black h-margin-b-30", ieClass]}>
          <div class="hero-body">
            <div class="container">
              <img class={$style.logo} src={image} alt="LOGO"/>
              <h2 class={['title has-text-white is-uppercase h-margin-t-20', $style.title]}>
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
    margin-top: 102px
    +desktop
      margin-top: 76px
</style>
