# Changelog

Semua perubahan penting pada proyek **Trusted Jurist Law Firm** website didokumentasikan di file ini.

Format mengikuti [Keep a Changelog](https://keepachangelog.com/id/1.1.0/), dan proyek ini memakai [Semantic Versioning](https://semver.org/lang/id/) secara longgar (`0.x` = pre-release).

---

## [Unreleased]

### Added (Phase 2–3 — go-live)

- API `POST /api/contact` — validasi, rate limit (5/menit/IP), Resend email
- Form kontak terhubung backend + error handling + link kebijakan privasi
- reCAPTCHA v3 (opsional di dev jika key kosong)
- Halaman `/privacy` — Kebijakan Privasi
- `sitemap.xml`, `robots.txt` (App Router)
- OG image dinamis (`/opengraph-image`) + favicon (`/icon`)
- Halaman 404 kustom (`not-found.tsx`)
- Footer: tautan Kebijakan Privasi

### Changed (Phase 1 — konten & konfigurasi)

- `CONTACT_CONFIG`: alamat Sunter Agung Raya, email `konsultasi@`, jam 08:00–17:00, timezone `Asia/Jakarta`
- Data founder: placeholder perguruan dihapus; pengalaman & fokus praktik diperkaya
- `FOOTER_LEGAL`: disclaimer diperbarui + field `copyright`
- `.env.example` untuk Resend (rekomendasi MVP Phase 2)
- `docs/phase-1-checklist.md` — checklist konfirmasi admin

### Direncanakan

- Integrasi backend form kontak
- Halaman Kebijakan Privasi
- OG image & favicon branded
- `sitemap.xml` / `robots.txt`
- Halaman detail wawasan `/insights/[slug]`
- Peta kantor (Google Maps embed)
- i18n bahasa Inggris aktif
- Penggantian placeholder kontak & data founder

---

## [0.1.0] — 2026-05-17

Rilis awal website company profile — siap preview internal & staging.

### Added

- **6 halaman** App Router: Beranda, Tentang, Bidang Praktik, Tim, Wawasan, Kontak
- **Homepage editorial** — 8 section chapter (`HomeTrustColophon` hingga `HomeClosingComposition`)
- **8 bidang praktik** dengan scope, kebutuhan klien, dan output hukum
- **Profil firma** — visi, misi, nilai inti, komitmen kepercayaan, pendekatan kerja
- **Tim** — Managing Partner, kredibilitas founder, slot struktur tim
- **Wawasan** — 3 artikel dengan status draf / coming-soon (tanpa halaman detail)
- **Kontak** — form konsultasi, kanal email/telepon/WhatsApp, blok kerahasiaan
- **Navbar** — scroll-aware di homepage, menu mobile, indikator route aktif
- **Footer** — navigasi, tautan praktik, disclaimer hukum, CTA konsultasi
- **SEO** — `createMetadata()`, Open Graph, Twitter card, canonical, JSON-LD `LegalService`
- **A11y** — skip link, semantic landmarks, label form, focus states
- **Design system** — tokens navy/gold/cream, tipografi Cormorant + Manrope
- **Animasi** — Framer Motion (reveal, stagger, page transition, navbar)
- **Data layer** — `lib/data.ts`, `CONTACT_CONFIG`, tipe TypeScript lengkap
- **Form** — simulasi submit dengan loading & success state (dua varian)
- Dokumentasi: `README.md`, `audit.md`, `fitur.md`, `changelog.md`

### Tech stack

- Next.js 16.2.6 (App Router)
- React 19.2.4
- TypeScript 5
- Tailwind CSS v4
- Framer Motion 12
- Lucide React

### Known limitations

- Kontak (email, telepon, WhatsApp) masih placeholder
- Form tidak mengirim data ke server
- Artikel wawasan belum memiliki halaman detail
- Tidak ada OG image, sitemap, atau halaman privasi
- Beberapa data founder memakai placeholder perguruan tinggi

---

## [0.0.1] — 2026-05-16

### Added

- Inisialisasi proyek dari Create Next App
- Konfigurasi dasar: TypeScript, ESLint, Tailwind CSS v4, PostCSS
- Struktur folder `src/` awal

---

## Catatan versi

| Versi | Tanggal | Milestone |
|-------|--------|-----------|
| 0.0.1 | 2026-05-16 | Scaffold Next.js |
| 0.1.0 | 2026-05-17 | Company profile lengkap (6 halaman) |
| Unreleased | — | Go-live readiness (backend, SEO assets, konten final) |

---

[Unreleased]: https://github.com/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/compare/v0.0.1...v0.1.0
[0.0.1]: https://github.com/releases/tag/v0.0.1
