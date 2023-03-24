import { useState } from 'react';
import Cart from './Cart/Cart';
import CartContextProvider from './store/CartProvider';
import Header from './Layout/Header';
import Meals from './Meals/Meals';

import classes from './Restaurant.module.css';

function Restaurant() {
	const [isShow, setIsShow] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');

	const showCartHandler = () => {
		setIsShow(true);
	};

	const hideCartHandler = () => {
		setIsShow(false);
	};

	const titleHandler = (e) => {
		setTitle(e.target.value);
	};
	const descriptionHandler = (e) => {
		setDescription(e.target.value);
	};
	const priceHandler = (e) => {
		setPrice(e.target.value);
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		const product = {
			name: title,
			description,
			price,
		};
		try {
			const response = await fetch(
				'https://react-http-5b516-default-rtdb.firebaseio.com/meals.json',
				{
					method: 'POST',
					headers: {
						'Content-type': 'application.json',
					},
					body: JSON.stringify(product),
				}
			);
			if (!response.ok) {
				throw new Error('Adding product meal failure.');
			}
      setTitle('');
      setDescription('');
      setPrice('');
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<CartContextProvider>
			{isShow && <Cart onHideCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<Meals />
			<h2>Add meal:</h2>
			<form onSubmit={submitHandler} className={classes['meal-add-form']}>
				<label htmlFor='name'>Name:</label>
				<input id='name' onChange={titleHandler} value={title}/>
				<label htmlFor='description'>Description:</label>
				<input id='description' onChange={descriptionHandler} value={description}/>
				<label htmlFor='price'>Price:</label>
				<input type='number' id='price' onChange={priceHandler} value={price}/>
        <button type='submit'>Submit</button>
			</form>
		</CartContextProvider>
	);
}

export default Restaurant;
