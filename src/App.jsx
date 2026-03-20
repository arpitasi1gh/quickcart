import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CartSidebar from './components/CartSidebar';
import { products } from './data/products';
import './styles/App.css';

const CategoryPage = lazy(() => import('./components/CategoryPage'));
const CartPage = lazy(() => import('./components/CartPage'));
const WishlistPage = lazy(() => import('./components/WishlistPage'));
const CheckoutPage = lazy(() => import('./components/CheckoutPage'));

function App() {
  // Cart state now lives in CartContext.
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <main className="main-content">
          <Suspense fallback={<div className="page-loading">Loading...</div>}>
            <Routes>
              <Route path="/" element={
                <HomePage 
                  products={products}
                  searchTerm={searchTerm}
                />
              } />
              
              <Route path="/category/:category" element={
                <CategoryPage products={products} searchTerm={searchTerm} />
              } />
              
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </Suspense>
        </main>

        <CartSidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;