import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

// Data iventaris labolatorium

let inventaris = [
  { id: 1, nama: 'PC Rakitan Core i7 - Lab Jaringan', kategori: 'Komputer', jumlah: 25, kondisi: 'Baik' },
  { id: 2, nama: 'Proyektor Epson EB-X500 (Lantai 3)', kategori: 'Proyektor', jumlah: 2, kondisi: 'Baik' },
  { id: 3, nama: 'Switch Cisco Catalyst 2960 24-Port', kategori: 'Switch', jumlah: 5, kondisi: 'Baik' },
  { id: 4, nama: 'Router MikriTik RB951G-2HnD', kategori: 'Router', jumlah: 20, kondisi: 'Baik' },
]

// Get /api/inventaris - mendapatkan semua data

app.get('/api/inventaris', (c) => {
  return c.json({
    status: "success",
    message: "Berhasil mengambil daftar inventaris",
    data: inventaris
  })
})

// Get /api/inventaris - mendapatkan detail satu barang

app.get('/api/inventaris/:id', (c) => {
  const id = parseInt(c.req.param('id'))
  const barang = inventaris.find(item => item.id === id)


  if (!barang) {
    return c.json({
      status: "error",
      message: "Barang tidak ditemukan"
    }, 404)
  }

  return c.json({
    status: "success",
    message: "Detail barang ditemukan",
    data: barang
  })
})

// Post /api/inventaris - menambah barang baru

app.post('/api/inventaris', async (c) => {
  try {
    const body = await c.req.json()

    if (!body.nama || !body.kategori) {
      return c.json({
        status: 'error',
        message: 'Nama dan karegori wajib diisi'
      }, 400)
    }

    const newId = inventaris.length > 0
      ? inventaris[inventaris.length - 1].id + 1 : 1

    const barangBaru = {
      id: newId,
      nama: body.nama,
      kategori: body.kategori,
      jumlah: body.jumlah || 0,
      kondisi: body.kondisi || "Belum dicek"
    }

    inventaris.push(barangBaru)

    return c.json({
      status: 'success',
      message: 'Barang berhasil ditambahkan',
      data: barangBaru
    }, 201)


  } catch (error) {
    return c.json({
      status: "error",
      message: "Format data tidak valid(gunakan JSON)"
    }, 400)
  }
})

// jalankan server

const port = 3000
console.log(`Server berjalan di http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})