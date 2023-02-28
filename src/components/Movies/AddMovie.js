import React, { useEffect, useRef, useState } from 'react';
import useHttp from '../../hooks/useHttp';
import useInput from '../../hooks/useInput';

import classes from './AddMovie.module.css';

function AddMovie({ addMovie }) {
	const [formIsValid, setFormIsValid] = useState(false);
	const openingTextRef = useRef('');
	const releaseDateRef = useRef('');

	const isTitleValidFn = (title) => title.trim() !== '';

	const {
		inputState: title,
		reset: resetTitle,
		isValueValid: isTitleValid,
		isInvalid: titleInputIsInvalid,
		inputClasses,
		valueChangeHandler: titleInputHandler,
		inputBlurHandler: titleBlurHandler,
	} = useInput(classes, isTitleValidFn);

	useEffect(() => {
		setFormIsValid(isTitleValid);
	}, [isTitleValid]);

	const setIdFn = (movie, movieResp) => {
		addMovie({ id: movieResp.name, ...movie });
	};

	const url =
		'https://react-http-5b516-default-rtdb.firebaseio.com/movies.json';
	const { fetchData, loading, error } = useHttp(url);

	const submitHandler = (event) => {
		event.preventDefault();

		if (isTitleValid) {
			const movie = {
				title: title.enteredValue,
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
			resetTitle();
			openingTextRef.current.value = '';
			releaseDateRef.current.value = '';
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<div className={inputClasses}>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					id='title'
					value={title.enteredValue}
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
