import React from 'react';
import LibraryItem from '../LibraryItem';
import {
  LibraryContainer,
  LibraryHeading,
  SongList,
  EmptyMessage,
} from './styles';

const Library = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <EmptyMessage>No songs in your library.</EmptyMessage>;
  }

  return (
    <LibraryContainer>
      <LibraryHeading>My Library:</LibraryHeading>
      <SongList>
        {items.map((item) => (
          <LibraryItem key={item.id} item={item} />
        ))}
      </SongList>
    </LibraryContainer>
  );
};

export default Library;