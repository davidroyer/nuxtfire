<template>
  <section class="container">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/admin">Admin</nuxt-link>
    <nuxt-link to="/admin/profile">Admin Profile</nuxt-link>
    <nuxt-link to="/login">Login</nuxt-link>

    <nuxt />
  </section>
</template>

<script>
export default {
  computed: {
    currentUser () {
      return this.$store.state.users.user || {}
    }
  }
};
</script>

<style>
/* @import url(https://bootswatch.com/4/darkly/bootstrap.min.css); */
</style>
