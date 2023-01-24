import { createContext, useContext, useState } from 'react';

const gameContext = createContext();

export function GameContextProvider({ children }) {
    const [currentRound, setCurrentRound] = useState(0);
    const [distanceBetween, setDistanceBetween] = useState(null);
    const [points, setPoints] = useState(0);
    const [pointsHistory, setPointsHistory] = useState([]);
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

    return <gameContext.Provider value={{ aiData, setAiData, currentRound, setCurrentRound }}>{children}</gameContext.Provider>;
}

export function useGameCtx() {
    return useContext(gameContext);
}
