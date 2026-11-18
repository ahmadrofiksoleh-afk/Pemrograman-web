<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
</script>

<template>
    <div style="padding: 20px;">
        <h2> KeranjangBelanja </h2>

        <!-- Cek Kalau keranjang ksosong -->
        <p v-if="cartStore.items.length === 0"> Keranjang masih kosong nih.</p>

        <!-- Tampilan List barang kalau ada isinya -->
         <ul v-else>
            <li v-for="(item, index) in cartStore.items" :key="index">
                {{  item.nama }} - Rp {{ item.harga }}
            </li>
         </ul>
    </div>
</template>