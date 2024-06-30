export async function fetchMovies() {
    try {
      const response = await fetch('https://movies-database-gold.vercel.app/movies');
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  }
  