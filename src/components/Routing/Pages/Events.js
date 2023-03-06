import { Suspense } from 'react';
import { Bars } from 'react-loader-spinner';
import { useLoaderData, Await } from 'react-router-dom';
import EventsList from '../Components/EventsList';

function Events() {
	const data = useLoaderData();
	if (data.isError) {
		return <p>{data.message}</p>;
	}
	return (
		<Suspense
			fallback={
				<Bars
					height='80'
					width='80'
					color='#898121'
					ariaLabel='bars-loading'
					wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
					wrapperClass=''
					visible={true}
				/>
			}
		>
			<Await resolve={data.events}>
				{(loadedEvents) => {
					return (
						<div className='body-container'>
							<EventsList events={loadedEvents} />
						</div>
					);
				}}
			</Await>
		</Suspense>
	);
}

export default Events;
