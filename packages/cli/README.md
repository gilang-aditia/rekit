# Rakit UI

Library komponen UI buatan lokal yang cantik, responsif, dan mudah di kustomisasi. Didesain khusus untuk menyatukan visi desainer dan frontend developer, dengan inspirasi dari sistem seperti shadcn/ui.

## Instalasi dan Penggunaan

Gunakan CLI ini untuk menginisiasi proyek dan menambahkan komponen langsung ke dalam kode sumber (source code) proyek Anda.

### Inisialisasi Proyek

Jalankan perintah berikut di root folder proyek React / Vite Anda:

```bash
npx @moonblanck/rakit-ui@latest init
```

Perintah ini akan membuat konfigurasi dasar Tailwind CSS dan folder struktur (seperti `components.json` dan folder `ui/`).

### Menambahkan Komponen

Setelah inisialisasi selesai, Anda dapat mulai menambahkan komponen ke dalam proyek Anda:

```bash
npx @moonblanck/rakit-ui@latest add button
npx @moonblanck/rakit-ui@latest add card
```

## Kenapa Rakit UI?

Berbeda dengan library komponen tradisional, Rakit UI memberikan Anda **kepemilikan penuh (ownership)** atas kode komponen.

CLI akan menyalin source code (misalnya `button.tsx`) langsung ke dalam proyek Anda, sehingga Anda bebas untuk mengubah desain, animasi, atau fungsionalitasnya tanpa ada batasan dari library eksternal.

### Satu-satunya dependency: paket ini sendiri

Komponen yang disalin mengimpor primitive headless-nya dari paket yang sama:

```tsx
import { Slot } from "@moonblanck/rakit-ui"
```

Paket itulah yang muncul di `package.json` Anda, dan CLI menginstalnya otomatis
saat Anda menjalankan `add`. Isinya tipis — hanya lapisan primitive aksesibel
(Dialog, Select, Dropdown, dan seterusnya) yang dipakai bersama oleh komponen.
Sisanya, yaitu tampilan dan perilakunya, ada di file `.tsx` milik Anda sendiri.

## Dukungan

Dikembangkan oleh [burnot](https://github.com/gilang-aditia).
