import { Provider } from 'react-redux';

// import Basic from './components/BasicStudies/Basic';
// import CustomHooksCounter from './components/CustomHooksCounter/CustomHooksCounter';
// import Demo from './components/BasicStudies/DemoMemoizing/DemoMemoizing';
// import MoviesPage from './components/Movies/MoviesPage';
import Counter from './components/Redux-demo/Counter';
import Header from './components/Redux-demo/Header';
import Auth from './components/Redux-demo/Auth';
// import Restaurant from './components/Restaurant/Restaurant';
import store from './store/index';

function App() {
	return (
		<>
			{/* <Demo /> */}
			{/* <CustomHooksCounter /> */}
			{/* <MoviesPage /> */}
			{/* <Restaurant /> */}
			{/* <Basic /> */}
			<Provider store={store}>
				<Header />
				<Auth />
				<Counter />
			</Provider>
		</>
	);
}

export default App;
