import { Link, useSearchParams } from 'react-router-dom';
import AuthForm from '../Components/AuthForm';

import classes from '../Components/AuthForm.module.css';

function AuthenticationPage() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';

	return (
		<>
			<AuthForm isLogin={isLogin} />
			<div className={classes.actions}>
				{isLogin ? (
					<h3>Not registered yet?</h3>
				) : (
					<h3>Back to login:</h3>
				)}
				<Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
					{isLogin ? 'Create new account' : 'Login'}
				</Link>
			</div>
		</>
	);
}

export default AuthenticationPage;
