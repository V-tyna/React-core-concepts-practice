import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData, sendCartData } from '../../store/cart-actions';
import { uiCartActions } from '../../store/uiSlice';
import Cart from './Cart/Cart';
import Layout from './Layout/Layout';
import Products from './Shop/Products';

import './ShopPage.module.css';
import Notification from './UI/Notification';

let isInitial = true;

function ShopPage() {
	const cart = useSelector((state) => state.cart.cart);
	const changed = useSelector((state) => state.cart.changed)
	const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
	const notification = useSelector((state) => state.ui.notification);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	useEffect(() => {
		if (isInitial) {
			setTimeout(() => isInitial = false, 0);
			return;
		}
		let timerId;
		if(changed) {
			dispatch(sendCartData(cart))
			  timerId = setTimeout(() => {
				dispatch(uiCartActions.clearNotification())
			}, 5000);
		}
		return () => clearTimeout(timerId);
	}, [dispatch, cart, changed]);

	return (
		<>
		{notification && <Notification notification={notification} />}
			<Layout>
				{cartIsVisible && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default ShopPage;
