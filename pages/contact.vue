<template>
  <div class="">
    <h1 class="display-1">Contact Me</h1>

  </div>
</template>

<script>


export default {
  data() {
    return {
      content: 'Some content'
    }
  },
  asyncData (context) {
    return { content: 'from async' }
  },
  components: {

  }
}

</script>

<style lang="css">
</style>
