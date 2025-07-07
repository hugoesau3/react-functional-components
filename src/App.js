import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import SongLibrary from './components/SongLibrary';

import './App.css'; // Assuming you have some global styles

const App = () => {
  const [librarySongs, setLibrarySongs] = useState([]);
  const [searchResults, setSearchResults] = useState([
    { id: 1, title: 'Song One', artist: 'Artist A', duration: '3:45' },
    { id: 2, title: 'Song Two', artist: 'Artist B', duration: '4:20' },
    { id: 3, title: 'Song Three', artist: 'Artist C', duration: '2:30' },
    { id: 4, title: 'Song Four', artist: 'Artist D', duration: '5:15' },
    { id: 5, title: 'Song Five', artist: 'Artist E', duration: '3:10' }
  ]);

  const addSongToLibrary = (song) => {
    if (!librarySongs.some(librarySong => librarySong.id === song.id)) {
      setLibrarySongs([...librarySongs, song]);
    }
  };

  useEffect(() => {
    console.log('Library updated:', librarySongs);
  }, [librarySongs]);

  return (
    <>
      <Header />

      <SearchResults addSongToLibrary={addSongToLibrary} />
      
      <SongLibrary songs={librarySongs} />

    </>
  );
};

export default App;
