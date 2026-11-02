# 📖 Panduan Penggunaan - Generator Link Undangan Pernikahan

## 🎯 Ringkasan Sistem

Sistem ini memudahkan Anda untuk:
- ✅ Mengelola daftar tamu undangan
- ✅ Generate link undangan otomatis dengan nama tamu
- ✅ Generate pesan WhatsApp siap kirim
- ✅ Export daftar link dalam format TXT atau CSV

---

## 🚀 Cara Penggunaan

### 1️⃣ **Tambah Daftar Tamu**

**Opsi A: Edit File `daftar-tamu.js` (Rekomendasi)**

Buka file `daftar-tamu.js` dan tambahkan tamu Anda:

```javascript
const daftarTamu = [
    { nama: 'Bapak Ahmad Rizki', kategori: 'Keluarga' },
    { nama: 'Ibu Siti Nurhaliza', kategori: 'Keluarga' },
    { nama: 'Drs. Budi Santoso', kategori: 'Teman' },
    { nama: 'Dr. Dewi Kartika, S.Kom', kategori: 'Kerja' },
    
    // Tambahkan tamu lainnya di sini
    { nama: 'Nama Tamu Anda', kategori: 'Keluarga' },
];
```

**Kategori yang tersedia:**
- `Keluarga` - untuk keluarga dekat
- `Teman` - untuk teman pribadi
- `Kerja` - untuk rekan kerja
- `Lainnya` - untuk kategori lain

**Opsi B: Tambah Lewat Web Interface**

1. Buka file `generator-link.html` di browser
2. Di bagian "Tambah Tamu Baru"
3. Isi nama dan pilih kategori
4. Klik "Tambah Tamu"

⚠️ **CATATAN**: Data yang ditambah lewat web hanya tersimpan sementara. Untuk menyimpan permanen, copy data ke file `daftar-tamu.js`.

---

### 2️⃣ **Generate Link Undangan**

#### **Cara Manual (Satu per Satu)**

1. Buka file `generator-link.html` di browser
2. Lihat daftar tamu di bagian bawah
3. Klik tombol **"Pilih"** atau **"🔗 Link"** pada nama tamu
4. Link akan otomatis digenerate
5. Klik **"Copy Link"** untuk copy ke clipboard
6. Atau klik **"Generate Pesan WhatsApp"** untuk dapat template pesan lengkap

#### **Cara Otomatis (Semua Sekaligus)**

1. Buka file `generator-link.html` di browser
2. Scroll ke bagian "Daftar Tamu"
3. Klik **"📥 Download Semua Link"** untuk download file TXT
4. Atau klik **"📊 Export ke CSV"** untuk format spreadsheet

File hasil download akan berisi:
```
1. Bapak Ahmad Rizki (Keluarga)
   https://yoursite.com/index.html?to=Bapak%20Ahmad%20Rizki

2. Ibu Siti Nurhaliza (Keluarga)
   https://yoursite.com/index.html?to=Ibu%20Siti%20Nurhaliza
```

---

### 3️⃣ **Kirim Undangan via WhatsApp**

#### **Kirim Manual**

1. Generate link untuk tamu (lihat langkah 2)
2. Klik **"Generate Pesan WhatsApp"**
3. Klik **"📋 Copy Pesan"** untuk copy template pesan
4. Buka WhatsApp dan paste ke chat tamu
5. Atau klik **"💬 Buka WhatsApp"** untuk langsung membuka WhatsApp Web

#### **Template Pesan WhatsApp**

Template dapat diedit di file `generator-link.html`, cari bagian:

```javascript
const WHATSAPP_TEMPLATE = (nama) => `
Assalamualaikum Warahmatullahi Wabarakatuh 🙏

Kepada Yth.
*${nama}*

Tanpa mengurangi rasa hormat, perkenankan kami mengundang...
`;
```

Edit sesuai keinginan Anda!

---

### 4️⃣ **Filter dan Cari Tamu**

Di halaman `generator-link.html`:

1. Gunakan dropdown **"Filter Kategori"** untuk melihat tamu berdasarkan kategori
2. Pilih:
   - **Semua Kategori** - tampilkan semua
   - **Keluarga** - hanya keluarga
   - **Teman** - hanya teman
   - **Kerja** - hanya rekan kerja

---

## 🔗 Format Link Undangan

Format link yang dihasilkan:
```
https://yoursite.com/index.html?to=NamaTamu
```

Contoh:
```
https://yoursite.com/index.html?to=Bapak%20Ahmad%20Rizki
```

Nama tamu akan **otomatis** muncul di halaman undangan:
- Di cover: "Kepada Yth. Bapak Ahmad Rizki"
- Di seluruh halaman sesuai personalisasi

---

## 📊 Statistik Tamu

Dashboard di `generator-link.html` menampilkan:
- **Total Tamu** - jumlah seluruh tamu
- **Keluarga** - jumlah tamu kategori keluarga
- **Teman** - jumlah tamu kategori teman

---

## ⚙️ Konfigurasi Lanjutan

### Edit Base URL

Jika undangan Anda di hosting online, edit base URL di `generator-link.html`:

```javascript
// Ganti dengan domain Anda
const BASE_URL = 'https://rannysofy.com/undangan/index.html';
```

### Edit Template Pesan

Edit pesan WhatsApp sesuai keinginan di file `generator-link.html`:

```javascript
const WHATSAPP_TEMPLATE = (nama) => `
Pesan Anda di sini...
*${nama}* akan diganti dengan nama tamu
{{LINK}} akan diganti dengan link undangan
`;
```

---

## 📁 Struktur File

```
UnDig/
├── index.html              # Halaman undangan utama
├── daftar-tamu.js         # Database daftar tamu
├── generator-link.html    # Tool generator link & WhatsApp
├── assets/                # Folder gambar & musik
└── PANDUAN-PENGGUNAAN.md  # File ini
```

---

## 💡 Tips & Trik

### ✅ **Best Practices**

1. **Gunakan nama lengkap dan sapaan** untuk tamu
   - ✅ Baik: "Bapak Ahmad Rizki"
   - ❌ Kurang: "Ahmad"

2. **Gunakan gelar jika perlu**
   - Contoh: "Dr. Budi Santoso, S.Kom", "Ibu Hj. Siti Aminah"

3. **Untuk keluarga besar**, bisa tulis:
   - "Keluarga Besar Bapak Hendra"
   - "Bapak Andi & Keluarga"

4. **Backup data tamu Anda** secara berkala dengan export CSV

### 🚀 **Workflow Efisien**

1. **Persiapan**: Input semua tamu ke `daftar-tamu.js`
2. **Generate**: Buka `generator-link.html` dan export semua link
3. **Kirim**: Copy-paste link/pesan ke WhatsApp tamu satu per satu
4. **Monitor**: Cek konfirmasi kehadiran di halaman undangan atau Telegram

---

## 🆘 Troubleshooting

### ❓ Link tidak bekerja?
- Pastikan file `index.html` dan `generator-link.html` di folder yang sama
- Cek apakah BASE_URL sudah benar

### ❓ Nama tamu tidak muncul?
- Pastikan URL mengandung parameter `?to=NamaTamu`
- Cek apakah nama sudah diencode dengan benar (spasi = %20)

### ❓ Data tamu hilang setelah refresh?
- Data yang ditambah via web hanya sementara
- Copy data ke file `daftar-tamu.js` untuk menyimpan permanen

### ❓ WhatsApp tidak terbuka?
- Pastikan WhatsApp sudah terinstall di device
- Atau gunakan WhatsApp Web di browser

---

## 📞 Support

Jika ada pertanyaan atau masalah, silakan hubungi developer atau buka dokumentasi di file ini.

---

## 🎉 Selamat!

Anda sudah siap menggunakan sistem generator link undangan! 

**Semoga pernikahan Ranny & Sofyan lancar dan penuh berkah! 💕**

---

*Made with 💕 by Ranny & Sofyan*
*© 2027 All Rights Reserved*
