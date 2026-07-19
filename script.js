const data = {
  history: [
    {
      year: "1999 - 2010",
      title: "Periode Awal & Keterbatasan Fasilitas",
      description:
        "Pada masa awal berdirinya, Posyandu Desa Bunga berjalan dengan keterbatasan fasilitas. Pelayanan kesehatan dilakukan dari rumah ke rumah warga di Dusun Banga-Banga dan Dusun Labumpung dengan peralatan penimbangan sederhana."
    },
    {
      year: "2011 - 2020",
      title: "Pembangunan Pos & Dukungan Swadaya",
      description:
        "Dengan dukungan swadaya masyarakat dan tokoh masyarakat, dua pos pelayanan tetap resmi berdiri, yaitu Posyandu Cut Mutia di Dusun Banga-Banga dan Posyandu Emisaelan di Dusun Labumpung. Sarana kesehatan dasar dan PMT (Pemberian Makanan Tambahan) mulai teratur diberikan di kedua lokasi."
    },
    {
      year: "2021 - Sekarang",
      title: "Era Posyandu Digital & Preventif Stunting",
      description:
        "Memasuki era modern, Posyandu Cut Mutia dan Posyandu Emisaelan berkolaborasi dengan program KKN untuk mengintegrasikan pencatatan digital. Fokus utama difokuskan pada program pencegahan stunting terintegrasi di seluruh wilayah Desa Bunga."
    }
  ],
  orgStructure: {
    // ── Sumber: papan "DATA POKTAN Desa Bunga Kecamatan Mattiro Bulu Kabupaten Pinrang" ──
    poktanSummary: {
      rows: [
        { no: 1, poktan: "BKB Cinta", jumlah: 1, sk: "Ada", groupKey: "bkbcinta" },
        { no: 2, poktan: "BKR Kasih", jumlah: 1, sk: "Ada", groupKey: "bkrkasih" },
        { no: 3, poktan: "BKL Sipatuo", jumlah: 1, sk: "Ada", groupKey: "bklsipatuo" },
        { no: 4, poktan: "UPPKA Bunga", jumlah: 1, sk: "Ada", groupKey: null },
        { no: 5, poktan: "PIK.R Aliyah", jumlah: 1, sk: "Ada", groupKey: null },
      ],
      total: { jumlah: 5, sk: "5 SK" },
    },
    // ── Sumber: papan "SUSUNAN PENGURUS" tiap kelompok + "STRUKTUR ORGANISASI PPKBD" ──
    groups: [
      {
        key: "bkbcinta",
        label: "BKB Cinta",
        icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
        title: "Struktur Kelompok BKB Cinta",
        dusun: "Desa Bunga",
        tone: "green",
        advisors: [
          { role: "Penasehat", names: ["Kepala Desa Bunga", "Ketua Tim PKK Desa Bunga"] },
          { role: "Pembina", names: ["Rasma R., A.Md.Keb."] },
        ],
        tree: {
          role: "Ketua",
          name: "Rasma Saidi Jaya",
          tier: "ketua",
          children: [
            { role: "Sekretaris", name: "Suraedah", tier: "exec" },
            { role: "Bendahara", name: "Asrianti", tier: "exec" },
            {
              role: "Kader",
              name: "BKB Cinta",
              tier: "staff",
              children: [
                { role: "0 - 1 Tahun", name: "Risma", tier: "leaf" },
                { role: "1 - 2 Tahun", name: "Muliana", tier: "leaf" },
                { role: "2 - 3 Tahun", name: "Hasmi", tier: "leaf" },
                { role: "3 - 4 Tahun", name: "Farwah", tier: "leaf" },
                { role: "4 - 5 Tahun", name: "Juhaeni", tier: "leaf" },
                { role: "5 - 6 Tahun", name: "Hasni", tier: "leaf" },
              ],
            },
          ],
        },
        members: [
          { name: "Rasma Saidi Jaya", role: "Ketua" },
          { name: "Suraedah", role: "Sekretaris" },
          { name: "Asrianti", role: "Bendahara" },
          { name: "Risma", role: "Kader 0-1 Tahun" },
          { name: "Muliana", role: "Kader 1-2 Tahun" },
          { name: "Hasmi", role: "Kader 2-3 Tahun" },
          { name: "Farwah", role: "Kader 3-4 Tahun" },
          { name: "Juhaeni", role: "Kader 4-5 Tahun" },
          { name: "Hasni", role: "Kader 5-6 Tahun" },
        ],
      },
      {
        key: "bkrkasih",
        label: "BKR Kasih",
        icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
        title: "Struktur Kelompok BKR Kasih",
        dusun: "Desa Bunga",
        tone: "blue",
        advisors: [
          { role: "Penasehat", names: ["Kepala Desa Bunga", "Ketua Tim PKK Desa Bunga"] },
          { role: "Pembina", names: ["Rasna R., A.Md.Keb."] },
        ],
        tree: {
          role: "Ketua",
          name: "Muliana",
          tier: "ketua",
          children: [
            { role: "Sekretaris", name: "Rasma Saidi Jaya", tier: "exec" },
            { role: "Bendahara", name: "Hasni", tier: "exec" },
            {
              role: "Anggota",
              name: "BKR Kasih",
              tier: "staff",
              children: [
                { role: "Anggota", name: "Hadiyah", tier: "leaf" },
                { role: "Anggota", name: "Farwah", tier: "leaf" },
                { role: "Anggota", name: "Asrianti", tier: "leaf" },
                { role: "Anggota", name: "Rahmiani", tier: "leaf" },
              ],
            },
          ],
        },
        members: [
          { name: "Muliana", role: "Ketua" },
          { name: "Rasma Saidi Jaya", role: "Sekretaris" },
          { name: "Hasni", role: "Bendahara" },
          { name: "Hadiyah", role: "Anggota" },
          { name: "Farwah", role: "Anggota" },
          { name: "Asrianti", role: "Anggota" },
          { name: "Rahmiani", role: "Anggota" },
        ],
      },
      {
        key: "bklsipatuo",
        label: "BKL Sipatuo",
        icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
        title: "Struktur Kelompok BKL Sipatuo",
        dusun: "Desa Bunga",
        tone: "yellow",
        advisors: [
          { role: "Penasehat", names: ["Kepala Desa Bunga", "Ketua Tim PKK Desa Bunga"] },
          { role: "Pembina", names: ["Rasna R., A.Md.Keb."] },
        ],
        tree: {
          role: "Ketua",
          name: "Nur Asyiah",
          tier: "ketua",
          children: [
            { role: "Sekretaris", name: "Dina Aminarti", tier: "exec" },
            { role: "Bendahara", name: "Marwah", tier: "exec" },
            {
              role: "Anggota",
              name: "BKL Sipatuo",
              tier: "staff",
              children: [
                { role: "Anggota", name: "Naila Fausiah", tier: "leaf" },
                { role: "Anggota", name: "Nur Jannah", tier: "leaf" },
              ],
            },
          ],
        },
        members: [
          { name: "Nur Asyiah", role: "Ketua" },
          { name: "Dina Aminarti", role: "Sekretaris" },
          { name: "Marwah", role: "Bendahara" },
          { name: "Naila Fausiah", role: "Anggota" },
          { name: "Nur Jannah", role: "Anggota" },
        ],
      },
      {
        key: "ppkbd",
        label: "PPKBD",
        icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
        title: "Struktur Organisasi PPKBD Desa Bunga",
        dusun: "Desa Bunga",
        tone: "red",
        advisors: null,
        tree: {
          role: "PPKBD",
          name: "Asrianti",
          tier: "ketua",
          children: [
            { role: "Sub PPKBD", name: "Hasni", tier: "exec" },
            { role: "Sub PPKBD", name: "Muliana", tier: "exec" },
          ],
        },
        members: [
          { name: "Asrianti", role: "PPKBD" },
          { name: "Hasni", role: "Sub PPKBD" },
          { name: "Muliana", role: "Sub PPKBD" },
        ],
      },
      {
        key: "emisaelan",
        label: "Posyandu Emisaelan",
        icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
        title: "Struktur Posyandu Emisaelan",
        dusun: "Dusun Labumpung",
        tone: "blue",
        advisors: [
          { role: "Pembina", names: ["Hadiyah"] },
        ],
        tree: {
          role: "Ketua",
          name: "Hasni, A.Md., Keb",
          tier: "ketua",
          children: [
            { role: "Sekertaris", name: "Rasma Saidijaya", tier: "exec" },
            { role: "Bendahara", name: "Nuraisyah", tier: "exec" },
            {
              role: "Kader",
              name: "Pelayanan 5 Langkah",
              tier: "staff",
              children: [
                { role: "Pendaftaran", name: "Rahmani", tier: "leaf" },
                { role: "Penimbangan", name: "Hasmi", tier: "leaf" },
                { role: "Pencatatan", name: "Farwah", tier: "leaf" },
                { role: "Penyuluhan", name: "Sumarwah", tier: "leaf" },
                { role: "Kesehatan", name: "Juhaeni", tier: "leaf" },
              ],
            },
          ],
        },
        members: [
          { name: "Hadiyah", role: "Pembina" },
          { name: "Hasni, A.Md., Keb", role: "Ketua" },
          { name: "Rasma Saidijaya", role: "Sekertaris" },
          { name: "Nuraisyah", role: "Bendahara" },
          { name: "Rahmani", role: "Kader Pendaftaran" },
          { name: "Hasmi", role: "Kader Penimbangan" },
          { name: "Farwah", role: "Kader Pencatatan" },
          { name: "Sumarwah", role: "Kader Penyuluhan" },
          { name: "Juhaeni", role: "Kader Kesehatan" },
        ],
      },
    ],
    // ── Sumber: papan "TABEL DATA DESA BUNGA Kecamatan Mattiro Bulu Kabupaten Pinrang" ──
    villageData: {
      rows: [
        {
          key: "banga-banga",
          dusun: "Banga-Banga",
          kk: { lk: 191, pr: 46 },
          jiwa: { lk: 365, pr: 381 },
          pus: 122,
          wus: 83,
          mix: { pil: 36, stk: 24, imp: 22, iud: 5, mow: 5, mop: 0, kdm: 1 },
        },
        {
          key: "labumpung",
          dusun: "Labumpung",
          kk: { lk: 164, pr: 33 },
          jiwa: { lk: 298, pr: 337 },
          pus: 108,
          wus: 86,
          mix: { pil: 29, stk: 28, imp: 18, iud: 7, mow: 9, mop: 0, kdm: 2 },
        },
      ],
      total: {
        dusun: "Total",
        kk: { lk: 355, pr: 79 },
        jiwa: { lk: 663, pr: 718 },
        pus: 230,
        wus: 169,
        mix: { pil: 65, stk: 52, imp: 40, iud: 12, mow: 14, mop: 0, kdm: 3 },
      },
    },
  },
  services: {
    pendaftaran: {
      title: "Pendaftaran & Verifikasi",
      badge: "Langkah 1: Registrasi Sasaran",
      description:
        "Tahap pendaftaran bertujuan mendata seluruh sasaran (ibu hamil, bayi, dan balita) secara teratur sebelum menerima pemeriksaan.",
      points: [
        "Pencatatan data identitas ibu dan anak pada buku register",
        "Pemeriksaan kelengkapan administrasi/buku KIA",
        "Pembagian nomor antrean pelayanan harian"
      ]
    },
    penimbangan: {
      title: "Penimbangan & Pengukuran",
      badge: "Langkah 2: Antropometri",
      description:
        "Pemeriksaan antropometri berkala secara rutin dilakukan untuk memantau pertumbuhan dan mendeteksi secara dini tanda-tanda stunting atau gizi buruk.",
      points: [
        "Penimbangan berat badan menggunakan timbangan digital presisi",
        "Pengukuran tinggi badan (balita) atau panjang badan (bayi)",
        "Pengukuran lingkar kepala (Lika) dan lingkar lengan atas (Lila)"
      ]
    },
    pencatatan: {
      title: "Pencatatan Hasil & Buku KIA",
      badge: "Langkah 3: Evaluasi Data",
      description:
        "Seluruh hasil pengukuran dicatat secara detail pada KMS (Kartu Menuju Sehat) dan buku KIA untuk melihat tren tumbuh kembang anak.",
      points: [
        "Pengisian grafik KMS (merah, kuning, hijau) untuk memantau pertumbuhan",
        "Penginputan data ke sistem pencatatan Posyandu Digital",
        "Dokumentasi status imunisasi dan pemberian vitamin"
      ]
    },
    penyuluhan: {
      title: "Penyuluhan Gizi & Konsultasi",
      badge: "Langkah 4: Edukasi Keluarga",
      description:
        "Kader memberikan edukasi langsung mengenai asupan gizi, pola asuh, ASI eksklusif, serta solusi terhadap kendala makan anak.",
      points: [
        "Konseling individu berdasarkan hasil pengukuran KMS",
        "Pemberian materi gizi seimbang dan MPASI sehat",
        "Diskusi kesehatan ibu menyusui dan pemeliharaan kesehatan reproduksi"
      ]
    },
    imunisasi: {
      title: "Pelayanan Kesehatan & Imunisasi",
      badge: "Langkah 5: Intervensi Medis",
      description:
        "Bekerja sama dengan Bidan Desa dan Petugas Puskesmas untuk memberikan imunisasi dasar lengkap, vitamin, serta suplemen zat besi.",
      points: [
        "Pemberian Imunisasi Dasar Lengkap (BCG, Polio, DPT, Campak, dll.)",
        "Pemberian Kapsul Vitamin A (Februari & Agustus) serta Obat Cacing",
        "Pemeriksaan kesehatan umum ibu hamil dan pemberian tablet tambah darah"
      ]
    }
  },
  education: [
    {
      title: "Literasi Gizi 1000 HPK",
      text: "Pentingnya pemenuhan gizi seimbang pada 1000 Hari Pertama Kehidupan (sejak dalam kandungan hingga anak berusia 2 tahun) sebagai kunci emas tumbuh kembang.",
      url: "literasi-gizi-1000-hpk.html"
    },
    {
      title: "Deteksi Dini Stunting",
      text: "Mengenal stunting, ciri-ciri keterlambatan tumbuh kembang anak, serta langkah preventif aktif melalui posyandu dan pemantauan asupan makan.",
      url: "deteksi-dini-stunting.html"
    },
    {
      title: "Perilaku Hidup Bersih & Sehat",
      text: "Penerapan PHBS di lingkungan keluarga seperti cuci tangan pakai sabun, konsumsi air bersih, dan menjaga kebersihan lingkungan rumah tangga.",
      url: "perilaku-hidup-bersih-sehat.html"
    }
  ],
  location: {
    text: "Posyandu Cut Mutia, Dusun Banga-Banga, Desa Bunga. Koordinat lokasi: -3.8143872, 119.6024137.",
    mapsUrl: "https://www.google.com/maps?q=-3.8143872,119.6024137"
  },
  contactPhone: "+62 812-4222-3272"
};

const timeline = document.getElementById("timeline");
const cadres = document.getElementById("cadres");
const servicePanel = document.getElementById("service-panel");
const educationGrid = document.getElementById("education-grid");
const locationText = document.getElementById("location-text");
const mapsLink = document.getElementById("maps-link");
const contactPhone = document.getElementById("contact-phone");
const nutritionForm = document.getElementById("nutrition-form");
const nutritionResult = document.getElementById("nutrition-result");
const nutritionReset = document.getElementById("nutrition-reset");
const childNameInput = document.getElementById("child-name");
const childGenderInput = document.getElementById("child-gender");
const childBirthdateInput = document.getElementById("child-birthdate");
const childAgeMonthsInput = document.getElementById("child-age-months");
const childWeightInput = document.getElementById("child-weight");
const childHeightInput = document.getElementById("child-height");

function renderHistory() {
  timeline.innerHTML = data.history
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-year">${item.year}</div>
          <div class="timeline-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCadres() {
  cadres.innerHTML = data.orgStructure.groups
    .map(
      (item) => `
        <article class="cadre-group-card tone-${item.tone}">
          <div class="cadre-group-header">
            <div>
              <span class="cadre-group-label">${item.dusun}</span>
              <h4>${item.label}</h4>
            </div>
            <span class="cadre-count">${item.members.length} orang</span>
          </div>
          <ul class="cadre-name-list">
            ${item.members
          .map(
            (m) => `
                  <li class="cadre-name-item">
                    <div class="cadre-avatar">${m.name
                .split(/\s+/)
                .slice(0, 2)
                .map((part) => part[0])
                .join("")}</div>
                    <span>${m.name}<small class="cadre-role-tag">${m.role}</small></span>
                  </li>
                `
          )
          .join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

// ── Ringkasan Data Poktan Desa Bunga (klik baris untuk lompat ke struktur) ──
const poktanTableBody = document.getElementById("poktan-table-body");
const poktanTableFoot = document.getElementById("poktan-table-foot");

function renderPoktanSummary() {
  if (!poktanTableBody) return;
  const { rows, total } = data.orgStructure.poktanSummary;

  poktanTableBody.innerHTML = rows
    .map(
      (row) => `
        <tr class="poktan-row${row.groupKey ? " is-clickable" : ""}"
          ${row.groupKey ? `data-jump-group="${row.groupKey}" tabindex="0" role="button"` : ""}>
          <td>${row.no}</td>
          <td>${row.poktan}</td>
          <td>${row.jumlah}</td>
          <td><span class="sk-badge">${row.sk}</span></td>
        </tr>
      `
    )
    .join("");

  poktanTableFoot.innerHTML = `
    <tr class="poktan-total-row">
      <td colspan="2">TOTAL</td>
      <td>${total.jumlah}</td>
      <td>${total.sk}</td>
    </tr>
  `;

  poktanTableBody.querySelectorAll("[data-jump-group]").forEach((row) => {
    row.addEventListener("click", () => activateOrgGroup(row.dataset.jumpGroup, true));
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activateOrgGroup(row.dataset.jumpGroup, true);
      }
    });
  });
}

// ── Struktur kepengurusan interaktif per kelompok (Poktan) ──
const orgTabsWrap = document.getElementById("org-tabs");
const orgPanelsWrap = document.getElementById("org-panels");

function renderOrgNode(node) {
  const nodeHtml = `
    <div class="org-node tier-${node.tier}">
      <span class="org-role">${node.role}</span>
      <span class="org-name">${node.name}</span>
    </div>
  `;
  if (!node.children || !node.children.length) return nodeHtml;
  const childrenHtml = `
    <ul>
      ${node.children.map((child) => `<li>${renderOrgNode(child)}</li>`).join("")}
    </ul>
  `;
  return nodeHtml + childrenHtml;
}

function renderOrgGroups() {
  if (!orgTabsWrap || !orgPanelsWrap) return;
  const groups = data.orgStructure.groups;

  orgTabsWrap.innerHTML = groups
    .map(
      (group, index) => `
        <button class="tab${index === 0 ? " active" : ""}" type="button" data-org-tab="${group.key}"
          role="tab" aria-selected="${index === 0 ? "true" : "false"}">
          ${group.icon} ${group.label}
        </button>
      `
    )
    .join("");

  orgPanelsWrap.innerHTML = groups
    .map(
      (group, index) => `
        <div class="org-chart-panel${index === 0 ? " active" : ""}" data-org-panel="${group.key}">
          <div class="org-chart-panel-head">
            <span class="org-chart-badge tone-${group.tone}">${group.dusun}</span>
            <h3>${group.title}</h3>
          </div>
          ${group.advisors
          ? `
                <div class="org-advisors-row">
                  ${group.advisors
            .map(
              (advisor) => `
                        <div class="org-node tier-pembina">
                          <span class="org-role">${advisor.role}</span>
                          <span class="org-name">${advisor.names.join(" &amp; ")}</span>
                        </div>
                      `
            )
            .join("")}
                </div>
              `
          : ""
        }
          <div class="org-chart-wrap">
            <ul class="tree">
              <li>${renderOrgNode(group.tree)}</li>
            </ul>
          </div>
        </div>
      `
    )
    .join("");

  orgTabsWrap.querySelectorAll("[data-org-tab]").forEach((tab) => {
    tab.addEventListener("click", () => activateOrgGroup(tab.dataset.orgTab));
  });
}

function activateOrgGroup(key, scrollIntoView) {
  const tabs = orgTabsWrap ? orgTabsWrap.querySelectorAll("[data-org-tab]") : [];
  const panels = orgPanelsWrap ? orgPanelsWrap.querySelectorAll("[data-org-panel]") : [];

  tabs.forEach((tab) => {
    const isActive = tab.dataset.orgTab === key;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.orgPanel === key));

  if (scrollIntoView) {
    const target = orgPanelsWrap.querySelector(`[data-org-panel="${key}"]`);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

// ── Tabel Data Desa Bunga: kependudukan & mix kontrasepsi ──
const villageTabsWrap = document.getElementById("village-tabs");
const villageStatsWrap = document.getElementById("village-stats");
const villageTableBody = document.getElementById("village-table-body");
let activeVillageKey = "total";

function getVillageRecord(key) {
  if (key === "total") return data.orgStructure.villageData.total;
  return data.orgStructure.villageData.rows.find((row) => row.key === key);
}

function renderVillageTabs() {
  if (!villageTabsWrap) return;
  const options = [
    { key: "total", label: "Total Desa Bunga" },
    { key: "banga-banga", label: "Dusun Banga-Banga" },
    { key: "labumpung", label: "Dusun Labumpung" },
  ];

  villageTabsWrap.innerHTML = options
    .map(
      (option) => `
        <button class="tab${option.key === activeVillageKey ? " active" : ""}" type="button"
          data-village-tab="${option.key}" role="tab"
          aria-selected="${option.key === activeVillageKey ? "true" : "false"}">
          ${option.label}
        </button>
      `
    )
    .join("");

  villageTabsWrap.querySelectorAll("[data-village-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      activeVillageKey = tab.dataset.villageTab;
      renderVillageTabs();
      renderVillageStats();
    });
  });
}

function renderVillageStats() {
  if (!villageStatsWrap) return;
  const record = getVillageRecord(activeVillageKey);

  const cards = [
    {
      label: "Jumlah KK",
      value: record.kk.lk + record.kk.pr,
      sub: `LK ${record.kk.lk} · PR ${record.kk.pr}`,
    },
    {
      label: "Jumlah Jiwa",
      value: record.jiwa.lk + record.jiwa.pr,
      sub: `LK ${record.jiwa.lk} · PR ${record.jiwa.pr}`,
    },
    { label: "PUS", value: record.pus, sub: "Pasangan Usia Subur" },
    { label: "WUS", value: record.wus, sub: "Wanita Usia Subur" },
  ];

  villageStatsWrap.innerHTML =
    cards
      .map(
        (card) => `
          <div class="village-stat-card">
            <span class="village-stat-value">${card.value}</span>
            <span class="village-stat-label">${card.label}</span>
            <span class="village-stat-sub">${card.sub}</span>
          </div>
        `
      )
      .join("") +
    `
      <div class="village-stat-card village-stat-card--mix">
        <span class="village-stat-label">Mix Kontrasepsi</span>
        <div class="village-mix-grid">
          ${Object.entries(record.mix)
      .map(
        ([key, value]) => `
                <div class="village-mix-item">
                  <strong>${value}</strong>
                  <small>${key.toUpperCase()}</small>
                </div>
              `
      )
      .join("")}
        </div>
      </div>
    `;
}

function renderVillageTable() {
  if (!villageTableBody) return;
  const { rows, total } = data.orgStructure.villageData;

  const rowsHtml = rows
    .map(
      (row) => `
        <tr>
          <td>${row.dusun}</td>
          <td>${row.kk.lk}</td><td>${row.kk.pr}</td>
          <td>${row.jiwa.lk}</td><td>${row.jiwa.pr}</td>
          <td>${row.pus}</td><td>${row.wus}</td>
          <td>${row.mix.pil}</td><td>${row.mix.stk}</td><td>${row.mix.imp}</td>
          <td>${row.mix.iud}</td><td>${row.mix.mow}</td><td>${row.mix.mop}</td><td>${row.mix.kdm}</td>
        </tr>
      `
    )
    .join("");

  const totalHtml = `
    <tr class="village-total-row">
      <td>${total.dusun.toUpperCase()}</td>
      <td>${total.kk.lk}</td><td>${total.kk.pr}</td>
      <td>${total.jiwa.lk}</td><td>${total.jiwa.pr}</td>
      <td>${total.pus}</td><td>${total.wus}</td>
      <td>${total.mix.pil}</td><td>${total.mix.stk}</td><td>${total.mix.imp}</td>
      <td>${total.mix.iud}</td><td>${total.mix.mow}</td><td>${total.mix.mop}</td><td>${total.mix.kdm}</td>
    </tr>
  `;

  villageTableBody.innerHTML = rowsHtml + totalHtml;
}

function renderService(key) {
  const service = data.services[key];
  servicePanel.innerHTML = `
    <div class="panel-header">
      <span class="service-badge">${service.badge}</span>
      <h3>${service.title}</h3>
    </div>
    <p class="service-desc">${service.description}</p>
    <ul class="service-points">
      ${service.points.map((point) => `
        <li>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="check-icon"><polyline points="20 6 9 17 4 12"/></svg>
          <span>${point}</span>
        </li>
      `).join("")}
    </ul>
  `;
}

function renderEducation() {
  educationGrid.innerHTML = data.education
    .map(
      (item) => `
        <article class="education-item card card-green-soft">
          <div class="card-icon-wrap">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <a href="${item.url}" class="card-link">Pelajari ➜</a>
        </article>
      `
    )
    .join("");
}

function renderLocation() {
  locationText.textContent = data.location.text;
  mapsLink.href = (typeof CONFIG !== 'undefined' && CONFIG.GOOGLE_MAP_URL) ? CONFIG.GOOGLE_MAP_URL : data.location.mapsUrl;
  contactPhone.textContent = data.contactPhone;
  contactPhone.href = `tel:${data.contactPhone.replace(/[^\d+]/g, "")}`;
}

function renderEducationalVideos() {
  if (typeof CONFIG === "undefined") return;
  const stuntingFrame = document.getElementById("video-stunting");
  const imunisasiFrame = document.getElementById("video-imunisasi");
  if (stuntingFrame) stuntingFrame.src = CONFIG.YOUTUBE_STUNTING_EMBED_URL || "";
  if (imunisasiFrame) imunisasiFrame.src = CONFIG.YOUTUBE_IMUNISASI_EMBED_URL || "";
}

function getAgeMonthsFromInputs() {
  const birthdate = childBirthdateInput?.value;
  const ageMonthsRaw = childAgeMonthsInput?.value;

  if (birthdate) {
    const birth = new Date(`${birthdate}T00:00:00`);
    const now = new Date();
    const months = (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth());
    const adjusted = now.getDate() < birth.getDate() ? months - 1 : months;
    return Math.max(0, adjusted);
  }

  if (ageMonthsRaw !== "") {
    return Math.max(0, Number(ageMonthsRaw));
  }

  return null;
}

function formatDecimal(value) {
  return new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  }).format(value);
}

function buildNutritionResult(months, weight, height, name, gender) {
  const ageYears = months / 12;
  const expectedWeight = 2 * ageYears + 8;
  const expectedHeight = 77 + 6 * ageYears;
  const bmi = weight / Math.pow(height / 100, 2);
  const weightRatio = weight / expectedWeight;
  const heightRatio = height / expectedHeight;

  let status = "Sesuai kurva pertumbuhan";
  let statusTone = "good";

  if (weightRatio < 0.8 || heightRatio < 0.9 || bmi < 14) {
    status = "Perlu pemantauan";
    statusTone = "watch";
  }

  if (weightRatio < 0.7 || heightRatio < 0.85 || bmi < 13) {
    status = "Perlu evaluasi lebih lanjut";
    statusTone = "alert";
  }

  const childLabel = name ? `${name}` : "Balita";
  const genderLabel = gender === "laki-laki" ? "Laki-laki" : "Perempuan";

  return `
    <div class="nutrition-result-head">
      <span class="nutrition-result-chip ${statusTone}">Hasil Pemeriksaan (Edukasi)</span>
      <h4>${childLabel}</h4>
      <p class="nutrition-result-subhead">${genderLabel} • ${months} bulan</p>
    </div>
    <div class="nutrition-result-section">
      <span class="nutrition-result-section-label">Ringkasan Pemeriksaan</span>
      <div class="nutrition-result-grid">
        <div><span>Umur</span><strong>${months} bulan</strong></div>
        <div><span>Berat badan</span><strong>${formatDecimal(weight)} kg</strong></div>
        <div><span>Tinggi/Panjang</span><strong>${formatDecimal(height)} cm</strong></div>
        <div><span>BMI</span><strong>${formatDecimal(bmi)}</strong></div>
      </div>
    </div>
    <div class="nutrition-result-section nutrition-result-status">
      <span class="nutrition-result-section-label">Status Pertumbuhan</span>
      <p class="nutrition-result-status-text">${status}</p>
      <p class="nutrition-result-status-help">Perkiraan acuan usia: BB ${formatDecimal(expectedWeight)} kg, TB ${formatDecimal(expectedHeight)} cm.</p>
    </div>
    <div class="nutrition-result-note">
      <strong>Catatan:</strong> Hasil ini bersifat edukasi dan bukan diagnosis medis. Untuk penilaian resmi,
      konsultasikan dengan bidan atau petugas kesehatan di Posyandu.
    </div>
  `;
}

function updateNutritionResult(event) {
  if (event) event.preventDefault();
  if (!nutritionResult) return;

  const months = getAgeMonthsFromInputs();
  const gender = childGenderInput?.value || "";
  const weight = Number(childWeightInput?.value);
  const height = Number(childHeightInput?.value);
  const name = (childNameInput?.value || "").trim();

  if (!gender || !Number.isFinite(weight) || !Number.isFinite(height) || weight <= 0 || height <= 0) {
    nutritionResult.innerHTML = `<p class="nutrition-result-empty">Lengkapi jenis kelamin, berat badan, dan tinggi/panjang badan terlebih dahulu.</p>`;
    return;
  }

  if (!months || months < 0 || months > 60) {
    nutritionResult.innerHTML = `<p class="nutrition-result-empty">Isi tanggal lahir atau umur dalam bulan. Untuk skrining ini, umur balita idealnya 0-60 bulan.</p>`;
    return;
  }

  nutritionResult.innerHTML = buildNutritionResult(months, weight, height, name, gender);
}

function resetNutritionForm() {
  nutritionForm?.reset();
  if (nutritionResult) {
    nutritionResult.innerHTML = `<p class="nutrition-result-empty">Masukkan data balita untuk melihat hasil pemeriksaan edukatif.</p>`;
  }
}

// ─── iCal Parser Utilities ───────────────────────────────────────────────────

/**
 * Parse iCal text menjadi array event object.
 * Mendukung properti: DTSTART, DTEND, SUMMARY, LOCATION, DESCRIPTION.
 */
function parseIcal(icalText) {
  const events = [];
  // Unfold long lines (RFC 5545 line folding)
  const unfolded = icalText.replace(/\r?\n[ \t]/g, "");
  const lines = unfolded.split(/\r?\n/);

  let current = null;
  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      current = {};
    } else if (line === "END:VEVENT") {
      if (current) events.push(current);
      current = null;
    } else if (current) {
      // Ambil key:value (abaikan parameter setelah titik koma)
      const colonIdx = line.indexOf(":");
      if (colonIdx === -1) continue;
      const rawKey = line.substring(0, colonIdx).split(";")[0].toUpperCase();
      const val = line.substring(colonIdx + 1).trim();
      current[rawKey] = val;
    }
  }
  return events;
}

/**
 * Parse nilai DTSTART / DTEND iCal menjadi objek Date.
 * Mendukung format: YYYYMMDD dan YYYYMMDDTHHmmssZ
 */
function parseIcalDate(dtStr) {
  if (!dtStr) return null;
  // All-day: YYYYMMDD
  if (/^\d{8}$/.test(dtStr)) {
    return new Date(
      parseInt(dtStr.slice(0, 4)),
      parseInt(dtStr.slice(4, 6)) - 1,
      parseInt(dtStr.slice(6, 8))
    );
  }
  // DateTime: YYYYMMDDTHHmmss[Z]
  if (/^\d{8}T\d{6}/.test(dtStr)) {
    return new Date(
      parseInt(dtStr.slice(0, 4)),
      parseInt(dtStr.slice(4, 6)) - 1,
      parseInt(dtStr.slice(6, 8)),
      parseInt(dtStr.slice(9, 11)),
      parseInt(dtStr.slice(11, 13)),
      parseInt(dtStr.slice(13, 15))
    );
  }
  return null;
}

/**
 * Format Date menjadi string Bahasa Indonesia, e.g. "Selasa, 14 Juli 2026"
 */
function formatDateID(date) {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

/**
 * Format jam dari Date menjadi "HH:MM WITA"
 */
function formatTimeID(startDate, endDate) {
  const pad = (n) => String(n).padStart(2, "0");
  const start = `${pad(startDate.getHours())}:${pad(startDate.getMinutes())}`;
  // Jika all-day event (jam 00:00), tampilkan sesuai config
  if (startDate.getHours() === 0 && startDate.getMinutes() === 0) {
    return typeof CONFIG !== "undefined" && CONFIG.UPCOMING_EVENT
      ? CONFIG.UPCOMING_EVENT.time
      : "Lihat kalender";
  }
  const end = endDate
    ? ` - ${pad(endDate.getHours())}:${pad(endDate.getMinutes())}`
    : "";
  return `${start}${end} WITA`;
}

/**
 * Dari array event hasil parse, ambil event terdekat yang belum lewat.
 */
function getNextEvent(events) {
  const now = new Date();
  return events
    .map((e) => ({ ...e, _start: parseIcalDate(e["DTSTART"]), _end: parseIcalDate(e["DTEND"]) }))
    .filter((e) => e._start && e._start >= now)
    .sort((a, b) => a._start - b._start)[0] || null;
}

// ─── Render Upcoming Event ────────────────────────────────────────────────────

function showUpcomingLoading() {
  const card = document.querySelector(".upcoming-card");
  if (!card) return;
  // Tambahkan indikator loading
  let badge = card.querySelector(".sync-badge");
  if (!badge) {
    badge = document.createElement("div");
    badge.className = "sync-badge sync-loading";
    badge.innerHTML = `<span class="sync-dot"></span> Mengambil dari Google Calendar…`;
    card.insertBefore(badge, card.querySelector(".upcoming-details"));
  }
  ["upcoming-date", "upcoming-time", "upcoming-location", "upcoming-service"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = `<span class="skeleton-text"></span>`;
  });
}

function showUpcomingFallback(reason) {
  if (typeof CONFIG === "undefined" || !CONFIG.UPCOMING_EVENT) return;
  const ev = CONFIG.UPCOMING_EVENT;
  const uDate = document.getElementById("upcoming-date");
  const uTime = document.getElementById("upcoming-time");
  const uLoc = document.getElementById("upcoming-location");
  const uSrv = document.getElementById("upcoming-service");
  if (uDate) uDate.textContent = ev.date;
  if (uTime) uTime.textContent = ev.time;
  if (uLoc) uLoc.textContent = ev.location;
  if (uSrv) uSrv.textContent = ev.service;

  // Perbarui badge ke mode manual
  const card = document.querySelector(".upcoming-card");
  if (card) {
    let badge = card.querySelector(".sync-badge");
    if (!badge) {
      badge = document.createElement("div");
      badge.className = "sync-badge";
      card.insertBefore(badge, card.querySelector(".upcoming-details"));
    }
    badge.className = "sync-badge sync-manual";
    badge.innerHTML = `<span class="sync-dot"></span> Data diperbarui manual · ${reason || ""}`;
  }
}

function renderUpcomingFromCalendar(event) {
  const uDate = document.getElementById("upcoming-date");
  const uTime = document.getElementById("upcoming-time");
  const uLoc = document.getElementById("upcoming-location");
  const uSrv = document.getElementById("upcoming-service");

  if (uDate) uDate.textContent = formatDateID(event._start);
  if (uTime) uTime.textContent = formatTimeID(event._start, event._end);
  if (uLoc) uLoc.textContent = event["LOCATION"] || (CONFIG && CONFIG.UPCOMING_EVENT ? CONFIG.UPCOMING_EVENT.location : "-");
  if (uSrv) uSrv.textContent = event["DESCRIPTION"]
    ? event["DESCRIPTION"].replace(/\\n/g, " ").replace(/\\,/g, ",")
    : (event["SUMMARY"] || (CONFIG && CONFIG.UPCOMING_EVENT ? CONFIG.UPCOMING_EVENT.service : "-"));

  // Perbarui badge ke mode sinkron
  const card = document.querySelector(".upcoming-card");
  if (card) {
    let badge = card.querySelector(".sync-badge");
    if (!badge) {
      badge = document.createElement("div");
      badge.className = "sync-badge";
      card.insertBefore(badge, card.querySelector(".upcoming-details"));
    }
    badge.className = "sync-badge sync-live";
    badge.innerHTML = `<span class="sync-dot"></span> Sinkron dari Google Calendar`;
  }
}

// ─── Metode 1: Google Calendar API v3 (CORS-friendly, tanpa proxy) ───────────

/**
 * Konversi item event dari Calendar API v3 ke format internal (_start, _end, LOCATION, DESCRIPTION, SUMMARY)
 */
function apiItemToEvent(item) {
  const parseApiDate = (d) => {
    if (!d) return null;
    // All-day: { date: "YYYY-MM-DD" }
    if (d.date) return new Date(d.date + "T00:00:00");
    // DateTime: { dateTime: "2026-07-14T08:00:00+08:00" }
    if (d.dateTime) return new Date(d.dateTime);
    return null;
  };
  return {
    SUMMARY: item.summary || "",
    LOCATION: item.location || "",
    DESCRIPTION: item.description || "",
    _start: parseApiDate(item.start),
    _end: parseApiDate(item.end),
  };
}

async function fetchFromCalendarAPI(calendarId, apiKey) {
  const now = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`
    + `?key=${apiKey}`
    + `&orderBy=startTime`
    + `&singleEvents=true`
    + `&timeMin=${encodeURIComponent(now)}`
    + `&maxResults=5`;

  const res = await fetchWithTimeout(url, 8000);
  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Calendar API ${res.status}: ${errBody.slice(0, 120)}`);
  }
  const data = await res.json();
  return (data.items || []).map(apiItemToEvent);
}

// ─── Fetch iCal Feed via CORS Proxy ──────────────────────────────────────────

// Daftar proxy CORS - dicoba satu per satu jika gagal
const CORS_PROXIES = [
  (url) => `https://corsproxy.io/?url=${encodeURIComponent(url)}`,
  (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  (url) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
];

/**
 * Fetch dengan timeout manual (kompatibel semua browser)
 */
async function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    return res;
  } catch (err) {
    clearTimeout(timer);
    throw err;
  }
}

async function fetchAndRenderCalendarEvent() {
  if (typeof CONFIG === "undefined") {
    showUpcomingFallback("CONFIG tidak ditemukan");
    return;
  }

  showUpcomingLoading();

  // ── Metode 1: Google Calendar API v3 (prioritas utama jika ada API key) ──
  if (CONFIG.GOOGLE_API_KEY && CONFIG.GOOGLE_CALENDAR_ID) {
    try {
      console.log("[Posyandu] Mencoba Calendar API v3...");
      const events = await fetchFromCalendarAPI(CONFIG.GOOGLE_CALENDAR_ID, CONFIG.GOOGLE_API_KEY);
      const next = events.filter(e => e._start && e._start >= new Date())
        .sort((a, b) => a._start - b._start)[0] || null;
      if (next) {
        renderUpcomingFromCalendar(next);
        console.log("[Posyandu] ✅ Berhasil via Calendar API v3");
        return;
      } else {
        showUpcomingFallback("Tidak ada jadwal mendatang di kalender");
        return;
      }
    } catch (err) {
      console.warn("[Posyandu] Calendar API v3 gagal:", err.message);
      // Lanjut ke metode berikutnya
    }
  }

  // ── Metode 2: iCal feed via CORS proxy (fallback jika API key tidak ada) ──
  if (!CONFIG.GOOGLE_CALENDAR_ICAL_URL) {
    showUpcomingFallback("URL iCal belum diatur");
    return;
  }

  const icalUrl = CONFIG.GOOGLE_CALENDAR_ICAL_URL;
  let lastError = null;

  for (const makeProxy of CORS_PROXIES) {
    const proxyUrl = makeProxy(icalUrl);
    try {
      console.log("[Posyandu] Mencoba proxy iCal:", proxyUrl);
      const res = await fetchWithTimeout(proxyUrl, 8000);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const icalText = await res.text();
      if (!icalText.includes("BEGIN:VCALENDAR")) {
        throw new Error("Respons bukan file iCal valid");
      }

      const events = parseIcal(icalText);
      const next = getNextEvent(events);

      if (next) {
        renderUpcomingFromCalendar(next);
        console.log("[Posyandu] ✅ Berhasil via iCal proxy");
      } else {
        showUpcomingFallback("Tidak ada jadwal mendatang di kalender");
      }
      return;
    } catch (err) {
      lastError = err;
      console.warn(`[Posyandu] Proxy gagal (${proxyUrl}):`, err.message);
    }
  }

  console.error("[Posyandu] Semua metode gagal. Error terakhir:", lastError?.message);
  showUpcomingFallback("Gagal terhubung ke Google Calendar");
}

// ─── Inisialisasi Google Features ────────────────────────────────────────────

function renderGoogleFeatures() {
  if (typeof CONFIG !== 'undefined') {
    // Set Calendar Embed
    const calendarIframe = document.getElementById("calendar-iframe");
    if (calendarIframe) {
      const applyResponsiveCalendarView = () => {
        try {
          const url = new URL(CONFIG.GOOGLE_CALENDAR_URL);
          const isMobile = window.matchMedia("(max-width: 768px)").matches;

          // Sembunyikan kontrol tambahan agar area konten kalender lebih lega.
          url.searchParams.set("showTitle", "0");
          url.searchParams.set("showPrint", "0");
          url.searchParams.set("showTabs", "0");
          url.searchParams.set("showCalendars", "0");
          url.searchParams.set("showTz", "0");

          if (isMobile) {
            url.searchParams.set("mode", "AGENDA");
          } else {
            url.searchParams.set("mode", "MONTH");
          }

          const nextSrc = url.toString();
          if (calendarIframe.src !== nextSrc) {
            calendarIframe.src = nextSrc;
          }
        } catch (_) {
          calendarIframe.src = CONFIG.GOOGLE_CALENDAR_URL;
        }
      };

      applyResponsiveCalendarView();

      const viewportQuery = window.matchMedia("(max-width: 768px)");
      if (typeof viewportQuery.addEventListener === "function") {
        viewportQuery.addEventListener("change", applyResponsiveCalendarView);
      } else if (typeof viewportQuery.addListener === "function") {
        viewportQuery.addListener(applyResponsiveCalendarView);
      }
    }

    // Set Calendar External Link
    const calendarLink = document.getElementById("calendar-link");
    if (calendarLink) calendarLink.href = CONFIG.GOOGLE_CALENDAR_PAGE_URL || CONFIG.GOOGLE_CALENDAR_URL;

    // Set Attendance Form Link
    const attendanceBtn = document.getElementById("attendance-form-btn");
    if (attendanceBtn) attendanceBtn.href = CONFIG.GOOGLE_FORM_URL;

    // Fetch event terdekat dari Google Calendar iCal secara otomatis
    fetchAndRenderCalendarEvent();
  }
}

renderHistory();
renderPoktanSummary();
renderOrgGroups();
renderCadres();
renderVillageTabs();
renderVillageStats();
renderVillageTable();
renderService("pendaftaran");
renderEducation();
renderLocation();
renderEducationalVideos();
renderGoogleFeatures();

if (nutritionForm) {
  nutritionForm.addEventListener("submit", updateNutritionResult);
}

if (nutritionReset) {
  nutritionReset.addEventListener("click", resetNutritionForm);
}

if (childBirthdateInput && childAgeMonthsInput) {
  childBirthdateInput.addEventListener("change", () => {
    if (childBirthdateInput.value) {
      childAgeMonthsInput.value = "";
    }
  });
  childAgeMonthsInput.addEventListener("input", () => {
    if (childAgeMonthsInput.value !== "") {
      childBirthdateInput.value = "";
    }
  });
}

const tabs = document.querySelectorAll(".service-tabs .tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((button) => button.classList.remove("active"));
    tab.classList.add("active");
    renderService(tab.dataset.tab);
  });
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Tutup menu mobile setiap kali sebuah link navigasi diklik
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Dropdown "Lainnya": tutup otomatis saat klik di luar dropdown
const navDropdown = document.querySelector(".nav-dropdown");
if (navDropdown) {
  document.addEventListener("click", (event) => {
    if (!navDropdown.contains(event.target)) {
      navDropdown.removeAttribute("open");
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealItems.forEach((item) => observer.observe(item));

// ─── Auto-swipe untuk card responsif (mobile) ──────────────────────────────
function setupAutoSwipe() {
  const swipeContainers = document.querySelectorAll('.two-col, .three-col, .four-col, .gallery-grid, .stats-row, .cadres, .video-grid, .pillars-section .grid, #education-grid');

  swipeContainers.forEach((container) => {
    let autoScrollInterval;
    let isHovered = false;

    const startAutoScroll = () => {
      clearInterval(autoScrollInterval);
      autoScrollInterval = setInterval(() => {
        // Hanya jalan jika elemen bisa discroll (overflow aktif di mobile)
        if (container.scrollWidth <= container.clientWidth || isHovered) return;

        const firstChild = container.firstElementChild;
        if (!firstChild) return;

        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScrollLeft - 10) {
          // Jika di ujung, kembali ke awal
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Geser ke item berikutnya
          const scrollAmount = firstChild.clientWidth + parseInt(window.getComputedStyle(container).gap || 16);
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }, 5000); // 5 detik
    };

    const stopAutoScroll = () => {
      clearInterval(autoScrollInterval);
    };

    // Hentikan saat pengguna berinteraksi (hover/touch)
    container.addEventListener('mouseenter', () => isHovered = true);
    container.addEventListener('mouseleave', () => {
      isHovered = false;
      startAutoScroll(); // restart timer
    });
    container.addEventListener('touchstart', stopAutoScroll, { passive: true });
    container.addEventListener('touchend', startAutoScroll, { passive: true });

    startAutoScroll();
  });
}

// Beri sedikit jeda agar DOM & layout selesai dirender secara komplit
setTimeout(setupAutoSwipe, 500);