import React from 'react';
import { useParams } from 'react-router-dom';
import {
  DetailsContainer,
  DetailsHeader,
  BackButton,
  CoverImage,
  Title,
  InfoBlock,
  Label,
  Value,
  EmptyMessage,
} from './styles';

const Details = ({ libraryItems }) => {
  const { id } = useParams();
  const item = libraryItems.find(
    (libraryItem) => libraryItem.id === parseInt(id)
  );

  if (!item) {
    return <EmptyMessage>No item details available.</EmptyMessage>;
  }

  return (
    <DetailsContainer>
      <DetailsHeader>
        <BackButton onClick={() => window.history.back()}>
          ← Back to Library
        </BackButton>
      </DetailsHeader>

      <CoverImage src={item.cover_image} alt="Song cover" />
      <Title>{item.title}</Title>

      <InfoBlock>
        <Label>Year:</Label>
        <Value>{item.year}</Value>
      </InfoBlock>

      <InfoBlock>
        <Label>Type:</Label>
        <Value>{item.type}</Value>
      </InfoBlock>

      <InfoBlock>
        <Label>Style:</Label>
        <Value>{item.style}</Value>
      </InfoBlock>

      <InfoBlock>
        <Label>Country:</Label>
        <Value>{item.country}</Value>
      </InfoBlock>

      <InfoBlock>
        <Label>Label:</Label>
        <Value>{item.label}</Value>
      </InfoBlock>

      <InfoBlock>
        <Label>Format:</Label>
        <Value>{item.format}</Value>
      </InfoBlock>

      <InfoBlock>
        <Label>Track:</Label>
        <Value>{item.track}</Value>
      </InfoBlock>

      <InfoBlock>
        <Label>Credit:</Label>
        <Value>{item.credit}</Value>
      </InfoBlock>
    </DetailsContainer>
  );
};

export default Details;