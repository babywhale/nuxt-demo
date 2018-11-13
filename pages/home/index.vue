<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{title}}
      </h1>
      <h2 class="subtitle red">
        {{name}}
      </h2>
      <nuxt-link to="/mine">mine</nuxt-link>
    </div>
  </section>
</template>

<script>
import service from '~/service/index'
export default {
  async asyncData ({store}) {
    await store.dispatch('getHotPages')
    return { title: store.state.hotpages[0].attributes.description }
  },
  data() {
    return {
        name: 'home'
    }
  },
  components: {

  },
  created() {
    if (!this.$store.state.hotpages) {
        this.$store.dispatch('getHotPages')
    }
    else {
        console.log('hotpages', this.$store.state.hotpages)
    }
  }
}
</script>

<style scoped lang="stylus">

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;


    .title {
      font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      display: block;
      font-weight: 300;
      font-size: 100px;
      color: #35495e;
      letter-spacing: 1px;
    }

    .subtitle {
      font-weight: 300;
      font-size: 42px;
      color: #526488;
      word-spacing: 5px;
      padding-bottom: 15px;
    }

    .red {
        color: red;
    }


}
</style>
