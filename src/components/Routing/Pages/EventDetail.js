import { useParams } from 'react-router-dom';

function EventDetail() {
	const params = useParams();
	return (
		<>
			<h1>Event detail page</h1>
			<p>ID: {params.eventId}</p>
		</>
	);
}

export default EventDetail;
