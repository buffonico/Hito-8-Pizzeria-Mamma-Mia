import { createContext, useState } from "react";
import { pizzaCart } from "../data/pizzas";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Estado del carro de compras
    const [cart, setCart] = useState(pizzaCart);

    // Funciones
    const disminuirCantidad = (id) => {
        setCart(
            cart
                .map(item =>
                    item.id === id
                        ? { ...item, count: item.count - 1 }
                        : item
                )
                .filter(item => item.count > 0)
        );
    };

    const aumentarCantidad = (id) => {
        setCart(
            cart.map(item =>
                item.id === id
                    ? { ...item, count: item.count + 1 }
                    : item
            )
        );
    };

    const total = cart.reduce(
        (acum, item) => acum + item.price * item.count,
        0
    );

    const agregarAlCarrito = (pizza) => {
    
        const itemEncontrado = cart.find(
            (item) => item.id.toLowerCase() === pizza.id.toLowerCase()
        );

        if (itemEncontrado) {
            setCart(
                cart.map((item) =>
                    item.id.toLowerCase() === pizza.id.toLowerCase()
                        ? { ...item, count: item.count + 1 }
                        : item
                )
            );
        } else {
            
            setCart([...cart, { ...pizza, count: 1 }]);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                agregarAlCarrito,
                aumentarCantidad,
                disminuirCantidad,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;