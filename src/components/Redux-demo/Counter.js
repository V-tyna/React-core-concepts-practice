import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../../store/counterSlice';

// import counterTypes from '../../store/types';
import classes from './Counter.module.css';

const Counter = () => {
	const counter = useSelector((state) => state.counterReducer.counter);
	const show = useSelector((state) => state.counterReducer.showCounter);
	const dispatch = useDispatch();

	const toggleCounterHandler = () => {
    // dispatch({ type: counterTypes.TOGGLE });
    dispatch(counterActions.toggle());
  };

	const increment = () => {
		//dispatch({ type: counterTypes.INCREMENT });
    dispatch(counterActions.increment());
	};

	const increase = () => {
		//dispatch({ type: counterTypes.INCREASE, payload: { amount: 5 } });
    dispatch(counterActions.increase({amount: 5}));
	};

	const decrement = () => {
		//dispatch({ type: counterTypes.DECREMENT });
    dispatch(counterActions.decrement());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={increment}>Increment</button>
				<button onClick={increase}>Increase by 5 </button>
				<button onClick={decrement}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
