import { Provider } from 'react-redux';
import store from '../../store';
import Auth from './Auth';
import Counter from './Counter';
import Header from './Header';

import classes from './Counter.module.css';

function ReduxPage() {
	return (
		<Provider store={store}>
			<div className={classes['body-redux']}>
				<Header />
				<Auth />
				<Counter />
			</div>
		</Provider>
	);
}

export default ReduxPage;
