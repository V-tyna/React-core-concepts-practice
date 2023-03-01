import { useEffect, useState } from 'react';
import useInput from '../../../hooks/useInput';
import classes from './Checkout.module.css';

const notEmpty = (value) => value !== '';
const sixCharacters = (value) => value.length > 4;

function Checkout({ onClose, products, onClearCart, totalAmount, onSubmitOrder }) {
	const [isFormValid, setIsFormValid] = useState(false);
	const {
		inputState: firstNameState,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		resetInput: firstNameReset,
		inputClasses: firstNameClasses,
		isValueValid: firstNameIsValid,
		isInvalid: firstNameIsInvalid,
	} = useInput(classes, notEmpty);

	const {
		inputState: lastNameState,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		resetInput: lastNameReset,
		inputClasses: lastNameClasses,
		isValueValid: lastNameIsValid,
		isInvalid: lastNameIsInvalid,
	} = useInput(classes, notEmpty);

	const {
		inputState: streetState,
		valueChangeHandler: streetChangeHandler,
		inputBlurHandler: streetBlurHandler,
		resetInput: streetReset,
		inputClasses: streetClasses,
		isValueValid: streetIsValid,
		isInvalid: streetIsInvalid,
	} = useInput(classes, notEmpty);

	const {
		inputState: postalState,
		valueChangeHandler: postalChangeHandler,
		inputBlurHandler: postalBlurHandler,
		resetInput: postalReset,
		inputClasses: postalClasses,
		isValueValid: postalIsValid,
		isInvalid: postalIsInvalid,
	} = useInput(classes, sixCharacters);

	const {
		inputState: cityState,
		valueChangeHandler: cityChangeHandler,
		inputBlurHandler: cityBlurHandler,
		resetInput: cityReset,
		inputClasses: cityClasses,
		isValueValid: cityIsValid,
		isInvalid: cityIsInvalid,
	} = useInput(classes, notEmpty);

	const {
		inputState: countryState,
		valueChangeHandler: countryChangeHandler,
		inputBlurHandler: countryBlurHandler,
		resetInput: countryReset,
		inputClasses: countryClasses,
		isValueValid: countryIsValid,
		isInvalid: countryIsInvalid,
	} = useInput(classes, notEmpty);

	useEffect(() => {
		console.log('useEffect checkout runs');
		const validResult =
			firstNameIsValid &&
			lastNameIsValid &&
			streetIsValid &&
			postalIsValid &&
			cityIsValid &&
			countryIsValid;
		setIsFormValid(validResult);
	}, [
		firstNameIsValid,
		lastNameIsValid,
		streetIsValid,
		postalIsValid,
		cityIsValid,
		countryIsValid,
	]);

	const fetchOrder = async (order) => {
		try {
			const response = await fetch('https://react-http-5b516-default-rtdb.firebaseio.com/orders.json', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(order)
			});
			if (!response.ok) {
				throw new Error('Making order error.');
			}
			console.log('Successful order.', await response.json());
		} catch(e) {
			console.log(e.message);
		}
	}

	const clearInputs = () => {
		firstNameReset();
		lastNameReset();
		streetReset();
		postalReset();
		cityReset();
		countryReset();
	}

	const saveOrderHandler = async (e) => {
		e.preventDefault();
		if (isFormValid) {
			onSubmitOrder(true);
			const order = {
				name: {
					firstName: firstNameState.enteredValue,
					lastName: lastNameState.enteredValue,
				},
				address: {
					street: streetState.enteredValue,
					postalCode: postalState.enteredValue,
					city: cityState.enteredValue,
					country: countryState.enteredValue,
				},
        products,
				totalAmount
			};
			await fetchOrder(order);
			clearInputs();
			onClearCart();
		}
	};

	return (
		<form className={classes['form-group']} onSubmit={saveOrderHandler}>
			<h3>Name</h3>
			<div className={classes.container}>
				<div className={firstNameClasses}>
					<label htmlFor='firstName'>First name: </label>
					<input
						id='firstName'
						type='text'
						value={firstNameState.enteredValue}
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
					/>
					{firstNameIsInvalid && (
						<small className={classes.error}>
							First name field shouldn't be empty.
						</small>
					)}
				</div>
				<div className={lastNameClasses}>
					<label htmlFor='lastName'>Last name: </label>
					<input
						id='lastName'
						type='text'
						value={lastNameState.enteredValue}
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
					/>
					{lastNameIsInvalid && (
						<small className={classes.error}>
							Last name field shouldn't be empty.
						</small>
					)}
				</div>
			</div>
			<hr />
			<h3>Address</h3>
			<div className={classes.container}>
				<div className={streetClasses}>
					<label htmlFor='street'>Street: </label>
					<input
						id='street'
						type='text'
						value={streetState.enteredValue}
						onChange={streetChangeHandler}
						onBlur={streetBlurHandler}
					/>
					{streetIsInvalid && (
						<small className={classes.error}>
							Street field shouldn't be empty.
						</small>
					)}
				</div>
				<div className={postalClasses}>
					<label htmlFor='postal'>Postal code: </label>
					<input
						id='postal'
						type='text'
						value={postalState.enteredValue}
						onChange={postalChangeHandler}
						onBlur={postalBlurHandler}
					/>
					{postalIsInvalid && (
						<small className={classes.error}>
							Postal code should be at least 5 characters.
						</small>
					)}
				</div>
			</div>
			<div className={classes.container}>
				<div className={cityClasses}>
					<label htmlFor='city'>City: </label>
					<input
						id='city'
						type='text'
						value={cityState.enteredValue}
						onChange={cityChangeHandler}
						onBlur={cityBlurHandler}
					/>
					{cityIsInvalid && (
						<small className={classes.error}>
							City field shouldn't be empty.
						</small>
					)}
				</div>
				<div className={countryClasses}>
					<label htmlFor='country'>Country: </label>
					<input
						id='country'
						type='text'
						value={countryState.enteredValue}
						onChange={countryChangeHandler}
						onBlur={countryBlurHandler}
					/>
					{countryIsInvalid && (
						<small className={classes.error}>
							Country field shouldn't be empty.
						</small>
					)}
				</div>
			</div>
			<hr />
			<div className={classes.actions}>
				<button type='button' onClick={onClose}>Close</button>
				<button type='submit' className={classes.submit} disabled={!isFormValid}>
					Make an order
				</button>
			</div>
		</form>
	);
}

export default Checkout;
