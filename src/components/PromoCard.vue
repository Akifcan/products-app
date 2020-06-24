<script>
    export default {
        props: ['product']        
    }
</script>

<template>
     <div class="product" :id="product.id">
        <img :src="product.logo" :alt="product.logoAlt" />
        <img :src="product.image" :alt="product.imageAlt" />
        <router-link tag='a' :to="{name: 'products', params: {slug: product.redirectTo}}">
          <h2>{{ product.title }}</h2>
        </router-link>
      </div>
</template>