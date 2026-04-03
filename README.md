# 🏠 Home Kitchen Studio

A clean and responsive online kitchenware shop built with plain **HTML, CSS, and JavaScript** — no frameworks, no dependencies. Browse kitchen products, manage your cart, and place orders with a smooth, user-friendly experience.

---

## 🌐 Pages

### 🏠 Main
| File | Description |
|------|-------------|
| `index.html` | Landing/Home page — features New Arrivals, Best Sellers, Limited Offers, Bundle Deals, and Featured Products sections |

---

### 🗂️ Footer Links (`/footer-links/`)
| File | Description |
|------|-------------|
| `aboutUs-BLOG.html` | Blog page — store articles, tips, and news |
| `aboutUs-CAREERS.html` | Careers page — Customer Service job listing with application form |
| `aboutUs-SHOPREVIEWS.html` | Shop Reviews — star ratings and written customer reviews |
| `getInTouch-HELPCENTER.html` | Help Center — FAQs covering Orders, Payments, Shipping, and Returns |
| `getInTouch-EMAIL.html` | Email Us — contact form + store email address |
| `getInTouch-CONTACT.html` | Contact Us — all contact channels (Facebook, Phone, Viber, WhatsApp, Instagram) with embedded Google Map |
| `aboutOrder-TRACKORDER.html` | Track Order — order number lookup with status timeline and courier direct links |
| `aboutOrder-DISCOUNTS.html` | Discounts & Promos — coupon codes, sales, free shipping, and BOGO deals with copy button |
| `aboutOrder-SHIPPINGOPTIONS.html` | Shipping Options — courier cards (LBC, Ninja Van, Flash Express, FedEx) with fees and timeframes |
| `ourPolicies-SHIPPING.html` | Shipping Policies — full policy covering processing, timeframes, fees, free shipping, international, and delays |
| `ourPolicies-RETURN&REFUND.html` | Return & Refund Policy — 14-day return window, accepted reasons, how-to steps, refund options and timeline |
| `ourPolicies-PRIVACY.html` | Privacy Policy — data collection, usage, sharing, security, cookies, user rights (RA 10173), and retention |
| `blog-readmore.html` | Blog Articles — full content for all 7 blog posts in one page |

---

### 🛍️ Product Categories (`/html-categories/`)
| File | Description |
|------|-------------|
| `accessories.html` | Accessories — wraps, foils, aprons, trivets, coasters, oven mitts, and more |
| `bakingtools.html` | Baking Tools — baking essentials and equipment |
| `cookwares.html` | Cookwares — frying pans, grill pans, and pots |
| `glasswares.html` | Glasswares — wine glasses, mugs, and drinking glasses |
| `kitchenappliances.html` | Kitchen Appliances — electric and countertop kitchen equipment |
| `knives.html` | Knives — knife sets, bread knives, paring knives, and utility knives |
| `storage.html` | Storage — single storage and storage sets |
| `utensils.html` | Utensils — utensil sets, spoons, forks, ladles, spatulas, and turners |

---

### 📄 View More Pages (`/html-viewmore/`)
| File | Description |
|------|-------------|
| `newArrival-P2-viewmore.html` | New Arrivals — extended product listing |
| `bestSeller-P2-viewmore.html` | Best Sellers — extended product listing |
| `limitedOffer-P2-viewmore.html` | Limited Offers — extended product listing |
| `bundleDeals-P2-viewmore.html` | Bundle Deals — extended product listing |
| `accessories-P2-viewmore.html` | Accessories — additional products |
| `bakingtools-P2-viewmore.html` | Baking Tools — additional products |
| `cookwares-frying-P2-viewmore.html` | Cookwares: Frying Pans — additional products |
| `cookwares-grill-P2-viewmore.html` | Cookwares: Grill Pans — additional products |
| `cookwares-pots-P2-viewmore.html` | Cookwares: Pots — additional products |
| `glasswares-Wine-P2-viewmore.html` | Glasswares: Wine Glasses — additional products |
| `glasswares-Mugs-P2-viewmore.html` | Glasswares: Mugs — additional products |
| `glasswares-Drinking-P2-viewmore.html` | Glasswares: Drinking Glasses — additional products |
| `kitchenappliances-P2-viewmore.html` | Kitchen Appliances — additional products |
| `knife-set-p2-viewmore.html` | Knives: Knife Sets — additional products |
| `knife-bread-P2-viewmore.html` | Knives: Bread Knives — additional products |
| `knife-paring-P2-viewmore.html` | Knives: Paring Knives — additional products |
| `knife-utility-P2-viewmore.html` | Knives: Utility Knives — additional products |
| `storage-Single-P2-viewmore.html` | Storage: Single Storage — additional products |
| `storage-Set-P2-viewmore.html` | Storage: Storage Sets — additional products |
| `utensils-set-P2-viewmore.html` | Utensils: Utensil Sets — additional products |
| `utensils-SPL-P2-viewmore.html` | Utensils: Spoon, Fork & Ladle — additional products |
| `utensils-spatula&turner-P2-viewmore.html` | Utensils: Spatula & Turner — additional products |

---

## ✨ Features

### 🛒 Cart System
- Add products to cart from any product page
- Cart sidebar popup with smooth open/close animation
- Item quantity controls (+ / −) directly in the cart
- Remove individual items via trash icon
- Checkbox selection — checkout only selected items, or all if none selected
- **Empty cart state** — friendly message with a "Browse Products" button when cart is empty
- Cart badge showing total item count
- Floating popup notification (✓ Added to Cart / ✕ Removed) above the button
- Cart data saved to `localStorage` — persists across page refreshes and navigation

### 💳 Checkout Flow
- Checkout overlay showing selected items and order summary
- Delivery details form with fields for:
  - Full name
  - Contact number
  - Delivery address
  - Payment method (Cash on Delivery, GCash, Maya, Credit/Debit Card, Bank Transfer)
- Form validation with inline error messages
- Confirmation popup — review details before placing order
- Order processing animation (loading dots)
- Order success screen with thank you message and order summary

### 🔍 Search & Navigation
- Live product search via search bar in the header
- Burger menu for mobile navigation
- Category navigation with sub-category dropdowns (Storage, Glasswares, Knives, Cookwares, Utensils)
- Desktop hover navigation via `desktopNav.js`
- Back to Top button on all pages

### 🔐 Sign In / Sign Up
- Sign In overlay with email and password fields
- Sign Up overlay with username, email, password, re-enter password, and Terms & Conditions checkbox
- Password visibility toggle (eye icon)
- Inline validation messages

### 🎨 UI & Design
- Black and golden yellow brand theme (`#1A1A1A` + `#F5C518`)
- Lavender-gray product image backgrounds (`#EDEAF5`) for a clean, cohesive look
- Warm page background that complements product cards
- Button states: Default → Hover → Added to Cart
- Skeleton loading screen via `skeleton.js`
- Product modal via `productModal.js`
- Fully responsive layout across mobile and desktop

---

## 🗂️ Project Structure

```
home-kitchen-studio/
│
├── index.html                    # Home / Landing page
│
├── footer-links/                 # All footer section pages
│   ├── aboutUs-BLOG.html
│   ├── aboutUs-CAREERS.html
│   ├── aboutUs-SHOPREVIEWS.html
│   ├── getInTouch-HELPCENTER.html
│   ├── getInTouch-EMAIL.html
│   ├── getInTouch-CONTACT.html
│   ├── aboutOrder-TRACKORDER.html
│   ├── aboutOrder-DISCOUNTS.html
│   ├── aboutOrder-SHIPPINGOPTIONS.html
│   ├── ourPolicies-SHIPPING.html
│   ├── ourPolicies-RETURN&REFUND.html
│   ├── ourPolicies-PRIVACY.html
│   └── blog-readmore.html
│
├── html-categories/              # Product category pages
│   ├── accessories.html
│   ├── bakingtools.html
│   ├── cookwares.html
│   ├── glasswares.html
│   ├── kitchenappliances.html
│   ├── knives.html
│   ├── storage.html
│   └── utensils.html
│
├── html-viewmore/                # Extended product listing pages
│   ├── newArrival-P2-viewmore.html
│   ├── bestSeller-P2-viewmore.html
│   ├── limitedOffer-P2-viewmore.html
│   ├── bundleDeals-P2-viewmore.html
│   ├── accessories-P2-viewmore.html
│   ├── bakingtools-P2-viewmore.html
│   ├── cookwares-frying-P2-viewmore.html
│   ├── cookwares-grill-P2-viewmore.html
│   ├── cookwares-pots-P2-viewmore.html
│   ├── glasswares-Wine-P2-viewmore.html
│   ├── glasswares-Mugs-P2-viewmore.html
│   ├── glasswares-Drinking-P2-viewmore.html
│   ├── kitchenappliances-P2-viewmore.html
│   ├── knife-set-p2-viewmore.html
│   ├── knife-bread-P2-viewmore.html
│   ├── knife-paring-P2-viewmore.html
│   ├── knife-utility-P2-viewmore.html
│   ├── storage-Single-P2-viewmore.html
│   ├── storage-Set-P2-viewmore.html
│   ├── utensils-set-P2-viewmore.html
│   ├── utensils-SPL-P2-viewmore.html
│   └── utensils-spatula&turner-P2-viewmore.html
│
├── css/                          # Stylesheets
│   ├── header.css
│   ├── universal&body.css
│   ├── mobilefirst.css
│   ├── categories.css
│   ├── mainPage.css
│   ├── footermobile.css
│   ├── footerLinks.css
│   ├── backtotop.css
│   ├── signIn.css
│   ├── signUp.css
│   ├── checkout.css
│   └── responsive.css
│
├── js/                           # JavaScript files
│   ├── cart.js                   # Cart logic, checkout, localStorage
│   ├── backtotop.js              # Back to top button
│   ├── desktopNav.js             # Desktop hover navigation
│   ├── openBurger.js             # Mobile burger menu
│   ├── productModal.js           # Product detail modal
│   ├── search.js                 # Live product search
│   ├── signInSignUpFORM.js       # Sign In / Sign Up logic
│   ├── skeleton.js               # Skeleton loading screen
│   └── sort.js                   # Product sorting
│
├── images/                       # All site images
└── README.md
```

---

## 🚀 Getting Started

No installation needed. Just open the project in your browser:

```bash
# Clone the repository
git clone https://github.com/your-username/home-kitchen-studio.git

# Open in browser
cd home-kitchen-studio
open index.html
```

Or simply double-click `index.html` to launch it locally.

---

## 🛠️ Built With

- **HTML5** — page structure and semantic markup
- **CSS3** — styling, layout, and responsive design
- **Vanilla JavaScript** — cart logic, checkout flow, search, navigation, and localStorage
- **Font Awesome 6.5.1** — icons (cart, trash, search, user, etc.)
- **Google Fonts (Nunito)** — typography

---

## 📦 localStorage

Cart data is stored in the browser's `localStorage` under the key `myCart`. This means:
- Cart items **persist** when the user refreshes or navigates between pages
- All image paths are stored as **absolute paths** (starting with `/`) to ensure images display correctly across all page depths
- Cart is **cleared per browser** — not synced across devices

---

## 📸 Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary Brand | Golden Yellow | `#F5C518` |
| Brand Dark | Deep Black | `#1A1A1A` |
| Button Hover | Dark Gold | `#D4A800` |
| Added to Cart | Black + Gold text | `#1A1A1A` |
| Page Background | Light Warm Gray | `#F4F2EE` |
| Image / Card Background | Muted Lavender | `#EDEAF5` |
| Warning | Amber Orange | `#E07B00` |
| Error | Muted Red | `#CC3333` |
| Success | Muted Green | `#2E7D4F` |

---

## 📄 License

This project is for personal/educational use. All product images are owned by their respective creators.

---

*Made with ❤️ by Joan Faith — Home Kitchen Studio*
