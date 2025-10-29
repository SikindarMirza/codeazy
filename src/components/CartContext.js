import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (course) => {
    setCart((prev) => {
      if (prev.find((c) => c.title === course.title)) return prev;
      return [...prev, course];
    });
  };

  const removeFromCart = (title) => {
    setCart((prev) => prev.filter((c) => c.title !== title));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart }; 