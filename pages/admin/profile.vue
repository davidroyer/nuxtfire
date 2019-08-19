<template>
  <div>
    <h1>profile</h1>
    <section>
      <p>URL: {{ $route.fullPath }}</p>
      <p>SSR: {{ ssr ? 'true' : 'false' }}</p>
    </section>
    <pre v-if="currentUser">{{currentUser}}</pre>    
  </div>
</template>

<script>
export default {
  asyncData () {
    return {
      ssr: process.server
    }
  },

  computed: {
    currentUser () {
      return this.$store.state.users.user || {}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>