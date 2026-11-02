# 📋 Cheatsheet - Panduan Cepat

## 🚀 3 Langkah Mudah

### 1. Input Tamu
Buka `daftar-tamu.js`:
```javascript
{ nama: 'Bapak Ahmad', kategori: 'Keluarga' }
```

### 2. Generate Link
Buka `generator-link.html` → Pilih tamu → Generate

### 3. Kirim!
Copy link/pesan → Kirim via WhatsApp

---

## 🔗 Format Link

```
index.html?to=NamaTamu
```

**Contoh:**
- `index.html?to=Bapak%20Ahmad` 
- `index.html?to=Ibu%20Siti`

---

## 📱 File Yang Sering Dipakai

| File | Fungsi |
|------|--------|
| `generator-link.html` | Generate semua link |
| `daftar-tamu.js` | Database tamu |
| `TEST-LINK.html` | Test cepat |
| `index.html` | Undangan utama |

---

## 💬 Template WhatsApp

Buka `generator-link.html` → Generate Pesan WhatsApp → Copy → Kirim

---

## 🎯 Kategori Tamu

- `Keluarga` - Keluarga dekat
- `Teman` - Teman pribadi  
- `Kerja` - Rekan kerja
- `Lainnya` - Kategori lain

---

## 📥 Export Data

**Semua Link:**
`generator-link.html` → "Download Semua Link"

**Format CSV:**
`generator-link.html` → "Export ke CSV"

---

## ⚡ Quick Commands

### Tambah Tamu (di daftar-tamu.js)
```javascript
{ nama: 'Nama Lengkap', kategori: 'Keluarga' }
```

### Test Link Manual
```
index.html?to=Nama%20Anda
```

### Edit Base URL (di generator-link.html)
```javascript
const BASE_URL = 'https://yoursite.com/index.html';
```

---

## 🔧 Troubleshooting Cepat

| Problem | Solution |
|---------|----------|
| Nama tidak muncul | Cek `?to=` di URL |
| Link error | Cek BASE_URL |
| Data hilang | Save di daftar-tamu.js |

---

## 📞 Need Help?

Baca: `PANDUAN-PENGGUNAAN.md` (panduan lengkap)

---

## ✅ Checklist Sebelum Kirim

- [ ] Input semua tamu ke `daftar-tamu.js`
- [ ] Test minimal 3 link di `TEST-LINK.html`
- [ ] Generate semua link via `generator-link.html`
- [ ] Export backup (TXT/CSV)
- [ ] Edit template WhatsApp (opsional)
- [ ] Kirim ke tamu

---

**🎉 Siap kirim undangan!**
