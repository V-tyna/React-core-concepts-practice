import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

function MealItem({ meal: { id, name, description, price } }) {
	const cartCtx = useContext(CartContext);
	const fixedPrice = price.toFixed(2);

	const addToCartItem = (amount) => {
		cartCtx.addItem({
			id,
			name,
			description,
			price,
			amount,
		});
	};

	return (
		<li className={classes.meal}>
			<div>
				<h3>{name}</h3>
				<div className={classes.description}>{description}</div>
				<div className={classes.price}>${fixedPrice}</div>
			</div>
			<div>
				<MealItemForm inputId={name} onAddToCart={addToCartItem} />
			</div>
		</li>
	);
}

export default MealItem;
