import { json } from 'react-router-dom';

const fetchEventDetailLoader = async ({request, params}) => {
  const response = await fetch('http://localhost:4200/events/' + params.eventId);
  if (!response.ok) {
    throw json({message: 'Could not fetch event detail data.'}, {status: 500});
  }
  return response;
};

export default fetchEventDetailLoader;
