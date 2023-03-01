import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cartSlice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = ({ product }) => {
	const dispatch = useDispatch();

	const addToCartHandler = () => {
		dispatch(
			cartActions.addToCart({
				item: product,
			})
		);
	};
	return (
		<li className={classes.item}>
			<Card>
				<header>
					<h3>{product.title}</h3>
					<div className={classes.price}>
						${+product.price.toFixed(2)}
					</div>
				</header>
				<p>{product.description}</p>
				<div className={classes.actions}>
					<button onClick={addToCartHandler}>Add to Cart</button>
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;
