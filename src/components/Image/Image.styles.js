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
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border: 4px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    max-height: calc(100vh - 70px - ${({ theme }) => theme.spacing.xxl} * 2);
    box-shadow: 4px 4px 0px ${({ theme }) => theme.colors.shadow};

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        max-height: calc(100vh - 70px - ${({ theme }) => theme.spacing.xl} * 2);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        max-height: calc(50vh - 70px - ${({ theme }) => theme.spacing.lg} * 2);
    }
`;
