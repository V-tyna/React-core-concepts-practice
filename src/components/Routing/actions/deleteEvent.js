import { json, redirect } from 'react-router-dom';
import getAuthToken from '../../../utils/auth';

const deleteEventAction = async ({ request, params }) => {
  const token = getAuthToken();
  const response = await fetch('http://localhost:4200/events/' + params.eventId,{
    method: request.method,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  if (!response.ok) {
		throw json({ message: 'Delete event failed' }, { status: 500 });
	}
  return redirect('/events');
};

export default deleteEventAction;