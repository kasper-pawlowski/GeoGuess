import { createContext, useContext, useEffect, useState } from 'react';

const gameContext = createContext();

export function GameContextProvider({ children }) {
    const [rounds, setRounds] = useState(5);
    const [roundTime, setRoundTime] = useState(60);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [aiData, setAiData] = useState([
        {
            name: 'Maciej',
            points: 0,
            pointsHistory: [],
            distance: null,
        },
        {
            name: 'Michał',
            points: 0,
            pointsHistory: [],
            distance: null,
        },
        {
            name: 'Agata',
            points: 0,
            pointsHistory: [],
            distance: null,
        },
    ]);

    useEffect(() => {
        console.log(aiData);
    }, [aiData]);

    return (
        <gameContext.Provider value={{ rounds, setRounds, roundTime, setRoundTime, selectedRegion, setSelectedRegion, aiData, setAiData }}>
            {children}
        </gameContext.Provider>
    );
}

export function useGameCtx() {
    return useContext(gameContext);
}
