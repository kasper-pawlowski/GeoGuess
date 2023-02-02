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
            {pathname === '/' ? (
                <InfoLink as={Link} to="/info">
                    <AiOutlineInfoCircle />
                </InfoLink>
            ) : (
                <InfoLink as={Link} to="/">
                    <BiHome />
                </InfoLink>
            )}
            <Container>
                <DisplayName>{user.displayName}</DisplayName>
                <Avatar referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
                <LogOutButton onClick={logOut}>Wyloguj</LogOutButton>
            </Container>
        </Wrapper>
    ) : (
        <Wrapper>login</Wrapper>
    );
};

export default Navbar;
