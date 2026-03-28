// =============================================
// PRODUCT DETAIL MODAL
// Click product image or name to open
// =============================================

(function initProductModal() {

    function injectStyles() {
        if (document.getElementById('productModalStyle')) return;
        const style = document.createElement('style');
        style.id = 'productModalStyle';
        style.textContent = `
            #productModalOverlay {
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.55);
                backdrop-filter: blur(3px);
                z-index: 99998;
                display: none;
                align-items: center;
                justify-content: center;
                padding: 16px;
            }
            #productModalBox {
                background: #fff;
                border-radius: 2px;
                width: 100%;
                max-width: 480px;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 20px 60px rgba(0,0,0,0.25);
                position: relative;
                animation: modalSlideIn 0.22s ease-out forwards;
            }
            @keyframes modalSlideIn {
                from { opacity: 0; transform: translateY(24px) scale(0.97); }
                to   { opacity: 1; transform: translateY(0) scale(1); }
            }
            #productModalClose {
                position: absolute;
                top: 12px;
                right: 14px;
                font-size: 1.3rem;
                background: rgba(0,0,0,0.07);
                border: none;
                border-radius: 50%;
                width: 32px;
                height: 32px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #555;
                z-index: 1;
            }
            #productModalClose:hover { background: rgba(0,0,0,0.15); }
            #productModalImg {
                width: 100%;
                max-height: 260px;
                object-fit: contain;
                border-radius: 14px 14px 0 0;
                background: #f8f8f8;
                padding: 24px;
                box-sizing: border-box;
                display: block;
            }
            #productModalBody {
                padding: 18px 20px 24px;
            }
            #productModalName {
                font-size: 1.05rem;
                font-weight: 800;
                color: #1a1a1a;
                margin: 0 0 6px 0;
                line-height: 1.35;
            }
            #productModalPrice {
                font-size: 1.25rem;
                font-weight: 700;
                color: #28a745;
                margin: 0 0 14px 0;
            }
            #productModalDesc {
                font-size: 0.84rem;
                color: #666;
                line-height: 1.6;
                margin: 0 0 20px 0;
                border-top: 1px solid #f0f0f0;
                padding-top: 14px;
            }
            #productModalQtyRow {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 14px;
            }
            #productModalQtyRow label {
                font-size: 0.83rem;
                font-weight: 600;
                color: #555;
            }
            .modalQtyBtn {
                width: 30px;
                height: 30px;
                border: 1px solid #ccc;
                background: #fff;
                border-radius: 6px;
                font-size: 1.1rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                color: #333;
            }
            .modalQtyBtn:hover { background: #f0f0f0; }
            #productModalQtyNum {
                font-size: 0.95rem;
                font-weight: 700;
                min-width: 24px;
                text-align: center;
                color: #222;
            }
            #productModalAddBtn {
                width: 100%;
                padding: 13px;
                background: #28a745;
                color: white;
                border: none;
                border-radius: 2px;
                font-size: 0.95rem;
                font-weight: 700;
                cursor: pointer;
                letter-spacing: 0.02em;
            }
            #productModalAddBtn:hover { background: #218838; }
            #productModalAddBtn:active { transform: scale(0.98); }
            #productModalAddBtn.added { background: #155724; }

            /* fullscreen image viewer */
            #imgFullOverlay {
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.92);
                z-index: 99999;
                display: none;
                align-items: center;
                justify-content: center;
                padding: 16px;
            }
            #imgFullOverlay.show { display: flex; }
            #imgFullImg {
                max-width: 100%;
                max-height: 90vh;
                object-fit: contain;
                border-radius: 8px;
                animation: modalSlideIn 0.2s ease-out forwards;
            }
            #imgFullClose {
                position: absolute;
                top: 14px;
                right: 18px;
                font-size: 1.4rem;
                background: rgba(255,255,255,0.15);
                border: none;
                border-radius: 50%;
                width: 36px;
                height: 36px;
                cursor: pointer;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
            }
            #imgFullClose:hover { background: rgba(255,255,255,0.3); }
            #productModalImg {
                cursor: zoom-in;
            }
        `;
        document.head.appendChild(style);
    }

    function generateDescription(name) {
        const n = name.toLowerCase();
        if (n.includes('knife') || n.includes('shear') || n.includes('sharpener'))
            return 'Precision-crafted for effortless cutting. Built with durable materials for long-lasting sharpness and comfortable grip in everyday kitchen use.';
        if (n.includes('pan') || n.includes('pot') || n.includes('cooker') || n.includes('griddle') || n.includes('casserole'))
            return 'Designed for even heat distribution and superior cooking performance. Ideal for everyday meals and professional-style cooking at home.';
        if (n.includes('glass') || n.includes('mug') || n.includes('bowl') || n.includes('dinnerware') || n.includes('cup'))
            return 'Elegant and durable tableware crafted for everyday use. Combines style and function to elevate your dining experience.';
        if (n.includes('bakeware') || n.includes('baking') || n.includes('measuring') || n.includes('mixer'))
            return 'Precision baking tools designed to help you achieve consistent, professional-quality results every time you bake.';
        if (n.includes('blender') || n.includes('appliance'))
            return 'A reliable kitchen appliance built for performance and convenience. Makes everyday food prep faster and easier.';
        if (n.includes('storage') || n.includes('carrier') || n.includes('container'))
            return 'Smart storage solution designed to keep your food fresh and organized. Practical for home, work, or on-the-go use.';
        if (n.includes('utensil') || n.includes('spatula') || n.includes('ladle') || n.includes('spoon') || n.includes('tong'))
            return 'Ergonomically designed kitchen utensils built for comfort and durability. Essential tools for any well-equipped kitchen.';
        if (n.includes('set') || n.includes('bundle') || n.includes('kit'))
            return 'A carefully curated set offering great value and versatility. Everything you need in one convenient package.';
        return 'A quality kitchen essential crafted for everyday use. Built to last and designed to make your kitchen experience better.';
    }

    // modal qty — isolated, never bubbles
    let modalQty = 1;

    function buildModal() {
        if (document.getElementById('productModalOverlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'productModalOverlay';
        overlay.innerHTML = `
            <div id="productModalBox">
                <button id="productModalClose" type="button">&times;</button>
                <img id="productModalImg" src="" alt="">
                <div id="productModalBody">
                    <p id="productModalName"></p>
                    <p id="productModalPrice"></p>
                    <p id="productModalDesc"></p>
                    <div id="productModalQtyRow">
                        <label>Qty:</label>
                        <button class="modalQtyBtn" id="modalQtyMinus" type="button">&#8722;</button>
                        <span id="productModalQtyNum">1</span>
                        <button class="modalQtyBtn" id="modalQtyPlus" type="button">&#43;</button>
                    </div>
                    <button id="productModalAddBtn" type="button">Add to Cart</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        // close on backdrop
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });

        // stop ALL clicks inside the box from reaching page listeners
        document.getElementById('productModalBox').addEventListener('click', (e) => {
            e.stopPropagation();
        });

        document.getElementById('productModalClose').addEventListener('click', (e) => {
            e.stopPropagation();
            closeModal();
        });

        // qty — click only, stopPropagation so cart delegated listener never sees these
        document.getElementById('modalQtyMinus').addEventListener('click', (e) => {
            e.stopPropagation();
            if (modalQty > 1) {
                modalQty--;
                document.getElementById('productModalQtyNum').textContent = modalQty;
            }
        });

        document.getElementById('modalQtyPlus').addEventListener('click', (e) => {
            e.stopPropagation();
            modalQty++;
            document.getElementById('productModalQtyNum').textContent = modalQty;
        });

        // add to cart
        document.getElementById('productModalAddBtn').addEventListener('click', (e) => {
            e.stopPropagation();
            const name     = document.getElementById('productModalName').textContent;
            const priceRaw = document.getElementById('productModalPrice').textContent;
            const img      = document.getElementById('productModalImg').src;
            const price    = parseFloat(priceRaw.replace(/[^0-9.]/g, '')) || 0;

            // check BEFORE modifying — determines button label
            const alreadyInCart = typeof cartArray !== 'undefined' && !!cartArray.find(i => i.name === name);

            // update qty if already in cart, else add fresh
            if (typeof cartArray !== 'undefined' && typeof saveCart === 'function') {
                const existing = cartArray.find(i => i.name === name);
                if (existing) {
                    existing.quantity = modalQty;
                    saveCart();
                    renderCart();
                } else {
                    if (typeof addToCart === 'function') {
                        for (let i = 0; i < modalQty; i++) addToCart(name, price, img);
                    }
                }
            } else if (typeof addToCart === 'function') {
                for (let i = 0; i < modalQty; i++) addToCart(name, price, img);
            }
            if (typeof syncPageButtons === 'function') syncPageButtons();

            const btn = document.getElementById('productModalAddBtn');
            btn.textContent = alreadyInCart ? '✓ Updated!' : '✓ Added to Cart!';
            btn.classList.add('added');
            setTimeout(() => closeModal(), 1500);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // close fullscreen image first if open, else close modal
                const fullOverlay = document.getElementById('imgFullOverlay');
                if (fullOverlay && fullOverlay.classList.contains('show')) {
                    closeFullImg();
                } else {
                    closeModal();
                }
            }
        });

        // build fullscreen image overlay
        if (!document.getElementById('imgFullOverlay')) {
            const fullOverlay = document.createElement('div');
            fullOverlay.id = 'imgFullOverlay';
            fullOverlay.innerHTML = `
                <button id="imgFullClose" type="button">&times;</button>
                <img id="imgFullImg" src="" alt="">
            `;
            document.body.appendChild(fullOverlay);

            document.getElementById('imgFullClose').addEventListener('click', (e) => {
                e.stopPropagation();
                closeFullImg();
            });

            // click backdrop to close fullscreen too
            fullOverlay.addEventListener('click', (e) => {
                if (e.target === fullOverlay || e.target === document.getElementById('imgFullImg')) {
                    closeFullImg();
                }
            });
        }
    }

    function openFullImg(src, alt) {
        const fullOverlay = document.getElementById('imgFullOverlay');
        const fullImg     = document.getElementById('imgFullImg');
        fullImg.src = src;
        fullImg.alt = alt;
        fullOverlay.classList.add('show');
    }

    function closeFullImg() {
        const fullOverlay = document.getElementById('imgFullOverlay');
        if (fullOverlay) fullOverlay.classList.remove('show');
    }

    function openModal(product) {
        const img     = product.querySelector('figure img');
        const caption = product.querySelector('.productCaption');
        const price   = product.querySelector('.price');
        if (!img || !caption || !price) return;

        // check if already in cart — reflect existing qty
        const productName = caption.innerText.trim();
        const existingItem = typeof cartArray !== 'undefined'
            ? cartArray.find(i => i.name === productName)
            : null;

        modalQty = existingItem ? existingItem.quantity : 1;
        document.getElementById('productModalQtyNum').textContent = modalQty;

        const addBtn = document.getElementById('productModalAddBtn');
        if (existingItem) {
            addBtn.textContent = 'Update Cart';
            addBtn.classList.add('added');
        } else {
            addBtn.textContent = 'Add to Cart';
            addBtn.classList.remove('added');
        }

        const modalImg = document.getElementById('productModalImg');
        modalImg.src = img.src;
        modalImg.alt = caption.innerText.trim();

        // click modal image → open fullscreen
        modalImg.onclick = (e) => {
            e.stopPropagation();
            openFullImg(modalImg.src, modalImg.alt);
        };
        document.getElementById('productModalName').textContent = caption.innerText.trim();
        document.getElementById('productModalPrice').textContent = price.innerText.trim();
        document.getElementById('productModalDesc').textContent = generateDescription(caption.innerText);

        const overlay = document.getElementById('productModalOverlay');
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        const overlay = document.getElementById('productModalOverlay');
        if (overlay) overlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    function attachProductClicks() {
        document.querySelectorAll('.eachProduct').forEach(product => {
            if (product.dataset.modalBound) return;
            product.dataset.modalBound = 'true';

            const fig     = product.querySelector('figure');
            const caption = product.querySelector('.productCaption');

            // use click (not mousedown) to avoid conflicts
            // stopPropagation stops it reaching .addToCart button
            [fig, caption].forEach(el => {
                if (!el) return;
                el.style.cursor = 'pointer';
                el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openModal(product);
                });
            });
        });
    }

    function setup() {
        if (!document.querySelector('.eachProduct')) return;
        injectStyles();
        buildModal();
        attachProductClicks();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setup);
    } else {
        setup();
    }

})();
