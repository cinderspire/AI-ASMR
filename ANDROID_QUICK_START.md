# 🚀 Android APK - Hızlı Başlangıç

## APK'yı Hemen Build Et (Tek Komut)

```bash
./build-apk.sh
```

Veya npm ile:

```bash
npm run android:build
```

## Android Studio ile Aç

```bash
npm run android:open
```

## APK Nerede?

Build tamamlandıktan sonra:

```
android/app/build/outputs/apk/debug/app-debug.apk
```

## Telefona Kur

### USB ile:
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

### Manuel:
1. APK dosyasını telefona kopyala
2. Dosya yöneticisinden aç
3. "Bilinmeyen kaynaklardan yüklemeye" izin ver
4. Yükle!

## Sorun mu var?

Detaylı rehber için: **ANDROID_BUILD_GUIDE.md**

---

**Uygulama Adı:** AI ASMR
**Package:** com.aiasmr.app
**Min Android:** 5.0 (API 21)
