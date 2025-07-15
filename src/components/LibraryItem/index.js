import React from 'react';
import placeholderImage from '../../assets/song_placeholder.png';
import { useNavigate } from 'react-router-dom';
import {
  LibraryItemContainer,
  CoverImage,
  Info,
  Actions,
  ViewButton,
} from './styles';

const LibraryItem = ({ item }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/details/${item.id}`);
  };

  return (
    <LibraryItemContainer id={item.id}>
      <CoverImage
        src={
          item.cover_image && !item.cover_image.toLowerCase().endsWith('.gif')
            ? item.cover_image
            : placeholderImage
        }
        alt="Song cover"
      />

      <Info>
        <h4>{item.title}</h4>
        <p>{item.year}</p>
        <p>{item.type}</p>
      </Info>

      <Actions>
        <ViewButton onClick={handleViewDetails}>
          View Details
        </ViewButton>
      </Actions>
    </LibraryItemContainer>
  );
};

export default LibraryItem;