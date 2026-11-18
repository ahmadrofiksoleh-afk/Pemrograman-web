<script setup>
import { useCartStore } from '../stores/cart'

// Props : nerima data produk dari halaman katalog
const props = defineProps({
    produk: Object
})

const cartStore = useCartStore()
</script>

<template>
    <div class = "card">
        <h3>{{ produk.nama }}</h3>
        <p>Harga: Rp {{ produk.harga }}</p>
        <button @click="cartStore.tambahKeKeranjang(produk)">
            + Keranjang
        </button>
    </div>
</template>

<style scoped>
.card {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
    width: 200px;
}
</style>