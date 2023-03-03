import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import deleteEventAction from './actions/deleteEvent';
import eventAction from './actions/eventAction';
import EventsLayout from './Layouts/EventsLayout';
import RoutingLayout from './Layouts/RoutingLayout';
import fetchEventDetailLoader from './loaders/eventDetail';
import fetchEventsDataLoader from './loaders/events';
import EditEvent from './Pages/EditEvent';
import ErrorPage from './Pages/Error';
import EventDetail from './Pages/EventDetail';
import Events from './Pages/Events';
import Home from './Pages/Home';
import NewEvent from './Pages/NewEvent';

function RoutingPage() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RoutingLayout />,
			errorElement: <ErrorPage />,
			children: [
				{ index: true, element: <Home /> },
				{
					path: 'events',
					element: <EventsLayout />,
					children: [
						{
							index: true,
							element: <Events />,
							loader: fetchEventsDataLoader,
						},
						{ path: 'new', element: <NewEvent />, action: eventAction },
						{
							path: ':eventId',
							id: 'event-id',
							loader: fetchEventDetailLoader,
							children: [
								{ index: true, element: <EventDetail />, action: deleteEventAction },
								{ path: 'edit', element: <EditEvent />, action: eventAction  },
							],
						},
					],
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default RoutingPage;
