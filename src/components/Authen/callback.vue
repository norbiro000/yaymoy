<template>
  <div>
    <h1>Authenticating...</h1>
  </div>
</template>

<script>
import router from '../../router'
import store from '../../store'
export default {
  created () {
    let accessToken = this.$route.hash.match(/(?:access_token)=([^&]+)/)
    let idToken = this.$route.hash.match(/(?:id_token)=([^&]+)/)
    let verification = this.$route.hash.match(/(?:state)=([^&]+)/)
    let expiresIn = this.$route.hash.match(/(?:expires_in)=(\d+)/)

    if (!accessToken) {
      router.push({name: 'error', params: {message: 'The The authentication response did not contain a valid access_token'}})
      return
    }

    if (!idToken) {
      router.push({name: 'error', params: {message: 'The The authentication response did not contain a valid idToken'}})
      return
    }

    if (!verification) {
      router.push({name: 'error', params: {message: 'The The authentication response did not contain a valid verification'}})
      return
    }

    if (!expiresIn) {
      router.push({ name: 'error', params: { message: 'The authentication response did not contain a valid token expiry date' } })
      return
    }

    store.dispatch('authenticate', {
      accessToken: accessToken[1],
      idToken: idToken[1],
      verification: verification[1],
      expiresIn: expiresIn[1]
    })
  }
}
</script>

<style>

</style>
