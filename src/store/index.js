import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Promo from './module/promo'
import Products from './module/products'

export const store = new Vuex.Store({
    modules: {
        Promo,
        Products
    }
})