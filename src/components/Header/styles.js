import styled from "styled-components";
import tw from "twin.macro";

const HeaderContainer = styled.header`
    ${tw`flex justify-between items-center p-4 bg-gray-800 text-white`}
`;  
const Logo = styled.div`
    ${tw`text-lg font-bold`}
`;
const User = styled.div`
    ${tw`text-sm`}
`;  

export {
    HeaderContainer,
    Logo,
    User
};