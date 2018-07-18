<template>
<div class=" user__profile">
  <div class="">
    <div>
      <b>{{ name }}</b>
    </div>
    <div>
    <p>
      <span class="icon"><i class="fas fa-envelope"></i></span>{{ email }}
    </p>
    </div>
    <div>
    <p>
      <span class="icon"><i class="fas fa-phone"></i></span>{{ telephone }}
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
  }
}
</script>

<style>
.user__profile {
  padding-top: 10px;
}
</style>
