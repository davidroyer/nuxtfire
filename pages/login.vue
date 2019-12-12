<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="5">
      <v-card width="500" class="mx-auto mt-5">
        <v-card-title class="pb-0">
          <h1>Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Email"
              type="email"
              prepend-icon="mdi-account-circle"
            />
            <v-text-field
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              label="Password"
              prepend-icon="mdi-lock"
            />
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn light color="white">
            <v-icon>mdi-email</v-icon>
            Email Signup
          </v-btn>
          <v-spacer />
          <v-btn @click="handleGoogleLogin" light color="white">
            Google Login
          </v-btn>
        </v-card-actions>
      </v-card>
      <!-- <h2>Login Here</h2>
      <v-btn @click="handleGoogleLogin" color="primary">Google Login</v-btn> -->
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: 'login-route-guard',

  data: () => ({
    showPassword: false
  }),

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
