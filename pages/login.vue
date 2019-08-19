<template>
  <div>
    <h1>Login</h1>
    <button @click.prevent="login">Login</button>
  </div>
</template>

<script>
export default {

  methods: {
    async login () {
      await this.$store.dispatch("users/login", {
        email: "droyer01@gmail.com",
        password: "Dance4life"
      })
      console.log('Login finished!');
      this.$router.push("/admin");
    },

  },
  middleware: 'login-route-guard'
}
</script>

<style lang="scss" scoped>
</style>