# Audit — Trusted Jurist Website

Dokumen ini merangkum penilaian teknis, konten, dan kesiapan go-live proyek **Trusted Jurist Law Firm** per **19 Mei 2026**.

Skala prioritas: **P0** (bloker go-live) · **P1** (penting, segera setelah launch) · **P2** (peningkatan) · **P3** (nice-to-have)

---

## Ringkasan Eksekutif

| Area | Status | Catatan singkat |
|------|--------|-----------------|
| Arsitektur & codebase | ✅ Baik | Data-driven, komponen modular, TypeScript strict |
| UI/UX & brand | ✅ Baik | Editorial premium, design tokens konsisten |
| SEO dasar | ⚠️ Cukup | Metadata lengkap; belum ada OG image & sitemap |
| Aksesibilitas | ✅ Baik | Semantic HTML, skip link, focus states |
| Performa | ✅ Baik | App Router, font optimization, animasi viewport-aware |
| Keamanan & privasi | ⚠️ Cukup | Tanpa backend; form simulasi; perlu kebijakan privasi |
| Kesiapan konten | ⚠️ Belum | Placeholder kontak, pendidikan founder, peta |

**Rekomendasi:** Website siap untuk **staging / preview internal**. Go-live publik membutuhkan penyelesaian item **P0** di bawah.

---

## 1. Arsitektur & Kode

### Kekuatan

- **Next.js App Router** dengan pemisahan jelas: `app/` (routes), `components/` (UI), `lib/` (data & helpers).
- Konten terpusat di `src/lib/data.ts` dan konfigurasi situs di `src/lib/constants.ts` — mudah di-maintain tanpa menyentuh layout.
- **TypeScript** dengan tipe eksplisit di `src/types/index.ts` (`PracticeArea`, `InsightArticle`, dll.).
- Sistem tipografi (`lib/typography.ts` + `styles/typography.css`) dan utilitas `cn()` konsisten.
- Komponen homepage modular di `components/home/` — setiap chapter dapat diubah independen.
- Preset animasi terpusat (`lib/motion.ts`) — menghindari duplikasi Framer Motion.

### Temuan

| ID | Prioritas | Temuan | Rekomendasi |
|----|-----------|--------|-------------|
| A1 | P2 | Tidak ada unit/integration test | Tambah smoke test route & snapshot kritis setelah stabil |
| A2 | P2 | `contactInfo` deprecated masih dipakai di beberapa komponen | Migrasi penuh ke `CONTACT_CONFIG` |
| A3 | P3 | Default asset Next.js (`public/next.svg`, dll.) masih ada | Hapus aset boilerplate sebelum production |
| A4 | P3 | Tidak ada CI/CD terdokumentasi | Tambah workflow build + lint di pipeline deploy |

---

## 2. SEO & Discoverability

### Sudah ada

- Helper `createMetadata()` di `src/lib/seo.ts` dipakai di **semua halaman**.
- Title pattern: homepage full name + tagline; halaman dalam format `Judul | Trusted Jurist`.
- Canonical URL, `metadataBase`, Open Graph, Twitter card, `robots: index/follow`.
- `alternates.languages` (`id`, `en` query) — siap ekspansi i18n.
- JSON-LD `@type: LegalService` di root layout.
- Keywords relevan (firma hukum Jakarta, antikorupsi, dll.).

### Temuan

| ID | Prioritas | Temuan | Rekomendasi |
|----|-----------|--------|-------------|
| S1 | P1 | Tidak ada `og:image` / gambar sosial default | Tambah `openGraph.images` (1200×630) branded |
| S2 | P1 | Tidak ada `sitemap.xml` / `robots.txt` | Generate via `app/sitemap.ts` & `app/robots.ts` |
| S3 | P2 | `?lang=en` belum mengaktifkan konten Inggris | Implementasi i18n atau hapus alternate sampai siap |
| S4 | P2 | Artikel wawasan punya `slug` tetapi **tanpa halaman detail** | Tambah `/insights/[slug]` saat konten siap dipublikasi |
| S5 | P3 | Tidak ada analytics (Plausible, GA4, dll.) | Pasang setelah kebijakan privasi disetujui |

---

## 3. Aksesibilitas (A11y)

### Sudah ada

- `lang="id"` pada `<html>`.
- Skip link ke `#main-content`.
- Landmark: `<header>`, `<main>`, `<footer>`.
- Form: label terhubung (`htmlFor`), `aria-label` pada form, `role="status"` pada success state.
- Link eksternal WhatsApp: `rel="noopener noreferrer"`.
- Indikator required dengan `aria-hidden` pada asterisk.
- Focus ring pada input (`focus:ring-gold`).

### Temuan

| ID | Prioritas | Temuan | Rekomendasi |
|----|-----------|--------|-------------|
| X1 | P2 | Navbar mobile: verifikasi `aria-expanded` / trap focus saat menu terbuka | Audit manual + axe DevTools |
| X2 | P2 | Animasi Framer Motion tanpa `prefers-reduced-motion` global | Tambah hook/media query untuk menonaktifkan motion |
| X3 | P3 | Kontras warna gold pada cream — uji WCAG AA | Validasi dengan contrast checker |

---

## 4. Performa

### Sudah ada

- Font Google via `next/font` dengan `display: swap`.
- Mayoritas halaman **Server Components**; client hanya di Navbar, ContactForm, animasi.
- Animasi reveal dengan delay bertahap — tidak memblokir LCP utama.
- Tailwind v4 dengan design tokens CSS — bundle styling efisien.

### Temuan

| ID | Prioritas | Temuan | Rekomendasi |
|----|-----------|--------|-------------|
| P1 | P2 | Navbar client + scroll listener di setiap halaman | Acceptable; pertimbangkan `useSyncExternalStore` jika perf issue |
| P2 | P3 | Tidak ada lazy load gambar (belum ada foto tim/hero image) | Saat menambah foto, gunakan `next/image` + priority hanya di hero |
| P3 | P3 | Belum diukur Core Web Vitals di production | Jalankan Lighthouse setelah deploy staging |

---

## 5. Keamanan & Privasi

### Sudah ada

- Tidak ada secret di repo; tidak ada API key hardcoded.
- Form **tidak mengirim data** ke server (simulasi 1,4 detik) — tidak ada risiko injection server-side saat ini.
- Tidak ada user authentication / session.

### Temuan

| ID | Prioritas | Temuan | Rekomendasi |
|----|-----------|--------|-------------|
| K1 | P0 | Form kontak belum terhubung backend | Integrasi API route + email service (Resend, SendGrid) atau form SaaS |
| K2 | P0 | Tidak ada halaman **Kebijakan Privasi** / consent | Wajib untuk form yang mengumpulkan data pribadi |
| K3 | P1 | Tidak ada rate limiting / CAPTCHA pada form | Tambah saat backend aktif |
| K4 | P1 | WhatsApp & email placeholder di `CONTACT_CONFIG` | Ganti dengan kontak resmi sebelum go-live |
| K5 | P2 | `dangerouslySetInnerHTML` untuk JSON-LD | Aman karena data statis; jangan masukkan input user ke sini |

---

## 6. Konten & Kepatuhan Profesi Hukum

### Kekuatan

- Tidak ada testimonial, penghargaan, atau case history palsu.
- Halaman Wawasan secara eksplisit menyatakan status **draf editorial** / **belum dipublikasi**.
- Footer disclaimer hukum (`FOOTER_LEGAL.disclaimer`) — materi bukan nasihat hukum.
- Founder credibility memakai placeholder perguruan — transparan bahwa perlu dilengkapi.

### Temuan

| ID | Prioritas | Temuan | Rekomendasi |
|----|-----------|--------|-------------|
| C1 | P0 | Email, telepon, WhatsApp masih placeholder | Update `CONTACT_CONFIG` |
| C2 | P0 | Pendidikan founder: `[Nama Perguruan Tinggi]` | Lengkapi dari dokumentasi resmi |
| C3 | P1 | Peta kantor belum diintegrasikan | Embed Google Maps atau static map image |
| C4 | P1 | Slot tim (Partner, Associate) tanpa nama individu | Isi saat roster resmi tersedia |
| C5 | P2 | Keanggotaan organisasi profesi masih placeholder | Lengkapi atau hapus baris placeholder |

---

## 7. UX & Fungsionalitas

### Sudah ada

- Navigasi 6 halaman + CTA konsultasi.
- Navbar adaptif: transparan di hero homepage, solid setelah scroll.
- Menu mobile dengan animasi AnimatePresence.
- Transisi halaman (`PageTransition` via `template.tsx`).
- Dua varian form: default & consultation (halaman kontak).
- Deep link bidang praktik: `/practice-areas#<id>`.
- Footer dengan tautan praktik ringkas & kanal kontak.

### Temuan

| ID | Prioritas | Temuan | Rekomendasi |
|----|-----------|--------|-------------|
| U1 | P1 | Insight card tidak dapat diklik (tidak ada detail page) | Sesuai desain saat ini; aktifkan saat artikel live |
| U2 | P2 | Tidak ada halaman 404 kustom | Tambah `app/not-found.tsx` branded |
| U3 | P2 | Loading state global minimal (`loading.tsx`) | Perkaya skeleton jika UX diperlukan |
| U4 | P3 | Bahasa Inggris belum di-switch | Roadmap i18n |

---

## 8. Checklist Go-Live

### P0 — Wajib sebelum publik

- [ ] Update `CONTACT_CONFIG` (email, telepon, WhatsApp, alamat final)
- [ ] Lengkapi data founder & hapus placeholder perguruan
- [ ] Hubungkan form kontak ke backend / layanan email
- [ ] Tambah halaman Kebijakan Privasi (+ link di footer)

### P1 — Segera setelah launch

- [ ] OG image & favicon branded
- [ ] `sitemap.xml` + `robots.txt`
- [ ] Integrasi peta kantor
- [ ] Audit a11y mobile menu + reduced motion
- [ ] Deploy staging + Lighthouse audit

### P2 — Backlog

- [ ] Halaman detail wawasan `/insights/[slug]`
- [ ] i18n bahasa Inggris
- [ ] Halaman 404 kustom
- [ ] Analytics & monitoring

---

## Riwayat Audit

| Tanggal | Versi | Catatan |
|---------|-------|---------|
| 2026-05-19 | 1.0 | Audit awal — baseline proyek `tj` |
