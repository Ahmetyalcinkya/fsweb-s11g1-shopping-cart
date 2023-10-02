import { createContext, useContext, useState } from "react";
import { data } from "../data";

export const ProductContext = createContext();

// SECOND WAY!
/*

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState(data)

    const {addItem} = useContext(CartContext) //Context-to-Context veri akışı.

  return (<ProductContext.Provider value={{products, addItem}}>
    {children}
    </ProductContext.Provider>);
};
export default ProductContextProvider;
*/
