<template>
  <div class="">
    <h1 class="display-1">About Me</h1>
    <div class="markdownBody">
      <test></test>
    </div>
  </div>
</template>

<script>
import test from '../static/test1.md'
console.log(test);
export default {
  components: {test}
}
</script>

<style lang="css">
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}
</style>
