import './styles.css';
import React, { useState, useEffect } from 'react';
import Song from '../Song';

const SearchResults = ({ addSongToLibrary }) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchedSongs = [
            { id: 1, title: 'Song One', artist: 'Artist A', duration: '3:45' },
            { id: 2, title: 'Song Two', artist: 'Artist B', duration: '4:20' },
            { id: 3, title: 'Song Three', artist: 'Artist C', duration: '2:30' },
            { id: 4, title: 'Song Four', artist: 'Artist D', duration: '5:15' },
            { id: 5, title: 'Song Five', artist: 'Artist E', duration: '3:10' }
        ];
        setSongs(fetchedSongs);
    }, []);

    return (
        <main>
            <h2>Search</h2>
            <p>Here you can find your favorite songs.</p>
            <div className="search-results">
                <h3>Results:</h3>
                <div className="song-list">
                    {songs.map(song => (
                        <Song key={song.id} song={song} onAddToLibrary={addSongToLibrary} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default SearchResults;