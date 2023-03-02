import { cartActions } from './cartSlice';
import { uiCartActions } from './uiSlice';

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://react-http-5b516-default-rtdb.firebaseio.com/shop/cart.json');
      if (!response.ok) {
        throw new Error('Get cart data failure.');
      }
      const data = await response.json();
      dispatch(cartActions.getCartData({cart: data}));
    } catch(e) {
      dispatch(
				uiCartActions.showNotification({
					status: 'error',
					title: 'Error.',
					message: 'Sent cart data failed. ' + e.message,
				})
			);
      console.log(e.message);
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    try {
			dispatch(
				uiCartActions.showNotification({
					status: 'pending',
					title: 'Sending...',
					message: 'Sending cart data.',
				})
			);
			const response = await fetch(
				'https://react-http-5b516-default-rtdb.firebaseio.com/shop/cart.json',
				{
					method: 'PUT',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(cart),
				}
			);
			if (!response.ok) {
				throw new Error('Cart fetching error.');
			}
			dispatch(
				uiCartActions.showNotification({
					status: 'success',
					title: 'Success.',
					message: 'Sent cart data successfully. ',
				})
			);
		} catch (e) {
			dispatch(
				uiCartActions.showNotification({
					status: 'error',
					title: 'Error.',
					message: 'Sent cart data failed. ' + e.message,
				})
			);
			console.log(e.message);
		}
  }
}