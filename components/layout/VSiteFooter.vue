<template>
  <v-footer dark>
    <v-row class="v-footer-bottom px-4">
      <v-col>
        <span class="footer-text">Copyright &copy; 2019 David Royer</span>
      </v-col>

      <v-col class="text-right">
        <a
          href="https://github.com/davidroyer/nuxtfire"
          target="_blank"
          rel="nofollow"
          class="text--white"
        >
          Github Repo
        </a>
        <span class="footer-text"></span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.newsletter {
  width: 100%;

  input {
    text-align: center !important;
  }
}

.v-footer {
  &-bottom {
    background-color: #1a1b1e;
  }
}
</style>
