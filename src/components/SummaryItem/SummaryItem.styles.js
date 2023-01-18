import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    gap: 30px;
    padding: 12px 20px;
    background-color: #f4f4f4;
    border-radius: 7px;
    font-size: 1.1rem;
`;

export const Name = styled.div`
    min-width: 180px;
`;

export const RangeWrapper = styled.div`
    min-width: 400px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 30px;

    &::before {
        content: '';
        position: absolute;
        height: 80%;
        width: 1px;
        background-color: black;
        top: 50%;
        translate: 0 -50%;
        left: -15px;
        border-radius: 100vw;
    }

    &::after {
        content: '';
        position: absolute;
        height: 80%;
        width: 1px;
        background-color: black;
        top: 50%;
        translate: 0 -50%;
        right: -15px;
        border-radius: 100vw;
    }
`;

export const RangeTrack = styled.div`
    height: 1px;
    flex: 1;
    background-color: black;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        height: 10px;
        width: 60%;
        background-color: ${({ theme }) => theme.colors.accent};
        top: 50%;
        translate: 0 -50%;
        left: 0;
        border-radius: 100vw;
    }
`;

export const Points = styled.div``;
