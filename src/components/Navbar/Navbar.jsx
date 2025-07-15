import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wrapper, NavContent, HomeButton } from './Navbar.styles.js';
import { BiHome } from 'react-icons/bi';

const Navbar = () => {
    let location = useLocation();
    const { pathname } = location;

    return (
        <Wrapper>
            <NavContent>
                {pathname !== '/' && (
                    <HomeButton as={Link} to="/">
                        <BiHome />
                    </HomeButton>
                )}
            </NavContent>
        </Wrapper>
    );
};

export default Navbar;
