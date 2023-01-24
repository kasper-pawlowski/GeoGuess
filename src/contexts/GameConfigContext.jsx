import { createContext, useContext, useState } from 'react';

const gameConfigContext = createContext();

const initialState = {
    rounds: 5,
    roundTime: 60,
    selectedRegion: '',
};

export function GameConfigContextProvider({ children }) {
    const [rounds, setRounds] = useState(initialState.rounds);
    const [roundTime, setRoundTime] = useState(initialState.roundTime);
    const [selectedRegion, setSelectedRegion] = useState(initialState.selectedRegion);

    const resetGameConfigContext = () => {
        setRounds(initialState.rounds);
        setRoundTime(initialState.roundTime);
        setSelectedRegion(initialState.selectedRegion);
    };

    return (
        <gameConfigContext.Provider value={{ rounds, setRounds, roundTime, setRoundTime, selectedRegion, setSelectedRegion, resetGameConfigContext }}>
            {children}
        </gameConfigContext.Provider>
    );
}

export function useGameConfigCtx() {
    return useContext(gameConfigContext);
}
