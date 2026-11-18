<script setup>
import { ref, computed } from 'vue'

// state(data)
const daftarCatatan = ref([])
const inputCatatan = ref('')
const kategori = ref('Pribadi')

// Fungsi Menambah Catatan
const tambahCatatan = () => {
  if (inputCatatan.value === '') {
    alert('Catatan tidak boleh kosong!')
    return
  }

  daftarCatatan.value.push({
    teks: inputCatatan.value,
    kategori: kategori.value
  })

  inputCatatan.value = ''
}

// Computed Property
const jumlahPenting = computed(() => {
  return daftarCatatan.value.filter(catatan => catatan.kategori === 'Penting').length
})
</script>

<template>
  <div style="padding: 20px; font-family: sans-serif;">
    <h1> Aplikasi Buku Catatan</h1>

    <!-- Form Input -->
     <div style="margin-bottom: 20px; padding: 10px; border: 1px solid #ccc;">
      <input type="text" v-model="inputCatatan" placeholder="Tulis Catatan Baru.." style=""margin-right: 10px;/>

      <selesct v-model="kategori" style="margin-right: 10px;">
        <option value="Pribadi">Pribadi</option>
        <option value="Kuliah">Kuliah</option>
        <option value="Penting">Penting</option>
      </selesct>

      <button @click="tambahCatatan">Tambah Catatan</button>
     </div>
     
     <hr />

     <!-- Tampilan Daftar Catatan -->
      <h3>Daftar Catatan</h3>
      <p v-if="daftarCatatan.length === 0">UPS, Belum ada catatan NIH.</p>

      <ui>
        <li v-for="(catatan, index) in daftarCatatan" :key="index">
          <strong>[{{ catatan.kategori }}]</strong> - {{ catatan.text }}
        </li>
      </ui>

     <!-- Tampilan computed proprerty-->
      <h4 style=""color: red;>
     Total Catatan Penting: {{ jumlahPenting }}   
      </h4> 
  </div>
</template>
