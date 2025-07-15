
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
  ${tw`px-4 py-2 rounded text-white`}
  background-color: ${(props) =>
    props.isAdded ? props.theme.colors.success : props.theme.colors.primary};
  cursor: ${(props) => (props.isAdded ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.isAdded ? 0.6 : 1)};
`;