import { useLoaderData } from 'react-router-dom';
import EventsList from '../Components/EventsList';

function Events() {
	const data = useLoaderData();
	if (data.isError) {
		return <p>{data.message}</p>
	}
	return (
		<div className='body-container'>
      <EventsList events={data} />
		</div>
	);
}

export default Events;
