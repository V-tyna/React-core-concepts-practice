import classes from './BasicForm.module.css';
import useInput from '../../hooks/useInput';
import { useEffect, useState } from 'react';

const nonEmptyValidation = (value) => value !== '';
const emailValidation = (email) =>
/^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i.test(email);

const BasicForm = () => {
	const [formIsValid, setFormIsValid] = useState(false);

	const {
		inputState: firstNameState,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		resetInput: resetFirstName,
		inputClasses: firstNameClasses,
		isValueValid: isFirstNameValid,
		isInvalid: isFirstNameInvalid,
	} = useInput(classes, nonEmptyValidation, 'control-name');

	const {
		inputState: lastNameState,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		resetInput: resetLastName,
		inputClasses: lastNameClasses,
		isValueValid: isLastNameValid,
		isInvalid: isLastNameInvalid,
	} = useInput(classes, nonEmptyValidation, 'control-name');

	const {
		inputState: emailState,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		resetInput: resetEmail,
		inputClasses: emailClasses,
		isValueValid: isEmailValid,
		isInvalid: isEmailInvalid,
	} = useInput(classes, emailValidation);

  useEffect(() => {
		setFormIsValid(isFirstNameValid && isLastNameValid && isEmailValid);
	}, [isFirstNameValid, isLastNameValid, isEmailValid]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (formIsValid) {
			console.log('Form successfully submitted.');
			resetFirstName();
			resetLastName();
			resetEmail();
		}	
	};
	return (
		<form className={classes['control-form']} onSubmit={submitHandler}>
			<div className={classes['control-group']}>
				<div className={firstNameClasses}>
					<label htmlFor='name'>First Name</label>
					<input
						type='text'
						id='name'
						value={firstNameState.enteredValue}
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
					/>
					<div className={classes['error-container']}>
						{isFirstNameInvalid && <p>First name field can't be empty.</p>}
					</div>
				</div>
				<div className={lastNameClasses}>
					<label htmlFor='lastName'>Last Name</label>
					<input
						type='text'
						id='lastName'
						value={lastNameState.enteredValue}
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
					/>
					<div className={classes['error-container']}>
						{isLastNameInvalid && <p>Last name field can't be empty.</p>}
					</div>
				</div>
			</div>
			<div className={emailClasses}>
				<label htmlFor='email'>E-Mail Address</label>
				<input type='email' id='email' value={emailState.enteredValue}
						onChange={emailChangeHandler}
						onBlur={emailBlurHandler}/>
        <div className={classes['error-container']}>
					{isEmailInvalid && <p>It should be an email.</p>}
				</div>
			</div>
			<div className={classes['button-area']}>
				<button className={classes.btn} disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
