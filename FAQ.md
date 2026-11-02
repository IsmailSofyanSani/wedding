# ❓ FAQ - Pertanyaan yang Sering Ditanyakan

## 🎯 Umum

### Q: Bagaimana cara kerja sistem auto-fill nama tamu?
**A:** Sistem membaca parameter `?to=` dari URL. Contoh:
```
index.html?to=Bapak%20Ahmad
```
JavaScript akan membaca "Bapak Ahmad" dan menampilkannya di undangan.

### Q: Apakah perlu database atau backend?
**A:** TIDAK. Sistem ini full client-side (JavaScript murni). Data tamu disimpan di file `daftar-tamu.js`.

### Q: Apakah bisa digunakan offline?
**A:** Ya! Bisa dibuka langsung dari file explorer. Tapi untuk distribusi ke tamu, perlu di-hosting online.

---

## 🔗 Tentang Link

### Q: Kenapa ada %20 di link?
**A:** %20 adalah encoding URL untuk spasi. Ini normal dan otomatis akan dibaca sebagai spasi oleh browser.

### Q: Apakah link case-sensitive?
**A:** Ya! "Bapak Ahmad" ≠ "bapak ahmad". Gunakan kapitalisasi yang benar.

### Q: Bagaimana jika nama tamu panjang sekali?
**A:** Tidak masalah! Sistem akan encode otomatis. Link tetap akan bekerja.

### Q: Bisakah satu link untuk satu keluarga?
**A:** Bisa! Gunakan format:
```javascript
{ nama: 'Keluarga Besar Pak Hendra', kategori: 'Keluarga' }
```

---

## 🛠️ Teknis

### Q: File apa saja yang wajib ada?
**A:** Minimal 2 file:
- `index.html` (undangan)
- `daftar-tamu.js` (data tamu)

File lain (generator, test, dll) adalah bonus tools.

### Q: Bagaimana cara hosting online?
**A:** Upload semua file ke:
- GitHub Pages (gratis)
- Netlify (gratis)
- Vercel (gratis)
- Web hosting berbayar

### Q: Apakah bisa di-custom tampilannya?
**A:** Ya! Edit CSS di `index.html`. Semua style ada di tag `<style>`.

### Q: Bagaimana mengganti foto mempelai?
**A:** Ganti file foto di folder `assets/`, atau edit path di HTML:
```html
<img src="./assets/NamaFoto.jpg">
```

---

## 📱 Generator & Tools

### Q: Apakah harus pakai generator-link.html?
**A:** Tidak wajib, tapi SANGAT disarankan! Generator mempermudah:
- Generate link otomatis
- Template WhatsApp
- Export semua link
- Statistik tamu

### Q: Data tamu hilang setelah refresh generator?
**A:** Data yang ditambah via web hanya sementara di browser. Untuk permanent, tambahkan ke file `daftar-tamu.js`.

### Q: Bagaimana mengedit template WhatsApp?
**A:** Buka `generator-link.html`, cari bagian:
```javascript
const WHATSAPP_TEMPLATE = (nama) => `
[EDIT DI SINI]
`;
```

### Q: Export CSV untuk apa?
**A:** Bisa dibuka di Excel/Google Sheets untuk:
- Tracking tamu yang sudah dikirimi
- Membuat checklist kehadiran
- Dokumentasi

---

## 🎨 Personalisasi

### Q: Bagaimana mengganti nama mempelai?
**A:** Edit di `index.html` bagian `CONFIG`:
```javascript
const CONFIG = {
    groomShort: 'Ranny',
    brideShort: 'Sofyan',
    // dst...
};
```

### Q: Bagaimana mengganti tanggal pernikahan?
**A:** Edit di `CONFIG`:
```javascript
weddingDate: '2027-01-08 08:00:00',
```
Format: YYYY-MM-DD HH:MM:SS

### Q: Bagaimana mengganti lokasi acara?
**A:** Edit langsung di HTML atau di bagian `CONFIG`:
```javascript
akadLocation: 'Rumah Mempelai Wanita',
akadMapsUrl: 'https://maps.google.com/?q=...',
```

### Q: Bagaimana mengganti musik background?
**A:** 1. Simpan file musik di folder `assets/`
2. Edit di HTML:
```html
<source src="./assets/NamaMusik.mp3" type="audio/mpeg">
```

---

## 📊 RSVP & Telegram

### Q: Bagaimana setup Telegram bot?
**A:** 
1. Buat bot via @BotFather di Telegram
2. Dapatkan bot token
3. Buat grup untuk notifikasi
4. Dapatkan chat ID grup
5. Input ke `CONFIG`:
```javascript
telegram: {
    botToken: 'YOUR_BOT_TOKEN',
    chatId: 'YOUR_CHAT_ID'
}
```

### Q: Apakah wajib pakai Telegram?
**A:** Tidak wajib! Sistem RSVP tetap bekerja tanpa Telegram. Telegram hanya untuk notifikasi.

### Q: Data RSVP disimpan di mana?
**A:** Saat ini hanya di browser (temporary). Untuk permanent storage, perlu backend/database.

### Q: Bisakah lihat semua konfirmasi kehadiran?
**A:** Via Telegram: Ya (masuk ke grup)  
Via website: Temporary di browser saja

---

## 🚀 Distribusi & WhatsApp

### Q: Bagaimana cara kirim via WhatsApp?
**A:** 
1. Generate pesan di `generator-link.html`
2. Copy pesan
3. Buka WhatsApp
4. Paste ke chat tamu
5. Kirim!

### Q: Bisakah kirim massal via WhatsApp?
**A:** WhatsApp tidak support bulk message. Harus kirim satu per satu manual.

### Q: Alternatif selain WhatsApp?
**A:** 
- Email (bisa bulk via mail merge)
- SMS
- Telegram
- Print dengan QR code

### Q: Bagaimana membuat QR code?
**A:** Gunakan QR code generator online:
1. Copy link undangan
2. Paste ke QR generator (qr-code-generator.com)
3. Download QR code
4. Print di kartu undangan fisik

---

## 🐛 Troubleshooting

### Q: Nama tidak muncul di undangan?
**A:** Cek:
- ✅ URL punya parameter `?to=NamaTamu`
- ✅ Nama di-encode dengan benar (spasi = %20)
- ✅ File `index.html` terupload dengan benar

### Q: Link tidak bisa dibuka?
**A:** Cek:
- ✅ File `index.html` ada di server
- ✅ Path URL benar
- ✅ Tidak ada typo di URL

### Q: Musik tidak play otomatis?
**A:** Browser modern block autoplay. Tamu harus klik tombol musik manual. Ini normal dan by design.

### Q: Countdown tidak jalan?
**A:** Cek:
- ✅ Tanggal di `CONFIG` benar
- ✅ Format: `YYYY-MM-DD HH:MM:SS`
- ✅ JavaScript tidak error (cek console)

### Q: WhatsApp link tidak bekerja?
**A:** Pastikan:
- ✅ WhatsApp terinstall
- ✅ Atau buka di browser (WhatsApp Web)

### Q: Generator tidak load data tamu?
**A:** Cek:
- ✅ File `daftar-tamu.js` ada di folder yang sama
- ✅ Format JavaScript benar (ada `;` di akhir)
- ✅ Tidak ada typo di kode

---

## 💾 Backup & Data

### Q: Bagaimana backup data tamu?
**A:** 
1. Copy file `daftar-tamu.js` ke tempat aman
2. Atau export CSV dari generator
3. Atau export semua link (TXT)

### Q: Data tamu aman tidak?
**A:** Data hanya ada di file lokal Anda. Tidak dikirim ke server manapun. 100% privacy.

### Q: Bisakah import data dari Excel?
**A:** Saat ini tidak support langsung. Tapi bisa:
1. Copy data dari Excel
2. Paste ke `daftar-tamu.js` dengan format:
```javascript
{ nama: 'Nama', kategori: 'Kategori' },
```

---

## 🎓 Best Practices

### Q: Berapa banyak tamu yang bisa ditambahkan?
**A:** Tidak ada limit! Bisa ratusan bahkan ribuan tamu.

### Q: Kapan waktu terbaik kirim undangan?
**A:** 
- H-30: Kirim save the date
- H-14: Kirim undangan lengkap
- H-3: Reminder

### Q: Kategori tamu untuk apa?
**A:** Untuk:
- Filter tamu
- Statistik
- Tracking
- Organisasi data

### Q: Naming convention untuk tamu?
**A:** Rekomendasi:
- Gunakan sapaan: "Bapak/Ibu/Saudara"
- Nama lengkap
- Gelar jika ada: "Dr./Drs./Hj."
- Konsisten untuk semua tamu

---

## 🔮 Advanced

### Q: Bisakah tracking siapa yang sudah buka undangan?
**A:** Perlu analytics (Google Analytics, etc). Add tracking code di `index.html`.

### Q: Bisakah payment gateway untuk angpao digital?
**A:** Bisa! Tambahkan section baru di HTML dengan:
- QR code e-wallet
- Link payment
- Nomor rekening

### Q: Bisakah multi-language?
**A:** Bisa! Tapi perlu custom code. Atau buat 2 versi undangan terpisah.

### Q: Bisakah live streaming?
**A:** Bisa! Tambahkan embed YouTube/Zoom di section khusus.

---

## 📞 Butuh Bantuan Lebih?

**Cek dokumentasi:**
- `README.md` - Overview lengkap
- `PANDUAN-PENGGUNAAN.md` - Panduan detail
- `CHEATSHEET.md` - Panduan cepat
- `CONTOH-LINK-UNDANGAN.txt` - Contoh format

**Test tools:**
- `TEST-LINK.html` - Test link cepat
- `generator-link.html` - Generator utama

---

## 🎉 Tips Pro

1. **Test dulu sebelum kirim massal**
   - Test 5-10 link dulu
   - Pastikan semua bekerja

2. **Backup semua**
   - File original
   - Data tamu
   - Export CSV

3. **Personalisasi template WhatsApp**
   - Sesuaikan dengan style Anda
   - Jangan terlalu formal/informal

4. **Monitor konfirmasi kehadiran**
   - Setup Telegram bot
   - Cek berkala

5. **Siapkan plan B**
   - Jika website down, punya backup link?
   - Punya undangan fisik?

---

**Masih ada pertanyaan? Baca dokumentasi lengkap! 📚**

*Last updated: 2027*
