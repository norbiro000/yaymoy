<template>
  <div>
    <div>{{ $store.state.profile }}</div>
  </div>
</template>

<script>
// import router from '../../router'
// import store from '../../store'
import decoder from 'jwt-decode'
export default {
  data () {
    return {
      accessToken: '',
      idToken: '',
      verification: '',
      expiresIn: ''
    }
  },
  computed: {
    profile () {
      return decoder(this.accessToken[1])
    }
  },
  created () {
    var accessToken = this.$route.hash.match(/(?:access_token)=([^&]+)/)
    var idToken = this.$route.hash.match(/(?:id_token)=([^&]+)/)
    var verification = this.$route.hash.match(/(?:state)=([^&]+)/)
    var expiresIn = this.$route.hash.match(/(?:expires_in)=(\d+)/)
  }
}
</script>

<style>

</style>
