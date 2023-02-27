import React, { useEffect, useRef, useState } from 'react';
import useHttp from '../../hooks/useHttp';

import classes from './AddMovie.module.css';

function AddMovie({ addMovie }) {
	const [title, setTitle] = useState('');
	const [email, setEmail] = useState('');
	const [isTitleTouched, setIsTitleTouched] = useState(false);
	const [isEmailTouched, setIsEmailTouched] = useState(false);
	const [formIsValid, setFormIsValid] = useState(false);
	const openingTextRef = useRef('');
	const releaseDateRef = useRef('');
	
	const isTitleValid = title.trim() !== '';
	const isEmailValid = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i.test(email);
	const titleInputIsInvalid = !isTitleValid && isTitleTouched;
	const emailInputIsInvalid = !isEmailValid && isEmailTouched;
	
	const inputClasses = `${classes.control} ${titleInputIsInvalid && classes.invalid}`;
	const inputEmailClasses = `${classes.control} ${emailInputIsInvalid && classes.invalid}`;
	
		useEffect(() => {
			setFormIsValid(isTitleValid && isEmailValid);
		}, [isTitleValid, isEmailValid]);

	const titleInputHandler = (e) => {
		setTitle(e.target.value);
	};

	const titleBlurHandler = () => {
		setIsTitleTouched(true);
	};

	const emailInputHandler = (e) => {
		setEmail(e.target.value);
	};

	const emailBlurHandler = () => {
		setIsEmailTouched(true);
	};

	const setIdFn = (movie, movieResp) => {
		addMovie({ id: movieResp.name, ...movie });
	};

	const url =
	'https://react-http-5b516-default-rtdb.firebaseio.com/movies.json';
	const { fetchData, loading, error } = useHttp(url);

	const submitHandler = (event) => {
		event.preventDefault();
		setIsTitleTouched(true);

		if (isTitleValid) {
			const movie = {
				title,
				openingText: openingTextRef.current.value,
				releaseDate: releaseDateRef.current.value,
			};
			const options = {
				method: 'POST',
				body: JSON.stringify(movie),
				headers: {
					'Content-type': 'application/json',
				},
			};
			fetchData(options, setIdFn.bind(null, movie));
			setTitle('');
			openingTextRef.current.value = '';
			releaseDateRef.current.value = '';
			setIsTitleTouched(false);
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<div className={inputEmailClasses}>
				<label htmlFor='email'>Title</label>
				<input
					type='email'
					id='email'
					value={email}
					onChange={emailInputHandler}
					onBlur={emailBlurHandler}
				/>
				{emailInputIsInvalid && <p>The email field must be an email type.</p>}
			</div>
			<div className={inputClasses}>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					id='title'
					value={title}
					onChange={titleInputHandler}
					onBlur={titleBlurHandler}
				/>
				{titleInputIsInvalid && <p>Title field should not be empty.</p>}
			</div>
			<div className={classes.control}>
				<label htmlFor='opening-text'>Opening Text</label>
				<textarea
					rows='5'
					id='opening-text'
					ref={openingTextRef}
				></textarea>
			</div>
			<div className={classes.control}>
				<label htmlFor='date'>Release Date</label>
				<input type='text' id='date' ref={releaseDateRef} />
			</div>
			<button disabled={!formIsValid}>Add Movie</button>
			{loading && <p>Loading...</p>}
			{error}
		</form>
	);
}

export default AddMovie;
