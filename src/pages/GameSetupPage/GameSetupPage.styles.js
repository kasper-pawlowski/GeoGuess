import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10%;
    @media (max-width: 1366px) {
        padding-bottom: 0;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 40px;
        padding-bottom: 8rem;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    width: 100%;
    gap: 20px;

    h1 {
        margin-bottom: 20px;
        text-align: center;
    }

    @media (max-width: 768px) {
        gap: 10px;
    }
`;

export const Line = styled.div`
    height: 40%;
    width: 2px;
    background-color: #d8d8d8;
    @media (max-width: 768px) {
        width: 50%;
        height: 2px;
    }
`;

export const SettingWrapper = styled.div`
    min-width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #000000;
    gap: 10px;
    background-color: #ffffff;

    p {
        font-size: 20px;
    }

    @media (max-width: 768px) {
        min-width: 80%;
        padding: 6px;
    }
`;

export const Input = styled.input`
    text-align: center;
    background-color: #f4f4f4;
    border: none;
    border-radius: 6px;
    max-width: 80px;
    font-size: 20px;
    padding: 10px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 30px;
    border: none;
    border-radius: 6px;
    color: #ffffff;
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;
    margin-top: 6%;
    cursor: pointer;
    transition-duration: 0.1s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.accentShade};
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`;
