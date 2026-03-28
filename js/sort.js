// =============================================
// SORT BY PRICE
// Works on any page with .eachProduct elements
// =============================================

(function initSort() {

    function setup() {
        const productGroups = document.querySelectorAll('.mainProductsGroup');
        if (!productGroups.length) return;

        // inject sort bar CSS once
        if (!document.getElementById('sortBarStyle')) {
            const style = document.createElement('style');
            style.id = 'sortBarStyle';
            style.textContent = `
                .sortBarWrapper {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 6px 12px 6px 4px;
                    margin-bottom: 6px;
                }
                .sortBarWrapper label {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #555;
                    white-space: nowrap;
                }
                .sortSelect {
                    padding: 6px 10px;
                    border: 1px solid #ccc;
                    border-radius: 6px;
                    font-size: 0.85rem;
                    background: white;
                    cursor: pointer;
                    color: #333;
                    outline: none;
                }
                .sortSelect:focus {
                    border-color: #28a745;
                }
            `;
            document.head.appendChild(style);
        }

        productGroups.forEach((group, index) => {
            // create sort bar
            const bar = document.createElement('div');
            bar.className = 'sortBarWrapper';
            bar.innerHTML = `
                <label>Sort:</label>
                <select class="sortSelect" id="sortSelect_${index}">
                    <option value="default">Default</option>
                    <option value="low-high">Price: Low to High</option>
                    <option value="high-low">Price: High to Low</option>
                </select>
            `;

            // insert bar just before the product group
            group.parentNode.insertBefore(bar, group);

            const select = bar.querySelector('.sortSelect');
            select.addEventListener('change', () => sortGroup(group, select.value));
        });
    }

    function parsePrice(el) {
        const priceEl = el.querySelector('.price');
        if (!priceEl) return 0;
        // strip currency symbol, commas, spaces
        return parseFloat(priceEl.innerText.replace(/[^0-9.]/g, '')) || 0;
    }

    function sortGroup(group, order) {
        const products = Array.from(group.querySelectorAll('.eachProduct'));

        if (order === 'default') {
            // restore original order using data-index set on init
            products.sort((a, b) => parseInt(a.dataset.sortIndex) - parseInt(b.dataset.sortIndex));
        } else if (order === 'low-high') {
            products.sort((a, b) => parsePrice(a) - parsePrice(b));
        } else if (order === 'high-low') {
            products.sort((a, b) => parsePrice(b) - parsePrice(a));
        }

        // re-append in sorted order
        products.forEach(p => group.appendChild(p));
    }

    // stamp original index on each product before any sorting
    function stampOriginalOrder() {
        document.querySelectorAll('.mainProductsGroup').forEach(group => {
            group.querySelectorAll('.eachProduct').forEach((p, i) => {
                p.dataset.sortIndex = i;
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => { stampOriginalOrder(); setup(); });
    } else {
        stampOriginalOrder();
        setup();
    }

})();
