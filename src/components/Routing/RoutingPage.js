import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import authAction from './actions/authAction';
import deleteEventAction from './actions/deleteEvent';
import eventAction from './actions/eventAction';
import logoutAction from './actions/logout';
import newsLetterAction from './actions/newLetter';
import NewsletterPage from './Components/NewsLetter';
import EventsLayout from './Layouts/EventsLayout';
import RoutingLayout from './Layouts/RoutingLayout';
import tokenLoader, { checkAuthLoader } from './loaders/auth';
import fetchEventDetailLoader from './loaders/eventDetail';
import deferFetchEventsLoader from './loaders/events';
import AuthenticationPage from './Pages/Authentication';
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
			id: 'root-route',
			errorElement: <ErrorPage />,
			action: newsLetterAction,
			loader: tokenLoader,
			children: [
				{ index: true, element: <Home /> },
				{ path: 'auth', element: <AuthenticationPage />, action: authAction},
				{
					path: 'newsletter',
					element: <NewsletterPage />,
					action: newsLetterAction,
				},
				{ path: 'logout', action: logoutAction },
				{
					path: 'events',
					element: <EventsLayout />,
					children: [
						{
							index: true,
							element: <Events />,
							loader: deferFetchEventsLoader,
						},
						{ path: 'new', element: <NewEvent />, action: eventAction, loader: checkAuthLoader },
						{
							path: ':eventId',
							id: 'event-id',
							loader: fetchEventDetailLoader,
							children: [
								{ index: true, element: <EventDetail />, action: deleteEventAction },
								{ path: 'edit', element: <EditEvent />, action: eventAction, loader: checkAuthLoader },
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
