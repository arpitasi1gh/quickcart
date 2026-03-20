# 🛒 QuickCart - Shopping Cart App

A lightweight and interactive shopping cart application built with React and Vite, featuring dynamic cart management, routing, and persistent storage.

## ✨ Features

- 🛍️ Browse products with a clean UI
- ➕ Add to cart with quantity handling
- 🔄 Update item quantities (+ / -)
- ❌ Remove items from cart
- 🧮 Automatic total price calculation
- 🧾 Cart sidebar with smooth animations
- 🔢 Cart badge with live item count
- 🔍 Real-time search functionality
- 🗂️ Category-based filtering
- 🔗 Multi-page navigation using React Router
- 💾 Persistent cart using localStorage
- 📱 Fully responsive design

## 🛠️ Technologies Used

- React (Functional Components & Hooks)
- Vite (Fast build tool)
- React Router DOM
- Context API (Global state management)
- JavaScript (ES6+)
- CSS3 (Flexbox, Grid, Animations)
- localStorage (Data persistence)

## 🎯 Concepts Demonstrated

- Component-based architecture
- Props and state management
- useState & useEffect hooks
- Context API for global state
- Custom hooks (useCart, useLocalStorage)
- Conditional rendering
- Event handling
- Array methods (.map(), .filter(), .reduce(), .find())
- Immutable state updates using spread operator
- Routing in Single Page Applications (SPA)

## 🚀 Features Breakdown

### 🧠 State Management
- Global cart state using Context API
- Cart visibility toggle
- Centralized logic with custom hook

### 🛒 Cart Functionality
- Add to cart (handles duplicates intelligently)
- Remove items from cart
- Increase/decrease item quantity
- Calculate total items and total price

### 🔗 Routing
- Home page (all products)
- Category page (/category/:category)
- Cart page (detailed summary)
- Navigation with Link & useNavigate

### 💾 Data Persistence
- Cart saved in localStorage
- Auto-load previous session data
- JSON serialization & parsing

### 🔍 Search & Filter
- Real-time product search
- Case-insensitive filtering
- Category-based filtering via URL
- Empty state handling

### 🎨 UI/UX Enhancements
- Responsive design (mobile, tablet, desktop)
- Hover effects and animations
- Slide-in cart sidebar
- Clean and consistent layout
- Empty states (cart, search, category)

## 🧪 Testing

- ✅ Verified all 8 products display correctly
- ✅ Add to cart functionality works
- ✅ Duplicate items increase quantity
- ✅ Cart badge updates correctly
- ✅ Sidebar open/close works
- ✅ Quantity controls function properly
- ✅ Remove item works
- ✅ Total price calculation is accurate
- ✅ Empty cart state displays correctly
- ✅ Fully responsive across devices
- ✅ No console errors

## 📁 Project Setup

```bash
# Clone the repository
git clone https://github.com/your-username/quickcart.git

# Navigate to project
cd quickcart

# Install dependencies
npm install

# Run development server
npm run dev
```

## 📸 Screenshots
<img width="1470" height="836" alt="Screenshot 2026-03-20 at 12 28 00 PM" src="https://github.com/user-attachments/assets/7cbf7f53-a347-42cc-b9fd-4572ed776067" />
<img width="1470" height="835" alt="Screenshot 2026-03-20 at 12 28 36 PM" src="https://github.com/user-attachments/assets/20ea9297-5d0d-4c5b-9aa0-0a78d914f5cf" />
<img width="1470" height="834" alt="Screenshot 2026-03-20 at 12 29 42 PM" src="https://github.com/user-attachments/assets/a1ac06c5-0818-4770-9efd-46596f89a4cf" />
<img width="1470" height="834" alt="Screenshot 2026-03-20 at 12 29 57 PM" src="https://github.com/user-attachments/assets/405cd9da-b5e8-410b-9a21-90a2983fce29" />


## 🚀 Live Demo

https://quickcart-six-vert.vercel.app/

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Arpita Singh**

- GitHub: https://github.com/arpitasi1gh
- LinkedIn: https://www.linkedin.com/in/arpitasi1gh/

## 🙏 Acknowledgments

- Built as part of a React learning project
- Inspired by modern e-commerce UI patterns
- Powered by React + Vite ecosystem
