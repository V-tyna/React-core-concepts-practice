import { useCallback, useEffect, useState } from 'react';
import AddMovie from './AddMovie';
import MoviesList from './MoviesList';
import './MoviesPage.css';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
  const [fetchingError, setFetchingError] = useState(null);

  const addMovieHandler = async (movie) => {
    console.log('Added movie: ', movie)
    try {
      const response = await fetch('https://react-http-5b516-default-rtdb.firebaseio.com/movies.json', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-type': 'application/json'
        }
      });
    
      if (!response.ok) {
        throw new Error('Adding movie failure.');
      }
      const data = await response.json();
      console.log('POST RESPONSE: ', data)
    } catch(e) {
      setFetchingError(e.message);
    }
  };

	const fetchMoviesHandler = useCallback(async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://react-http-5b516-default-rtdb.firebaseio.com/movies.json');
        console.log('STATUS OK', response.ok);
        if (!response.ok) {
          throw new Error('Fetching movies failure.');
        }
  
        const data = await response.json();
        const transformedMovies = Object.entries(data).map(([id, value]) => ({ id, ...value}));
        console.log('Movies', transformedMovies);
       setMovies(transformedMovies);
      } catch(e) {
        setFetchingError(e.message);
      }
      setIsLoading(false);	
  }, []); 
  
  useEffect(() => {
    console.log('UseEffect runs');
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

	return (
		<>
    <section>
      <AddMovie onAddMovie={addMovieHandler} />
    </section>
    
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{!isLoading && !movies.length && !fetchingError && <p>No movies</p>}
				{isLoading ? <p>Loading...</p> : <MoviesList movies={movies} />}
        {fetchingError}
			</section>
		</>
	);
}

export default App;
