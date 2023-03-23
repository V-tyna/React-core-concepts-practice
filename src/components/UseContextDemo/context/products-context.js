import { createContext, useState } from 'react';

export const ProductsContext = createContext({
	products: [],
  toggleFav: (id) => {}
});
function ProductsContextProvider(props) {
	const [productsList, setProductsList] = useState([
		{
			id: 'p1',
			title: 'Red Scarf',
			description: 'A pretty red scarf.',
			isFavorite: false,
		},
		{
			id: 'p2',
			title: 'Blue T-Shirt',
			description: 'A pretty blue t-shirt.',
			isFavorite: false,
		},
		{
			id: 'p3',
			title: 'Green Trousers',
			description: 'A pair of lightly green trousers.',
			isFavorite: false,
		},
		{
			id: 'p4',
			title: 'Orange Hat',
			description: 'Street style! An orange hat.',
			isFavorite: false,
		},
	]);
  const toggleFav = (id) => {
    const prodIdx = productsList.findIndex(prod => prod.id === id);
    setProductsList((prevProds) => {
      const updateProds = [...prevProds];
      updateProds[prodIdx] = {
        ...updateProds[prodIdx],
        isFavorite: !updateProds[prodIdx].isFavorite
      };
      return updateProds;
    });
  }

	return (
		<ProductsContext.Provider value={{ products: productsList, toggleFav }}>
			{props.children}
		</ProductsContext.Provider>
	);
}

export default ProductsContextProvider;
