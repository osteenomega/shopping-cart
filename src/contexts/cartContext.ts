import React, { Dispatch, SetStateAction } from "react";
import { Product } from "../hooks/useProducts";

interface CartContextType {
  cartItems: Product[];
  setCartItems: Dispatch<SetStateAction<Product[]>>;
}

const CartContext = React.createContext<CartContextType>({} as CartContextType);
export default CartContext;
