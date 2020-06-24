const state={
    products: [
        {
            logo: require('@/assets/images/nike-logo.png'),
            logoAlt: 'nike logo',
            image: require('@/assets/images/shoe.png'),
            imageAlt: 'shoe',
            title: 'Koşu Ayakkabıları',
            id: 'shoe',
            redirectTo: 'nike+kosu+ayakkabisi'
        },
        {
            logo: require('@/assets/images/adidas-logo.png'),
            logoAlt: 'adidas logo',
            image: require('@/assets/images/jacket.png'),
            imageAlt: 'jacket',
            title: 'Koşu Ceketleri',
            id: 'jacket',
            redirectTo: 'adidas+ceket'
        },
        {
            logo: require('@/assets/images/boxing-logo.png'),
            logoAlt: 'boxing logo',
            image: require('@/assets/images/defend.png'),
            imageAlt: 'defend',
            title: 'Kendini Savun',
            id: 'defend',
            redirectTo: 'boks'
        },
    ]
}
const getters={
    products: state => state.products
}
const mutations={}
const actions={}

export default{
    namespaced: true,
    state, getters, mutations, actions
}