# Fitur — Trusted Jurist Website

Daftar fitur yang **sudah diimplementasi** pada website company profile Trusted Jurist Law Firm.

---

## Navigasi & Layout Global

| Fitur | Deskripsi |
|-------|-----------|
| Navbar tetap | Header fixed dengan logo, 6 link navigasi, dan CTA **Konsultasi** |
| Mode hero homepage | Navbar transparan/terang di atas hero; berubah solid setelah scroll |
| Indikator halaman aktif | Garis emas animasi (`layoutId`) pada link yang sedang dibuka |
| Menu mobile | Hamburger + overlay fullscreen dengan animasi buka/tutup |
| Auto-close menu | Menu tertutup otomatis saat pindah route |
| Footer lengkap | Branding, deskripsi firma, navigasi, 8 tautan bidang praktik, kontak, disclaimer hukum |
| Skip link | “Lewati ke konten utama” untuk keyboard navigation |
| Transisi halaman | Fade/slide halus antar route via `PageTransition` |
| Loading state | `loading.tsx` global saat navigasi |

---

## Halaman Beranda (`/`)

| Section | Komponen | Konten |
|---------|----------|--------|
| Hero editorial | `Hero` | Headline, subheadline, catatan operasional, CTA konsultasi & bidang praktik |
| Trust colophon | `HomeTrustColophon` | Indikator kepercayaan (launch date, lokasi, fokus, pendekatan) |
| Kredibilitas | `HomeCredibilityChapter` | Pilar kredibilitas firma |
| Tentang (preview) | `HomeAboutSpread` | Cuplukan profil & tautan ke `/about` |
| Indeks praktik | `HomePracticeIndex` | 4 bidang praktik unggulan dari 8 total |
| Founder chapter | `HomeFounderChapter` | Profil Managing Partner |
| Standar kerja | `HomeStandardsCascade` | Komitmen & standar advokasi |
| Wawasan (preview) | `HomeInsightsJournal` | 3 artikel editorial terbaru |
| Penutup | `HomeClosingComposition` | CTA penutup editorial |

---

## Halaman Tentang (`/about`)

| Fitur | Deskripsi |
|-------|-----------|
| Hero ringkas | Judul & subheadline profil firma |
| Profil editorial | `AboutProfileEditorial` — visi, misi, narasi firma |
| Komitmen kepercayaan | `TrustCommitments` — janji operasional firma |
| Nilai inti | 5 kartu `ValueCard` (integritas, keadilan, dll.) |
| CTA bawah | `CTASection` — ajakan konsultasi |

---

## Halaman Bidang Praktik (`/practice-areas`)

| Fitur | Deskripsi |
|-------|-----------|
| Daftar 8 bidang | Litigasi, antikorupsi, korporasi, pertambangan, pidana, kebijakan publik, kepabeanan, advisory |
| Kartu detail per bidang | `PracticeAreaCard` — scope, kebutuhan klien, output hukum |
| Anchor deep link | Setiap bidang punya `id` untuk `#litigation`, `#anticorruption`, dll. |
| Ikon bidang | Mapping ikon Lucide via `IconMap` |

**8 bidang praktik:**

1. Litigation & Dispute Resolution  
2. Anti-Corruption & Governance  
3. Corporate & Commercial Law  
4. Mining, Plantation & Natural Resources  
5. Criminal Law & Investigation Support  
6. Public Policy & Regulatory Advisory  
7. Customs, Smuggling & Compliance  
8. Legal Opinion & Strategic Advisory  

---

## Halaman Tim (`/team`)

| Fitur | Deskripsi |
|-------|-----------|
| Managing Partner | Kartu `TeamCard` — Dr. Andin Sofyanoor, SH., MH. |
| Kredibilitas founder | `FounderCredibility` — pendidikan, pengalaman, fokus praktik |
| Struktur tim | 3 slot peran (`TeamRoleSlot`): Partner, Senior Associate, Associate |
| Mengapa Trusted Jurist | Section 5 pilar cara kerja firma |

---

## Halaman Wawasan (`/insights`)

| Fitur | Deskripsi |
|-------|-----------|
| Daftar artikel | 3 entri editorial dengan status transparan |
| Status artikel | `editorial-draft` atau `coming-soon` — label jelas di UI |
| Tanpa halaman detail | Artikel belum dapat dibuka (belum dipublikasikan) |
| Metadata SEO | Deskripsi menyatakan konten dalam penyusunan |

**Artikel saat ini:**

| Judul | Kategori | Status |
|-------|----------|--------|
| Membangun Kepercayaan Publik terhadap Penegakan Hukum | Hukum Publik | Draf editorial |
| Peran Advokat dalam Agenda Antikorupsi | Antikorupsi | Draf editorial |
| Kepatuhan Hukum di Sektor Pertambangan dan Perkebunan | Sektor Regulasi | Segera hadir |

---

## Halaman Kontak (`/contact`)

| Fitur | Deskripsi |
|-------|-----------|
| Form konsultasi | Varian `consultation` — gaya editorial minimal |
| Blok kerahasiaan | Penjelasan penanganan informasi rahasia |
| Kanal kontak | Email (`mailto:`), telepon (`tel:`), WhatsApp (deep link `wa.me`) |
| Info kantor | Alamat Sunter, Jakarta Timur |
| Jam operasional | Catatan indikatif + reminder konfirmasi janji |
| State form | Idle → submitting (loading) → success → reset |

**Field form konsultasi:** nama, email, telepon (opsional), bidang perkara, ringkasan mandat.

---

## Form Kontak (Komponen)

| Fitur | Deskripsi |
|-------|-----------|
| Dua varian | `default` (halaman umum) dan `consultation` (halaman kontak) |
| Validasi HTML5 | `required`, `type="email"`, `autoComplete` |
| Subjek dinamis | Opsi dari `formSubjects` di `data.ts` |
| Aksesibilitas | Label, `aria-label`, `role="status"` pada sukses |
| Simulasi submit | Delay 1,4 detik — siap diganti API nyata |

---

## SEO & Metadata

| Fitur | Deskripsi |
|-------|-----------|
| Metadata per halaman | Title, description unik tiap route |
| Open Graph | `type: website`, locale `id_ID`, siteName |
| Twitter Card | `summary_large_image` |
| Canonical URL | Per halaman via `SITE_CONFIG.url` |
| Hreflang-ready | Alternate `id` dan `en` (query `?lang=en`) |
| JSON-LD | Schema.org `LegalService` di layout root |
| Keywords | Firma hukum Jakarta, antikorupsi, pertambangan, dll. |

---

## Desain & Animasi

| Fitur | Deskripsi |
|-------|-----------|
| Design system | Palette navy / gold / cream via CSS variables |
| Tipografi | Cormorant Garamond (serif) + Manrope (sans) |
| Skala tipografi | Token `t.h1`, `t.lead`, `t.eyebrow`, dll. |
| Framer Motion | Reveal on scroll, stagger, navbar indicator, page transition |
| Tone sections | Kelas utilitas `tone-cream`, `tone-paper`, `tone-navy` |
| Editorial layout | `flow-editorial`, `hairline`, spacing konsisten |
| Responsive | Breakpoint mobile-first (sm, md, lg) |

---

## Komponen UI Reusable

| Komponen | Fungsi |
|----------|--------|
| `Button` | Primary / secondary / ghost, loading state |
| `Container` | Wrapper lebar narrow / default / wide |
| `IconMap` | Render ikon Lucide dari string nama |
| `Hero` | Hero fleksibel (compact, colophon, dual CTA) |
| `SectionHeader` | Eyebrow + judul + deskripsi section |
| `AnimatedReveal` | Fade-up on viewport |
| `MotionStagger` | Stagger children animation |
| `CTASection` | Call-to-action konsultasi berulang |
| `EmptyState` | State kosong (jika diperlukan) |
| `EditorialProse` / `EditorialBlock` | Blok konten panjang |
| `ApproachPillars` | Pilar metodologi kerja |

---

## Data & Konfigurasi

| Sumber | Isi |
|--------|-----|
| `lib/constants.ts` | Nama situs, URL, tagline, lokasi, footer legal |
| `lib/data.ts` | Navigasi, kontak, praktik, tim, wawasan, nilai, form |
| `CONTACT_CONFIG` | Alamat, email, telepon, WhatsApp, jam — **edit sebelum go-live** |
| Field `*En` | Label/title bahasa Inggris — siap i18n |

---

## Fitur yang Belum Tersedia

Fitur berikut direncanakan atau tercatat di backlog (lihat `audit.md`):

- Halaman detail artikel `/insights/[slug]`
- Backend form kontak (email / CRM)
- Bahasa Inggris aktif (switch locale)
- Peta Google Maps interaktif
- OG image & favicon custom
- `sitemap.xml` / `robots.txt`
- Halaman Kebijakan Privasi
- Analytics
- Halaman 404 kustom
- Foto tim & aset visual branded
