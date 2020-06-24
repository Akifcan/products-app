<script>
    export default {
        props: ['product']        
    }
</script>

<template>
  <div class="product-card">
      <div class="product-image">
          <img :src="product.images[0]" :alt="product.title">
      </div>
      <div class="product-info">
          <h2>{{ product.title }}</h2>
          <p>{{ product.currentPrice }}</p>
            <router-link tag='a' :to="{name: 'product', params: {slug: product.redirect}}">
                <button>Görüntüle</button>
            </router-link>
      </div>
  </div>
</template>