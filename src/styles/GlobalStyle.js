import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'Space Grotesk', 'Inter', Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 1.4;
        font-weight: 400;

        background-color: ${({ theme }) => theme?.colors?.background || '#F5F5F5'};
        color: ${({ theme }) => theme?.colors?.text || '#000000'};

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        height: 100%;
        background-color: ${({ theme }) => theme?.colors?.background || '#F5F5F5'};
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: ${({ theme }) => theme?.typography?.fontWeight?.bold || 700};
        line-height: 1.2;
        margin-bottom: ${({ theme }) => theme?.spacing?.md || '16px'};
    }

    h1 {
        font-size: ${({ theme }) => theme?.typography?.fontSize?.huge || '48px'};
        font-weight: ${({ theme }) => theme?.typography?.fontWeight?.black || 900};
        text-transform: uppercase;
        letter-spacing: -0.02em;
    }

    h2 {
        font-size: ${({ theme }) => theme?.typography?.fontSize?.xxl || '32px'};
        font-weight: ${({ theme }) => theme?.typography?.fontWeight?.bold || 700};
    }

    h3 {
        font-size: ${({ theme }) => theme?.typography?.fontSize?.xl || '24px'};
        font-weight: ${({ theme }) => theme?.typography?.fontWeight?.semibold || 600};
    }

    p {
        font-size: ${({ theme }) => theme?.typography?.fontSize?.md || '16px'};
        line-height: 1.6;
        margin-bottom: ${({ theme }) => theme?.spacing?.md || '16px'};
    }

    a,
    button,
    input,
    textarea {
        color: inherit;
        text-decoration: none;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: ${({ theme }) => theme?.typography?.fontWeight?.medium || 500};
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
        font-size: ${({ theme }) => theme?.typography?.fontSize?.md || '16px'};
        font-weight: ${({ theme }) => theme?.typography?.fontWeight?.semibold || 600};
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transition: all 0.2s ease;
        
        &:hover {
            transform: translateY(-2px);
        }
        
        &:active {
            transform: translateY(0);
        }
    }

    input, textarea {
        border: 3px solid ${({ theme }) => theme?.colors?.border || '#000000'};
        background-color: ${({ theme }) => theme?.colors?.surface || '#FFFFFF'};
        padding: ${({ theme }) => theme?.spacing?.md || '16px'};
        font-size: ${({ theme }) => theme?.typography?.fontSize?.md || '16px'};
        outline: none;
        transition: all 0.2s ease;
        
        &:focus {
            border-color: ${({ theme }) => theme?.colors?.accent || '#FF6B35'};
            box-shadow: 4px 4px 0px ${({ theme }) => theme?.colors?.accent || '#FF6B35'};
        }
    }

    .neobrutalist-shadow {
        box-shadow: 6px 6px 0px ${({ theme }) => theme?.colors?.shadow || '#000000'};
    }

    .neobrutalist-shadow-sm {
        box-shadow: 3px 3px 0px ${({ theme }) => theme?.colors?.shadow || '#000000'};
    }

    .neobrutalist-shadow-lg {
        box-shadow: 10px 10px 0px ${({ theme }) => theme?.colors?.shadow || '#000000'};
    }

    .neobrutalist-border {
        border: 3px solid ${({ theme }) => theme?.colors?.border || '#000000'};
    }

    .neobrutalist-border-thick {
        border: 5px solid ${({ theme }) => theme?.colors?.border || '#000000'};
    }
`;
