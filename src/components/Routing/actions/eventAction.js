import { json, redirect } from 'react-router-dom';

const eventAction = async ({ request, params }) => {
	const method = request.method;
	const data = await request.formData(); // grab all data from <Form></Form>
	const eventData = {
		title: data.get('title'),
		image: data.get('image'),
		description: data.get('description'),
		date: data.get('date'),
	};
	let url = 'http://localhost:4200/events';
	if (method === 'PATCH') {
		url += '/' + params.eventId;
	}
	const response = await fetch(url, {
		method,
		body: JSON.stringify(eventData),
		headers: {
			'Content-Type': 'application/json',
		},
	});
  if (response.status === 422) {
    return response;
  }
	if (!response.ok) {
		throw json({ message: 'POST form event failed.' }, { status: 500 });
	}
  return redirect('/events');
};

export default eventAction;
