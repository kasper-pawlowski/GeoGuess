import React, { useEffect, useState } from 'react';
import RoundPage from '../RoundPage/RoundPage';
import RoundSummary from '../RoundSummary/RoundSummary';
import GameSummary from '../GameSummary/GameSummary';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useGameCtx } from '../../contexts/GameContext';

const GamePage = () => {
    const { rounds, selectedRegion } = useGameCtx();
    const [currentRound, setCurrentRound] = useState(0);
    const [data, setData] = useState([]);
    const [distanceBetween, setDistanceBetween] = useState(null);
    const [view, setView] = useState('round');
    const [points, setPoints] = useState(0);
    const [pointsHistory, setPointsHistory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, selectedRegion.toLowerCase()));
            const array = [];
            querySnapshot.forEach((doc) => {
                array.push(doc.data());
            });
            const shuffledData = array.sort(() => Math.random() - 0.5);
            setData(shuffledData.slice(0, rounds));
        };
        fetchData();
    }, []);

    return (
        <>
            {view === 'round' && (
                <RoundPage
                    data={data}
                    distanceBetween={distanceBetween}
                    setDistanceBetween={setDistanceBetween}
                    currentRound={currentRound}
                    setView={setView}
                    points={points}
                    setPoints={setPoints}
                    setPointsHistory={setPointsHistory}
                />
            )}
            {view === 'roundSummary' && (
                <RoundSummary
                    dataLength={data.length}
                    distanceBetween={distanceBetween}
                    setView={setView}
                    currentRound={currentRound}
                    points={points}
                    setCurrentRound={setCurrentRound}
                    pointsHistory={pointsHistory}
                />
            )}
            {view === 'gameSummary' && <GameSummary points={points} />}
        </>
    );
};

export default GamePage;
