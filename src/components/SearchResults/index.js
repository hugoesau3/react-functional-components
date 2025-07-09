import './styles.css';
import React, { useState } from 'react';
import Result from '../Result';
import useFetchResults from '../../hooks/FetchResults';

const SearchResults = ({ addSongToLibrary }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [query, setQuery] = useState('');


    const { results, loading, error } = useFetchResults(query);

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(searchTerm.trim());
    };

    return (
        <main>
            <h2>Search</h2>
            <p>Here you can find your favorite songs.</p>

            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for songs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <div className="search-results">
                <h3>Results:</h3>

                {loading && <p>Loading results...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && results && results.results && (
                    <div className="song-list">
                        {results.results.map((result, index) => {
                            if (!result || !result.id) {
                                console.warn(`Invalid result at index ${index}:`, result);
                                return null;
                            }

                            return (
                                <Result
                                    key={result.id}
                                    result={result}
                                    onAddToLibrary={addSongToLibrary}
                                />
                            );
                        })}
                    </div>
                )}

                {!loading && !error && (!results || !results.results || results.results.length === 0) && (
                    <p>No results found.</p>
                )}
            </div>
        </main>
    );
};

export default SearchResults;