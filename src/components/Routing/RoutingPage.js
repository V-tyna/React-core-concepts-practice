import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import deleteEventAction from './actions/deleteEvent';
import eventAction from './actions/eventAction';
import newsLetterAction from './actions/newLetter';
import NewsletterPage from './Components/NewsLetter';
import EventsLayout from './Layouts/EventsLayout';
import RoutingLayout from './Layouts/RoutingLayout';
import fetchEventDetailLoader from './loaders/eventDetail';
import deferFetchEventsLoader from './loaders/events';
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
			action: newsLetterAction,
			children: [
				{ index: true, element: <Home /> },
				{
					path: 'newsletter',
					element: <NewsletterPage />,
					action: newsLetterAction,
				},
				{
					path: 'events',
					element: <EventsLayout />,
					children: [
						{
							index: true,
							element: <Events />,
							loader: deferFetchEventsLoader,
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
