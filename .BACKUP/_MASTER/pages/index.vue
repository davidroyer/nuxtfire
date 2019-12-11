<template>
  <div class="col-lg-6 mx-auto my-2">
    <section>
      <p>URL: {{ $route.fullPath }}</p>
      <p>SSR: {{ ssr ? "true" : "false" }}</p>
    </section>
    <pre v-if="currentUser">{{ currentUser }}</pre>
    <h1>Login to your account</h1>
    <form @submit.prevent>
      <div class="form-group">
        <input
          v-model="account.email"
          id="nuxtfire-email"
          type="email"
          class="form-control"
          placeholder="E-mail address"
        />
      </div>

      <div class="form-group">
        <input
          v-model="account.password"
          id="nuxtfire-password"
          type="password"
          class="form-control"
          placeholder="Password"
        />
      </div>

      <div class="form-group">
        <input @click="login" type="submit" class="btn btn-primary" />
      </div>
      <div v-if="isError" class="alert alert-danger">
        <p class="mb-0">{{ errMsg }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  asyncData() {
    return {
      ssr: process.server
    };
  },

  data: () => ({
    account: {
      email: "",
      password: ""
    },
    isError: false,
    errMsg: ""
  }),
  computed: {
    currentUser() {
      return this.$store.state.users.user || {};
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch("users/login", this.account);
      console.log("Login finished!");
      this.$router.push("/admin");
    }
  }
};
</script>
