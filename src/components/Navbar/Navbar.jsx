import React from 'react';
import { useLocation } from 'react-router-dom';
import { useUserAuth } from '../../contexts/AuthContext';
import { DisplayName, LogOutButton, Wrapper } from './Navbar.styles.js';

const Navbar = () => {
    let location = useLocation();
    const { pathname } = location;
    const { user, logOut } = useUserAuth();

    if (!user) return;
    return pathname !== '/login' ? (
        <Wrapper>
            <DisplayName>{user.displayName}</DisplayName>
            <LogOutButton onClick={logOut}>Log out</LogOutButton>
        </Wrapper>
    ) : (
        <Wrapper>login</Wrapper>
    );
};

export default Navbar;
