
const GALLERY_CATEGORIES = [
    { key: "semua", label: "Semua" },
    { key: "penimbangan", label: "Penimbangan", tone: "green" },
    { key: "imunisasi", label: "Imunisasi", tone: "blue" },
    { key: "penyuluhan", label: "Penyuluhan", tone: "yellow" },
    { key: "pmt", label: "PMT", tone: "red" },
    { key: "ibu-hamil", label: "Ibu Hamil", tone: "blue" },
    { key: "kegiatan-lain", label: "Kegiatan Lain", tone: "green" },
];

const GALLERY_ITEMS = [
    {
        src: "images/kegiatan-1.jpg",
        category: "penimbangan",
        date: "5 Juli 2026",
        title: "Penimbangan Rutin Balita",
        desc: "Pemantauan berat dan tinggi badan balita setiap bulan untuk mendeteksi risiko stunting sejak dini.",
    },
    {
        src: "images/kegiatan-2.jpg",
        category: "imunisasi",
        date: "18 Juni 2026",
        title: "Imunisasi Dasar Lengkap",
        desc: "Pemberian imunisasi dasar bagi bayi dan balita sesuai jadwal dari Puskesmas setempat.",
    },
    {
        src: "images/kegiatan-3.jpg",
        category: "penyuluhan",
        date: "2 Juni 2026",
        title: "Penyuluhan Gizi Seimbang",
        desc: "Edukasi kepada ibu-ibu mengenai pola makan bergizi seimbang untuk tumbuh kembang anak.",
    },
    {
        src: "images/kegiatan-4.jpg",
        category: "pmt",
        date: "20 Mei 2026",
        title: "Pemberian Makanan Tambahan",
        desc: "Distribusi PMT berupa bubur kacang hijau dan telur rebus untuk balita peserta posyandu.",
    },
    {
        src: "images/kegiatan-5.jpg",
        category: "ibu-hamil",
        date: "7 Mei 2026",
        title: "Pemeriksaan Ibu Hamil",
        desc: "Pemeriksaan kehamilan rutin bersama bidan desa untuk memantau kesehatan ibu dan janin.",
    },
    {
        src: "images/kegiatan-6.jpg",
        category: "kegiatan-lain",
        date: "22 April 2026",
        title: "Kunjungan Rumah Kader",
        desc: "Kader posyandu mengunjungi rumah warga yang tidak sempat hadir pada jadwal pelayanan.",
    },
    {
        src: "images/kegiatan-7.jpg",
        category: "penyuluhan",
        date: "10 April 2026",
        title: "Kelas Ibu Balita",
        desc: "Kegiatan diskusi dan berbagi pengalaman antar ibu mengenai pola asuh dan tumbuh kembang anak.",
    },
    {
        src: "images/kegiatan-8.jpg",
        category: "kegiatan-lain",
        date: "23 Maret 2026",
        title: "Peringatan Hari Anak",
        desc: "Kegiatan lomba dan hiburan sederhana bersama balita dan orang tua di lingkungan posyandu.",
    },
];

(function initGallery() {
    const filtersEl = document.getElementById("gallery-filters");
    const gridEl = document.getElementById("gallery-grid");
    const emptyEl = document.getElementById("gallery-empty");

    if (!filtersEl || !gridEl) return;

    const categoryMap = Object.fromEntries(GALLERY_CATEGORIES.map((c) => [c.key, c]));
    let activeFilter = "semua";
    let visibleItems = GALLERY_ITEMS;
    let lightboxIndex = 0;

    // ── Render filter pills ────────────────────────────────────
    function renderFilters() {
        filtersEl.innerHTML = "";
        GALLERY_CATEGORIES.forEach((cat) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "filter-pill" + (cat.key === activeFilter ? " active" : "");
            btn.textContent = cat.label;
            btn.setAttribute("role", "tab");
            btn.setAttribute("aria-selected", cat.key === activeFilter ? "true" : "false");
            btn.addEventListener("click", () => {
                if (activeFilter === cat.key) return;
                activeFilter = cat.key;
                renderFilters();
                renderGrid();
            });
            filtersEl.appendChild(btn);
        });
    }

    // ── Render photo grid ───────────────────────────────────────
    function renderGrid() {
        visibleItems =
            activeFilter === "semua"
                ? GALLERY_ITEMS
                : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

        gridEl.innerHTML = "";

        if (visibleItems.length === 0) {
            if (emptyEl) emptyEl.hidden = false;
            return;
        }
        if (emptyEl) emptyEl.hidden = true;

        visibleItems.forEach((item, i) => {
            const cat = categoryMap[item.category] || { label: item.category, tone: "green" };
            const card = document.createElement("article");
            card.className = "gallery-card";
            card.style.animationDelay = `${Math.min(i, 8) * 0.05}s`;
            card.innerHTML = `
        <div class="gallery-photo">
          <img src="${item.src}" alt="${item.title}" loading="lazy" />
                    <span class="gallery-zoom-hint" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="6" />
                            <path d="M20 20l-3.5-3.5" />
                        </svg>
                    </span>
        </div>
        <div class="gallery-body">
          <span class="gallery-date">${item.date}</span>
          <span class="gallery-tag tag-${cat.tone || "green"}">${cat.label}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      `;
            card.addEventListener("click", () => openLightbox(i));
            gridEl.appendChild(card);
        });
    }

    // ── Lightbox ─────────────────────────────────────────────────
    const lightbox = document.getElementById("gallery-lightbox");
    const lbImg = document.getElementById("lightbox-img");
    const lbTag = document.getElementById("lightbox-tag");
    const lbTitle = document.getElementById("lightbox-title");
    const lbDate = document.getElementById("lightbox-date");
    const lbPrev = document.getElementById("lightbox-prev");
    const lbNext = document.getElementById("lightbox-next");

    function openLightbox(index) {
        lightboxIndex = index;
        updateLightbox();
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    function updateLightbox() {
        const item = visibleItems[lightboxIndex];
        if (!item) return;
        const cat = categoryMap[item.category] || { label: item.category };
        lbImg.src = item.src;
        lbImg.alt = item.title;
        lbTag.textContent = cat.label;
        lbTitle.textContent = item.title;
        lbDate.textContent = `${item.date} — ${item.desc}`;
    }

    function showNext() {
        lightboxIndex = (lightboxIndex + 1) % visibleItems.length;
        updateLightbox();
    }

    function showPrev() {
        lightboxIndex = (lightboxIndex - 1 + visibleItems.length) % visibleItems.length;
        updateLightbox();
    }

    if (lightbox) {
        lightbox.querySelectorAll("[data-lightbox-close]").forEach((el) => {
            el.addEventListener("click", closeLightbox);
        });
        lbNext.addEventListener("click", showNext);
        lbPrev.addEventListener("click", showPrev);

        document.addEventListener("keydown", (e) => {
            if (!lightbox.classList.contains("is-open")) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
        });
    }

    renderFilters();
    renderGrid();
})();