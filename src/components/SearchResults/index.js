import React, { useState } from 'react';
import Result from '../Result';
import useFetchResults from '../../hooks/FetchResults';
import {
  Main,
  Heading,
  SubText,
  Form,
  Input,
  Button,
  ResultsContainer,
  ResultsHeading,
  SongList,
  Message,
} from './styles';

const SearchResults = ({ addSongToLibrary, addedItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');

  const { results, loading, error } = useFetchResults(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchTerm.trim());
  };

  return (
    <Main>
      <Heading>Search</Heading>
      <SubText>Here you can find your favorite songs.</SubText>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search for songs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>

      <ResultsContainer>
        <ResultsHeading>Results:</ResultsHeading>

        {loading && <Message>Loading results...</Message>}
        {error && <Message>Error: {error}</Message>}

        {!loading && !error && results?.results?.length > 0 && (
          <SongList>
            {results.results.map((result, index) =>
              result?.id ? (
                <Result
                  key={result.id}
                  result={result}
                  onAddToLibrary={addSongToLibrary}
                  addedItems={addedItems} // Pasa los elementos agregados
                />
              ) : (
                console.warn(`Invalid result at index ${index}:`, result)
              )
            )}
          </SongList>
        )}

        {!loading && !error && (!results?.results || results.results.length === 0) && (
          <Message>No results found.</Message>
        )}
      </ResultsContainer>
    </Main>
  );
};

export default SearchResults;