# AI ASMR - Android APK Build Rehberi

## 🎉 Durum: Proje %100 Hazır!

Android APK'nız için tüm yapılandırmalar tamamlandı. Aşağıdaki adımları izleyerek APK'yı build edebilirsiniz.

## ✅ Tamamlanan Yapılandırmalar

- ✅ **Capacitor Kurulumu**: v7.4.4
- ✅ **Android Platform**: Eklendi ve yapılandırıldı
- ✅ **Permissions**: Tüm gerekli izinler eklendi
  - Internet
  - Network State
  - Wake Lock (ekranı açık tutma)
  - Audio Settings
  - Foreground Service (arka plan ses çalma)
- ✅ **Tema & Renkler**: Purple (#7317cf) dark theme
- ✅ **Web Assets**: Tüm HTML, JS, ve feature'lar sync edildi
- ✅ **App Info**:
  - Uygulama Adı: **AI ASMR**
  - Package: **com.aiasmr.app**

## 📱 APK Build Yöntemleri

### Yöntem 1: Komut Satırı (Önerilen)

#### Ön Gereksinimler
- Node.js (v14+)
- npm veya yarn
- Android SDK (Android Studio ile birlikte gelir)
- Java JDK 17+

#### Build Adımları

1. **Bağımlılıkları yükle** (eğer başka bir ortamda çalışıyorsanız):
```bash
npm install
```

2. **Capacitor Sync** (güncelleme varsa):
```bash
npx cap sync android
```

3. **APK Build**:
```bash
cd android
./gradlew assembleDebug
```

4. **APK Konumu**:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

### Yöntem 2: Android Studio ile (En Kolay)

1. **Android Studio'yu aç**

2. **Projeyi aç**:
   - File → Open
   - `AI-ASMR/android` klasörünü seç

3. **Gradle Sync bekle** (otomatik başlar)

4. **Build et**:
   - Build → Build Bundle(s) / APK(s) → Build APK(s)
   - Veya üst menüden yeşil "Run" butonuna tıkla

5. **APK'yı bul**:
   - Build tamamlandığında bildirim gelir
   - "locate" linkine tıkla
   - Veya: `android/app/build/outputs/apk/debug/app-debug.apk`

### Yöntem 3: Release APK (İmzalı - Yayınlamak için)

1. **Keystore oluştur**:
```bash
keytool -genkey -v -keystore ai-asmr-release.keystore -alias ai-asmr -keyalg RSA -keysize 2048 -validity 10000
```

2. **build.gradle'a keystore bilgisi ekle** veya:
```bash
cd android
./gradlew assembleRelease
```

3. **İmzala**:
```bash
jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA-256 -keystore ai-asmr-release.keystore app/build/outputs/apk/release/app-release-unsigned.apk ai-asmr
```

## 📲 APK'yı Android Cihazda Test Etme

### Kurulum Adımları:

1. **Geliştirici Seçeneklerini Aç**:
   - Ayarlar → Telefon Hakkında
   - "Yapı Numarası"na 7 kez dokun

2. **Bilinmeyen Kaynaklara İzin Ver**:
   - Ayarlar → Güvenlik
   - "Bilinmeyen Kaynaklardan Yükleme"yi aç

3. **APK'yı Cihaza Aktar**:
   - USB ile bağla ve kopyala
   - Veya Google Drive / Email ile gönder
   - Veya `adb` kullan:
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

4. **APK'yı Aç ve Yükle**:
   - Dosya yöneticisinden APK'yı bul
   - Dokun ve "Yükle"yi seç
   - İzinleri kabul et

5. **Uygulamayı Aç**:
   - Ana ekranda "AI ASMR" iconunu bul
   - Başlat!

## 🧪 Test Edilecek Özellikler

Uygulamayı test ederken şunları kontrol edin:

### ✅ Temel Fonksiyonlar
- [ ] Uygulama açılıyor mu?
- [ ] Splash screen görünüyor mu?
- [ ] Ana sayfa (index.html) yükleniyor mu?
- [ ] Tüm modüllere navigasyon çalışıyor mu?

### ✅ Ses Özellikleri
- [ ] ASMR Player'da sesler çalıyor mu?
- [ ] Ses kontrolü (play/pause/volume) çalışıyor mu?
- [ ] Arka planda ses devam ediyor mu?

### ✅ Visual Özellikler
- [ ] Tüm görseller (Unsplash) yükleniyor mu?
- [ ] Videolar (Mixkit) oynatılıyor mu?
- [ ] Tailwind CSS stilleri doğru görünüyor mu?

### ✅ Etkileşimli Özellikler
- [ ] AI ASMR Generator çalışıyor mu?
- [ ] Gaming ASMR oyunları açılıyor mu?
- [ ] Favorites & Playlists kaydediyor mu?

## 🐛 Sorun Giderme

### APK Build Hataları

**Hata: "SDK location not found"**
```bash
# android/local.properties dosyası oluştur:
sdk.dir=/path/to/Android/sdk
```

**Hata: "Gradle sync failed"**
- Android Studio'da: File → Invalidate Caches → Restart

**Hata: "Could not resolve dependency"**
- İnternet bağlantınızı kontrol edin
- Gradle cache temizle:
```bash
cd android
./gradlew clean
```

### Çalışma Zamanı Sorunları

**Beyaz ekran görünüyor:**
- Developer Console'u aç: Chrome'da `chrome://inspect`
- WebView debug'ı kontrol et

**Sesler çalmıyor:**
- İzinlerin verildiğinden emin olun
- Internet bağlantısını kontrol edin (sesler CDN'den geliyor)

**Görseller yüklenmiyor:**
- Internet bağlantısını kontrol edin
- Unsplash/Pixabay CDN'lerinin erişilebilir olduğunu doğrulayın

## 📊 Proje Detayları

### Uygulama Boyutu
- Web Assets: ~7.9 MB
- APK (tahmini): ~15-25 MB

### Minimum Gereksinimler
- Android 5.0 (API level 21) ve üzeri
- 50 MB boş alan
- İnternet bağlantısı (çoğu özellik için)

### Özellikler
- 🎵 **50+ ASMR Ses**: Gerçek ses dosyaları
- 🎮 **3 ASMR Oyun**: Interaktif deneyimler
- 🎨 **2 AI Generator**: Galaxy Explorer ve ASMR Studio
- 📱 **11 Modül**: Tam özellikli uygulama
- 🌐 **Çevrimdışı UI**: Ana arayüz internet olmadan çalışır

## 🚀 Sonraki Adımlar

1. **APK'yı Build Et**: Yukarıdaki yöntemlerden birini kullan
2. **Test Et**: Tüm özellikleri Android cihazda dene
3. **Paylaş**: APK'yı arkadaşlarınla paylaş
4. **İyileştir**: Geri bildirimleri topla ve geliştir

## 📞 Yardım

Build sırasında sorun yaşarsanız:
1. Hata mesajını tam olarak not alın
2. `./gradlew assembleDebug --stacktrace` ile detaylı log alın
3. Android Studio'nun "Build" sekmesindeki hataları kontrol edin

---

**🎉 Tebrikler!** AI ASMR uygulamanız build edilmeye hazır!

Made with 💜 by AI ASMR Team
