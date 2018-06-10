<template>
  <div id="app">
    <v-header></v-header>
    <router-view class="content" />
    <NavigatorFooter></NavigatorFooter>
  </div>
</template>
<script>
import vHeader from '@/components/MainLayout/Header'
import NavigatorFooter from '@/components/MainLayout/NavigatorFooter'
export default {
  components: {
    vHeader,
    NavigatorFooter
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
