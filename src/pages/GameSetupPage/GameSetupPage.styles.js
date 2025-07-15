import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xxl};
    min-height: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.xl};
        padding-bottom: ${({ theme }) => theme.spacing.xxl};
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    width: 100%;
    gap: ${({ theme }) => theme.spacing.xl};
    background: ${({ theme }) => theme.colors.surface};
    padding: ${({ theme }) => theme.spacing.xxl};
    border: 4px solid ${({ theme }) => theme.colors.border};
    box-shadow: 8px 8px 0px ${({ theme }) => theme.colors.shadow};
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        background: ${({ theme }) => theme.colors.accent};
        z-index: -1;
        transform: rotate(1deg);
    }

    h1 {
        font-size: ${({ theme }) => theme.typography.fontSize.xxl};
        font-weight: ${({ theme }) => theme.typography.fontWeight.black};
        color: ${({ theme }) => theme.colors.text};
        text-transform: uppercase;
        letter-spacing: -0.02em;
        margin-bottom: ${({ theme }) => theme.spacing.lg};
        text-align: center;
        text-shadow: 3px 3px 0px ${({ theme }) => theme.colors.accent};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: ${({ theme }) => theme.spacing.lg};
        gap: ${({ theme }) => theme.spacing.lg};

        h1 {
            font-size: ${({ theme }) => theme.typography.fontSize.xl};
        }
    }
`;

export const Line = styled.div`
    height: 200px;
    width: 6px;
    background: linear-gradient(
        45deg,
        ${({ theme }) => theme.colors.accent} 0%,
        ${({ theme }) => theme.colors.warning} 50%,
        ${({ theme }) => theme.colors.success} 100%
    );
    border: 3px solid ${({ theme }) => theme.colors.border};
    box-shadow: 4px 4px 0px ${({ theme }) => theme.colors.shadow};
    transform: rotate(5deg);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 60%;
        height: 6px;
        transform: rotate(0deg);
    }
`;

export const SettingWrapper = styled.div`
    min-width: 280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.lg};
    border: 3px solid ${({ theme }) => theme.colors.border};
    gap: ${({ theme }) => theme.spacing.md};
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: 4px 4px 0px ${({ theme }) => theme.colors.shadow};
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.shadow};
    }

    p {
        font-size: ${({ theme }) => theme.typography.fontSize.lg};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        color: ${({ theme }) => theme.colors.text};
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        min-width: 90%;
        padding: ${({ theme }) => theme.spacing.md};

        p {
            font-size: ${({ theme }) => theme.typography.fontSize.md};
        }
    }
`;

export const Input = styled.input`
    text-align: center;
    background: ${({ theme }) => theme.colors.warning};
    border: 3px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    max-width: 80px;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    padding: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text};
    box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.shadow};
    transition: all 0.2s ease;

    &:focus {
        outline: none;
        background: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.surface};
        transform: translateY(-2px);
        box-shadow: 5px 5px 0px ${({ theme }) => theme.colors.shadow};
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    border: 4px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    color: ${({ theme }) => theme.colors.surface};
    background: ${({ theme }) => theme.colors.success};
    box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.shadow};
    margin-top: ${({ theme }) => theme.spacing.xl};
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    min-width: 200px;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 9px 9px 0px ${({ theme }) => theme.colors.shadow};
        background: ${({ theme }) => theme.colors.accent};
    }

    &:active {
        transform: translateY(0);
        box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.shadow};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 90%;
        font-size: ${({ theme }) => theme.typography.fontSize.md};
        padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    }
`;
