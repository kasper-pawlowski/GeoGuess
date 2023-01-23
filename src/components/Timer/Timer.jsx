import React, { useState, useEffect } from 'react';
import { StyledIcon, StyledSpan, Wrapper } from './Timer.styles';

const Timer = ({ handleTimeIsUp, secondsLeft, setSecondsLeft }) => {
    let intervalId = null;

    useEffect(() => {
        if (secondsLeft > 0) {
            intervalId = setInterval(() => {
                setSecondsLeft((seconds) => seconds - 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
            handleTimeIsUp();
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [secondsLeft, handleTimeIsUp]);

    return (
        <Wrapper>
            <StyledIcon {...(secondsLeft <= 10 && { warning: 'true' })} />
            <StyledSpan {...(secondsLeft <= 10 && { warning: 'true' })}>Pozostało {secondsLeft} sekund</StyledSpan>
        </Wrapper>
    );
};

export default Timer;
