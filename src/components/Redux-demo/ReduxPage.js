import { Provider } from 'react-redux';
import store from '../../store';
import Auth from './Auth';
import Counter from './Counter';
import Header from './Header';

function ReduxPage() {
	return (
		<Provider store={store}>
			<Header />
			<Auth />
			<Counter />
		</Provider>
	);
}

export default ReduxPage;
