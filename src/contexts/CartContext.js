import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const CartContext = createContext();

/*
export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useLocalStorage("shoppingCart", []);

    const addItem = (item) => {
        
        setCart([...cart, item]);
      };

    const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
      };

    return (<CartContext.Provider value={{cart, addItem, removeItem}}>
        {children}
    </CartContext.Provider>)
}

export default CartContextProvider;
*/
