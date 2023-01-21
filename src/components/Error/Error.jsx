import React from 'react';
import { Icon, Wrapper } from './Error.styles';

const Error = ({ children, region }) => {
    return (
        <Wrapper region={region}>
            <Icon />
            <div>{children}</div>
        </Wrapper>
    );
};

export default Error;
