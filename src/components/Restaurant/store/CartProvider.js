import { useReducer } from 'react';
import CartContext from './cart-context';

const initCartContext = {
	items: [],
	totalAmount: 0,
};

function reducerCtx(prevCtx, action) {
	if (action.type === 'ADD_ITEM') {
		const updatedTotal =
			prevCtx.totalAmount + action.payload.price * action.payload.amount;
		const existingItemIndex = prevCtx.items.findIndex(
			(item) => item.id === action.payload.id
		);
		let updatedItems;
		if (existingItemIndex !== -1) {
			const existingItem = prevCtx.items[existingItemIndex];
			updatedItems = [...prevCtx.items];
			const updatedItem = {
				...existingItem,
				amount: existingItem.amount + action.payload.amount,
			};
			updatedItems[existingItemIndex] = updatedItem;
		} else {
			updatedItems = [...prevCtx.items, action.payload];
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotal,
		};
	}
	if (action.type === 'REMOVE_ITEM') {
		const existingItemIndex = prevCtx.items.findIndex(
			(item) => item.id === action.payload
		);
    const removingItem = prevCtx.items[existingItemIndex];
    let updatedTotal = prevCtx.totalAmount - removingItem.price;
    let filteredItems;
    if (removingItem.amount > 1) {
      filteredItems = [...prevCtx.items];
      filteredItems[existingItemIndex] = {...removingItem, amount: removingItem.amount - 1};
    } else {
      filteredItems = prevCtx.items.filter(
			(item) => item.id !== action.payload
		);
  }
		return {
			items: filteredItems,
			totalAmount: updatedTotal,
		};
	}
	if (action.type === 'CLEAR_CART') {
		return initCartContext;
	}

	return initCartContext;
}

function CartContextProvider({ children }) {
	const [cartState, dispatchCtx] = useReducer(reducerCtx, initCartContext);

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
		clearCart: clearCartHandler
	};

	function addItemToCartHandler(item) {
		dispatchCtx({ type: 'ADD_ITEM', payload: item });
	}

	function removeItemFromCartHandler(id) {
		dispatchCtx({ type: 'REMOVE_ITEM', payload: id });
	}

	function clearCartHandler() {
		dispatchCtx({ type: 'CLEAR_CART' });
	}

	return (
		<CartContext.Provider value={cartContext}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContextProvider;
