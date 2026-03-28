// =============================================
// MASTER PRODUCT DATABASE
// =============================================

const MASTER_PRODUCTS = [
    { name: "Mini Portable Lunch Carrier",           price: "₱195.00",   image: "images/MAIN PHOTOS/NEW ARRIVALS/New Arrival-1-Mini Portable Lunch Carrier.png",        page: "index.html" },
    { name: "Glass Casserole with Lid",              price: "₱230.00",   image: "images/MAIN PHOTOS/NEW ARRIVALS/New Arrival-2-Glass Casserole with Lid.png",           page: "index.html" },
    { name: "Dual Serving Slow Cooker",              price: "₱2,999.00", image: "images/MAIN PHOTOS/NEW ARRIVALS/New Arrival-3-Dual Serving Slow Cooker.png",           page: "index.html" },
    { name: "Gray Ombre Kettle",                     price: "₱1,249.00", image: "images/MAIN PHOTOS/NEW ARRIVALS/New Arrival-4-Gray Ombre Kettle.png",                  page: "index.html" },
    { name: "Glass Bowls Set of 5",                  price: "₱349.00",   image: "images/MAIN PHOTOS/BEST SELLERS/BEST-1-Colorful Glass Bowls Set of 5.png",             page: "index.html" },
    { name: "Portable Blender",                      price: "₱420.00",   image: "images/MAIN PHOTOS/BEST SELLERS/BEST-2-Pastel Purple Portable Blender.png",            page: "index.html" },
    { name: "Dinnerware Set of 5",                   price: "₱545.00",   image: "images/MAIN PHOTOS/BEST SELLERS/BEST-3-Cobalt Blue Dinnerware Set.png",                page: "index.html" },
    { name: "3 Ceramic Baking Dishes",               price: "₱1,249.00", image: "images/MAIN PHOTOS/BEST SELLERS/BEST-4-Ceramic Baking Dishes Set of 3.png",           page: "index.html" },
    { name: "Gold Measuring Set",                    price: "₱270.00",   image: "images/MAIN PHOTOS/SPECIALDEALS/SPECIAL DEAL-1-Elegant Gold Measuring Set.png",       page: "index.html" },
    { name: "Stoneware Dinnerware Set",              price: "₱339.00",   image: "images/MAIN PHOTOS/SPECIALDEALS/SPECIAL DEAL-2-Stoneware Dinnerware Set.png",         page: "index.html" },
    { name: "Minimalist Sushi Setting",              price: "₱299.00",   image: "images/MAIN PHOTOS/SPECIALDEALS/SPECIAL DEAL-3-Minimalist Sushi Setting.png",         page: "index.html" },
    { name: "4pcs Ceramic Crocks",                   price: "₱315.00",   image: "images/MAIN PHOTOS/SPECIALDEALS/SPECIAL DEAL-4-4pcs Ceramic Crocks.png",              page: "index.html" },
    { name: "Bundled Kitchen Essentials",            price: "₱270.00",   image: "images/MAIN PHOTOS/BUNDLES/BUNDLE-MAIN-1-Bundled Ktchen Essentials.png",              page: "index.html" },
    { name: "Modern Cookware Set",                   price: "₱339.00",   image: "images/MAIN PHOTOS/BUNDLES/BUNDLE-MAIN-2-Modern Cookware Set.png",                    page: "index.html" },
    { name: "Home Dining Essentials Bundle",         price: "₱299.00",   image: "images/MAIN PHOTOS/BUNDLES/BUNDLE-MAIN-3-Home Dining Essentials Bundle.png",          page: "index.html" },
    { name: "Set of 6 Stainless Steel Cookware Set", price: "₱315.00",   image: "images/MAIN PHOTOS/BUNDLES/BUNDLE-MAIN-4-Set of 6 Stainless Steel Cookware Set.png",  page: "index.html" },
    { name: "7pcs Bakeware Set",                     price: "₱1,279.00", image: "images/MAIN PHOTOS/FEATURED/Featured-Assorted White and Navy Bakeware Set of 7.png",  page: "index.html" },
    { name: "Black Electric Griddle",                price: "₱1,340.00", image: "images/MAIN PHOTOS/FEATURED/Featured-Black Electric Griddle.png",                     page: "index.html" },
    { name: "Kitchen Utensil Set of 17",             price: "₱815.00",   image: "images/MAIN PHOTOS/FEATURED/Featured-Kitchen Utensil Set of 17.png",                  page: "index.html" },
    { name: "Silver Stand Mixer",                    price: "₱2,149.00", image: "images/MAIN PHOTOS/FEATURED/Featured-Silver Stand Mixer.png",                         page: "index.html" },
    { name: "Wine Glasses",        price: "", image: "", page: "HTML-CATEGORIES/glasswares.html" },
    { name: "Mugs",                price: "", image: "", page: "HTML-CATEGORIES/glasswares.html" },
    { name: "Drinking Glasses",    price: "", image: "", page: "HTML-CATEGORIES/glasswares.html" },
    { name: "Knife Set",           price: "", image: "", page: "HTML-CATEGORIES/knives.html" },
    { name: "Bread Knife",         price: "", image: "", page: "HTML-CATEGORIES/knives.html" },
    { name: "Paring Knife",        price: "", image: "", page: "HTML-CATEGORIES/knives.html" },
    { name: "Utility Knife",       price: "", image: "", page: "HTML-CATEGORIES/knives.html" },
    { name: "Frying Pan",          price: "", image: "", page: "HTML-CATEGORIES/cookwares.html" },
    { name: "Grill Pan",           price: "", image: "", page: "HTML-CATEGORIES/cookwares.html" },
    { name: "Pots",                price: "", image: "", page: "HTML-CATEGORIES/cookwares.html" },
    { name: "Utensil Set",         price: "", image: "", page: "HTML-CATEGORIES/utensils.html" },
    { name: "Spoon Fork and Ladle",price: "", image: "", page: "HTML-CATEGORIES/utensils.html" },
    { name: "Spatula and Turner",  price: "", image: "", page: "HTML-CATEGORIES/utensils.html" },
    { name: "Single Storage",      price: "", image: "", page: "HTML-CATEGORIES/storage.html" },
    { name: "Storage Set",         price: "", image: "", page: "HTML-CATEGORIES/storage.html" },
    { name: "Baking Tools",        price: "", image: "", page: "HTML-CATEGORIES/bakingtools.html" },
    { name: "Kitchen Appliances",  price: "", image: "", page: "HTML-CATEGORIES/kitchenappliances.html" },
    { name: "Accessories",         price: "", image: "", page: "HTML-CATEGORIES/accessories.html" },
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
// DEBOUNCE UTILITY
// =============================================

// Delays execution of fn until delay ms have passed since the last call.
// Useful for search inputs — avoids firing on every single keystroke.
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
            item.innerHTML = `
                ${imgSrc
                    ? `<img src="${imgSrc}" alt="${p.name}" style="width:44px;height:44px;object-fit:contain;border-radius:4px;flex-shrink:0;" onerror="this.style.visibility='hidden'">`
                    : `<div style="width:44px;height:44px;background:#f5f5f5;border-radius:4px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:1.4rem;">🍳</div>`
                }
                <div style="min-width:0;">
                    <p style="margin:0;font-size:0.88rem;font-weight:700;color:#222;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.name}</p>
                    <p style="margin:2px 0 0;font-size:0.78rem;color:#999;">${p.price || 'View in category →'}</p>
                </div>
            `;
            item.addEventListener('mouseenter', () => item.style.background = '#f7f7f7');
            item.addEventListener('mouseleave', () => item.style.background = '#fff');

            // use mousedown so it fires before the outside-click closes the dropdown
            item.addEventListener('mousedown', (e) => {
                e.preventDefault();
                window.location.href = '/' + p.page;
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
                    window.location.href = '/' + results[0].page;
                } else {
                    showDropdown([], query);
                }
            });
        }

        // ✅ DEBOUNCED typing — waits 300ms after user stops typing before searching
        const debouncedSearch = debounce(runSearch, 300);
        input.addEventListener('input', debouncedSearch);

        // keyboard — Escape and Enter fire immediately (no debounce needed)
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') { removeDropdown(); input.value = ''; }
            if (e.key === 'Enter')  { runSearch(); }
        });

        // close on outside click — but NOT if clicking inside dropdown
        document.addEventListener('mousedown', (e) => {
            const dropdown = document.getElementById('searchDropdown');
            if (!dropdown) return;
            if (!inputBar.contains(e.target) && !dropdown.contains(e.target)) {
                removeDropdown();
            }
        });

        // close when cart opens
        const cartIcon = document.getElementById('cartIcon');
        if (cartIcon) cartIcon.addEventListener('mousedown', removeDropdown);

        // reposition on scroll — debounced to avoid excessive redraws
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
