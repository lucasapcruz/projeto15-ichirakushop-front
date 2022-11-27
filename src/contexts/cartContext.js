import { createContext, useState } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cartId, setCartId] = useState(localStorage.getItem("cartId"));

  return (
    <CartContext.Provider value={{cartId,setCartId}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
