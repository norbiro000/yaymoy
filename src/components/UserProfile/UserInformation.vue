<template>
<div class=" user__profile">
  <div class="">
    <div>
      <b>{{ profile.name }}</b>
      <b>{{ profile.picture }}
    </div>
    <div>
    <p>
      <span class="icon"><i class="fas fa-envelope"></i></span>{{ profile.email }}
    </p>
    </div>
    <div>
    <p>
      <span class="icon"><i class="fas fa-phone"></i></span>
    </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Jakkapan Thongkum',
      email: 'jakkapan@appsolutesoft.com',
      telephone: '096-638-0808'
    }
  },
  computed: {
    profile () {
      return this.$store.getters['profile']
    }
  }
}
</script>

<style>
.user__profile {
  padding-top: 10px;
}
</style>
