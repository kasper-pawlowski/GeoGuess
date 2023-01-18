import React, { useState, useEffect } from 'react';
import { Wrapper } from './Timer.styles';
import { BiTime } from 'react-icons/bi';

const Timer = ({ time, handleTimeIsUp }) => {
    const [secondsLeft, setSecondsLeft] = useState(time);
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
            <BiTime />
            <span>Pozostało {secondsLeft} sekund</span>
        </Wrapper>
    );
};

export default Timer;
