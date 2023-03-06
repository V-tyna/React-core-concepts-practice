import { Provider } from 'react-redux';
import RoutingPage from './components/Routing/AppRoutingPage';
import store from './store/index';

function App() {
	return (
		<Provider store={store}>
				<RoutingPage />
		</Provider>
	);
}

export default App;
