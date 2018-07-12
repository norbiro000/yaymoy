<template>
  <div>Logout</div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('logout')
  }
}
</script>

<style>

</style>
