// =============================================
// DESKTOP NAV — inserts nav BELOW header on 768px+
// =============================================

(function () {

    function buildNav() {
        const existing = document.getElementById('desktopInlineNav');

        if (window.innerWidth < 768) {
            if (existing) existing.remove();
            return;
        }

        if (existing) return;

        const nav = document.createElement('nav');
        nav.id = 'desktopInlineNav';
        nav.innerHTML = `
            <div class="dNavItem"><a href="/html-categories/accessories.html">ACCESSORIES</a></div>
            <div class="dNavItem"><a href="/html-categories/bakingtools.html">BAKING TOOLS</a></div>
            <div class="dNavItem dNavHasDropdown">
                <a href="/html-categories/storage.html">STORAGE &#9662;</a>
                <div class="dNavDropdown">
                    <a href="/html-categories/storage.html">Single Storage</a>
                    <a href="/html-categories/storage.html">Storage Set</a>
                </div>
            </div>
            <div class="dNavItem dNavHasDropdown">
                <a href="/html-categories/glasswares.html">GLASSWARES &#9662;</a>
                <div class="dNavDropdown">
                    <a href="/html-categories/glasswares.html">Wine Glasses</a>
                    <a href="/html-categories/glasswares.html">Mugs</a>
                    <a href="/html-categories/glasswares.html">Drinking Glasses</a>
                </div>
            </div>
            <div class="dNavItem"><a href="/html-categories/kitchenappliances.html">KITCHEN APPLIANCES</a></div>
            <div class="dNavItem dNavHasDropdown">
                <a href="/html-categories/knives.html">KNIVES &#9662;</a>
                <div class="dNavDropdown">
                    <a href="/html-categories/knives.html">Knife Set</a>
                    <a href="/html-categories/knives.html">Bread Knife</a>
                    <a href="/html-categories/knives.html">Paring Knife</a>
                    <a href="/html-categories/knives.html">Utility Knife</a>
                </div>
            </div>
            <div class="dNavItem dNavHasDropdown">
                <a href="/html-categories/cookwares.html">COOKWARES &#9662;</a>
                <div class="dNavDropdown">
                    <a href="/html-categories/cookwares.html">Frying Pan</a>
                    <a href="/html-categories/cookwares.html">Grill Pan</a>
                    <a href="/html-categories/cookwares.html">Pots</a>
                </div>
            </div>
            <div class="dNavItem dNavHasDropdown">
                <a href="/html-categories/utensils.html">UTENSILS &#9662;</a>
                <div class="dNavDropdown">
                    <a href="/html-categories/utensils.html">Utensil Set</a>
                    <a href="/html-categories/utensils.html">Spoon, Fork &amp; Ladle</a>
                    <a href="/html-categories/utensils.html">Spatula and Turner</a>
                </div>
            </div>
        `;

        // insert right AFTER the header, not inside it
        const header = document.querySelector('.headerGroup');
        if (header && header.parentNode) {
            header.parentNode.insertBefore(nav, header.nextSibling);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildNav);
    } else {
        buildNav();
    }

    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(buildNav, 150);
    });

})();
