import { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/fetchData';
import MovieCard from '../components/MovieCard';


export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMovies();
      setMovies(data);
    }
    fetchData();
  }, []);

  const addToWatchlist = (movie) => {
    
    if (!watchlist.some((item) => item.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
      console.log('Added to watchlist:', movie.Title);
    } else {
      console.log('Movie already in watchlist:', movie.Title);
    }
  };

  return (
    <div>
      <h1>Movie Rating App</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} addToWatchlist={addToWatchlist} />
        ))}
      </div>
    </div>
  );
}
