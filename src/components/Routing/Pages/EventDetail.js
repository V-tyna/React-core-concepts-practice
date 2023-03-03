import { useRouteLoaderData } from 'react-router-dom';
import EventItem from '../Components/EventItem';

function EventDetail() {
	const data = useRouteLoaderData('event-id');
	return (
		<>
			<EventItem event={data.event} />
		</>
	);
}

export default EventDetail;
