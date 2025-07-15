import { HeaderContainer } from './styles';
import { Logo } from './styles';
import { User } from './styles';
import React from 'react';


const Header = () => {
    return (
        <HeaderContainer>
            <Logo>
                <h1>Song Library</h1>
            </Logo>
            <User>
                <span>Username</span>
            </User>
        </HeaderContainer>
    )
}

export default Header;