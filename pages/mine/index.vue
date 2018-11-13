<template>
  <section class="page-mine">
    <div>
      <h1 class="title">
        mine
      </h1>
      <h2 class="subtitle red">
        mine
      </h2>
      <nuxt-link to="/">index</nuxt-link>
    </div>
  </section>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style scoped lang="stylus">

.page-mine {
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
