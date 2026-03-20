import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Create context
const CartContext = createContext();

// Custom hook to use cart context
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

// Provider component
export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('quickcart-cart', []);
  const [wishlist, setWishlist] = useLocalStorage('quickcart-wishlist', []);
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage('quickcart-recent', []);
  const [orders, setOrders] = useLocalStorage('quickcart-orders', []);
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      if (newQuantity <= 0) {
        return prevCart.filter((item) => item.id !== productId);
      }

      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };
  
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const clearCart = () => {
    setCart([]);
  };

  const addToRecent = (product) => {
    setRecentlyViewed((prevRecent) => {
      const filtered = prevRecent.filter((item) => item.id !== product.id);
      return [product, ...filtered].slice(0, 5);
    });
  };

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === product.id)) {
        return prevWishlist;
      }
      return [...prevWishlist, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
  };

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === product.id)) {
        return prevWishlist.filter((item) => item.id !== product.id);
      }
      return [...prevWishlist, product];
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const placeOrder = (shippingDetails) => {
    const order = {
      id: `order-${orders.length + 1}`,
      items: cart,
      total: getTotalPrice(),
      shippingDetails,
      createdAt: new Date().toISOString(),
    };

    setOrders((prevOrders) => [order, ...prevOrders]);
    setCart([]);
    setIsCartOpen(false);
    return order;
  };
  
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsCartOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);
  
  const value = {
    cart,
    isCartOpen,
    isLoading,
    wishlist,
    recentlyViewed,
    orders,
    theme,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    clearCart,
    addToRecent,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    toggleTheme,
    placeOrder,
    getTotalItems,
    getTotalPrice,
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}