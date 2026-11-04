// ========== DAFTAR TAMU UNDANGAN ==========
// File ini berisi daftar semua tamu undangan
// Format: { nama: 'Nama Lengkap', kategori: 'Keluarga/Teman Mempelai Wanita/Kerja/Teman Mempelai Pria' }

const daftarTamu = [
    // ========== CONTOH DATA - Ganti dengan data tamu Anda ==========
    
    // KELUARGA MEMPELAI WANITA
    { nama: 'Bapak Lamijan & Ibu Kismini Lestari', kategori: 'Keluarga' },
    { nama: 'Keluarga Besar Bapak Lamijan', kategori: 'Keluarga' },
    
    // KELUARGA MEMPELAI PRIA
    { nama: 'Bapak Mohammad Saleh & Ibu Jumrotul Jannah', kategori: 'Keluarga' },
    { nama: 'Keluarga Besar Bapak Mohammad Saleh', kategori: 'Keluarga' },
    
    // KELUARGA LAINNYA
    { nama: '', kategori: 'Keluarga' },
    { nama: '', kategori: 'Keluarga' },
    { nama: '', kategori: 'Keluarga' },
    
    // Teman Mempelai Wanita
    { nama: 'Iis Maulida', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Yufrida Amalia', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Aidah Nabilah Azzahra', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Ully Artha Silalahi', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Ahmad Thoriq', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Amri Rijal Muttaqin', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Aulia Richintya', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Dita Cahya Dika', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Endo Yoga Asmara Wiwaha', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Firza Intan Safitri', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Frendy Anjas Prasetia', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Julian Ayu Chasanah', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Lukman Adi', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Melati Dwi Kharisma', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Moch. Riza Alfianuddin', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Moh. Ilham Shafii', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Muhammad Ilham Purwanto', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Novela Bayu Wycaksono', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Nur Anisfi Choirini', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Raihan Rakha Musthafa', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Rocky Pramana Widodo', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Muhammad Iqbal Firdaus', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Ine Martha ', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Mega Setya Buana', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Deo Pramudhika', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Ayu Humaidatun Nisa', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Nadia Rahmatillah Arief', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Mohammad Dzikril Akbar', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Khoylila Ayu Aristi', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Dika Rabbaniy Firdaus', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Nisa un Saidah', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Zahro ul Aini', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Novita Nanda Marini', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Intan Andani Putri', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Candra Arfina', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Erizadwidiwid R.', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Shafira Ardi Mangesti', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Roni Setiawan', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Ilyas Rasyid Al Fattah', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Aprinda Ratna Lovela', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Shinta Maulidya', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Olivia Finurinsyah S.', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Sofiniyati Maulidia', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Faisholli Khoniansah', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Ega Rizki Saputra', kategori: 'Teman Mempelai Wanita' },
    { nama: 'Diki Romadhoni', kategori: 'Teman Mempelai Wanita' },
    { nama: '', kategori: 'Teman Mempelai Wanita' },
    

    // REKAN KERJA
    { nama: '', kategori: 'Kerja' },
    { nama: '', kategori: 'Kerja' },
    
    // TEMAN MEMPELAI PRIA
    { nama: 'Ade', kategori: 'Teman Mempelai Pria' },
    { nama: 'Adil', kategori: 'Teman Mempelai Pria' },
    { nama: 'Iqbal', kategori: 'Teman Mempelai Pria' },
    { nama: 'Lilis', kategori: 'Teman Mempelai Pria' },
    { nama: 'Ditha', kategori: 'Teman Mempelai Pria' },
    { nama: 'Reza', kategori: 'Teman Mempelai Pria' },
    { nama: 'Galuh', kategori: 'Teman Mempelai Pria' },
    { nama: 'Aldi', kategori: 'Teman Mempelai Pria' },
    { nama: 'Saiful', kategori: 'Teman Mempelai Pria' },
    { nama: 'Wasil', kategori: 'Teman Mempelai Pria' },
    { nama: 'Syahid', kategori: 'Teman Mempelai Pria' },
    { nama: 'Dedi', kategori: 'Teman Mempelai Pria' },
    
    // ========== TAMBAHKAN TAMU ANDA DI BAWAH INI ==========
    // Format: { nama: 'Nama Lengkap', kategori: 'Keluarga/Teman Mempelai Wanita/Kerja/Teman Mempelai Pria' },
    
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
