import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Library from './components/Library';
import Details from './components/Details'; 
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css'; // Assuming you have some global styles

const App = () => {
  const [libraryItems, setLibraryItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const addSongToLibrary = (result) => {
    if (!libraryItems.some(libraryItem => libraryItem.id === result.id)) {
      setLibraryItems([...libraryItems, result]);
    }
  };

  useEffect(() => {
    console.log('Library updated:', libraryItems);
  }, [libraryItems]);

  return (

    <>
      <Header />

      <BrowserRouter>
        <SearchResults addSongToLibrary={addSongToLibrary} />

        <Routes>
          <Route path="/" element={<Library items={libraryItems} />} />
          <Route path="details/:id" element={<Details libraryItems={libraryItems} />} />
        </Routes>
      </BrowserRouter>
    </>

  );
};

export default App;
