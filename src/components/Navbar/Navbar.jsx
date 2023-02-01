import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUserAuth } from '../../contexts/AuthContext';
import { Avatar, DisplayName, LogOutButton, Wrapper, Container, InfoLink } from './Navbar.styles.js';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiHome } from 'react-icons/bi';

const Navbar = () => {
    let location = useLocation();
    const { pathname } = location;
    const { user, logOut } = useUserAuth();

    if (!user) return;
    return pathname !== '/login' ? (
        <Wrapper>
            {pathname === '/info' ? (
                <InfoLink as={Link} to="/">
                    <BiHome />
                </InfoLink>
            ) : (
                <InfoLink as={Link} to="/info">
                    <AiOutlineInfoCircle />
                </InfoLink>
            )}
            <Container>
                <DisplayName>{user.displayName}</DisplayName>
                <Avatar src={user?.photoURL} alt="" />
                <LogOutButton onClick={logOut}>Wyloguj</LogOutButton>
            </Container>
        </Wrapper>
    ) : (
        <Wrapper>login</Wrapper>
    );
};

export default Navbar;
