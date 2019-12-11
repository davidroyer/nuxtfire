<template>
  <v-row align="center">
    <v-col cols="12" md="5">
      <h2>Admin Area</h2>
      <pre v-if="currentUser">{{ currentUser }}</pre>
      <!-- <pre v-if="$store.state.users.user">{{ $store.state.users.user }}</pre> -->
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.users.user
    }
  }
}
</script>

<style lang="scss" scoped></style>
