# 💍 Undangan Pernikahan Digital - Ranny & Sofyan

Website undangan pernikahan digital yang elegan dengan sistem auto-fill nama tamu dan generator link otomatis.

---

## 🎯 Fitur Utama

✅ **Personalisasi Otomatis** - Nama tamu otomatis terisi dari URL  
✅ **Generator Link** - Tool untuk generate link undangan dengan mudah  
✅ **Template WhatsApp** - Generate pesan WhatsApp siap kirim  
✅ **Database Tamu** - Kelola daftar tamu dengan mudah  
✅ **Export Data** - Download semua link dalam format TXT atau CSV  
✅ **Konfirmasi RSVP** - Tamu bisa konfirmasi kehadiran online  
✅ **Notifikasi Telegram** - Konfirmasi kehadiran otomatis masuk ke Telegram  
✅ **Responsive Design** - Tampil sempurna di semua device  
✅ **Musik Background** - Dengan kontrol play/pause  
✅ **Countdown Timer** - Hitung mundur ke hari H  

---

## 📁 Struktur File

```
UnDig/
│
├── 📄 index.html                    # Halaman undangan utama
├── 📄 generator-link.html          # Tool generator link & WhatsApp
├── 📄 daftar-tamu.js              # Database daftar tamu undangan
├── 📄 TEST-LINK.html              # Tool test link cepat
│
├── 📄 README.md                    # File ini (ringkasan proyek)
├── 📄 PANDUAN-PENGGUNAAN.md       # Panduan lengkap penggunaan
├── 📄 CONTOH-LINK-UNDANGAN.txt    # Contoh format link
│
└── 📁 assets/                      # Folder media (gambar & musik)
    ├── Ranny.jpeg
    ├── Ismail Sofyan Sani2.PNG
    └── Lagu Pernikahan Kita.mp3
```

---

## 🚀 Quick Start

### 1️⃣ Tambah Daftar Tamu

Buka file **`daftar-tamu.js`** dan tambahkan tamu Anda:

```javascript
const daftarTamu = [
    { nama: 'Bapak Ahmad Rizki', kategori: 'Keluarga' },
    { nama: 'Ibu Siti Nurhaliza', kategori: 'Teman' },
    // Tambahkan tamu lainnya...
];
```

### 2️⃣ Generate Link

**Cara 1: Otomatis (Rekomendasi)**
- Buka `generator-link.html` di browser
- Pilih tamu dari daftar
- Klik "Generate Link" atau "Generate Pesan WhatsApp"
- Copy dan kirim!

**Cara 2: Manual**
- Format: `index.html?to=NamaTamu`
- Contoh: `index.html?to=Bapak%20Ahmad`

### 3️⃣ Test Link

- Buka `TEST-LINK.html` untuk test cepat
- Atau buka `generator-link.html` untuk tool lengkap

### 4️⃣ Kirim ke Tamu

- Via WhatsApp: Gunakan template dari generator
- Via email/SMS: Copy link langsung
- Via cetak: Generate QR code dari link

---

## 🎨 Cara Kerja Auto-Fill

Sistem bekerja dengan parameter URL:

```
https://yoursite.com/index.html?to=NamaTamu
                                 ↑
                    Parameter "to" berisi nama tamu
```

**Contoh:**
```
index.html?to=Bapak%20Ahmad%20Rizki
              ↓
Muncul di undangan: "Kepada Yth. Bapak Ahmad Rizki"
```

JavaScript akan:
1. Baca parameter `?to=` dari URL
2. Decode nama tamu (ubah %20 jadi spasi)
3. Tampilkan nama di element `#guestName`
4. Nama otomatis muncul di cover undangan

---

## 📱 Alur Penggunaan

```
1. PERSIAPAN
   ├── Input semua tamu ke daftar-tamu.js
   └── Edit template pesan WhatsApp (opsional)

2. GENERATE
   ├── Buka generator-link.html
   ├── Generate link untuk semua tamu
   └── Export ke TXT/CSV

3. DISTRIBUSI
   ├── Kirim link via WhatsApp/Email/SMS
   └── Atau cetak dengan QR code

4. MONITORING
   ├── Tamu buka undangan (nama otomatis muncul)
   ├── Tamu konfirmasi kehadiran via RSVP
   └── Notifikasi masuk ke Telegram grup
```

---

## 🛠️ Tools yang Tersedia

### 1. **generator-link.html** (Tool Utama)
- Kelola daftar tamu
- Generate link undangan
- Generate template WhatsApp
- Export semua link (TXT/CSV)
- Filter tamu by kategori
- Statistik tamu

### 2. **TEST-LINK.html** (Tool Test)
- Test link cepat
- Preview hasil
- Quick test links
- Copy & open langsung

### 3. **daftar-tamu.js** (Database)
- Simpan data semua tamu
- Format: `{ nama, kategori }`
- Mudah di-edit

---

## 💬 Template WhatsApp

Generator sudah include template WhatsApp siap pakai:

```
Assalamualaikum Warahmatullahi Wabarakatuh 🙏

Kepada Yth.
*[Nama Tamu]*

Tanpa mengurangi rasa hormat, perkenankan kami 
mengundang Bapak/Ibu/Saudara/i untuk menghadiri 
acara pernikahan kami:

*Ranny & Sofyan*
📅 Kamis, 08 Januari 2027

Untuk informasi lengkap acara, silakan buka 
undangan digital kami di:
[Link Undangan]

...
```

**Edit template** di file `generator-link.html` bagian `WHATSAPP_TEMPLATE`.

---

## 📊 Fitur Export

Dari `generator-link.html`, Anda bisa:

### Export TXT
```
1. Bapak Ahmad Rizki (Keluarga)
   https://site.com/index.html?to=Bapak%20Ahmad%20Rizki

2. Ibu Siti (Teman)
   https://site.com/index.html?to=Ibu%20Siti
```

### Export CSV
| No | Nama | Kategori | Link Undangan |
|----|------|----------|---------------|
| 1  | Bapak Ahmad | Keluarga | https://... |
| 2  | Ibu Siti | Teman | https://... |

File CSV bisa dibuka di Excel atau Google Sheets.

---

## ⚙️ Konfigurasi

### Edit Base URL

Di `generator-link.html`, ganti:

```javascript
const BASE_URL = 'https://yoursite.com/index.html';
```

### Edit Data Pernikahan

Di `index.html`, edit bagian `CONFIG`:

```javascript
const CONFIG = {
    groomShort: 'Ranny',
    brideShort: 'Sofyan',
    weddingDate: '2027-01-08 08:00:00',
    // ... dst
};
```

### Setup Telegram Bot

Untuk notifikasi RSVP ke Telegram:

```javascript
telegram: {
    botToken: 'YOUR_BOT_TOKEN',
    chatId: 'YOUR_CHAT_ID'
}
```

---

## 📖 Dokumentasi Lengkap

Lihat file **`PANDUAN-PENGGUNAAN.md`** untuk:
- Panduan step-by-step lengkap
- Tips & trik
- Troubleshooting
- FAQ
- Best practices

---

## 🎯 Use Case & Skenario

### Skenario 1: Undangan Keluarga
```
Nama: "Keluarga Besar Pak Hendra"
Link: index.html?to=Keluarga%20Besar%20Pak%20Hendra
→ Efisien untuk undang satu keluarga besar
```

### Skenario 2: Tamu VIP dengan Gelar
```
Nama: "Dr. Budi Santoso, S.Kom., M.T."
Link: index.html?to=Dr.%20Budi%20Santoso%2C%20S.Kom.%2C%20M.T.
→ Formal dan profesional
```

### Skenario 3: Tamu Biasa
```
Nama: "Bapak Ahmad"
Link: index.html?to=Bapak%20Ahmad
→ Simple tapi tetap sopan
```

---

## 💡 Tips Penggunaan

### ✅ DO's (Yang Harus Dilakukan)

1. **Gunakan nama lengkap dengan sapaan**
   - Contoh: "Bapak Ahmad Rizki", "Ibu Siti"

2. **Backup data tamu secara berkala**
   - Export CSV setelah input banyak tamu

3. **Test link sebelum kirim massal**
   - Gunakan TEST-LINK.html

4. **Gunakan template WhatsApp**
   - Lebih profesional dan informatif

5. **Kategorikan tamu dengan benar**
   - Mudah untuk filter dan statistik

### ❌ DON'T's (Yang Harus Dihindari)

1. **Jangan gunakan nama terlalu pendek**
   - ❌ "Ahmad" 
   - ✅ "Bapak Ahmad Rizki"

2. **Jangan lupa encode URL**
   - Generator otomatis encode
   - Manual: gunakan encodeURIComponent()

3. **Jangan edit index.html untuk tiap tamu**
   - Gunakan parameter URL, bukan hardcode

4. **Jangan share link generator**
   - Hanya share link undangan (index.html?to=...)

---

## 🔧 Troubleshooting

### Nama tidak muncul?
- Cek parameter URL: harus ada `?to=NamaTamu`
- Cek encoding: spasi = %20

### Link tidak bisa dibuka?
- Pastikan `index.html` ada di server/folder yang sama
- Cek BASE_URL di generator

### Data tamu hilang?
- Data di web hanya sementara
- Simpan permanent di `daftar-tamu.js`

### WhatsApp tidak terbuka?
- Install WhatsApp di device
- Atau gunakan WhatsApp Web

---

## 📞 Support & Help

### File Bantuan
- `PANDUAN-PENGGUNAAN.md` - Panduan lengkap
- `CONTOH-LINK-UNDANGAN.txt` - Contoh format
- `TEST-LINK.html` - Tool test

### Tools
- `generator-link.html` - Generator utama
- `TEST-LINK.html` - Quick test

---

## 🎉 Selamat Menggunakan!

Semoga sistem ini membantu mempermudah proses distribusi undangan pernikahan Anda!

**Selamat menempuh hidup baru! 💕**

---

## 📝 Changelog

### v1.0.0 - Initial Release
- ✅ Sistem auto-fill nama tamu dari URL
- ✅ Generator link undangan
- ✅ Template WhatsApp message
- ✅ Database tamu dengan kategori
- ✅ Export TXT & CSV
- ✅ Filter & statistik tamu
- ✅ Test link tool
- ✅ Dokumentasi lengkap

---

## 👨‍💻 Credits

**Made with 💕 by:**
- Ranny & Sofyan
- Wedding Date: 08 Januari 2027

---

## 📄 License

© 2027 Ranny & Sofyan. All Rights Reserved.

---

**🔗 Quick Links:**
- [Generator Link](generator-link.html) - Tool utama
- [Test Link](TEST-LINK.html) - Quick test
- [Undangan](index.html) - Lihat undangan
- [Panduan Lengkap](PANDUAN-PENGGUNAAN.md) - Dokumentasi

---

*Terakhir diupdate: 2027*
