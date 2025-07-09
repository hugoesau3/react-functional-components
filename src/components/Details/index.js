import React from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';

const Details = ({ libraryItems }) => {
    const { id } = useParams();
    const item = libraryItems.find((libraryItem) => libraryItem.id === parseInt(id));

    if (!item) {
        return <p>No item details available.</p>;
    }

    return (
        <div className="details">
            <div className="details-header">
                <button onClick={() => window.history.back()}>Back to Library</button>
            </div>
            <img src={item.cover_image} alt="Song cover" />
            <h2>{item.title}</h2>
            <div>
                <strong>Year:</strong> <p>{item.year}</p>
            </div>
            <div>
                <strong>Type:</strong> <p>{item.type}</p>
            </div>
            <div>
                <strong>Style:</strong> <p>{item.style}</p>
            </div>
            <div>
                <strong>Country:</strong> <p>{item.country}</p>
            </div>
            <div>
                <strong>Label:</strong> <p>{item.label}</p>
            </div>
            <div>
                <strong>Format:</strong> <p>{item.format}</p>
            </div>
            <div>
                <strong>Track:</strong> <p>{item.track}</p>
            </div>
            <div>
                <strong>Credit:</strong> <p>{item.credit}</p>
            </div>
        </div>
    );
};

export default Details;