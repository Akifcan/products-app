<script>
import Promo from "@/components/Promo"
import PromoCard from "@/components/PromoCard"
import BottomNavigationBar from "@/components/BottomNavigationBar"


export default {
  components: { Promo, BottomNavigationBar, PromoCard },
}
</script>

<template>
  <div>
    <Promo />
    <div class="products">
      <PromoCard 
        v-for="product in $store.getters['Promo/products']" 
        :key='product.title'
        :product='product'
     />
    <BottomNavigationBar />
    </div>
  </div>
</template>