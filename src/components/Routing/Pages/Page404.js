import { Link, useRouteError } from 'react-router-dom';

function PageNotFound() {
	const error = useRouteError();
	return (
		<div className='body-container error-message'>
			<h1>Page not found</h1>
			<p>Sorry for inconvenience...</p>
			<p>{error.statusText || error.message}</p>
      <Link to='..' relative='path'>Back</Link>
		</div>
	);
}

export default PageNotFound;
