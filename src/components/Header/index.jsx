import React from 'react';
import Logo from '../Logo';
import HeaderStyles from './Header.styles';

const Header = () => {
    return(
        <HeaderStyles>
            <Logo />
            <ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
            </ul>
        </HeaderStyles>
    )
};

export default Header;