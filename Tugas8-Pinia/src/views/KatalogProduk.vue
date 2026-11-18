<script setup>
import { ref } from 'vue'
import ProdukCard from '../components/ProdukCard.vue'

// Data dummy produk
const daftarProduk = ref([
    { id: 1, nama: 'Casing HP Silikon Bening', harga: 25000},
    { id: 2, nama: 'Tempered Glass Anti Gores', harga: 15000},
    { id: 3, nama: 'Kabel Data Type C', harga: 30000}
])
</script>

<template>
    <div style="padding: 20px;">
        <h2>Katalog Produk</h2>
        <div style="display: flex; gap: 20px;">
            <!-- Looping komponen ProdukCard -->
             <ProdukCard v-for="produk in daftarProduk" :key = "produk.id" 
             :produk="produk"/>
                  
        </div>
    </div>
</template>