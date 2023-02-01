import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;
    gap: 80px;

    @media (max-width: 768px) {
        padding-bottom: 30%;
    }
`;

export const InfoWrapper = styled.div`
    background-color: #000;
    display: flex;
    gap: 2px;
    @media (max-width: 910px) {
        flex-direction: column;
    }
`;

export const InfoSection = styled.div`
    background-color: #fff;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    @media (max-width: 910px) {
        padding: 40px 40px;
    }
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
    cursor: pointer;
    transition-duration: 0.1s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.accentShade};
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`;
