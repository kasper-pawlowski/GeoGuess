import styled from 'styled-components';

export const Wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 30px;
    border: none;
    border-radius: 6px;
    background-color: #f5f5f5;
    box-shadow: ${({ active }) => active && 'inset'} rgba(0, 0, 0, 0.24) 0px 3px 5px;
    margin-top: 6%;
    cursor: pointer;
    transition-duration: 0.1s;
    &:hover {
        background-color: #ececec;
    }
`;
