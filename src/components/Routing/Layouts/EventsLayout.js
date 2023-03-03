import { Outlet } from 'react-router-dom';
import EventsNavigation from '../Components/EventsNavigation';

function EventsLayout() {
	return (
		<>
			<EventsNavigation />
			<Outlet />
		</>
	);
}

export default EventsLayout;
