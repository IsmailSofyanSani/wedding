// ========== DAFTAR TAMU UNDANGAN ==========
// File ini berisi daftar semua tamu undangan
// Format: { nama: 'Nama Lengkap', kategori: 'Keluarga/Teman/Kerja/Lainnya' }

const daftarTamu = [
    // ========== CONTOH DATA - Ganti dengan data tamu Anda ==========
    
    // KELUARGA MEMPELAI WANITA
    { nama: 'Bapak Lamijan & Ibu Kismini Lestari', kategori: 'Keluarga' },
    { nama: 'Keluarga Besar Bapak Lamijan', kategori: 'Keluarga' },
    
    // KELUARGA MEMPELAI PRIA
    { nama: 'Bapak Mohammad Saleh & Ibu Jumrotul Jannah', kategori: 'Keluarga' },
    { nama: 'Keluarga Besar Bapak Mohammad Saleh', kategori: 'Keluarga' },
    
    // KELUARGA LAINNYA
    { nama: 'Bapak Ahmad Rizki & Keluarga', kategori: 'Keluarga' },
    { nama: 'Ibu Hj. Siti Nurhaliza', kategori: 'Keluarga' },
    { nama: 'Keluarga Besar Pak Hendra', kategori: 'Keluarga' },
    
    // TEMAN
    { nama: 'Yogi Adi Purnomo', kategori: 'Teman' },
    { nama: 'Randa Nanda Pratama', kategori: 'Teman' },
    { nama: 'Pandu', kategori: 'Teman' },
    { nama: 'Ari', kategori: 'Teman' },
    { nama: 'Ilham', kategori: 'Teman' },
    { nama: 'Huda', kategori: 'Teman' },
    { nama: 'Soni', kategori: 'Teman' },
    { nama: 'Halim', kategori: 'Teman' },
    { nama: 'Ade', kategori: 'Teman' },
    { nama: 'Adil', kategori: 'Teman' },
    { nama: 'Iqbal', kategori: 'Teman' },
    { nama: 'Lilis', kategori: 'Teman' },
    { nama: 'Ditha', kategori: 'Teman' },
    { nama: 'Reza', kategori: 'Teman' },
    { nama: 'Galuh', kategori: 'Teman' },
    { nama: 'Aldi', kategori: 'Teman' },
    { nama: 'Saiful', kategori: 'Teman' },
    { nama: 'Wasil', kategori: 'Teman' },
    { nama: 'Syahid', kategori: 'Teman' },
    { nama: 'Dedi', kategori: 'Teman' },

    // REKAN KERJA
    { nama: 'Dr. Dewi Kartika, S.Kom', kategori: 'Kerja' },
    { nama: 'Tim IT PT. Digital Indonesia', kategori: 'Kerja' },
    
    // LAINNYA
    { nama: 'Bapak RT 05/RW 03', kategori: 'Lainnya' },
    
    // ========== TAMBAHKAN TAMU ANDA DI BAWAH INI ==========
    // Format: { nama: 'Nama Lengkap', kategori: 'Keluarga/Teman/Kerja/Lainnya' },
    
    // TIPS:
    // 1. Gunakan nama lengkap dengan sapaan (Bapak/Ibu/Saudara)
    // 2. Untuk keluarga bisa tulis "Bapak Nama & Keluarga"
    // 3. Untuk organisasi bisa tulis "Tim/Kelompok Nama"
    // 4. Jangan lupa koma (,) di akhir setiap baris kecuali baris terakhir
    
];

// ========== JANGAN EDIT DI BAWAH INI ==========
// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = daftarTamu;
}
