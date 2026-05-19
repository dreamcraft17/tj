# Phase 1 — Checklist Go-Live (Konten & Konfigurasi)

Status implementasi kode: **selesai** · Data resmi firma: **perlu konfirmasi admin**

## Task 1.1 — CONTACT_CONFIG

| Field | Status | Tindakan |
|-------|--------|----------|
| `email` | ✅ `konsultasi@trustedjurist.co.id` | Konfirmasi alamat resmi dengan admin |
| `phone.display` / `phone.tel` | ⚠️ REVIEW | Ganti `XXXX` dengan nomor kantor |
| `whatsapp.number` | ⚠️ REVIEW | Format `62XXXXXXXXXX` (tanpa +, tanpa 0) |
| `address.line1` | ⚠️ REVIEW | Tambahkan nomor unit/ruko jika ada |
| `operatingHours` | ✅ 08:00–17:00 WIB | Sesuaikan jika berbeda |
| `timezone` | ✅ `Asia/Jakarta` | — |

**File:** `src/lib/data.ts` → `CONTACT_CONFIG`

## Task 1.2 — Data founder

| Item | Status |
|------|--------|
| Placeholder `[Nama Perguruan Tinggi]` | ✅ Dihapus |
| Pengalaman & fokus praktik | ✅ Diperkaya dari profil firma |
| Nama universitas (S1/S2) | ⚠️ Sengaja tidak diisi — hindari data palsu; lengkapi dari dokumen resmi |
| Keanggotaan organisasi profesi | ⚠️ Menunggu konfirmasi firma |

**File:** `src/lib/data.ts` → `founder`, `founderCredibility`, `managingPartner`

## Task 1.3 — Footer legal

| Item | Status |
|------|--------|
| Disclaimer diperbarui | ✅ |
| `FOOTER_LEGAL.copyright` | ✅ |
| Review legal team | ⚠️ Disarankan sebelum go-live |

**File:** `src/lib/constants.ts` → `FOOTER_LEGAL`

## Task 1.4 — Layanan email

| Item | Status |
|------|--------|
| Pilihan: **Resend** (MVP) | ✅ Didokumentasikan |
| `.env.example` | ✅ |
| API key di `.env.local` | ⚠️ Admin — jangan commit |

**Langkah admin:**

1. Daftar di [resend.com](https://resend.com)
2. Verifikasi domain `trustedjurist.co.id`
3. Salin API key ke `.env.local`
4. Lanjut **Phase 2** (API route + form)

```bash
cp .env.example .env.local
```
