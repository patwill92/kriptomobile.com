<script>
  export default {
    name: 'Card',
    functional: true,
    render(h, ctx) {
      const {
        props: {
          username,
          name,
          avatar,
          date,
          text,
          image,
          linkUrl,
          imageUrl
        }, $style
      } = ctx;

      return (
        <div class={['card h-margin-b-30', $style.root]} >
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class={['image is-48x48', $style.avatar]}>
                  <img src={avatar} alt="Placeholder image"/>
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{name}</p>
                <p class="subtitle is-6">@{username}</p>
              </div>
            </div>
            <div class="content">
              {text}
              <br/>
              {
                (image || linkUrl) &&
                <figure class={['has-text-left h-margin-lr-0 h-margin-t-15 h-margin-b-0', $style.figure]}>
                  {
                    imageUrl ?
                      <a href={imageUrl} class="pointer" target="_blank">
                        <img class={$style.image} src={image ? image : linkUrl}/>
                      </a> :
                      <img class={$style.image} src={image ? image : linkUrl}/>
                  }
                </figure>
              }
            </div>
          </div>
          <footer class="card-footer">
            <p class="h-justify-start card-footer-item h-font-14 has-text-black has-text-left">
              <time datetime={date}>Posted {date}</time>
            </p>
          </footer>
        </div>
      )
    }
  }
</script>

<style module lang="sass">
  .root
    box-shadow: 0 2px 3px rgba(96, 195, 163, .2), 0 0 0 1px rgba(96, 195, 163, .2)
    border-radius: 4px
    *
      color: hsl(0, 0%, 4%) !important
  .image
    width: auto
    max-height: 300px
    border-radius: 4px
    box-shadow: 0 2px 3px rgba(55,55,55, .2), 0 0 0 1px rgba(55,55,55, .2)
  .avatar
    img
      border-radius: 50%
</style>
