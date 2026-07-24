// Navbar bersama untuk seluruh halaman artikel edukasi.
(() => {
  const host = document.querySelector("#shared-navbar, [data-shared-navbar]");
  if (!host) return;

  host.innerHTML = `
      <a class="brand" href="index.html#beranda" aria-label="Beranda Posyandu Desa Bunga">
        <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></span>
        <span><strong>Posyandu Desa Bunga</strong><small>Cut Mutia &amp; Emisaelan</small></span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Buka navigasi utama"><span class="nav-toggle-label">Menu</span><span class="nav-toggle-icon" aria-hidden="true"><span></span><span></span><span></span></span></button>
      <nav id="site-nav" class="site-nav" aria-label="Navigasi utama">
        <a href="index.html#beranda">Beranda</a><a href="index.html#tentang">Tentang</a>
        <details class="nav-dropdown"><summary>Profil Desa</summary><div class="nav-dropdown-menu"><a href="index.html#sejarah">Sejarah</a><a href="index.html#organisasi">Organisasi</a></div></details>
        <a href="index.html#layanan">Layanan</a><a href="index.html#jadwal">Jadwal</a>
        <details class="nav-dropdown"><summary>Kegiatan</summary><div class="nav-dropdown-menu"><a href="index.html#absensi">Absensi Kader</a><a href="index.html#edukasi">Edukasi &amp; Kalkulator</a><a href="index.html#galeri">Galeri</a></div></details>
        <a href="index.html#kontak" class="btn btn-cta">Hubungi Bidan</a>
      </nav>
    `;

  const navToggle = host.querySelector(".nav-toggle");
  const siteNav = host.querySelector(".site-nav");
  const navDropdowns = host.querySelectorAll(".nav-dropdown");
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Tutup navigasi utama" : "Buka navigasi utama");
  });
  siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Buka navigasi utama");
  }));
  navDropdowns.forEach((dropdown) => dropdown.addEventListener("toggle", () => {
    if (dropdown.open) navDropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) otherDropdown.removeAttribute("open");
    });
  }));
  document.addEventListener("click", (event) => {
    if (!Array.from(navDropdowns).some((dropdown) => dropdown.contains(event.target))) {
      navDropdowns.forEach((dropdown) => dropdown.removeAttribute("open"));
    }
  });
})();
