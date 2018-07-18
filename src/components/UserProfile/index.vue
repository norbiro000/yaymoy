<template>
<section class="section columns is-mobile is-centered">
  <div class="column is-narrow">
    <UserImageProfile class="vcenter"></UserImageProfile>
    <UserInformation class="vcenter"></UserInformation>
  </div>
</section>
</template>

<script>
import UserImageProfile from './UserImageProfile'
import UserInformation from './UserInformation'
export default {
  components: {
    UserInformation,
    UserImageProfile
  }
}
</script>

<style scoped>
.bg-red {
  background: red;
}
.vcenter {
  margin: 0px auto;
}
</style>
