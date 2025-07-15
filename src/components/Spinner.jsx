import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 107, 53, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 107, 53, 0);
  }
`;

const Spinner = styled.div`
    animation: ${rotate360} 1s linear infinite, ${pulse} 2s infinite;
    transform: translateZ(0);
    border-top: 4px solid ${({ theme }) => theme.colors.border};
    border-right: 4px solid ${({ theme }) => theme.colors.border};
    border-bottom: 4px solid ${({ theme }) => theme.colors.border};
    border-left: 4px solid ${({ theme }) => theme.colors.accent};
    background: transparent;
    width: 32px;
    height: 32px;
    border-radius: 0;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        background: ${({ theme }) => theme.colors.warning};
        border: 2px solid ${({ theme }) => theme.colors.border};
    }
`;

export default Spinner;
