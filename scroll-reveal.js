/* ============================================================
   Scroll Reveal — animasi transisi saat elemen muncul ke layar
   ------------------------------------------------------------
   - Berlaku sama untuk mode desktop maupun mobile: pemicunya
     posisi elemen terhadap viewport (IntersectionObserver),
     bukan lebar layar.
   - Kartu di dalam grid tertentu (galeri, statistik desa,
     edukasi, dll.) dianimasikan bertahap (stagger).
   - Konten yang dimuat belakangan oleh script lain (mis. galeri,
     statistik desa, timeline) tetap kebagian animasi berkat
     MutationObserver.
   - Menghormati preferensi pengguna "prefers-reduced-motion".
   Cukup sertakan <script src="scroll-reveal.js"></script> di
   halaman mana pun; skrip ini berjalan sendiri (self-contained).
   ============================================================ */
(function () {
    "use strict";

    var prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // Container grid/kartu yang anak-anaknya ingin dianimasikan bertahap.
    var STAGGER_CONTAINERS = [
        ".two-col",
        ".three-col",
        ".four-col",
        ".welcome-grid",
        ".stats-row",
        ".cadres",
        ".video-grid",
        ".gallery-grid",
        ".gallery-filters",
        ".related-grid",
        "#education-grid",
        "#village-stats",
        ".village-mix-grid",
        ".org-advisors-row",
    ].join(",");

    var STAGGER_STEP_MS = 70;
    var STAGGER_MAX_MS = 420;
    var staggeredContainers = new WeakSet();

    function markReveal(el) {
        if (el && el.nodeType === 1 && !el.classList.contains("reveal")) {
            el.classList.add("reveal");
        }
    }

    function applyStagger(container) {
        if (!container || staggeredContainers.has(container)) return;
        staggeredContainers.add(container);
        Array.prototype.forEach.call(container.children, function (child, i) {
            markReveal(child);
            var delay = Math.min(i * STAGGER_STEP_MS, STAGGER_MAX_MS);
            child.style.setProperty("--reveal-delay", delay + "ms");
        });
    }

    function tagStaggerContainers(root) {
        if (root.matches && root.matches(STAGGER_CONTAINERS)) {
            applyStagger(root);
        }
        if (root.querySelectorAll) {
            root.querySelectorAll(STAGGER_CONTAINERS).forEach(applyStagger);
        }
    }

    // Blok konten artikel panjang: dianimasikan satu per satu saat discroll.
    function tagArticleBlocks(root) {
        var selector =
            ".article-hero, .article-toc, .breadcrumb, " +
            ".article-content > h2, .article-content > p, " +
            ".article-content > ul, .article-content > ol, " +
            ".article-content > .callout-box, .article-content > .info-table-wrap, " +
            ".article-content > .article-cta, .related-articles";
        if (root.querySelectorAll) {
            root.querySelectorAll(selector).forEach(markReveal);
        }
    }

    var observer = null;

    function getObserver() {
        if (!observer) {
            observer = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("is-visible");
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
            );
        }
        return observer;
    }

    function observeAll(root) {
        var obs = getObserver();
        var items = root.matches && root.matches(".reveal")
            ? [root]
            : Array.prototype.slice.call(
                root.querySelectorAll ? root.querySelectorAll(".reveal") : []
            );
        items.forEach(function (el) {
            if (!el.classList.contains("is-visible")) obs.observe(el);
        });
    }

    function revealInstantly(root) {
        (root.querySelectorAll ? root.querySelectorAll(".reveal") : []).forEach(
            function (el) {
                el.classList.add("is-visible");
            }
        );
    }

    function scan(root) {
        tagStaggerContainers(root);
        tagArticleBlocks(root);
        if (prefersReduced) {
            revealInstantly(root);
        } else {
            observeAll(root);
        }
    }

    function init() {
        scan(document);

        if (prefersReduced) return;

        // Amati elemen baru yang disisipkan belakangan (galeri, statistik
        // desa, timeline, dsb.) agar transisi tetap jalan di kontennya.
        var mo = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                mutation.addedNodes.forEach(function (node) {
                    if (node.nodeType !== 1) return;
                    scan(node);
                });
            });
        });
        mo.observe(document.body, { childList: true, subtree: true });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();