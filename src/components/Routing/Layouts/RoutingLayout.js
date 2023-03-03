import { Outlet, useNavigation } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import MainNavigation from '../Components/MainNavigation';

function RoutingLayout() {
	const navigation = useNavigation();
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
						wrapperStyle={{display: 'flex', justifyContent: 'center'}}
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
