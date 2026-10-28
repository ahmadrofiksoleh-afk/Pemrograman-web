// Data array

const transaksiBelanja = [
    {
        id: 1, barang: "Laptop", harga: 4500000, qty: 1, kategori: "Elektronik"
    },
    {
        id: 2, barang: "Mouse Wireless", harga: 100000, qty: 2, kategori: "Elektronik"
    },
    {
        id: 3, barang: "Keyboard Mechanical", harga: 150000, qty: 1, kategori: "Elektronik"
    },
    {
        id: 4, barang: "Buku Tulis", harga: 15000, qty: 5, kategori: "Alat Tulis"
    },
    {
        id: 5, barang: "Pensil", harga: 4500, qty: 10, kategori: "Alat Tulis"
    },
    {
        id: 6, barang: "Pulpen", harga: 5000, qty: 5, kategori: "Alat Tulis"
    },
    {
        id: 7, barang: "Kopi tubruk", harga: 25000, qty: 3, kategori: "Makanan & Minuman"
    },
    {
        id: 8, barang: "Roti Bakar", harga: 20000, qty: 2, kategori: "Makanan & Minuman"
    },
    {
        id: 9, barang: "Teh Celup", harga: 15000, qty: 4, kategori: "Makanan & Minuman"
    },
];

// Filter transaksi berdasarkan kategori

const kategoriDicari = "Makanan & Minuman";
const hasilFilter = transaksiBelanja.filter((item) => item.kategori === kategoriDicari);

// menghitung subtotal

const dataDifilterDenganSubtotal = hasilFilter.map(({ id, barang, harga, qty, kategori }) => {
    const subtotal = harga * qty;
    return { id, barang, subtotal, kategori };
});

// reduce: mengitung total akhir

const totalAkhir = dataDifilterDenganSubtotal.reduce((total, item) => total + item.subtotal, 0);

// Tampilan Hasil

console.log('=== DATA TRANSAKSI ===');
console.log(dataDifilterDenganSubtotal);

console.log(`\n=== TOTAL BELANJA ${kategoriDicari.toUpperCase()} ===`);
console.log(`Rp ${totalAkhir.toLocaleString('id-ID')}`);