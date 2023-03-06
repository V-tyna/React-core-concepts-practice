import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import classes from './NewsLetterSignup.module.css';

function NewsletterSignup() {
	const fetcher = useFetcher();
	const { data, state } = fetcher;

	useEffect(() => {
		if (state === 'idle' && data && data.message) {
			window.alert('Signup successful.');
		}
	}, [data, state]);

	return (
		<fetcher.Form method='post' className={classes.newsletter}>
			<input
				type='email'
				name='email'
				placeholder='Sign up for newsletter...'
				aria-label='Sign up for newsletter'
			/>
			<button className={classes.btn}>Sign up</button>
		</fetcher.Form>
	);
}

export default NewsletterSignup;
