const CONFIG = {
  // ─── Google Calendar Embed (iframe di halaman Jadwal) ───────────────────────
  GOOGLE_CALENDAR_URL: "https://calendar.google.com/calendar/embed?src=posyandudesabunga%40gmail.com&ctz=Asia%2FMakassar",
  // ─── Link kalender penuh di tab baru ─────────────────────────────────────────
  GOOGLE_CALENDAR_PAGE_URL: "https://calendar.google.com/calendar/u/5?cid=cG9zeWFuZHVkZXNhYnVuZ2FAZ21haWwuY29t",

  // ─── METODE UTAMA: Google Calendar API v3 (tidak butuh CORS proxy) ───────────
  // Cara mendapatkan:
  //   1. Buka: https://console.cloud.google.com/
  //   2. Buat project → Aktifkan "Google Calendar API"
  //   3. Credentials → Create Credentials → API Key
  //   4. Tempel API key di bawah
  GOOGLE_API_KEY: "",   // ← ISI API KEY DI SINI

  // Calendar ID: Google Calendar Settings → "Integrate calendar" → "Calendar ID"
  // Contoh format: xxxx@group.calendar.google.com  atau  nama@gmail.com
  GOOGLE_CALENDAR_ID: "d5fc9dd66fd6e2e848763c09c0494d09bc54d5d9392a5a1386c861eeece9e76b@group.calendar.google.com",

  // ─── METODE CADANGAN: iCal feed via CORS proxy (dipakai jika API key kosong) ──
  GOOGLE_CALENDAR_ICAL_URL: "https://calendar.google.com/calendar/ical/posyandudesabunga%40gmail.com/public/basic.ics",

  // ─── Google Form Absensi ──────────────────────────────────────────────────────
  GOOGLE_FORM_URL: "https://forms.gle/9EjsinaPF7k35frKA",

  // ─── Google Maps ──────────────────────────────────────────────────────────────
  GOOGLE_MAP_URL: "https://www.google.com/maps?q=-3.8143872,119.6024137",

  // ─── Google Drive ─────────────────────────────────────────────────────────────
  GOOGLE_DRIVE_URL: "https://drive.google.com/drive/folders/1mock_drive_folder_id",

  // ─── YouTube Edukasi ─────────────────────────────────────────────────────────
  // Embed search query dipakai sebagai fallback bila belum ada video spesifik.
  YOUTUBE_STUNTING_EMBED_URL: "https://www.youtube-nocookie.com/embed?listType=search&list=edukasi%20stunting%20balita",
  YOUTUBE_IMUNISASI_EMBED_URL: "https://www.youtube-nocookie.com/embed?listType=search&list=edukasi%20imunisasi%20balita",


};