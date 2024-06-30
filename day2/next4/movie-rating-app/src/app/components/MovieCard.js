import { Box, Image, Heading, Text, Button } from '@chakra-ui/react';

const MovieCard = ({ movie, addToWatchlist }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" m="4">
      <Image src={movie.Poster} alt={movie.Title} />
      <Box p="6">
        <Heading as="h3" size="md" mb="2">
          {movie.Title} ({movie.Year})
        </Heading>
        <Text>{movie.Plot}</Text>
        <Button mt="4" onClick={() => addToWatchlist(movie)}>Add to Watchlist</Button>
      </Box>
    </Box>
  );
};

export default MovieCard;
