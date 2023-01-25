import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Wrapper } from './NotFound.styles';

const NotFound = () => {
    return (
        <Wrapper>
            <h1>Nie znaleziono strony!</h1>
            <Link to="/">
                <Button>Do strony głównej</Button>
            </Link>
        </Wrapper>
    );
};

export default NotFound;
