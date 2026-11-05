import Napolitana from '../assets/img/napolitana.jpg';
import Hawaiana from '../assets/img/hawaiana.jpg';
import Pepperoni from '../assets/img/pepperoni.jpg';
import Espanola from '../assets/img/espanola.png';
import Peperoni from '../assets/img/peperoni.png';

export const pizzas = [
	{
		id: 'p001',
		name: 'Napolitana',
		desc: 'Pizza tradicional con tomates frescos, jamón y orégano.',
		price: 5950,
		ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'],
		img: Napolitana,
	},
	{
		id: 'p002',
		name: 'Hawaiana',
		desc: 'Pizza con mozzarella, piña y jamón para quienes disfrutan sabores dulces y salados.',
		price: 6950,
		ingredients: ['mozzarella', 'piña', 'jamón'],
		img: Hawaiana,
	},
	{
		id: 'p003',
		name: 'Pepperoni',
		desc: 'Pizza con abundante pepperoni, mozzarella y un toque de orégano.',
		price: 6950,
		ingredients: ['mozzarella', 'pepperoni', 'orégano'],
		img: Pepperoni,
	},
	{
		id: 'p004',
		name: 'Española',
		desc: 'Pizza intensa con chorizo, pimentón y aceitunas.',
		price: 7250,
		ingredients: ['mozzarella', 'chorizo', 'pimentón', 'aceitunas'],
		img: Espanola,
	},
	{
		id: 'p005',
		name: 'Cuatro Quesos',
		desc: 'Pizza cremosa con mezcla de mozzarella, gouda, parmesano y queso azul.',
		price: 7450,
		ingredients: ['mozzarella', 'gouda', 'parmesano', 'queso azul'],
		img: Peperoni,
	},
	{
		id: 'p006',
		name: 'Vegetariana',
		desc: 'Pizza fresca con champiñones, pimentón, aceitunas y mozzarella.',
		price: 6450,
		ingredients: ['mozzarella', 'champiñones', 'pimentón', 'aceitunas'],
		img: Napolitana,
	},
];

export const pizzaCart = [
	{
		id: 'p001',
		name: 'Napolitana',
		price: 5950,
		count: 2,
		img: Napolitana,
	},
	{
		id: 'p003',
		name: 'Pepperoni',
		price: 6950,
		count: 1,
		img: Pepperoni,
	},
	{
		id: 'p002',
		name: 'Hawaiana',
		price: 6950,
		count: 1,
		img: Hawaiana,
	},
];
