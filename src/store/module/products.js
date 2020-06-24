import axios from 'axios'
import { API_URL } from '../constants'

const state={
    products: null,
    product: null,
}
const getters={
    products: state => state.products,
    product: state => state.product,
}
const mutations={
    setProducts(state, payload){
        state.products = payload
    },
    setProduct(state, payload){
        state.product = payload
    },
}
const actions={
    getProducts(vuexContext, payload){
        axios.get(`${API_URL}/search?slug=${payload}`, {
            headers: {
                'apikey': 'Sea-Api-9eaebc2c6dfb017693d8fbe8269439e8aa26030cbfa445a140b5532aa45cb40a0b880ca1d24d3bbcb0f0c2f93bd22060'
            }
        })
        .then(response => {
            vuexContext.commit('setProducts', response.data)
        })
    },
    getProduct(vuexContext, payload){
        axios.get(`${API_URL}/detail${payload}`, {
            headers: {
                'apikey': 'Sea-Api-9eaebc2c6dfb017693d8fbe8269439e8aa26030cbfa445a140b5532aa45cb40a0b880ca1d24d3bbcb0f0c2f93bd22060'
            }
        })
        .then(response => {
            console.log(response.data[0])
            vuexContext.commit('setProduct', response.data[0])
        })
    },
    removeCurrentProducts(vuexContext){
        vuexContext.state.products = null
        vuexContext.state.product = null
    }
}

export default{
    namespaced: true,
    state, getters, mutations, actions
}