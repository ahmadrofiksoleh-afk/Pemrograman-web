import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    // state : nympen list item di keranjang
    const items = ref([])

    // Action : fungsi buat nambah produk ke keranjang
    const tambahKeKeranjang = (produk) => {
        items.value.push(produk)
        alert(`${produk.nama} berhasil ditambahkan ke keranjang!`)
    }

    return { items, tambahKeKeranjang }
})