import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [pizza, setPizza] = useState({});

    // Fetch de pizzas
    const consultarApi = async () => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/api/pizzas`;
            const response = await fetch(url);
            const data = await response.json();
            setPizzas(data);
        } catch (error) {
            console.log("Error al cargar las pizzas", error);
        }
    };

    const obtenerPizza = async () => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/api/pizzas/p001`;
            const response = await fetch(url);
            const data = await response.json();
            setPizza(data);
        } catch (error) {
            console.log("Error al cargar la pizza", error);
        }
    };

    useEffect(() => {
        consultarApi();
        obtenerPizza();
    }, []);

    return (
        <PizzaContext.Provider value={{ pizzas, pizza }}>
            {children}
        </PizzaContext.Provider>
    );
};

export default PizzaProvider;