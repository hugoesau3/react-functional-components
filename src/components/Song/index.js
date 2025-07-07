import React from 'react';
import placeholderImage from '../../assets/song_placeholder.png';
import './styles.css'; // Assuming you have some styles for the song component

const Song = ({ song, onAddToLibrary }) => {
    return (
        <div className="song">
            <img src={placeholderImage} alt="Song cover" />
            <div className="song-info">
                <h4>{song.title}</h4>
                <p>{song.artist}</p>
                <p>{song.duration}</p>
            </div>
            <div className="song-actions">
                <button className="play-button">Play</button>
                {onAddToLibrary && (
                    <button className="add-button" onClick={() => onAddToLibrary(song)}>
                        Add to Library
                    </button>
                )}
            </div>
        </div>
    );
};

export default Song;