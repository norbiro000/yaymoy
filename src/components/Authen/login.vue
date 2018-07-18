<template>
  <div>Redirect...</div>
</template>

<script>
import auth from '@/services/auth'

export default {
  mounted () {
    auth.authenticate('Facebook')
  }
}
</script>

<style>

</style>
