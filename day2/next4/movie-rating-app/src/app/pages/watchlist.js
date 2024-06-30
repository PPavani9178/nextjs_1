import { useState } from 'react';
import WatchlistTable from '../components/WatchlistTable';

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  const removeFromWatchlist = (id) => {
    
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== id);
    setWatchlist(updatedWatchlist);
    console.log('Removed from watchlist:', id);
  };

  return (
    <div>
      <h1>My Watchlist</h1>
      <WatchlistTable watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />
    </div>
  );
}
