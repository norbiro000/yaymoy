<template>
  <div>Redirect...</div>
</template>

<script>
import { AUTH_PATH } from '../../config'
export default {
  created () {
    setTimeout(function () {
      // window.location = AUTH_PATH
      alert(AUTH_PATH)
    }, 2000)
  }
}
</script>

<style>

</style>
