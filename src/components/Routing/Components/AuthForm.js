import { useState } from 'react';
import { Form, useActionData } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm({ isLogin }) {
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const actionData = useActionData();

  if (actionData && actionData.errors) {
    if (actionData.errors.email && !emailError) {
      setEmailError(actionData.errors.email);
    }
    if (actionData.errors.password && !passwordError) {
      setPasswordError(actionData.errors.password);
    }
  }

	return (
		<div className='body-container'>
			<Form method='post' className={classes.form}>
				<h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
				<p>
					<label htmlFor='email'>Email</label>
					<input id='email' type='email' name='email' required className={emailError ? classes.invalid : ''}/>
        <small>{emailError}</small>
				</p>
				<p>
					<label htmlFor='image'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						required
            className={passwordError ? classes.invalid : ''}
					/>
        <small>{passwordError}</small>
				</p>
				{!isLogin && (
					<p>
						<label htmlFor='image'>Repeat password</label>
						<input
							id='repeat_password'
							type='password'
							name='repeat_password'
              className={passwordError ? classes.invalid : ''}
							required
						/>
            <small>{passwordError}</small>
					</p>
				)}
				<div className={classes.actions}>
					<button>Save</button>
				</div>
			</Form>
		</div>
	);
}

export default AuthForm;
