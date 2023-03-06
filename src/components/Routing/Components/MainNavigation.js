import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsLetterSignup';

function MainNavigation() {
	const { token } = useRouteLoaderData('root-route');

	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? classes.active : ''
							}
							to='/'
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? classes.active : ''
							}
							to='/events'
						>
							Events
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/newsletter'
							className={({ isActive }) =>
								isActive ? classes.active : ''
							}
						>
							Newsletter
						</NavLink>
					</li>
					{!token && (
						<li>
							<NavLink
								to='/auth?mode=login'
								className={({ isActive }) =>
									isActive ? classes.active : ''
								}
							>
								Authentication
							</NavLink>
						</li>
					)}
					{token && (
						<li>
							<Form action='/logout' method='post'>
								<button className={classes.btn}>Logout</button>
							</Form>
						</li>
					)}
				</ul>
			</nav>
			<NewsletterSignup />
		</header>
	);
}

export default MainNavigation;
