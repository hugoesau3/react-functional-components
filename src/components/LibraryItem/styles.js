// src/components/LibraryItem/styles.js
import styled from 'styled-components';
import tw from 'twin.macro';

export const LibraryItemContainer = styled.div`
  ${tw`bg-white rounded-lg shadow p-4 flex flex-col items-center text-center`}
`;

export const CoverImage = styled.img`
  ${tw`w-32 h-32 object-cover mb-3 rounded-md`}
`;

export const Info = styled.div`
  ${tw`mb-3`}
  h4 {
    ${tw`text-lg font-semibold text-gray-800`}
  }
  p {
    ${tw`text-sm text-gray-500`}
  }
`;

export const Actions = styled.div`
  ${tw`mt-auto`}
`;

export const ViewButton = styled.button`
  ${tw`bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md transition`}
`;