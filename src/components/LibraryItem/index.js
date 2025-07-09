import React from 'react';
import placeholderImage from '../../assets/song_placeholder.png';
import { useNavigate } from 'react-router-dom';
import './LibraryItem.css'; 

const LibraryItem = ({ item }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/details/${item.id}`); // Pasar el id como parámetro en la URL
    };

    return (
        <div className="library_item" id={item.id}>
            <img
                src={
                    item.cover_image && !item.cover_image.toLowerCase().endsWith('.gif')
                        ? item.cover_image
                        : placeholderImage
                }
                alt="Song cover"
            />
            <div className="item-info">
                <h4>{item.title}</h4>
                <p>{item.year}</p>
                <p>{item.type}</p>
            </div>
            <div className="item-actions">
                <button className="view-details-button" onClick={handleViewDetails}>
                    View Details
                </button>
            </div>
        </div>
    );
};

export default LibraryItem;