<template>
  <section :class="$style.root">
    <h1 :class="$style.child">Hello world</h1>
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
