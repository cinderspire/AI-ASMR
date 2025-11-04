# AI ASMR - Test Dokümantasyonu

## Test Ortamı Kurulumu

### Gereksinimler
```bash
npm install
```

### Testleri Çalıştırma

#### Tüm testleri çalıştır
```bash
npm test
```

#### Test izleme modu (değişikliklerde otomatik test)
```bash
npm test:watch
```

#### Kapsam raporu ile test
```bash
npm test:coverage
```

## Mobil Emülatör Kullanımı

### Emülatörü Başlatma

1. Proje dizininde HTTP sunucusu başlatın:
```bash
npm run serve
```

2. Tarayıcınızda açın:
```
http://localhost:8000/emulator.html
```

### Emülatör Özellikleri

#### 📱 Ekran Görüntüleme
- **Tek Ekran Modu**: Dropdown menüden istediğiniz ekranı seçin
- **Tüm Ekranlar**: "Show All Screens" butonuna tıklayarak tüm ekranları yan yana görüntüleyin

#### ⌨️ Klavye Kısayolları
- `R` - Ekranı yenile
- `A` - Tüm ekranları göster
- `T` - Testleri çalıştır

#### ✅ Test Özellikleri
- Gerçek zamanlı test sonuçları
- Komponent bazlı testler
- UI/UX testleri

## Test Kapsamı

### Welcome Screen Tests (`tests/welcome.test.js`)
- ✅ Başlık ve metin kontrolü
- ✅ Mobil viewport ayarları
- ✅ CTA butonları
- ✅ Dark mode desteği
- ✅ Gradient efektler

### ASMR Player Tests (`tests/player.test.js`)
- ✅ Oynatma kontrolleri
- ✅ Progress bar
- ✅ Ses kontrolü
- ✅ Arka plan video
- ✅ Görsel özelleştirme
- ✅ Alt navigasyon

### AI Generator Tests (`tests/generator.test.js`)
- ✅ Galaxy animasyonları
- ✅ 3D transformlar
- ✅ Özel animasyonlar
- ✅ Planet elementleri

## Ekran Listesi

1. **Welcome Screen** - Karşılama ekranı
2. **ASMR Player** - Müzik çalar
3. **Galaxy Explorer** - AI generator (galaksi görünümü)
4. **Generator 2** - AI generator alternatif
5. **Showcase** - Vitrin ekranı
6. **Customization** - Özelleştirme
7. **Categories** - Kategoriler
8. **Gaming Experience** - Oyun deneyimi
9. **Video Player** - Video oynatıcı
10. **Favorites & Playlists** - Favoriler ve çalma listeleri

## Geliştirme İpuçları

### Yeni Test Ekleme
1. `tests/` klasöründe yeni `.test.js` dosyası oluşturun
2. Jest test yapısını kullanın
3. `npm test` ile testleri çalıştırın

### Emülatörde Yeni Ekran Ekleme
1. Yeni HTML dosyasını ilgili klasöre ekleyin
2. `emulator.html` içindeki `screens` dizisine ekleyin
3. Sayfayı yenileyin

## Tarayıcı Desteği

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Mobil Test

Emülatör otomatik olarak mobil viewport kullanır:
- **Genişlik**: 375px
- **Yükseklik**: 667px
- **DPI**: Retina desteği

## Sorun Giderme

### Testler çalışmıyor
```bash
# Node modules'u temizle ve yeniden yükle
rm -rf node_modules
npm install
```

### Emülatör boş görünüyor
- HTTP sunucusunun çalıştığından emin olun
- Tarayıcı konsolunda hata kontrol edin
- Dosya yollarını kontrol edin

## Katkıda Bulunma

Yeni test senaryoları veya emülatör özellikleri eklemek için:
1. Test dosyası oluşturun
2. Dokümantasyon ekleyin
3. Pull request açın

---

**Not**: Bu test ortamı geliştirme amaçlıdır. Production için ek testler ve optimizasyonlar gerekebilir.
