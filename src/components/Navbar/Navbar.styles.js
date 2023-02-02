import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 60px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid black;
    background: #ffffff;
    z-index: 999;
    padding: 0 4rem;
    @media (max-width: 1366px) {
        padding: 0 2rem;
    }
    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`;

export const InfoLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    justify-self: flex-end;
`;

export const DisplayName = styled.p`
    font-size: 20;
`;

export const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
`;

export const LogOutButton = styled.div`
    display: flex;
    align-items: center;
    height: fit-content;
    font-weight: 500;
    padding: 6px 10px;
    border: none;
    border-radius: 6px;
    background-color: #f5f5f5;
    cursor: pointer;
    transition-duration: 0.1s;

    &:hover {
        background-color: #ececec;
    }
`;
