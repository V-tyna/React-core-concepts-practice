import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
	const error = useRouteError();
	let error404;
	let errorMessage = 'Something went wrong.';
	if (error.status === 500) {
		errorMessage = error.data.message;
	}
	if (error.status === 404) {
		error404 = (
			<>
				<h1>Page not found</h1>
				<p>Sorry for inconvenience...</p>
				<p>{error.statusText || error.message}</p>
			</>
		);
		console.log('404', error404);
	}
	return (
		<div className='body-container error-message'>
			{!error404 ? (
				<>
					<h1>An error occurred.</h1>
					<p>{errorMessage}</p>
					<p>Error status: {error.status}</p>
				</>
			) : (
				error404
			)}
			<Link to='..' relative='path'>
				Back
			</Link>
		</div>
	);
}

export default ErrorPage;
