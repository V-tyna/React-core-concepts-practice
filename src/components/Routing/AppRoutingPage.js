import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AnimationLayout from '../Animation/AnimationLayout.js';
import AppLayout from './Layouts/AppLayout';
import authAction from './actions/authAction';
import AuthenticationPage from './Pages/Authentication';
import Basic from '../BasicStudies/Basic';
import deferFetchEventsLoader from './loaders/events';
import deleteEventAction from './actions/deleteEvent';
import Demo from '../BasicStudies/DemoMemoizing/DemoMemoizing';
import EditEvent from './Pages/EditEvent';
import ErrorPage from './Pages/Error';
import eventAction from './actions/eventAction';
import EventDetail from './Pages/EventDetail';
import Events from './Pages/Events';
import EventsLayout from './Layouts/EventsLayout';
import Home from './Pages/Home';
import logoutAction from './actions/logout';
import MoviesPage from '../Movies/MoviesPage';
import NewEvent from './Pages/NewEvent';
import newsLetterAction from './actions/newLetter';
import ReduxPage from '../Redux-demo/ReduxPage';
import Restaurant from '../Restaurant/Restaurant';
import RoutingLayout from './Layouts/RoutingLayout';
import ShopPage from '../ShopPage/ShopPage';
import tokenLoader, { checkAuthLoader } from './loaders/auth';
import UseContextLayout from '../SimplifiedReduxDemo/SimplifiedReduxLayout';
import Products from '../SimplifiedReduxDemo/containers/Products';
import Favorites from '../SimplifiedReduxDemo/containers/Favorites';

const NewsletterPage = lazy(() => import('./Components/NewsLetter'));

function RoutingPage() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <AppLayout />,
			children: [
				{
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
							element: <Suspense fallback={<p>Loading...</p>}><NewsletterPage /></Suspense>,
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
									loader: (meta) => import('./loaders/eventDetail').then((module) => module.fetchEventDetailLoader(meta)),
									children: [
										{ index: true, element: <EventDetail />, action: deleteEventAction },
										{ path: 'edit', element: <EditEvent />, action: eventAction, loader: checkAuthLoader },
									],
								},
							],
						},
					],
				},
				{
					path: '/restaurant',
					element: <Restaurant />
				},
				{
					path: '/movies',
					element: <MoviesPage />
				},
				{
					path: '/shop',
					element: <ShopPage />
				},
				{
					path: '/basic',
					element: <Basic />
				},
				{
					path: '/redux-demo',
					element: <ReduxPage />
				},
				{
					path: '/demo-memo',
					element: <Demo />
				},
				{
					path: '/animation',
					element: <AnimationLayout />
				},
				{
					path: '/simplified-redux',
					element: <UseContextLayout />,
					children: [
						{ index: true, element: <Products /> },
						{ path: 'favorites', element: <Favorites /> },
					]
				},
			]
		},
		
	]);
	return <RouterProvider router={router} />;
}

export default RoutingPage;
