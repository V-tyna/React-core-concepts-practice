import {
	Form,
	useActionData,
	useNavigate,
	useNavigation,
} from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
	const actionData = useActionData();
	const navigate = useNavigate();
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';
	function cancelHandler() {
		navigate('..');
	}

	return (
		<Form method={method} className={classes.form}>
			{actionData && actionData.errors && (
				<ul>
					{Object.values(actionData.errors).map((err) => {
						return <li key={err}>{err}</li>;
					})}
				</ul>
			)}
			<p>
				<label htmlFor='title'>Title</label>
				<input
					id='title'
					type='text'
					name='title'
					defaultValue={event.title}
					required
				/>
			</p>
			<p>
				<label htmlFor='image'>Image</label>
				<input
					id='image'
					type='url'
					name='image'
					defaultValue={event.image}
					required
				/>
			</p>
			<p>
				<label htmlFor='date'>Date</label>
				<input
					id='date'
					type='date'
					name='date'
					defaultValue={event.date}
					required
				/>
			</p>
			<p>
				<label htmlFor='description'>Description</label>
				<textarea
					id='description'
					name='description'
					rows='5'
					defaultValue={event.description}
					required
				/>
			</p>
			<div className={classes.actions}>
				<button
					type='button'
					onClick={cancelHandler}
					disabled={isSubmitting}
				>
					Cancel
				</button>
				<button disabled={isSubmitting}>
					{isSubmitting ? 'Submitting...' : 'Save'}
				</button>
			</div>
		</Form>
	);
}

export default EventForm;
