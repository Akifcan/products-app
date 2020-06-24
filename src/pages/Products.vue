<script>
import ProductCard from '@/components/ProductCard'
export default {
    created(){
        console.log(this.$route)
        this.$store.dispatch('Products/getProducts', this.$route.params.slug)
    },
    destroyed(){
        this.$store.dispatch('Products/removeCurrentProducts')
    },
    computed: {
        products(){
            return this.$store.getters['Products/products']
        }
    },
    components: {
        ProductCard
    }
}
</script>

<template>
    <div class="container">
        <h1>Ürünler</h1>
        <div class="product-list">
            <ProductCard 
                v-for='product in products'
                :key='product.redirect'
                :product='product' />
        </div>
    </div>
</template>