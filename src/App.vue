<template>
  <div id="app">
    <v-header v-if="this.$store.getters['isAuthenticated']"></v-header>
    <router-view class="content" />
    <NavigatorFooter v-if="this.$store.getters['isAuthenticated']"></NavigatorFooter>
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

#btn-login {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 80%;
}
</style>
