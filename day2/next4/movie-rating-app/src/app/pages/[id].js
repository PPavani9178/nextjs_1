import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchMovies } from '../utils/fetchData';
import MovieCard from '../components/MovieCard';

export default function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const movies = await fetchMovies();
      const selectedMovie = movies.find((m) => m.id === parseInt(id));
      setMovie(selectedMovie);
    }
    if (id) {
      fetchData();
    }
  }, [id]);

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
      {movie && <MovieCard movie={movie} addToWatchlist={addToWatchlist} />}
    </div>
  );
}
