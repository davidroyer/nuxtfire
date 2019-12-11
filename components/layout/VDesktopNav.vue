<template>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn
      v-for="(item, index) in navItems"
      :key="index"
      :to="item.path"
      nuxt
      text
    >
      {{ item.title }}
    </v-btn>
    <!-- <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-account-circle-outline</v-icon>
    </v-btn> -->
    <v-btn
      v-if="$store.state.users.user"
      @click="handleLogout"
      light
      color="white"
      >Logout</v-btn
    >
    <!-- <v-btn color="white" @click="handleLogout" v-else>Login</v-btn> -->
  </v-toolbar-items>
</template>

<script>
export default {
  computed: {
    navItems() {
      return this.$store.state.site.nav
    }
  },

  methods: {
    handleLogout() {
      this.$store.dispatch('users/logout')
    }
  }
}
</script>
