import { useCallback, useEffect, useState } from 'react';
import useHttp from '../../hooks/useHttp';
import AddMovie from './AddMovie';
import MoviesList from './MoviesList';
import classes from './MoviesPage.module.css';

function App() {
	const [movies, setMovies] = useState([]);

	const setMoviesHandler = useCallback((movies) => {
		const films = Object.entries(movies).map(([id, value]) => ({
			id,
			...value,
		}));
		setMovies(films);
	}, []);
	const { fetchData, loading, error } = useHttp(
		'https://react-http-5b516-default-rtdb.firebaseio.com/movies.json');

	useEffect(() => {
		console.log('MoviePage UseEffect runs');
		fetchData({method: 'GET'}, setMoviesHandler);
	}, [fetchData, setMoviesHandler]);

  const onAddMovie = (movie) => {
    setMovies((prev) => [...prev, movie]);
  }

	return (
		<>
			<section>
				<AddMovie addMovie={onAddMovie}/>
			</section>

			<section>
				<button className={classes['btn-movies']}>Fetch Movies</button>
			</section>
			<section>
				{error}
				{!loading && !movies.length && !error && (
					<p>No movies</p>
				)}
				{loading ? (
					<p>Loading...</p>
				) : (
					<MoviesList movies={movies} />
				)}
			</section>
		</>
	);
}

export default App;
