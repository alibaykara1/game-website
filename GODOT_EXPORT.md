# Godot Web Export Rehberi

Oyunlarınızı bu web sitesinde çalıştırmak için Godot'tan "Web" formatında çıktı almanız gerekir. İşte adım adım nasıl yapılacağı:

## 1. Export Şablonlarını İndirin (Eğer yüklü değilse)
- Godot'ta **Editor > Manage Export Templates** menüsüne gidin.
- Kullandığınız Godot sürümü için *Download and Install* diyerek şablonları indirin.

## 2. Web Preset'i Oluşturun
- **Project > Export** menüsünü açın.
- Sol üstteki **Add...** butonuna tıklayın ve **Web** seçeneğini seçin.

## 3. Ayarlar
- **Name:** Oyununuzun adını yazabilirsiniz (örn: Web Build).
- **Export Path:** Burası çok önemli.
    - `Browse` tuşuna basın.
    - Masaüstünde veya projede geçici bir klasör oluşturun (örn: `oyunum-web`).
    - Dosya adı olarak **`index.html`** yazın.
    - **Save** deyin.

## 4. Çıktı Alın (Export)
- Pencerenin altındaki **Export Project** butonuna tıklayın.
- "Release" modunda (Debug tikini kaldırarak) çıktı almanız önerilir (daha küçük dosya boyutu için).

## 5. Web Sitesine Ekleyin
1.  Export aldığınız klasöre gidin (içinde `index.html`, `index.js`, `.pck` veya `.wasm` dosyaları olmalı).
2.  Bu klasörün adını oyununuza uygun şekilde değiştirin (örn: `super-mario`).
3.  Bu klasörü web sitesi projesindeki **`public/games/`** klasörünün içine sürükleyin.
    - Sonuç şöyle olmalı: `public/games/super-mario/index.html`
4.  VS Code'da `src/lib/games.ts` dosyasını açın ve oyununuzu listeye ekleyin:
    ```typescript
    {
      id: "super-mario",
      title: "Super Mario Clone",
      description: "Harika bir platform oyunu.",
      exportPath: "super-mario/index.html", // Klasör adı ile aynı olmalı
      dateAdded: "2024-01-20"
    }
    ```

## Önemli Not (Godot 4 Kullanıcıları İçin)
Godot 4 kullanıyorsanız, oyunun çalışması için tarayıcıda özel güvenlik ayarları (SharedArrayBuffer) gerekebilir. Eğer oyununuz yüklenirken hata verirse bana haber verin, gerekli ayarı yapalım.
