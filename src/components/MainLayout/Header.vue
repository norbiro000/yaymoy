<template>
<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <p class="heading is-1 is-left">Promotion</p>
  <p class="heading is-1 is-right">My Points {{ myPoint }}</p>
</nav>
</template>

<script>
export default {
  data () {
    return {
      myPoint: 100.00
    }
  }
}
</script>

<style>
#header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

nav > p {
  display: inline-block;
  padding: 20px;
}

.is-left {
  float: left;
}

.is-right {
  float: right;
}
</style>
