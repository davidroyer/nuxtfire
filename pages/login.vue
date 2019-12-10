<template>
  <div>
    <h1>Login</h1>
    <button @click.prevent="login">Login</button>
    <button @click.prevent="googleLogin">Google Login</button>


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
      this.$router.push("/admin");
    },

    async googleLogin () {
      await this.$store.dispatch("users/googleLogin")
      this.$router.push("/admin");
    },
  },

  middleware: 'login-route-guard'
}
</script>
