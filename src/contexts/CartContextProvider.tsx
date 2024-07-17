import { ReactNode, useState } from "react";
import CartContext from "./cartContext";
import { Product } from "../hooks/useProducts";

interface Props {
  children: ReactNode;
}

const CartContextProvider = ({ children }: Props) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
  
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
