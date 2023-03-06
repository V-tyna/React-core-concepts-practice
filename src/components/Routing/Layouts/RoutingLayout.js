import { Outlet, useRouteLoaderData, useNavigation, useSubmit } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import MainNavigation from '../Components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../../../utils/auth';

function RoutingLayout() {
	const navigation = useNavigation();
	const { token } = useRouteLoaderData('root-route');
	const submit = useSubmit();

	useEffect(() => {
		if (!token) {
			return;
		}

		if (token === 'EXPIRED') {
			submit(null, {action: '/logout', method: 'post'});
		}

		const tokenDuration = getTokenDuration();
		setTimeout(() => {
			submit(null, {action: '/logout', method: 'post'});
		}, tokenDuration);
	}, [token, submit]);
	return (
		<div className='body-container'>
			<MainNavigation />
			<main>
				{navigation.state === 'loading' && (
					<Bars
						height='80'
						width='80'
						color='#898121'
						ariaLabel='bars-loading'
						wrapperStyle={{
							display: 'flex',
							justifyContent: 'center',
						}}
						wrapperClass=''
						visible={true}
					/>
				)}
				<Outlet />
			</main>
		</div>
	);
}

export default RoutingLayout;
