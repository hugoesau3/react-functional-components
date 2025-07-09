import React from 'react';
import placeholderImage from '../../assets/song_placeholder.png';
import './styles.css'; // Assuming you have some styles for the song component

const Result = ({result, onAddToLibrary}) => {
    return (
        <div className="result" id={result.id}>
            <img
                src={
                    result.cover_image && !result.cover_image.toLowerCase().endsWith('.gif')
                        ? result.cover_image
                        : placeholderImage
                }
                alt="Song cover"
            />
            <div className="result-info" >
                <h4>{result.title}</h4>
                <p>{result.year}</p>
                <p>{result.type}</p>
            </div>
            <div className="result-actions">
           
                    <button className="add-button" onClick={() => onAddToLibrary(result)}>
                        Add to Library
                    </button>
               
            </div>
        </div>
    );
};

export default Result;