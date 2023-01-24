import { createContext, useContext, useState } from 'react';

const gameConfigContext = createContext();

export function GameConfigContextProvider({ children }) {
    const [rounds, setRounds] = useState(5);
    const [roundTime, setRoundTime] = useState(60);
    const [selectedRegion, setSelectedRegion] = useState('');

    return (
        <gameConfigContext.Provider value={{ rounds, setRounds, roundTime, setRoundTime, selectedRegion, setSelectedRegion }}>
            {children}
        </gameConfigContext.Provider>
    );
}

export function useGameConfigCtx() {
    return useContext(gameConfigContext);
}
