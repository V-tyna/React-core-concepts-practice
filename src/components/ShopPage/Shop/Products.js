import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shopActions } from '../../../store/shopSlice';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
	const products = useSelector((state) => state.shop.products);
	const dispatch = useDispatch();
	const fetchProducts = useCallback(async () => {
		const response = await fetch(
			'https://react-http-5b516-default-rtdb.firebaseio.com/products.json'
		);
		const data = await response.json();
		const transformedData = Object.entries(data).map(([id, value]) => ({
			id,
			...value,
		}));
		dispatch(shopActions.getProducts({ products: transformedData }));
	}, [dispatch]);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{products.map((product) => {
					return (
						<ProductItem
							key={product.id}
							product={product}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default Products;
