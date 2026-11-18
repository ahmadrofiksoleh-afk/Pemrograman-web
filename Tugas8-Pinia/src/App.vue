<script setup>
</script>

<template>
  <div>
    <!-- Navigasi sederhana -->
     <nav style="padding: 10px; background: #eee; margin-bottom: 20px;">
      <router-link to="/">Katalog Produk</router-link> | <router-link to="/cart">Keranjang</router-link>
     </nav>

     <!-- Konten Halaman -->
      <router-view>
      </router-view>
  </div>
</template>
