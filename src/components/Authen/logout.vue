<template>
  <div>Logout</div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('signout')
  }
}
</script>

<style>

</style>
