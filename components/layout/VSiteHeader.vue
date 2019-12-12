<template>
  <v-app-bar flat dark app color="indigo">
    <v-toolbar-title
      @click="$router.push('/')"
      v-text="$store.state.site.title"
    />
    <v-avatar v-if="$store.state.users.user" class="ml-4" size="42">
      <img :src="$store.state.users.user.picture" alt="avatar" />
    </v-avatar>

    <v-spacer />

    <v-desktop-nav />
    <v-app-bar-nav-icon
      @click="$store.commit('toggleDrawer')"
      aria-label="Toggle menu"
      class="hidden-md-and-up"
    />
  </v-app-bar>
</template>

<script>
import VDesktopNav from '@/components/layout/VDesktopNav'

export default {
  components: {
    VDesktopNav
  }
}
</script>
