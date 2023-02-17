import { useContext } from "react";
import CartContext, { useCartContextType } from "../context/CartProvider";

const useCart = (): useCartContextType => {
  return useContext(CartContext);
};

export default useCart;
