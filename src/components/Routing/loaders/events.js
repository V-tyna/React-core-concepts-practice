import { json } from 'react-router-dom';

const fetchEventsDataLoader = async () => {
		const response = await fetch('http://localhost:4200/events');

		if (!response.ok) {
			// throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {status: 500});
			throw json({message: 'Could not fetch events.'}, {status: 500});

		} else {
			const respData = await response.json();
			return respData.events;
		}
};

export default fetchEventsDataLoader;
