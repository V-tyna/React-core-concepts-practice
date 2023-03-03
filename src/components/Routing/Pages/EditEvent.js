import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../Components/EventForm';

function EditEvent() {
	const data = useRouteLoaderData('event-id');
	return (
		<>
			<EventForm method={'patch'} event={data.event}/>
		</>
	);
}

export default EditEvent;
