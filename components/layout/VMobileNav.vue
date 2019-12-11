<template>
  <v-navigation-drawer v-model="drawerState" right app temporary>
    <v-list>
      <!-- <v-list-item to="/">Home</v-list-item> -->
      <v-list-item
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.path"
        nuxt
        exact
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-btn
            v-if="$store.state.users.user"
            @click="handleLogout"
            color="primary"
            dark
            depressed
            >Logout
          </v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['drawer']),

    drawerState: {
      get() {
        return this.drawer
      },
      set(val) {
        this.setDrawer(val)
      }
    },

    navItems() {
      return this.$store.state.site.nav
    }
  },

  methods: {
    handleLogout() {
      this.$store.dispatch('users/logout')
    },
    ...mapMutations(['setDrawer', 'toggleDrawer'])
  }
}
</script>
