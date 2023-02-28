import { useContext, useState } from 'react';
import CartContext from '../store/cart-context';
import Modal from '../Ul/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

function Cart({ onHideCart }) {
	const [isOpen, setIsOpen] = useState(false);
	const cartContext = useContext(CartContext);
	const amountSum = cartContext.totalAmount.toFixed(2);
	const hasItems = cartContext.items.length > 0;

	const cartItemAddHandler = (item) => {
		cartContext.addItem({ ...item, amount: 1 });
	};

	const cartItemRemoveHandler = (id) => {
		cartContext.removeItem(id);
	};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartContext.items.map((item) => (
				<CartItem
					key={item.id}
					item={item}
					onAdd={cartItemAddHandler.bind(null, item)}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
				/>
			))}
		</ul>
	);

	const openCheckoutHandler = () => {
		setIsOpen(true);
	};

	return (
		<Modal onHideCart={onHideCart}>
			{cartItems}
			<div className={classes.total}>
				<span> Total amount</span>
				<span>${amountSum}</span>
			</div>
			{isOpen ? (
				<Checkout onHideCart={onHideCart} products={cartContext.items} />
			) : (
				<div className={classes.actions}>
					<button
						className={classes['button--alt']}
						onClick={onHideCart}
					>
						Close
					</button>
					{hasItems && (
						<button
							className={classes['button']}
							onClick={openCheckoutHandler}
						>
							Order
						</button>
					)}
				</div>
			)}
		</Modal>
	);
}

export default Cart;
