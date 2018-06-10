<template>
  <div class="promotion-card">
    <div class="promotion-card__content" :style="{ backgroundImage: 'url(' + img + ')' }">
      <div class="overlay">
          <h1 class="promotion-card__title">{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'img'],
  mounted () {
  }
}
</script>

<style>
.promotion-card {
  width: 100%;
  min-height: 100px;
  border-radius: 10px;
  background: white;
  margin: 20px auto;
  cursor: pointer;
}
.promotion-card__content {
  width: 100%;
  height: auto;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: 100%;
}
.promotion-card__title {
  margin-top: 120px;
}

.overlay {
  padding: 0px 10px;
  background: -webkit-linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5));
  -webkit-text-fill-color: white;
  border-radius:0px 0px 10px 10px;
  height: 100%;
  overflow: hidden;
}
</style>
