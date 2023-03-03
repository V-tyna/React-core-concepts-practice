import EventForm from '../Components/EventForm';

function NewEvent() {
	return (
		<>
			<EventForm method={'post'} event={{}}/>
		</>
	);
}

export default NewEvent;
