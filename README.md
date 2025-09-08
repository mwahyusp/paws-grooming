# GroomingPaws - Landing Page

Landing page modern untuk usaha pet grooming panggilan ke rumah, dibangun dengan React.js, Tailwind CSS, dan Vite.

![GroomingPaws](https://img.shields.io/badge/GroomingPaws-Pet%20Grooming-blue) ![React](https://img.shields.io/badge/React-18.2.0-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.3.0-38B2AC) ![Vite](https://img.shields.io/badge/Vite-4.3.0-646CFF)

## ✨ Fitur

- 🎨 **Desain Modern** - UI/UX yang menarik dan user-friendly
- 📱 **Responsif** - Optimal di semua perangkat (desktop, tablet, mobile)
- ⚡ **Performansi Tinggi** - Dibangun dengan Vite untuk kecepatan maksimal
- ♿ **Aksesibilitas** - Mendukung navigasi keyboard dan screen reader
- 🎯 **SEO Friendly** - Optimasi untuk mesin pencari
- 📞 **Integrasi WhatsApp** - Tombol chat langsung via WhatsApp
- 📋 **Form Validation** - Validasi form yang komprehensif
- 💬 **Testimonial Slider** - Menampilkan ulasan pelanggan
- ❓ **FAQ Section** - Pertanyaan umum dengan fungsi accordion
- 🖼️ **Gallery** - Menampilkan hasil kerja
- 📝 **Blog Section** - Konten informatif untuk SEO
- 📧 **Booking System** - Sistem pemesanan online

## 🚀 Teknologi yang Digunakan

- **React.js** - Library JavaScript untuk building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool dan development server yang cepat
- **Font Awesome** - Ikon library
- **Google Fonts** - Font Poppins

## 📦 Instalasi dan Menjalankan

### Prerequisites

Pastikan Anda telah menginstall:

- Node.js (versi 14 atau lebih tinggi)
- npm atau yarn

### Langkah-langkah

1. **Clone repository**

   ```bash
   git clone https://github.com/username/grooming-paws-react.git
   cd grooming-paws-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Jalankan development server**

   ```bash
   npm run dev
   ```

4. **Build untuk production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Struktur Project

```
grooming-paws-react/
├── public/
│   ├── images/          # Gambar-gambar website
│   └── favicon.ico      # Favicon
├── src/
│   ├── components/      # Komponen React
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Features.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Blog.jsx
│   │   ├── BookingForm.jsx
│   │   ├── WhatsAppChat.jsx
│   │   └── Modal.jsx
│   ├── hooks/           # Custom hooks
│   │   ├── useFormValidation.js
│   │   └── useScrollAnimation.js
│   ├── data/            # Data statis
│   │   ├── testimonials.js
│   │   ├── services.js
│   │   ├── faqData.js
│   │   └── blogPosts.js
│   ├── App.jsx          # Komponen utama
│   ├── main.jsx         # Entry point
│   └── index.css        # Stylesheet utama
├── index.html           # HTML template
├── package.json         # Dependencies dan scripts
├── vite.config.js       # Konfigurasi Vite
├── tailwind.config.js   # Konfigurasi Tailwind
├── postcss.config.js    # Konfigurasi PostCSS
└── README.md            # Dokumentasi
```

## 🎨 Customization

### Mengubah Warna Theme

Edit file `tailwind.config.js` untuk mengubah warna theme:

```js
theme: {
  extend: {
    colors: {
      primary: '#4e7ae6',     // Warna primer
      secondary: '#7b4ee6',   // Warna sekunder
      accent: '#e64e7a',      // Warna aksen
      light: '#f8f9fa',       // Warna light
      dark: '#343a40',        // Warna dark
    },
  },
}
```

### Mengubah Konten

1. **Layanan** - Edit file `src/data/services.js`
2. **Testimonial** - Edit file `src/data/testimonials.js`
3. **FAQ** - Edit file `src/data/faqData.js`
4. **Blog Posts** - Edit file `src/data/blogPosts.js`

### Mengubah Gambar

Tempatkan gambar baru di folder `public/images/` dan update referensi di komponen yang sesuai.

## 📊 Optimasi Performa

Proyek ini telah dioptimalkan untuk:

- **Loading Cepat** - Menggunakan Vite dan code splitting
- **SEO** - Meta tags, structured data, dan semantic HTML
- **Accessibility** - ARIA attributes, keyboard navigation, skip links
- **PWA Ready** - Service worker dan manifest.json
- **Image Optimization** - Lazy loading dan format modern

## 🌐 Deployment

### Netlify

1. Build project: `npm run build`
2. Drag folder `dist` ke [Netlify Drop](https://app.netlify.com/drop)
3. Atau connect repository GitHub ke Netlify

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Jalankan: `vercel`
3. Follow prompts untuk deploy

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 📝 Scripts yang Tersedia

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview production build
- `npm run lint` - Menjalankan ESLint

## 🤝 Berkontribusi

Kontribusi selalu diterima! Silakan:

1. Fork project ini
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Distribusi di bawah lisensi MIT. Lihat `LICENSE` untuk informasi lebih lanjut.

## 👥 Tim Pengembang

- **Nama Anda** - [GitHubUsername](https://github.com/ GitHubUsername)

## 🙏 Penghargaan

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

## 📞 Kontak

- Email: info@groomingpaws.com
- WhatsApp: +62 123 456 789
- Website: [https://www.groomingpaws.com](https://www.groomingpaws.com)

---

**Catatan**: Pastikan untuk mengubah informasi kontak, gambar, dan konten sesuai dengan kebutuhan bisnis pet grooming Anda.
