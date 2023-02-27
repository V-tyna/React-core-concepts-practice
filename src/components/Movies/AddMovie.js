import React, { useRef } from 'react';
import useHttp from '../../hooks/useHttp';

import classes from './AddMovie.module.css';

function AddMovie({ addMovie }) {
	const titleRef = useRef('');
	const openingTextRef = useRef('');
	const releaseDateRef = useRef('');
	const url =
		'https://react-http-5b516-default-rtdb.firebaseio.com/movies.json';

	const setIdFn = (movie, movieResp) => {
		addMovie({ id: movieResp.name, ...movie });
	};

	const { fetchData, loading, error } = useHttp(url);

	function submitHandler(event) {
		event.preventDefault();

		const movie = {
			title: titleRef.current.value,
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
	}

	return (
		<form onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor='title'>Title</label>
				<input type='text' id='title' ref={titleRef} />
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
			<button>Add Movie</button>
			{loading && <p>Loading...</p>}
			{error}
		</form>
	);
}

export default AddMovie;
