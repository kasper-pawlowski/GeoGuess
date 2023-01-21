import styled from 'styled-components';
import { MdError } from 'react-icons/md';

export const Wrapper = styled.div`
    background-color: #fdedee;
    display: flex;
    gap: 10px;
    padding: 12px;
    border-radius: 6px;
    min-width: ${({ region }) => (region ? 'auto' : '300px')};
    margin-top: 20px;
    @media (max-width: 768px) {
        width: 80%;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    p {
        line-height: 2rem;
        font-weight: 500;

        &:nth-child(2) {
            position: relative;
            margin-top: 10px;

            &::after {
                content: '';
                position: absolute;
                left: 50%;
                translate: -50% 0;
                top: -5px;
                width: 100%;
                height: 1px;
                background-color: #d6a9a9;
                border-radius: 100vw;
            }
        }
    }
`;

export const Icon = styled(MdError)`
    color: #f04d62;
    font-size: 2rem;
`;
