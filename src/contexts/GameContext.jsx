import { createContext, useContext, useEffect, useState } from 'react';

const gameContext = createContext();

export function GameContextProvider({ children }) {
    const [rounds, setRounds] = useState(4);
    const [roundTime, setRoundTime] = useState(60);
    const [selectedRegion, setSelectedRegion] = useState('');

    return (
        <gameContext.Provider value={{ rounds, setRounds, roundTime, setRoundTime, selectedRegion, setSelectedRegion }}>
            {children}
        </gameContext.Provider>
    );
}

export function useGameCtx() {
    return useContext(gameContext);
}
