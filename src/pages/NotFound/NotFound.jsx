import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './NotFound.styles';

const NotFound = () => {
    return (
        <Wrapper>
            <h1>404 - Not Found!</h1>
            <Link to="/">Go Home</Link>
        </Wrapper>
    );
};

export default NotFound;
