import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

const emailReducer = (prevState, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.payload,
      isValid: action.payload.includes('@')
    }
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: prevState.value,
      isValid: prevState.value.includes('@')
    }
  }
	return {
		value: '',
		isValid: false,
	};
};

const passwordReducer = (prevState, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.payload,
      isValid: action.payload.trim().length > 5
    }
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 5
    }
  }
	return {
		value: '',
		isValid: false,
	};
};

const Login = () => {
	const [formIsValid, setFormIsValid] = useState(false);
  const ctx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: null,
	},
  );

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: '',
		isValid: null,
	},
  );

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

	useEffect(() => {
		const timerId = setTimeout(() => {
			setFormIsValid(
				emailIsValid && passwordIsValid
			);
		}, 500);
		return () => {
			// console.log('Clean up!');
			clearTimeout(timerId);
		};
	}, [emailIsValid, passwordIsValid]);

	const emailChangeHandler = (event) => {
		dispatchEmail({type: 'USER_INPUT', payload: event.target.value});
	};

	const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', payload: event.target.value});
	};

	const validateEmailHandler = () => {
		dispatchEmail({type: 'INPUT_BLUR'});
	};

	const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
	};

	const submitHandler = (event) => {
		event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
        classes={classes}
        isValid={emailIsValid}
        type={'email'}
        label={'E-Mail'}
        inputId={'email'}
        value={emailState.value}
        onChangeHandler={emailChangeHandler}
        validationHandler={validateEmailHandler}
        ref={emailInputRef}
        />
				<Input
        classes={classes}
        isValid={passwordIsValid}
        type={'password'}
        label={'Password'}
        inputId={'password'}
        value={passwordState.value}
        onChangeHandler={passwordChangeHandler}
        validationHandler={validatePasswordHandler}
        ref={passwordInputRef}
        />
				<div className={classes.actions}>
					<Button
						type='submit'
						className={classes.btn}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
