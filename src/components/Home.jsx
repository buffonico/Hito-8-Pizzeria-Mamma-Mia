import { useEffect, useState } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../js/pizzas';

const Home = () => {
    const [listaPizzas, setListaPizzas] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerPizzas = async () => {
            try {
                const respuesta = await fetch('http://localhost:5000/api/pizzas');

                if (!respuesta.ok) {
                    throw new Error('No se pudo obtener la información de las pizzas.');
                }

                const datos = await respuesta.json();
                setListaPizzas(datos);
            } catch {
                setListaPizzas(pizzas);
            } finally {
                setCargando(false);
            }
        };

        obtenerPizzas();
    }, []);

    return (
        <main>
            <Header />

            <div className="container my-5">
                {cargando && <p className="text-center">Cargando pizzas...</p>}

                <div className="row justify-content-center g-4">
                    {listaPizzas.map((pizza) => (
                        <div className="col-auto" key={pizza.id}>
                            <CardPizza
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Home;
