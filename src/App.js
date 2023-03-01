// import Basic from './components/BasicStudies/Basic';
// import CustomHooksCounter from './components/CustomHooksCounter/CustomHooksCounter';
// import Demo from './components/BasicStudies/DemoMemoizing/DemoMemoizing';
// import MoviesPage from './components/Movies/MoviesPage';
// import ReduxPage from './components/Redux-demo/ReduxPage';
// import Restaurant from './components/Restaurant/Restaurant';
import { Provider } from 'react-redux';
import ShopPage from './components/ShopPage/ShopPage';
import store from './store/index';

function App() {
	return (
		<Provider store={store}>
			{/* <Demo /> */}
			{/* <CustomHooksCounter /> */}
			{/* <MoviesPage /> */}
			{/* <Restaurant /> */}
			{/* <Basic /> */}
			{/* <ReduxPage /> */}
			<ShopPage />
		</Provider>
	);
}

export default App;
