import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Library from './components/Library';
import Details from './components/Details';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles.css';

const App = () => {
  const [libraryItems, setLibraryItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const addSongToLibrary = (result) => {
    if (!libraryItems.some((libraryItem) => libraryItem.id === result.id)) {
      setLibraryItems([...libraryItems, result]);
    }
  };

  useEffect(() => {
    console.log('Library updated:', libraryItems);
  }, [libraryItems]);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />

        <div className="flex flex-1">
          <aside className="w-full md:w-1/3 lg:w-1/4 bg-white p-4 shadow-md border-r">
            <SearchResults addSongToLibrary={addSongToLibrary} />
          </aside>

          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Library items={libraryItems} />} />
              <Route path="details/:id" element={<Details libraryItems={libraryItems} />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;