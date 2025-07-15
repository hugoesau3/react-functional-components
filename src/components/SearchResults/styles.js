
import styled from 'styled-components';
import tw from 'twin.macro';

export const Main = styled.main`
  ${tw`max-w-3xl mx-auto px-4 py-6`}
`;

export const Heading = styled.h2`
  ${tw`text-2xl font-bold text-gray-800 mb-1`}
`;

export const SubText = styled.p`
  ${tw`text-gray-600 mb-4`}
`;

export const Form = styled.form`
  ${tw`flex flex-col sm:flex-row gap-3 mb-6`}
`;

export const Input = styled.input`
  ${tw`w-3 flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
`;

export const Button = styled.button`
  ${tw`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition`}
`;

export const ResultsContainer = styled.div`
  ${tw`mt-6`}
`;

export const ResultsHeading = styled.h3`
  ${tw`text-lg font-semibold text-gray-800 mb-2`}
`;

export const SongList = styled.div`
  ${tw`flex flex-col sm:grid-cols-2 gap-4 max-h-[calc(100vh-330px)] overflow-y-auto`}
`;

export const Message = styled.p`
  ${tw`text-gray-500 italic`}
`;