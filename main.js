// ========== KONFIGURASI (EDIT DI SINI) ==========
const CONFIG = {
    // Nama Mempelai
    groomShort: 'Ranny',
    brideShort: 'Sofyan',
    groomFull: 'Ranny Anjarwati , S.Tr.T',
    brideFull: 'Ismail Sofyan Sani, S.Kom.',
    
    // Tanggal & Waktu Pernikahan (format: YYYY-MM-DD HH:MM:SS)
    weddingDate: '2027-01-08 07:00:00',
    
    // Akad
    akadDate: '08 Januari 2027',
    akadTime: '07.00 - 10.00 WIB',
    akadLocation: 'Rumah Mempelai Wanita',
    akadMapsUrl: 'https://maps.app.goo.gl/Ldp3m14UTALCWKL8A',
    
    // Resepsi
    resepsiDate: '08 Januari 2027',
    resepsiTime: '13.30 - 17.00 WIB',
    resepsiLocation: 'Rumah Mempelai Wanita',
    resepsiMapsUrl: 'https://maps.app.goo.gl/Ldp3m14UTALCWKL8A',
    
    // URL Musik (file lokal dari folder assets)
    musicUrl: './assets/Lagu Pernikahan Kita - Tiara Andini, Arsy Widianto (Saxophone Cover by Dori Wirawan).mp3',
    
    // Instagram
    groomInstagram: 'RannyAnjarwati',
    brideInstagram: 'IsmailSofyanSani',
    
    // Telegram Bot (untuk notifikasi konfirmasi kehadiran)
    telegram: {
        botToken: '9249038522:AAHgF7XrMKxbrByB7SEvMrvfK8q3a84HQX8',
        chatId: '-5392485090' // Group Chat ID "Tamu Undangan"
    }
};

// ========== GET GUEST NAME FROM URL ==========
function getGuestName() {
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');
    return guestName || 'Tamu Undangan';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('guestName').textContent = getGuestName();
    
    // ========== OPEN INVITATION ==========
    const openButton = document.getElementById('openButton');
    const cover = document.getElementById('cover');
    const mainContent = document.getElementById('main-content');
    const musicToggle = document.getElementById('musicToggle');
    const bottomNav = document.getElementById('bottomNav');
    const bgMusic = document.getElementById('bgMusic');
    
    openButton.addEventListener('click', function() {
        // Hide cover dengan fade out
        cover.style.transition = 'opacity 0.8s ease-out';
        cover.style.opacity = '0';
        cover.style.pointerEvents = 'none';
        
        setTimeout(() => {
            cover.style.display = 'none';
            cover.style.visibility = 'hidden';
            cover.classList.add('hidden');
            
            // Remove lock scroll dan reset body position
            document.body.classList.remove('lock-scroll');
            document.body.style.position = 'relative';
            document.body.style.height = 'auto';
            document.body.style.overflow = '';
            document.body.style.width = '';
            document.body.style.top = '';
            document.body.style.left = '';
            
            mainContent.classList.add('visible');
            musicToggle.classList.remove('hidden');
            bottomNav.classList.remove('hidden');
            
            // Putar musik
            bgMusic.play().then(() => {
                musicToggle.classList.add('playing');
                document.getElementById('musicIcon').textContent = '🔊';
            }).catch(err => {
                console.log('Auto-play prevented:', err);
            });
            
            // Trigger scroll animations
            observeElements();
            
            // Create falling petals
            createPetals();
        }, 800);
    });
    
    // ========== MUSIC TOGGLE ==========
    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play().catch(err => {
                console.log('Play prevented:', err);
            });
        } else {
            bgMusic.pause();
        }
    });
    
    bgMusic.addEventListener('play', () => {
        musicToggle.classList.add('playing');
        document.getElementById('musicIcon').textContent = '🔊';
    });
    
    bgMusic.addEventListener('pause', () => {
        musicToggle.classList.remove('playing');
        document.getElementById('musicIcon').textContent = '🔇';
    });
    
    // ========== COUNTDOWN TIMER ==========
    function updateCountdown() {
        const weddingDate = new Date(CONFIG.weddingDate).getTime();
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // ========== RSVP FORM ==========
    const rsvpForm = document.getElementById('rsvpForm');
    const wishesList = document.getElementById('wishesList');
    
    // Sample data (dalam aplikasi nyata, gunakan backend/database)
    const wishes = [];
    
    function displayWishes() {
        wishesList.innerHTML = '';
        wishes.slice().reverse().forEach(wish => {
            const wishCard = document.createElement('div');
            wishCard.className = 'wish-card';
            wishCard.innerHTML = `
                <div class="wish-header">
                    <span class="wish-name">${wish.name}</span>
                    <span class="wish-attendance">${wish.attendance}</span>
                </div>
                <p class="wish-message">${wish.message}</p>
            `;
            wishesList.appendChild(wishCard);
        });
    }
    
    displayWishes();
    
    rsvpForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('.form-submit');
        const originalText = submitButton.textContent;
        
        // Disable button dan tampilkan loading
        submitButton.disabled = true;
        submitButton.textContent = 'Mengirim...';
        submitButton.style.opacity = '0.7';
        
        const name = document.getElementById('name').value;
        const attendance = document.getElementById('attendance').value;
        const guests = document.getElementById('guests').value;
        const message = document.getElementById('message').value;
        
        const formData = {
            name: name,
            attendance: attendance,
            guests: guests,
            message: message
        };
        
        // Kirim ke Telegram
        const telegramSent = await sendToTelegram(formData);
        
        if (telegramSent) {
            // Tambahkan ke array (dalam aplikasi nyata, kirim ke backend)
            wishes.push({
                name: name,
                attendance: attendance,
                message: message
            });
            
            // Refresh tampilan
            displayWishes();
            
            // Reset form
            rsvpForm.reset();
            
            // Show success message
            alert('✅ Terima kasih! Konfirmasi Anda telah terkirim ke grup Telegram kami. 💕');
        } else {
            // Show error message
            alert('❌ Maaf, terjadi kesalahan saat mengirim. Silakan coba lagi atau hubungi kami langsung.');
        }
        
        // Re-enable button
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        submitButton.style.opacity = '1';
    });
    
    // Initialize slideshow saat page load
    initBackgroundSlideshow();
});

// ========== SCROLL REVEAL ANIMATION ==========
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.animation = 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-up, .timeline-item, .event-card').forEach(el => {
        observer.observe(el);
    });
    
    // Divider animation
    const dividers = document.querySelectorAll('.divider');
    const dividerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.classList.add('visible');
                dividerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    dividers.forEach(div => dividerObserver.observe(div));
}

// ========== FALLING PETALS ==========
function createPetals() {
    const container = document.body;
    const petalCount = 10;
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Random properties
        const leftPos = Math.random() * 100;
        const duration = 15 + Math.random() * 10;
        const delay = Math.random() * 5;
        const drift = (Math.random() - 0.5) * 100;
        const rotate = Math.random() * 360;
        const size = 8 + Math.random() * 6;
        
        petal.style.left = leftPos + '%';
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        petal.style.setProperty('--drift', drift + 'px');
        petal.style.setProperty('--rotate', rotate + 'deg');
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay = delay + 's';
        
        container.appendChild(petal);
    }
}

// ========== SMOOTH SCROLL ==========
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPos,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ========== ACTIVE NAV ITEM ==========
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + current) {
            item.classList.add('active');
        }
    });
});

// ========== ADD TO CALENDAR ==========
function addToCalendar(type) {
    let title, date, time, location;
    
    if (type === 'akad') {
        title = 'Akad Nikah ' + CONFIG.groomShort + ' & ' + CONFIG.brideShort;
        date = '20270108';
        time = '080000/100000';
        location = CONFIG.akadLocation;
    } else {
        title = 'Resepsi Pernikahan ' + CONFIG.groomShort + ' & ' + CONFIG.brideShort;
        date = '20270108';
        time = '130000/170000';
        location = CONFIG.resepsiLocation;
    }
    
    // Google Calendar URL
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${date}T${time}&details=${encodeURIComponent('Undangan Pernikahan')}&location=${encodeURIComponent(location)}`;
    
    window.open(googleCalUrl, '_blank');
}

// ========== SEND TO TELEGRAM ==========
async function sendToTelegram(data) {
    const { botToken, chatId } = CONFIG.telegram;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    // Format pesan dengan emoji
    const statusEmoji = data.attendance === 'Hadir' ? '✅' : 
                       data.attendance === 'Tidak Hadir' ? '❌' : '❓';
    
    const message = `
🎉 <b>KONFIRMASI KEHADIRAN BARU</b> 🎉

👤 <b>Nama:</b> ${data.name}
${statusEmoji} <b>Kehadiran:</b> ${data.attendance}
👥 <b>Jumlah Tamu:</b> ${data.guests} orang

💌 <b>Ucapan:</b>
<i>"${data.message}"</i>

⏰ <b>Waktu:</b> ${new Date().toLocaleString('id-ID', { 
    dateStyle: 'full', 
    timeStyle: 'short',
    timeZone: 'Asia/Jakarta'
})}

━━━━━━━━━━━━━━━━━━━━
<b>${CONFIG.groomShort} & ${CONFIG.brideShort} Wedding</b>
    `.trim();
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        const result = await response.json();
        
        if (!result.ok) {
            console.error('Telegram API Error:', result);
            return false;
        }
        
        return true;
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        return false;
    }
}

// ========== PARALLAX EFFECT (OPTIONAL) ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const flowers = document.querySelectorAll('.flower-decoration');
    
    flowers.forEach((flower, index) => {
        const speed = index % 2 === 0 ? 0.3 : -0.3;
        flower.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========== BACKGROUND SLIDESHOW (COVER) ==========
function initBackgroundSlideshow() {
    const cover = document.getElementById('cover');
    const images = [
        './assets/Prewed1.png',
        './assets/Prewed2.png'
    ];
    let currentIndex = 0;
    
    // Create background container
    const bgContainer = document.createElement('div');
    bgContainer.className = 'cover-bg-container';
    bgContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    `;
    
    // Create two image layers for crossfade
    const img1 = document.createElement('div');
    const img2 = document.createElement('div');
    img1.className = 'cover-bg-layer';
    img2.className = 'cover-bg-layer';
    
    const imgStyle = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transition: opacity 2s ease-in-out;
    `;
    
    img1.style.cssText = imgStyle + `background-image: url('${images[0]}'); opacity: 1; z-index: 2;`;
    img2.style.cssText = imgStyle + `background-image: url('${images[1]}'); opacity: 0; z-index: 1;`;
    
    bgContainer.appendChild(img1);
    bgContainer.appendChild(img2);
    cover.insertBefore(bgContainer, cover.firstChild);
    
    // Slideshow logic - terus muter
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        
        // Update background images dan swap opacity
        if (currentIndex === 0) {
            // Show img1 (prewed1), hide img2
            img1.style.backgroundImage = `url('${images[0]}')`;
            img1.style.opacity = '1';
            img1.style.zIndex = '2';
            img2.style.opacity = '0';
            img2.style.zIndex = '1';
        } else {
            // Show img2 (prewed2), hide img1
            img2.style.backgroundImage = `url('${images[1]}')`;
            img2.style.opacity = '1';
            img2.style.zIndex = '2';
            img1.style.opacity = '0';
            img1.style.zIndex = '1';
        }
    }, 5000); // Ganti setiap 5 detik, terus loop
}
