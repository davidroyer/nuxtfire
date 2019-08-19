<template>
  <div>
    <h1>profile</h1>
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