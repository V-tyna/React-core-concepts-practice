import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventsLayout from './Layouts/EventsLayout';
import RoutingLayout from './Layouts/RoutingLayout';
import fetchEventsData from './loaders/events';
import EditEvent from './Pages/EditEvent';
import EventDetail from './Pages/EventDetail';
import Events from './Pages/Events';
import Home from './Pages/Home';
import NewEvent from './Pages/NewEvent';
import PageNotFound from './Pages/Page404';

function RoutingPage() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RoutingLayout />,
			errorElement: <PageNotFound />,
			children: [
				{ index: true, element: <Home /> },
				{
					path: 'events',
					element: <EventsLayout />,
					children: [
						{ index: true, element: <Events />, loader: fetchEventsData },
						{ path: 'new', element: <NewEvent /> },
						{ path: ':eventId', element: <EventDetail /> },
						{
							path: ':eventId/edit',
							element: <EditEvent />,
						},
					],
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default RoutingPage;
