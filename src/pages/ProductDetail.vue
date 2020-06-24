<script>
    export default {
        created(){
            this.$store.dispatch('Products/getProduct', this.$route.params.slug)
        },       
        data(){
            return{
                currentImage: null
            }
        },
        computed: {
            product(){
                return this.$store.getters['Products/product']
            }
        },
        destroyed(){
            this.$store.dispatch('Products/removeCurrentProducts')
        },
        watch: {
            product(val){
                this.currentImage = val.images[0]
            }
        }
    }
</script>

<template>
    <div class="container product-detail" v-if='product'>
        <div class="product-images">
            <div class="current-image" :style="{backgroundImage: 'url('+ currentImage  +')'}">
            </div>
            <div class="preview-images">
                <div class="image" v-for='image in product.images' :key='image'>
                    <img :src="image" :alt="product.name" @click='currentImage = image'>
                </div>
            </div>
        </div>
        <div class="product-infos">
            <h2>{{ product.name }}</h2>
            <p>{{ product.price }} TL</p>
            <a target="_blank" :href="'https://www.hepsiburada.com'+$route.params.slug">
                <button>Görüntüle</button>
            </a>
        </div>
    </div>
</template>