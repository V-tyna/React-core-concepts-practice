import { json, redirect } from 'react-router-dom';

const deleteEventAction = async ({ request, params }) => {
  const response = await fetch('http://localhost:4200/events/' + params.eventId,{
    method: request.method
  });
  if (!response.ok) {
		throw json({ message: 'Delete event failed' }, { status: 500 });
	}
  return redirect('/events');
};

export default deleteEventAction;