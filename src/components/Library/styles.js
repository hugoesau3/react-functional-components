// src/components/Library/styles.js
import styled from 'styled-components';
import tw from 'twin.macro';

export const LibraryContainer = styled.div`
  ${tw`max-w-4xl mx-auto px-4 py-6`}
`;

export const LibraryHeading = styled.h3`
  ${tw`text-xl font-bold text-gray-800 mb-4`}
`;

export const SongList = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4`}
`;

export const EmptyMessage = styled.p`
  ${tw`text-center text-gray-500 italic mt-8`}
`;