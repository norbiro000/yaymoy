<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Promotions
      </h1>
      <p class="subtitle">
      ร้าน
      </p>
    </div>
    <a class="button is-large" id="btn-login" @click="$router.push('/login')" v-if="!this.$store.getters['isAuthenticated']">
      <span class="icon is-medium">
        <i class="fab fa-facebook"></i>
      </span>
      <span>Login</span>
    </a>
    <PromotionsCard v-for="i in 1" :key="i"
      :title="'ขนมจีน หลัง ม.อ.'"
      :img="'https://www.cpbrandsite.com/contents/recipe/h84kygu5qngpv0xdl3tqcomtbuqllzy0tsqqzuzv.jpg'">
    </PromotionsCard>
  </section>
</template>

<script>
// @ is an alias to /src
import PromotionsCard from '@/components/PromotionCard'

export default {
  name: 'home',
  components: {
    PromotionsCard
  }
}
</script>
