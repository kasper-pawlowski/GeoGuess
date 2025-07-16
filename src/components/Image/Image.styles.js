import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% { 
        opacity: 0;
        transform: scale(0.95);
    }
    100% { 
        opacity: 1;
        transform: scale(1);
    }
`;

export const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.surface};
    border: 4px solid ${({ theme }) => theme.colors.border};
    box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.shadow};
    min-height: 300px;
`;

export const Img = styled.img`
    animation: ${animation} 0.3s ease-out;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 4px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    box-shadow: 4px 4px 0px ${({ theme }) => theme.colors.shadow};
`;
