import { useLoaderData } from 'react-router-dom';
import EventsList from '../Components/EventsList';

function Events() {
	const events = useLoaderData();
	return (
		<div className='body-container'>
      <EventsList events={events} />
		</div>
	);
}

export default Events;
