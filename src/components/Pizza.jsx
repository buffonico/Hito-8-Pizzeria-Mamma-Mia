import { useEffect, useState } from 'react';
import { pizzas } from '../js/pizzas';
import { formatPrice } from '../utils/formatPrice';

const Pizza = () => {
    const [pizza, setPizza] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerPizza = async () => {
            try {
                const respuesta = await fetch('http://localhost:5000/api/pizzas/p001');

                if (!respuesta.ok) {
                    throw new Error('No se pudo obtener la información de la pizza.');
                }

                const datos = await respuesta.json();
                setPizza(datos);
            } catch {
                setPizza(pizzas.find((pizzaActual) => pizzaActual.id === 'p001'));
            } finally {
                setCargando(false);
            }
        };

        obtenerPizza();
    }, []);

    if (cargando) {
        return <main className="pizza-detalle">Cargando pizza...</main>;
    }

    if (!pizza) {
        return <main className="pizza-detalle">No se pudo cargar la pizza.</main>;
    }

    return (
        <main className="pizza-detalle">
            <article className="pizza-detalle-contenedor">
                <img src={pizza.img} alt={`Pizza ${pizza.name}`} />

                <div className="pizza-detalle-info">
                    <h2>Pizza {pizza.name}</h2>
                    <p>{pizza.desc}</p>

                    <h3>Ingredientes:</h3>
                    <ul>
                        {pizza.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>

                    <div className="pizza-detalle-compra">
                        <strong>{formatPrice(pizza.price)}</strong>
                        <button className="btn btn-dark">Añadir</button>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default Pizza;
