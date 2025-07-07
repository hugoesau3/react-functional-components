import './styles.css';
import React from 'react';
import Song from '../Song';

const SongLibrary = ({ songs }) => {
    return (
        <aside>
            <h2>Library</h2>
            <div className="song-list">
                {songs.map(song => (
                    <Song key={song.id} song={song} />
                ))}
            </div>
        </aside>
    );
};

export default SongLibrary;