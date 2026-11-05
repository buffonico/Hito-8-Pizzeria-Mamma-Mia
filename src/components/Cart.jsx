import { useState } from 'react';
import { pizzaCart } from '../js/pizzas';
import { formatPrice } from '../utils/formatPrice';

const Cart = () => {
    const [carrito, setCarrito] = useState(pizzaCart);

    const cambiarCantidad = (id, cantidad) => {
        setCarrito((carritoActual) =>
            carritoActual
                .map((pizza) => (pizza.id === id ? { ...pizza, count: pizza.count + cantidad } : pizza))
                .filter((pizza) => pizza.count > 0),
        );
    };

    const total = carrito.reduce((acumulador, pizza) => acumulador + pizza.price * pizza.count, 0);

    return (
        <main className="carrito-pagina">
            <section className="carrito-contenedor">
                <h2>Carrito de compras</h2>

                <div className="carrito-lista">
                    {carrito.map((pizza) => (
                        <article className="carrito-item" key={pizza.id}>
                            <div className="carrito-info">
                                <img src={pizza.img} alt={`Pizza ${pizza.name}`} />
                                <h3>{pizza.name}</h3>
                            </div>

                            <div className="carrito-acciones">
                                <strong>{formatPrice(pizza.price)}</strong>
                                <button className="btn btn-outline-danger btn-sm" onClick={() => cambiarCantidad(pizza.id, -1)}>
                                    -
                                </button>
                                <span>{pizza.count}</span>
                                <button className="btn btn-outline-primary btn-sm" onClick={() => cambiarCantidad(pizza.id, 1)}>
                                    +
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="carrito-total">
                    <h3>Total: {formatPrice(total)}</h3>
                    <button className="btn btn-dark">Pagar</button>
                </div>
            </section>
        </main>
    );
};

export default Cart;
