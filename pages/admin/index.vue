<template>
  <section>
    <h1>Admin route</h1>
    <h2 v-if="currentUser" v-text=currentUser.email></h2>
    <button @click="logout">Logout</button>


    <pre>{{currentUser}}</pre>
  </section>
</template>

<script>
import { auth } from "@/services/firebase";
import Cookie from "js-cookie";

export default {
  // data: () => ({
  //   user:
  // }),
  computed: {
    currentUser() {
      return this.$store.state.users.user
    }
  },
  methods: {
    async logout() {
      await auth.signOut();
      await Cookie.remove("access_token");

      location.href = "/";
    }
  }
};
</script>

