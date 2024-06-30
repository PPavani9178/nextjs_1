import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

const WatchlistTable = ({ watchlist, removeFromWatchlist }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th>Year</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {watchlist.map((movie) => (
          <Tr key={movie.id}>
            <Td>{movie.Title}</Td>
            <Td>{movie.Year}</Td>
            <Td>
              <Button onClick={() => removeFromWatchlist(movie.id)}>Remove</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default WatchlistTable;
