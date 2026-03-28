# 🏠 Home Kitchen Studio

A clean and responsive online kitchenware shop built with plain **HTML, CSS, and JavaScript** — no frameworks, no dependencies. Browse kitchen products, manage your cart, and place orders with a smooth, user-friendly experience.

---

## 🌐 Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing/Home page |
| `products.html` | Shop — browse all kitchenware products |
| `about.html` | About the shop |
| `contact.html` | Contact information |

---

## ✨ Features

### 🛒 Cart System
- Add products to cart from the product page
- Cart sidebar popup with smooth open/close animation
- Item quantity controls (+ / −) directly in the cart
- Remove individual items via trash icon
- Checkbox selection — checkout only selected items, or all if none selected
- **Empty cart state** — shows a friendly message with a "Browse Products" button when cart is empty
- Cart badge showing total item count
- Cart data saved to `localStorage` — persists across page refreshes

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
- Order success screen with thank you message

### 🎨 UI & Design
- Black and golden yellow brand theme (`#1A1A1A` + `#F5C518`)
- Lavender-gray product image backgrounds (`#EDEAF5`) for a clean, cohesive look
- Warm page background that complements the product cards
- Button states: Default → Hover → Added to Cart → Remove hover
- Toast notification when item is added or removed from cart
- Fully responsive layout

---

## 🗂️ Project Structure

```
home-kitchen-studio/
├── index.html          # Home page
├── products.html       # Products / Shop page
├── about.html          # About page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── cart.js         # Cart logic (add, remove, checkout, localStorage)
└── images/             # Product and site images
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

- **HTML5** — page structure
- **CSS3** — styling and layout
- **Vanilla JavaScript** — cart logic, checkout flow, localStorage
- **Font Awesome** — icons (trash, cart, etc.)
- **Google Fonts** — typography

---

## 📦 localStorage

Cart data is stored in the browser's `localStorage` under the key `myCart`. This means:
- Cart items **persist** when the user refreshes or navigates between pages
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

*Made with ❤️ by Home Kitchen Studio*
