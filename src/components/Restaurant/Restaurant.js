import { useState } from 'react';
import Cart from './Cart/Cart';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
import CartContextProvider from './store/CartProvider';

function Restaurant() {
  const [isShow, setIsShow] = useState(false);

  const showCartHandler = () => {
    setIsShow(true);
  };

  const hideCartHandler = () => {
    setIsShow(false);
  };

	return (
		<CartContextProvider>
			{isShow && <Cart onHideCart={hideCartHandler}/>}
			<Header onShowCart={showCartHandler} />
			<Meals />
		</CartContextProvider>
	);
}

export default Restaurant;
