<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/components/MainLayout/Footer'
export default {
  components: {
    Footer
  }
}
</script>
<style lang="scss">
@import '~bulma/bulma';
$colorMainForground: #f4f6f6;
html, body, {
  padding: 0;
  margin: 0;
  background: $colorMainForground;
}
</style>
