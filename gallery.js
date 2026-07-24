
const GALLERY_CATEGORIES = [
    { key: "semua", label: "Semua" },
    { key: "penimbangan", label: "Penimbangan", tone: "green" },
    { key: "imunisasi", label: "Imunisasi", tone: "blue" },
    { key: "lansia", label: "Lansia", tone: "red" },
    { key: "ibu-hamil", label: "Ibu Hamil", tone: "purple" },
];

const LABUMPUNG_DATE = "20 Juli 2026";
const BANGABANGA_DATE = "21 Juli 2026";

const GALLERY_ITEMS = [
    {
        src: "images/penimbangan/penimbangan01.webp",
        category: "penimbangan",
        date: LABUMPUNG_DATE,
        title: "Penimbangan Rutin Balita",
        desc: "Pemantauan berat dan tinggi badan balita setiap bulan untuk mendeteksi risiko stunting sejak dini.",
    },
    {
        src: "images/penimbangan/penimbangan02.webp",
        category: "penimbangan",
        date: LABUMPUNG_DATE,
        title: "Penimbangan Bulanan",
        desc: "Kegiatan penimbangan rutin bersama balita dan orang tua di lingkungan posyandu.",
    },
    {
        src: "images/penimbangan/penimbangan04.webp",
        category: "penimbangan",
        date: LABUMPUNG_DATE,
        title: "Pemantauan Tumbuh Kembang",
        desc: "Pengukuran tinggi badan dan berat badan balita untuk memantau tumbuh kembang secara berkala.",
    },
    {
        src: "images/penimbangan/penimbangan05.webp",
        category: "penimbangan",
        date: LABUMPUNG_DATE,
        title: "Penimbangan & Pencatatan",
        desc: "Proses pencatatan hasil penimbangan dalam Kartu Menuju Sehat (KMS) balita.",
    },
    {
        src: "images/penimbangan/penimbangan06.webp",
        category: "penimbangan",
        date: LABUMPUNG_DATE,
        title: "Pelayanan Meja Penimbangan",
        desc: "Kader posyandu melayani penimbangan balita di meja 2 sesuai sistem 5 meja posyandu.",
    },
    {
        src: "images/penimbangan/penimbangan07.webp",
        category: "penimbangan",
        date: LABUMPUNG_DATE,
        title: "Antrian Penimbangan",
        desc: "Antrian warga membawa balita ke posyandu untuk kegiatan penimbangan bulanan.",
    },
    {
        src: "images/penimbangan/penimbangan08.webp",
        category: "penimbangan",
        date: LABUMPUNG_DATE,
        title: "Penimbangan & Stimulasi",
        desc: "Selain penimbangan, kader memberikan stimulasi tumbuh kembang kepada balita.",
    },
    {
        src: "images/penimbangan/penimbangan09.webp",
        category: "penimbangan",
        date: LABUMPUNG_DATE,
        title: "Dokumentasi Penimbangan",
        desc: "Dokumentasi kegiatan penimbangan bulanan di wilayah kerja posyandu.",
    },
    {
        src: "images/penimbangan/penimbangan10.webp",
        category: "penimbangan",
        date: LABUMPUNG_DATE,
        title: "Penimbangan Balita Sehat",
        desc: "Balita dengan status gizi baik terus dipantau setiap bulan melalui kegiatan posyandu.",
    },
    {
        src: "images/penimbangan/penimbangan11.webp",
        category: "penimbangan",
        date: BANGABANGA_DATE,
        title: "Pengukuran Panjang Badan Bayi",
        desc: "Pengukuran panjang badan bayi sebagai bagian dari pemantauan pertumbuhan di posyandu.",
    },


    {
        src: "images/imunisasi/imunisasi01.webp",
        category: "imunisasi",
        date: LABUMPUNG_DATE,
        title: "Imunisasi Dasar Lengkap",
        desc: "Pemberian imunisasi dasar bagi bayi dan balita sesuai jadwal dari Puskesmas setempat.",
    },
    {
        src: "images/imunisasi/imunisasi02.webp",
        category: "imunisasi",
        date: LABUMPUNG_DATE,
        title: "Vaksinasi Bayi",
        desc: "Tenaga kesehatan memberikan vaksinasi kepada bayi di bawah satu tahun.",
    },
    {
        src: "images/imunisasi/imunisasi03.webp",
        category: "imunisasi",
        date: LABUMPUNG_DATE,
        title: "Imunisasi Lanjutan",
        desc: "Pemberian imunisasi lanjutan untuk anak usia 18 bulan guna memperkuat kekebalan tubuh.",
    },
    {
        src: "images/imunisasi/imunisasi04.webp",
        category: "imunisasi",
        date: LABUMPUNG_DATE,
        title: "Pelayanan Imunisasi",
        desc: "Bidan desa memberikan pelayanan imunisasi kepada balita yang datang ke posyandu.",
    },
    {
        src: "images/imunisasi/imunisasi05.webp",
        category: "imunisasi",
        date: LABUMPUNG_DATE,
        title: "Imunisasi Campak Rubela",
        desc: "Pelaksanaan imunisasi campak dan rubela sebagai bagian dari program imunisasi nasional.",
    },
    {
        src: "images/imunisasi/imunisasi06.webp",
        category: "imunisasi",
        date: LABUMPUNG_DATE,
        title: "Pendataan Imunisasi",
        desc: "Kader mencatat status imunisasi setiap balita untuk memastikan kelengkapan jadwal.",
    },
    {
        src: "images/imunisasi/imunisasi07.webp",
        category: "imunisasi",
        date: LABUMPUNG_DATE,
        title: "Imunisasi Polio",
        desc: "Pemberian vaksin polio tetes kepada bayi sebagai perlindungan dari penyakit polio.",
    },
    {
        src: "images/imunisasi/imunisasi08.webp",
        category: "imunisasi",
        date: LABUMPUNG_DATE,
        title: "Dokumentasi Imunisasi",
        desc: "Dokumentasi kegiatan imunisasi rutin di posyandu bersama petugas kesehatan.",
    },
    {
        src: "images/imunisasi/imunisasi09.webp",
        category: "imunisasi",
        date: BANGABANGA_DATE,
        title: "Pelayanan Kesehatan Bayi",
        desc: "Tenaga kesehatan memeriksa kondisi bayi sebelum menerima layanan di posyandu.",
    },
    {
        src: "images/imunisasi/imunisasi10.webp",
        category: "imunisasi",
        date: BANGABANGA_DATE,
        title: "Pemberian Imunisasi Bayi",
        desc: "Tenaga kesehatan memberikan imunisasi kepada bayi dengan pendampingan orang tua dan kader.",
    },
    {
        src: "images/imunisasi/imunisasi12.webp",
        category: "imunisasi",
        date: BANGABANGA_DATE,
        title: "Pendampingan Imunisasi Bayi",
        desc: "Kader mendampingi orang tua dan bayi selama proses pelayanan imunisasi di posyandu.",
    },
    {
        src: "images/imunisasi/imunisasi13.webp",
        category: "imunisasi",
        date: BANGABANGA_DATE,
        title: "Imunisasi Balita di Posyandu",
        desc: "Pemberian imunisasi balita oleh tenaga kesehatan sebagai upaya menjaga kekebalan tubuh.",
    },

    {
        src: "images/lansia/lansia01.webp",
        category: "lansia",
        date: LABUMPUNG_DATE,
        title: "Pelayanan Kesehatan Lansia",
        desc: "Pemeriksaan tekanan darah, gula darah, dan konsultasi kesehatan bagi warga lanjut usia.",
    },
    {
        src: "images/lansia/lansia02.webp",
        category: "lansia",
        date: BANGABANGA_DATE,
        title: "Pemeriksaan Tekanan Darah Lansia",
        desc: "Pengukuran tekanan darah rutin bagi lansia untuk memantau kondisi kesehatan.",
    },
    {
        src: "images/lansia/lansia03.webp",
        category: "lansia",
        date: LABUMPUNG_DATE,
        title: "Senam Lansia Bersama",
        desc: "Kegiatan senam pagi bersama warga lanjut usia untuk menjaga kebugaran dan kesehatan fisik.",
    },
    {
        src: "images/lansia/lansia04.webp",
        category: "lansia",
        date: LABUMPUNG_DATE,
        title: "Konsultasi Kesehatan Lansia",
        desc: "Tenaga kesehatan memberikan konsultasi dan edukasi kesehatan kepada lansia.",
    },
    {
        src: "images/lansia/lansia05.webp",
        category: "lansia",
        date: LABUMPUNG_DATE,
        title: "Pemeriksaan Gula Darah",
        desc: "Pemeriksaan kadar gula darah untuk deteksi dini diabetes pada lansia.",
    },
    {
        src: "images/lansia/lansia06.webp",
        category: "lansia",
        date: LABUMPUNG_DATE,
        title: "Posyandu Lansia Aktif",
        desc: "Kehadiran aktif lansia di posyandu mencerminkan kesadaran masyarakat akan pentingnya kesehatan.",
    },
    {
        src: "images/lansia/lansia07.webp",
        category: "lansia",
        date: LABUMPUNG_DATE,
        title: "Dokumentasi Kegiatan Lansia",
        desc: "Dokumentasi kegiatan pelayanan kesehatan lansia di wilayah kerja posyandu.",
    },
    {
        src: "images/lansia/lansia08.webp",
        category: "lansia",
        date: LABUMPUNG_DATE,
        title: "Pemeriksaan Kesehatan Rutin",
        desc: "Kader posyandu membantu pemeriksaan kesehatan rutin bagi warga lanjut usia.",
    },
    {
        src: "images/lansia/lansia09.webp",
        category: "lansia",
        date: LABUMPUNG_DATE,
        title: "Pengecekan Kondisi Lansia",
        desc: "Petugas kesehatan melakukan pengecekan kondisi fisik dan kesehatan para lansia.",
    },
    {
        src: "images/lansia/lansia10.webp",
        category: "lansia",
        date: LABUMPUNG_DATE,
        title: "Pelayanan Meja Lansia",
        desc: "Pelayanan terpadu di meja posyandu lansia untuk mencatat dan memantau kondisi kesehatan.",
    },
    {
        src: "images/lansia/lansia11.webp",
        category: "lansia",
        date: LABUMPUNG_DATE,
        title: "Kebersamaan di Posyandu Lansia",
        desc: "Semangat kebersamaan lansia dalam mengikuti kegiatan posyandu setiap bulannya.",
    },
    {
        src: "images/lansia/lansia12.webp",
        category: "lansia",
        date: LABUMPUNG_DATE,
        title: "Edukasi Kesehatan Lansia",
        desc: "Tenaga kesehatan memberikan edukasi mengenai pola hidup sehat bagi lansia.",
    },
    {
        src: "images/lansia/lansia14.webp",
        category: "lansia",
        date: LABUMPUNG_DATE,
        title: "Dokumentasi Pelayanan Lansia",
        desc: "Dokumentasi lengkap kegiatan pelayanan kesehatan lansia di wilayah posyandu.",
    },

    // ── Ibu Hamil (7 foto) ────────────────────────────────────────
    {
        src: "images/ibu-hamil/ibuhamil01.webp",
        category: "ibu-hamil",
        date: LABUMPUNG_DATE,
        title: "Pemeriksaan Ibu Hamil",
        desc: "Pemeriksaan kehamilan rutin bersama bidan desa untuk memantau kesehatan ibu dan janin.",
    },
    {
        src: "images/ibu-hamil/ibuhamil02.webp",
        category: "ibu-hamil",
        date: LABUMPUNG_DATE,
        title: "Konsultasi Kehamilan",
        desc: "Bidan memberikan konsultasi dan edukasi kepada ibu hamil mengenai persiapan persalinan.",
    },
    {
        src: "images/ibu-hamil/ibuhamil03.webp",
        category: "ibu-hamil",
        date: LABUMPUNG_DATE,
        title: "Pengukuran Lingkar Perut",
        desc: "Pengukuran lingkar perut ibu hamil untuk memantau perkembangan kehamilan.",
    },
    {
        src: "images/ibu-hamil/ibuhamil04.webp",
        category: "ibu-hamil",
        date: LABUMPUNG_DATE,
        title: "Pemantauan Berat Badan Ibu Hamil",
        desc: "Penimbangan dan pencatatan berat badan ibu hamil setiap bulan di posyandu.",
    },
    {
        src: "images/ibu-hamil/ibuhamil05.webp",
        category: "ibu-hamil",
        date: LABUMPUNG_DATE,
        title: "Kelas Ibu Hamil",
        desc: "Kelas ibu hamil untuk meningkatkan pengetahuan tentang kehamilan, persalinan, dan perawatan bayi.",
    },
    {
        src: "images/ibu-hamil/ibuhamil06.webp",
        category: "ibu-hamil",
        date: LABUMPUNG_DATE,
        title: "Pemberian Tablet Tambah Darah",
        desc: "Distribusi tablet tambah darah (TTD) kepada ibu hamil untuk mencegah anemia.",
    },
    {
        src: "images/ibu-hamil/ibuhamil07.webp",
        category: "ibu-hamil",
        date: LABUMPUNG_DATE,
        title: "Dokumentasi Pelayanan Ibu Hamil",
        desc: "Dokumentasi kegiatan pelayanan ibu hamil di posyandu bersama bidan dan kader.",
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
