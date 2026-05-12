🛒 React Shopping Cart — Prop Drilling vs Context API
A side-by-side comparison of two implementations of the same React shopping cart application, demonstrating the difference between Prop Drilling and React Context API for state management.

📌 Overview
This repository contains two versions of a shopping cart app built with React + Vite:
FeatureProp DrillingContext APIState lives inApp.jsxCartContext.jsxData passed viaProps through every componentuseCart() hook anywhereCart persistencelocalStorage in ApplocalStorage in ContextComponent couplingTightly coupledLoosely coupled

📁 Project Structure
📦 shopping-cart-with-prop-drilling/
└── src/
    ├── App.jsx               # Holds all state + logic
    ├── data/products.js      # Static product list
    ├── pages/
    │   ├── Home.jsx          # Receives addToCart via props
    │   └── CartPage.jsx      # Receives cart, increase, decrease, removeItem via props
    └── components/
        ├── Header.jsx        # Receives totalItems via props
        ├── ProductCard.jsx   # Receives addToCart via props
        └── CartItem.jsx      # Receives increase, decrease, removeItem via props

📦 shopping-cart-with-context/
└── src/
    ├── App.jsx               # Clean — no state, no props
    ├── data/products.js      # Static product list
    ├── context/
    │   └── CartContext.jsx   # All state + logic lives here
    ├── pages/
    │   ├── Home.jsx          # Uses useCart() directly
    │   └── CartPage.jsx      # Uses useCart() directly
    └── components/
        ├── Header.jsx        # Uses useCart() directly
        ├── ProductCard.jsx   # Uses useCart() directly
        └── CartItem.jsx      # Uses useCart() directly

✨ Features

Browse a product list with a live search filter
Add products to cart (duplicate adds increase quantity)
Increase / Decrease item quantity
Remove items from cart
Live cart item count in the header
Total price calculation on the cart page
Cart persisted to localStorage (survives page refresh)
Client-side routing with React Router (/ and /cart)


🔍 Key Concept: Prop Drilling vs Context API
❌ Prop Drilling
In the prop drilling version, all cart state and functions (cart, addToCart, increase, decrease, removeItem, totalItems) are defined in App.jsx and manually passed down as props through every layer of the component tree.
App
├── Header         ← receives totalItems
├── Home           ← receives addToCart
│   └── ProductCard ← receives addToCart (again)
└── CartPage       ← receives cart, increase, decrease, removeItem
    └── CartItem   ← receives increase, decrease, removeItem (again)
Pain points:

Middle components like Home receive and pass down addToCart even though they don't use it themselves
Adding a new feature means updating props at every level
Harder to maintain as the component tree grows


✅ Context API
In the Context version, all cart state and logic is moved into CartContext.jsx. Any component that needs cart data simply calls useCart() — no prop chains required.
jsx// Any component, anywhere in the tree
const { cart, addToCart, increase, decrease, removeItem, totalItems } = useCart();
App.jsx becomes completely clean:
jsxfunction App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
Benefits:

Components only consume what they need
No unnecessary prop passing through intermediate components
Centralised state is easier to maintain and extend


🚀 Getting Started
Prerequisites

Node.js (v18 or above)
npm

Installation & Running
Prop Drilling version:
bashcd shopping-cart-with-prop-drilling/shopping-cart
npm install
npm run dev
Context API version:
bashcd shopping-cart-with-context/shopping-cart
npm install
npm run dev
Both apps run at http://localhost:5173 by default.

🛠 Tech Stack

React — UI library
Vite — Build tool & dev server
React Router DOM — Client-side routing
React Context API + useContext — State management (Context version)
localStorage — Cart persistence across sessions


🎓 Learning Outcomes
After exploring both versions, you will understand:

What prop drilling is and why it becomes a problem at scale
How React Context API eliminates unnecessary prop chains
How to create a custom hook (useCart) to cleanly share state
How to wrap an app with a Provider and consume context anywhere
How to persist state to localStorage using useEffect
