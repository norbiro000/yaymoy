<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        สวัสดี
      </h1>
      <p class="subtitle">
        กินข้าวไป สะสมแต้มไปกันดีว่า
      </p>
    </div>
    <PromotionsCard v-for="i in 1" :key="i"
      :title="'ขนมจีน หลัง ม.อ.'"
      :img="'https://www.cpbrandsite.com/contents/recipe/h84kygu5qngpv0xdl3tqcomtbuqllzy0tsqqzuzv.jpg'">
    </PromotionsCard>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PromotionsCard from '@/components/PromotionCard'

export default {
  name: 'home',
  components: {
    HelloWorld,
    PromotionsCard
  }
}
</script>
