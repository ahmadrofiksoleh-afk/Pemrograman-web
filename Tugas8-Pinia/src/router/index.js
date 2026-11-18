import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'katalog',
            component: import('../views/KatalogProduk.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: import('../views/KeranjangBelanja.vue')
        }
    ]
})

export default router