<template>
  <section :class="$style.root">
    <h1 :class="$style.child" class="h-font-11 h-font-md-18 h-font-lg-30">Hello world</h1>
  </section>
</template>

<script>
export default {
  mounted() {
    console.log(this.$style);
  },
  components: {
  }
}
</script>

<style module lang="sass">
  .root
    .child
      color: $red
</style>
