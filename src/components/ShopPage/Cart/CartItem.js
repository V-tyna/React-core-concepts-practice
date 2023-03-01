import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cartSlice';
import classes from './CartItem.module.css';

const CartItem = ({ item }) => {
	const dispatch = useDispatch();

	const addToCartHandler = () => {
		dispatch(cartActions.addToCart({ item }));
	};

	const removeFromCartHandler = () => {
		dispatch(cartActions.removeFromCart({ id: item.id }));
	};
	return (
		<li className={classes.item}>
			<header>
				<h3>{item.title}</h3>
				<div className={classes.price}>
					${item.total.toFixed(2)}{' '}
					<span className={classes.itemprice}>
						(${item.price.toFixed(2)}/item)
					</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{item.quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={removeFromCartHandler}>-</button>
					<button onClick={addToCartHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
