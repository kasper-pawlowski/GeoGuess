import { createContext, useContext, useState } from 'react';

const gameContext = createContext();

const initialState = {
    currentRound: 0,
    distanceBetween: null,
    points: 0,
    pointsHistory: [],
    aiData: [
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
    ],
};

export function GameContextProvider({ children }) {
    const [currentRound, setCurrentRound] = useState(initialState.currentRound);
    const [distanceBetween, setDistanceBetween] = useState(initialState.distanceBetween);
    const [points, setPoints] = useState(initialState.points);
    const [pointsHistory, setPointsHistory] = useState(initialState.pointsHistory);
    const [aiData, setAiData] = useState(initialState.aiData);

    const resetGameContext = () => {
        setCurrentRound(initialState.currentRound);
        setDistanceBetween(initialState.distanceBetween);
        setPoints(initialState.points);
        setPointsHistory(initialState.pointsHistory);
        setAiData(initialState.aiData);
    };

    return (
        <gameContext.Provider
            value={{
                aiData,
                setAiData,
                currentRound,
                setCurrentRound,
                distanceBetween,
                setDistanceBetween,
                points,
                setPoints,
                pointsHistory,
                setPointsHistory,
                resetGameContext,
            }}>
            {children}
        </gameContext.Provider>
    );
}

export function useGameCtx() {
    return useContext(gameContext);
}
