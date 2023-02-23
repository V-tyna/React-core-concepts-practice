import { useState } from 'react';
import Input from '../../Ul/Input';
import classes from './MealItemForm.module.css';

function MealItemForm({ inputId, onAddToCart }) {
	const [inputState, setInputState] = useState(1);

	const changeHandler = (num) => {
		setInputState(num);
	};

	const submitCartHandler = (e) => {
		e.preventDefault();
		onAddToCart(+inputState);
	};

	return (
		<form className={classes.form} onSubmit={submitCartHandler}>
			<Input
				onChangeHandler={changeHandler}
				label='Amount'
				input={{
					id: 'amount' + inputId,
					type: 'number',
					min: '1',
					max: '10',
					defaultValue: '1',
				}}
			/>
			<button type='submit'> + Add</button>
		</form>
	);
}

export default MealItemForm;
