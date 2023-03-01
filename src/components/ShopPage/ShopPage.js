import { useSelector } from 'react-redux';
import Cart from './Cart/Cart';
import Layout from './Layout/Layout';
import Products from './Shop/Products';

import './ShopPage.module.css';

function ShopPage() {
	const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
	return (
		<Layout>
			{cartIsVisible && <Cart />}
			<Products />
		</Layout>
	);
}

export default ShopPage;
