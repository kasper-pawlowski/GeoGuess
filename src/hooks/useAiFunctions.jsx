import { useGameCtx } from '../contexts/GameContext';

const useAiFunctions = () => {
    const { aiData, setAiData } = useGameCtx();

    const updateAiData = async () => {
        const newDistanceHistory = await aiData.map((e) => {
            const newDistance = Math.round(Math.random() * 4999 + 1);
            return {
                ...e,
                distance: newDistance,
                points: e.points + (5000 - newDistance),
                pointsHistory: e.pointsHistory.concat(e.points),
            };
        });
        setAiData(newDistanceHistory);
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

    return { updateAiData, resetAiState };
};

export default useAiFunctions;
