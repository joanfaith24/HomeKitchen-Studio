// =============================================
// UNIVERSAL SKELETON LOADING
// Covers: header, search bar, banner,
// product grid, category nav, footer
// =============================================

(function initSkeleton() {

    // ── CSS ────────────────────────────────────
    const css = `
        @keyframes shimmer {
            0%   { background-position: -600px 0; }
            100% { background-position:  600px 0; }
        }

        .sk {
            background: #e8e8e8;
            background-image: linear-gradient(
                90deg,
                #e8e8e8 25%,
                #f5f5f5 50%,
                #e8e8e8 75%
            );
            background-size: 600px 100%;
            animation: shimmer 1.4s infinite linear;
            border-radius: 6px;
            display: inline-block;
        }

        /* skeleton overlay that sits on top of real content */
        #skeletonScreen {
            position: fixed;
            inset: 0;
            background: #fff;
            z-index: 99990;
            overflow-y: auto;
            padding: 0;
        }

        .sk-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 16px;
            border-bottom: 1px solid #eee;
            background: #fff;
        }
        .sk-burger   { width: 28px; height: 20px; }
        .sk-logo     { width: 90px; height: 36px; border-radius: 8px; }
        .sk-icons    { display: flex; gap: 12px; }
        .sk-icon     { width: 28px; height: 28px; border-radius: 50%; }

        .sk-searchbar {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 16px;
            background: #fff;
            border-bottom: 1px solid #eee;
        }
        .sk-input    { flex: 1; height: 36px; border-radius: 6px; }
        .sk-btn      { width: 36px; height: 36px; border-radius: 6px; flex-shrink: 0; }

        .sk-banner {
            width: 100%;
            height: 200px;
            border-radius: 0;
            margin-bottom: 0;
        }

        .sk-section-title {
            width: 160px;
            height: 24px;
            margin: 20px 16px 14px;
        }

        .sk-product-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            padding: 0 12px 20px;
        }

        .sk-product-card {
            background: #fff;
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid #f0f0f0;
            padding-bottom: 12px;
        }
        .sk-product-img  { width: 100%; height: 140px; border-radius: 10px 10px 0 0; }
        .sk-product-name { width: 75%; height: 14px; margin: 10px 10px 6px; }
        .sk-product-price{ width: 45%; height: 14px; margin: 0 10px 10px; }
        .sk-product-btn  { width: calc(100% - 20px); height: 32px; margin: 0 10px; border-radius: 6px; }

        .sk-footer {
            padding: 20px 16px;
            border-top: 1px solid #eee;
            margin-top: 12px;
        }
        .sk-footer-line  { height: 12px; margin-bottom: 10px; border-radius: 4px; }
    `;

    // ── Build skeleton HTML ────────────────────
    function buildSkeleton() {
        // detect how many products are likely on this page
        const realProducts = document.querySelectorAll('.eachProduct');
        const count = realProducts.length > 0 ? Math.min(realProducts.length, 8) : 6;

        // detect if page has a banner
        const hasBanner = !!document.querySelector('.banners');

        // detect page title
        const h2 = document.querySelector('.h2Main');
        const sectionTitle = h2 ? h2.innerText : '';

        let productCards = '';
        for (let i = 0; i < count; i++) {
            productCards += `
                <div class="sk-product-card">
                    <div class="sk sk-product-img"></div>
                    <div class="sk sk-product-name"></div>
                    <div class="sk sk-product-price"></div>
                    <div class="sk sk-product-btn"></div>
                </div>`;
        }

        const bannerHTML = hasBanner
            ? `<div class="sk sk-banner"></div>`
            : '';

        return `
            <div class="sk-header">
                <div class="sk sk-burger"></div>
                <div class="sk sk-logo"></div>
                <div class="sk-icons">
                    <div class="sk sk-icon"></div>
                    <div class="sk sk-icon"></div>
                </div>
            </div>
            <div class="sk-searchbar">
                <div class="sk sk-input"></div>
                <div class="sk sk-btn"></div>
            </div>
            ${bannerHTML}
            <div class="sk sk-section-title"></div>
            <div class="sk-product-grid">
                ${productCards}
            </div>
            <div class="sk-footer">
                <div class="sk sk-footer-line" style="width:60%"></div>
                <div class="sk sk-footer-line" style="width:80%"></div>
                <div class="sk sk-footer-line" style="width:45%"></div>
            </div>
        `;
    }

    // ── Remove skeleton after page is ready ───
    function hideSkeleton() {
        const screen = document.getElementById('skeletonScreen');
        if (!screen) return;

        // fade out smoothly
        screen.style.transition = 'opacity 0.33s ease';
        screen.style.opacity = '0';
        setTimeout(() => {
            screen.remove();
        }, 360);
    }

    // body may not exist yet if script is in <head>
    // so we write the overlay directly into the document stream
    function showSkeletonEarly() {
        // inject CSS into <head> immediately
        const style = document.createElement('style');
        style.id = 'skeletonStyle';
        style.textContent = css;
        document.head.appendChild(style);

        // write overlay div — works even before <body> exists
        document.write('<div id="skeletonScreen"></div>');
    }

    function populateSkeleton() {
        const screen = document.getElementById('skeletonScreen');
        if (screen) screen.innerHTML = buildSkeleton();
    }

    // run immediately while parser is still in <head>
    showSkeletonEarly();

    // populate once DOM is partially ready
    document.addEventListener('DOMContentLoaded', populateSkeleton);

    // hide after everything loads
    window.addEventListener('load', () => {
        setTimeout(hideSkeleton, 300);
    });

})();
