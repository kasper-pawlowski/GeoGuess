import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        margin-bottom: 3%;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    background-color: rgb(245, 245, 245);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 3%;
    cursor: pointer;
    transition-duration: 0.1s;

    &:hover {
        background-color: #ececec;
    }

    span {
        display: flex;
        align-items: center;
        font-size: 26px;
    }
`;

export const ErrorMessage = styled.p`
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.error};
`;
