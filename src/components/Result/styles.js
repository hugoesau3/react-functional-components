
import styled from 'styled-components';
import tw from 'twin.macro';

export const ResultContainer = styled.div`
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

export const ResultButton = styled.button`
  ${tw`bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition`}
`;