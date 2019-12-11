<template>
  <v-row align="center">
    <v-col cols="12" md="5">
      <h2>Login Here</h2>
      <v-btn @click="handleGoogleLogin" color="primary">Google Login</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    async handleGoogleLogin() {
      await this.$store.dispatch('users/googleLogin')
      // eslint-disable-next-line no-console
      console.log('login complete')
    }
  }
}
</script>

<style lang="scss" scoped></style>
