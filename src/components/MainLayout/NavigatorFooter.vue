<template>
<nav class="navbar is-white" role="navigation" aria-label="main navigation">
  <router-link to="/" class="button navbar-items is-mobile"
    :class="currentView === 'home' ? 'is-active' : ''">
    <i class="fas fa-home"></i>
    <p>หน้าหลัก</p>
  </router-link>
  <router-link to="/about" class="button navbar-items is-mobile"
    @click="currentView = 'promotion'"
    :class="currentView === 'promotion' ? 'is-active' : ''">
    <i class="fas fa-briefcase"></i>
    <p>โปรโมชัน</p>
  </router-link>
  <router-link to="/transaction" class="button navbar-items is-mobile"
    :class="currentView === 'transaction' ? 'is-active' : ''">
    <i class="fas fa-briefcase"></i>
    <p>รายการ</p>
  </router-link>
  <router-link to="/me" class="button navbar-items is-mobile"
    :class="currentView === 'me' ? 'is-active' : ''">
    <i class="fas fa-user"></i>
    <p>ฉัน</p>
  </router-link>
</nav>
</template>

<script>
export default {
  computed: {
    currentView () {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0px;
}
.navbar-items {
  display: inline-block;
  left: 0;
  bottom: 0;
  width: 25%;
  height: 50px;
  border: 0;
  padding-top: 10px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: gray;

  & i, p {
    display: block;
  }
  & p {
    font-size: 12px;
  }
}
.is-active {
  -webkit-text-fill-color: orange;
}
</style>
