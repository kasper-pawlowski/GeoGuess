import { useGameCtx } from '../contexts/GameContext';

const useAiFunctions = () => {
    const { aiData, setAiData } = useGameCtx();

    const addRandomDistanceForAi = () => {
        const newDistanceHistory = aiData.map((e) => {
            const newDistance = Math.round(Math.random() * 4999 + 1);
            return {
                ...e,
                distance: newDistance,
            };
        });
        setAiData(newDistanceHistory);
    };

    const setPointsForAi = () => {
        const newPoints = aiData.map((e) => {
            return {
                ...e,
                points: e.distance >= 5000 ? e.points - 5000 : e.points + (5000 - e.distance),
            };
        });
        setAiData(newPoints);
    };

    const setPointsHistoryForAi = () => {
        const newPointsHistory = aiData.map((e) => {
            return {
                ...e,
                pointsHistory: e.pointsHistory.concat(e.points),
            };
        });
        setAiData(newPointsHistory);
    };

    const resetAiState = () => {
        setAiData([
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
    };

    return { addRandomDistanceForAi, resetAiState, setPointsForAi, setPointsHistoryForAi };
};

export default useAiFunctions;
