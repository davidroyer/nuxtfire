<template>
  <v-app-bar flat dark app color="indigo">
    <v-toolbar-title
      @click="$router.push('/')"
      v-text="$store.state.site.title"
    />
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
