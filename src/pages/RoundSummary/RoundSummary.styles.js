import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10%;
    gap: 3rem;
    @media (max-width: 1366px) {
        padding-bottom: 0%;
    }
`;

export const SummaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 768px) {
        width: 100%;
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
        width: 70%;
    }
`;
