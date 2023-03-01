import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/authSlice';
import classes from './Auth.module.css';
import UserProfile from './UserProfile';

const Auth = () => {
	const isAuthenticated = useSelector(
		(state) => state.authReducer.isAuthenticated
	);
	const dispatch = useDispatch();
	console.log('auth', isAuthenticated);
	const login = (e) => {
		e.preventDefault();
		dispatch(authActions.login());
	};

	return (
		<>
			{!isAuthenticated ? (
				<main className={classes.auth}>
					<section>
						<form onSubmit={login}>
							<div className={classes.control}>
								<label htmlFor='email'>Email</label>
								<input type='email' id='email' />
							</div>
							<div className={classes.control}>
								<label htmlFor='password'>Password</label>
								<input type='password' id='password' />
							</div>
							<button type='submit'>Login</button>
						</form>
					</section>
				</main>
			) : <UserProfile />}
		</>
	);
};

export default Auth;
