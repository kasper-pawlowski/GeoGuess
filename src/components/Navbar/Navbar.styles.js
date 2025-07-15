import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 5px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    z-index: 999;
    box-shadow: 0 8px 0 ${({ theme }) => theme.colors.shadow};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        height: 60px;
    }
`;

export const NavContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 1200px;
    padding: 0 ${({ theme }) => theme.spacing.xxl};

    @media (min-width: 1400px) {
        max-width: 1400px;
        padding: 0 ${({ theme }) => theme.spacing.xxl};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        padding: 0 ${({ theme }) => theme.spacing.xl};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0 ${({ theme }) => theme.spacing.lg};
    }
`;

export const HomeButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    padding: ${({ theme }) => theme.spacing.md};
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.surface};
    border: 3px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    transition: all 0.2s ease;
    box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.shadow};

    &:hover {
        transform: translateY(-2px);
        box-shadow: 5px 5px 0px ${({ theme }) => theme.colors.shadow};
    }

    &:active {
        transform: translateY(0);
        box-shadow: 2px 2px 0px ${({ theme }) => theme.colors.shadow};
    }
`;
