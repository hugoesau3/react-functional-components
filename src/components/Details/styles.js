
import styled from 'styled-components';
import tw from 'twin.macro';

export const DetailsContainer = styled.div`
  ${tw`max-w-2xl mx-auto px-4 py-8 bg-white shadow rounded`}
`;

export const DetailsHeader = styled.div`
  ${tw`mb-4`}
`;

export const BackButton = styled.button`
  ${tw`text-sm text-blue-600 hover:underline mb-4`}
`;

export const CoverImage = styled.img`
  ${tw`w-48 h-48 object-cover rounded mx-auto mb-6`}
`;

export const Title = styled.h2`
  ${tw`text-2xl font-bold text-center text-gray-800 mb-6`}
`;

export const InfoBlock = styled.div`
  ${tw`mb-4 flex gap-2`}
`;

export const Label = styled.strong`
  ${tw`text-gray-700 w-20`}
`;

export const Value = styled.p`
  ${tw`text-gray-600`}
`;

export const EmptyMessage = styled.p`
  ${tw`text-center text-gray-500 italic mt-10`}
`;