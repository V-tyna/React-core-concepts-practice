import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../store/cart-context';
import classes from './HeaderCartButton.module.css';

function HeaderCartButton({ onClick }) {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(true);
	const { items } = useContext(CartContext);
	const numberOfBadges = items.reduce((num, item) => (num += item.amount), 0);

	const btnClasses = `${classes.button} ${
		btnIsHighlighted ? classes.bump : ''
	}`;

	useEffect(() => {
			setBtnIsHighlighted(true);

			const timerIdent = setTimeout(
				() => setBtnIsHighlighted(false),
				300
			);
			return () => clearTimeout(timerIdent);
	}, [items]);

	return (
		<button className={btnClasses} onClick={onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfBadges}</span>
		</button>
	);
}

export default HeaderCartButton;
