<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        โปรโมชัน
      </h1>
      <p class="subtitle">
        ของคุณ มีอะไรบ้าง
      </p>
    </div>
    <hr>
    <PromotionsCard v-for="i in 1" :key="i"
      :title="'ขนมจีน หลัง ม.อ.'"
      :img="'https://www.cpbrandsite.com/contents/recipe/h84kygu5qngpv0xdl3tqcomtbuqllzy0tsqqzuzv.jpg'">
    </PromotionsCard>
  </section>
</template>

<script>
import PromotionsCard from '@/components/PromotionCard'
export default {
  components: {
    PromotionsCard
  }
}
</script>
