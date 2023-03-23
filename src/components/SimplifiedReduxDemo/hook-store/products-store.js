import { initStore } from './custom-store';

const configureProductsStore = () => {
  const actions  = {
    TOGGLE_FAV: (currentState, id) => {
      const prodIdx = currentState.products.findIndex(prod => prod.id === id);
      const updateProds = [...currentState.products];
      updateProds[prodIdx] = {
        ...updateProds[prodIdx],
        isFavorite: !updateProds[prodIdx].isFavorite
      };
      return { products: updateProds }
    }
  }
  initStore(actions, {products: [
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
	]})
}

export default configureProductsStore;