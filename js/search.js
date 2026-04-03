// =============================================
// MASTER PRODUCT DATABASE
// =============================================

const MASTER_PRODUCTS = [
    // ── INDEX / HOME ──────────────────────────────────────────────────────────
    { name: "Mini Portable Lunch Carrier",            price: "₱195.00",   image: "images/MAINPHOTOS/NEWARRIVALS/NewArrival-1-MiniPortableLunchCarrier.png",                   page: "index.html" },
    { name: "Glass Casserole with Lid",               price: "₱230.00",   image: "images/MAINPHOTOS/NEWARRIVALS/NewArrival-2-GlassCasserolewithLid.png",                      page: "index.html" },
    { name: "Dual Serving Slow Cooker",               price: "₱2,999.00", image: "images/MAINPHOTOS/NEWARRIVALS/NewArrival-3-DualServingSlowCooker.png",                      page: "index.html" },
    { name: "Gray Ombre Kettle",                      price: "₱1,249.00", image: "images/MAINPHOTOS/NEWARRIVALS/NewArrival-4-GrayOmbreKettle.png",                            page: "index.html" },
    { name: "Glass Bowls Set of 5",                   price: "₱349.00",   image: "images/MAINPHOTOS/BESTSELLERS/BEST-1-ColorfulGlassBowlsSetof5.png",                         page: "index.html" },
    { name: "Portable Blender",                       price: "₱420.00",   image: "images/MAINPHOTOS/BESTSELLERS/BEST-2-PastelPurplePortableBlender.png",                      page: "index.html" },
    { name: "Dinnerware Set of 5",                    price: "₱545.00",   image: "images/MAINPHOTOS/BESTSELLERS/BEST-3-CobaltBlueDinnerwareSet.png",                          page: "index.html" },
    { name: "3 Ceramic Baking Dishes",                price: "₱1,249.00", image: "images/MAINPHOTOS/BESTSELLERS/BEST-4-CeramicBakingDishesSetof3.png",                        page: "index.html" },
    { name: "Gold Measuring Set",                     price: "₱270.00",   image: "images/MAINPHOTOS/SPECIALDEALS/SPECIALDEAL-1-ElegantGoldMeasuringSet.png",                  page: "index.html" },
    { name: "Stoneware Dinnerware Set",               price: "₱339.00",   image: "images/MAINPHOTOS/SPECIALDEALS/SPECIALDEAL-2-StonewareDinnerwareSet.png",                   page: "index.html" },
    { name: "Minimalist Sushi Setting",               price: "₱299.00",   image: "images/MAINPHOTOS/SPECIALDEALS/SPECIALDEAL-3-MinimalistSushiSetting.png",                   page: "index.html" },
    { name: "4pcs Ceramic Crocks",                    price: "₱315.00",   image: "images/MAINPHOTOS/SPECIALDEALS/SPECIALDEAL-4-4pcsCeramicCrocks.png",                        page: "index.html" },
    { name: "Bundled Kitchen Essentials",             price: "₱1,270.00", image: "images/MAINPHOTOS/BUNDLES/BUNDLE-MAIN-1-BundledKtchenEssentials.png",                       page: "index.html" },
    { name: "Modern Cookware Set",                    price: "₱1,339.00", image: "images/MAINPHOTOS/BUNDLES/BUNDLE-MAIN-2-ModernCookwareSet.png",                             page: "index.html" },
    { name: "Home Dining Essentials Bundle",          price: "₱2,299.00", image: "images/MAINPHOTOS/BUNDLES/BUNDLE-MAIN-3-HomeDiningEssentialsBundle.png",                    page: "index.html" },
    { name: "Set of 6 Stainless Steel Cookware",      price: "₱1,315.00", image: "images/MAINPHOTOS/BUNDLES/BUNDLE-MAIN-4-Setof6StainlessSteelCookwareSet.png",               page: "index.html" },
    { name: "7pcs Bakeware Set",                      price: "₱1,279.00", image: "images/MAINPHOTOS/FEATURED/Featured-AssortedWhiteandNavyBakewareSetof7.png",                page: "index.html" },
    { name: "Black Electric Griddle",                 price: "₱1,340.00", image: "images/MAINPHOTOS/FEATURED/Featured-BlackElectricGriddle.png",                              page: "index.html" },
    { name: "Kitchen Utensil Set of 17",              price: "₱815.00",   image: "images/MAINPHOTOS/FEATURED/Featured-KitchenUtensilSetof17.png",                             page: "index.html" },
    { name: "Silver Stand Mixer",                     price: "₱2,149.00", image: "images/MAINPHOTOS/FEATURED/Featured-SilverStandMixer.png",                                  page: "index.html" },

    // ── GLASSWARES — each sub-section has its own anchor ─────────────────────
    { name: "Wine Glasses",         price: "", image: "", page: "html-categories/glasswares.html#wineGlasses"      },
    { name: "Mugs",                 price: "", image: "", page: "html-categories/glasswares.html#mugs"             },
    { name: "Drinking Glasses",     price: "", image: "", page: "html-categories/glasswares.html#drinkingGlasses"  },

    // ── KNIVES ───────────────────────────────────────────────────────────────
    { name: "Knife Set",            price: "", image: "", page: "html-categories/knives.html#knifeSet"     },
    { name: "Bread Knife",          price: "", image: "", page: "html-categories/knives.html#breadKnife"   },
    { name: "Paring Knife",         price: "", image: "", page: "html-categories/knives.html#paringKnife"  },
    { name: "Utility Knife",        price: "", image: "", page: "html-categories/knives.html#utilityKnife" },

    // ── COOKWARES ─────────────────────────────────────────────────────────────
    { name: "Frying Pan",           price: "", image: "", page: "html-categories/cookwares.html#fryingPan"  },
    { name: "Grill Pan",            price: "", image: "", page: "html-categories/cookwares.html#grillPan"   },
    { name: "Pots",                 price: "", image: "", page: "html-categories/cookwares.html#pots"       },

    // ── UTENSILS ──────────────────────────────────────────────────────────────
    { name: "Utensil Set",          price: "", image: "", page: "html-categories/utensils.html#utensilSet"       },
    { name: "Spoon Fork and Ladle", price: "", image: "", page: "html-categories/utensils.html#spoonForkLadle"   },
    { name: "Spatula and Turner",   price: "", image: "", page: "html-categories/utensils.html#spatulaTurner"    },

    // ── STORAGE ───────────────────────────────────────────────────────────────
    { name: "Single Storage",       price: "", image: "", page: "html-categories/storage.html#singleStorage" },
    { name: "Storage Set",          price: "", image: "", page: "html-categories/storage.html#storageSet"    },

    // ── OTHER CATEGORIES (no sub-sections) ───────────────────────────────────
    { name: "Baking Tools",         price: "", image: "", page: "html-categories/bakingtools.html"       },
    { name: "Kitchen Appliances",   price: "", image: "", page: "html-categories/kitchenappliances.html" },
    { name: "Accessories",          price: "", image: "", page: "html-categories/accessories.html"       },
];

// =============================================
// HELPERS
// =============================================

function resolveImagePath(img) {
    if (!img) return '';
    const depth = (window.location.pathname.match(/\//g) || []).length - 1;
    if (depth <= 0) return img;
    return '../'.repeat(depth) + img;
}

function searchProducts(query) {
    const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return MASTER_PRODUCTS.filter(p =>
        words.some(w => p.name.toLowerCase().includes(w))
    );
}

// =============================================
// NAVIGATION HELPER — respects hash anchors
// =============================================

// Navigates to a product page. If the page has a #hash, we:
// 1. Go to the page
// 2. After load the browser automatically jumps to the anchor
// If we're already on that page, scroll to the anchor directly.
function navigateTo(page) {
    const [path, hash] = page.split('#');
    const fullUrl = '/' + path + (hash ? '#' + hash : '');

    // Check if we're already on the target page
    const currentPath = window.location.pathname.replace(/^\//, '');
    if (currentPath === path && hash) {
        // Already on the page — just scroll to the anchor
        removeDropdown();
        const target = document.getElementById(hash);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else {
        window.location.href = fullUrl;
    }
}

// =============================================
// DEBOUNCE UTILITY
// =============================================

function debounce(fn, delay = 300) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// =============================================
// DROPDOWN
// =============================================

function removeDropdown() {
    const el = document.getElementById('searchDropdown');
    if (el) el.remove();
}

function showDropdown(results, query) {
    removeDropdown();
    const inputBar = document.querySelector('.inputBarHeader');
    if (!inputBar) return;
    const barRect = inputBar.getBoundingClientRect();

    const dropdown = document.createElement('div');
    dropdown.id = 'searchDropdown';
    dropdown.style.cssText = `
        position: fixed;
        top: ${barRect.bottom}px;
        left: ${barRect.left}px;
        width: ${barRect.width}px;
        background: #fff;
        border: 1px solid #ccc;
        border-top: none;
        border-radius: 0 0 10px 10px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        z-index: 99999;
        max-height: 360px;
        overflow-y: auto;
    `;

    if (results.length === 0) {
        dropdown.innerHTML = `
            <div style="padding:16px;text-align:center;color:#999;font-size:0.88rem;">
                No products found for "<strong style="color:#333;">${query}</strong>"
            </div>`;
    } else {
        results.forEach(p => {
            const item = document.createElement('div');
            item.style.cssText = `
                display:flex; align-items:center; gap:12px;
                padding:10px 14px; cursor:pointer;
                border-bottom:1px solid #f0f0f0; background:#fff;
                transition:background 0.12s;
            `;

            const imgSrc = resolveImagePath(p.image);

            // Show section label if product has a hash (sub-section)
            const [, hash] = p.page.split('#');
            const sectionLabel = hash
                ? `<span style="font-size:0.7rem;color:#aaa;margin-left:4px;">— jump to section</span>`
                : '';

            item.innerHTML = `
                ${imgSrc
                    ? `<img src="${imgSrc}" alt="${p.name}" style="width:44px;height:44px;object-fit:contain;border-radius:4px;flex-shrink:0;" onerror="this.style.visibility='hidden'">`
                    : `<div style="width:44px;height:44px;background:#f5f5f5;border-radius:4px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:1.4rem;">🍳</div>`
                }
                <div style="min-width:0;">
                    <p style="margin:0;font-size:0.88rem;font-weight:700;color:#222;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                        ${p.name}${sectionLabel}
                    </p>
                    <p style="margin:2px 0 0;font-size:0.78rem;color:#999;">${p.price || 'View in category →'}</p>
                </div>
            `;

            item.addEventListener('mouseenter', () => item.style.background = '#f7f7f7');
            item.addEventListener('mouseleave', () => item.style.background = '#fff');

            // mousedown fires before outside-click closes the dropdown
            item.addEventListener('mousedown', (e) => {
                e.preventDefault();
                navigateTo(p.page);
            });

            dropdown.appendChild(item);
        });
    }

    document.body.appendChild(dropdown);
}

function runSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    const query = input.value.trim();
    if (!query) { removeDropdown(); return; }
    showDropdown(searchProducts(query), query);
}

// =============================================
// SETUP
// =============================================

(function initSearch() {
    function setup() {
        const input    = document.getElementById('searchInput');
        const inputBar = document.querySelector('.inputBarHeader');
        if (!input || !inputBar) return;

        // Icon click — navigate to best match immediately
        const oldIcon = inputBar.querySelector('.fa-magnifying-glass');
        if (oldIcon) {
            oldIcon.style.cursor = 'pointer';
            oldIcon.style.pointerEvents = 'auto';
            oldIcon.addEventListener('mousedown', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const query = input.value.trim();
                if (!query) { input.focus(); return; }
                const results = searchProducts(query);
                if (results.length > 0) {
                    navigateTo(results[0].page);
                } else {
                    showDropdown([], query);
                }
            });
        }

        // Debounced typing
        const debouncedSearch = debounce(runSearch, 300);
        input.addEventListener('input', debouncedSearch);

        // Keyboard shortcuts
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') { removeDropdown(); input.value = ''; }
            if (e.key === 'Enter')  { runSearch(); }
        });

        // Close on outside click
        document.addEventListener('mousedown', (e) => {
            const dropdown = document.getElementById('searchDropdown');
            if (!dropdown) return;
            if (!inputBar.contains(e.target) && !dropdown.contains(e.target)) {
                removeDropdown();
            }
        });

        // Close when cart opens
        const cartIcon = document.getElementById('cartIcon');
        if (cartIcon) cartIcon.addEventListener('mousedown', removeDropdown);

        // Reposition on scroll
        const debouncedScroll = debounce(() => {
            if (document.getElementById('searchDropdown')) runSearch();
        }, 100);
        window.addEventListener('scroll', debouncedScroll, { passive: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setup);
    } else {
        setup();
    }
})();
