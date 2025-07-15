import React from 'react';
import placeholderImage from '../../assets/song_placeholder.png';
import {
  ResultContainer,
  CoverImage,
  Info,
  Actions,
  ResultButton,
} from './styles';

const Result = ({ result, onAddToLibrary }) => {
  return (
    <ResultContainer id={result.id}>
      <CoverImage
        src={
          result.cover_image && !result.cover_image.toLowerCase().endsWith('.gif')
            ? result.cover_image
            : placeholderImage
        }
        alt="Song cover"
      />

      <Info>
        <h4>{result.title}</h4>
        <p>{result.year}</p>
        <p>{result.type}</p>
      </Info>

      <Actions>
        <ResultButton onClick={() => onAddToLibrary(result)}>
          Add to Library
        </ResultButton>
      </Actions>
    </ResultContainer>
  );
};

export default Result;