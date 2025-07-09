import './Library.css';
import React from 'react';
import LibraryItem from '../LibraryItem';

const Library = ({ items }) => {
    if (!Array.isArray(items) || items.length === 0) {
        return <p>No songs in your library.</p>;
    }

    return (
        <div className="library">
            <h3>My Library:</h3>
            <div className="song-list">
                {items.map((item) => (
                    <LibraryItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Library;