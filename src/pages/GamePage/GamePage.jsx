import React, { useEffect, useState } from 'react';
import RoundPage from '../RoundPage/RoundPage';
import RoundSummary from '../RoundSummary/RoundSummary';
import GameSummary from '../GameSummary/GameSummary';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useGameConfigCtx } from '../../contexts/GameConfigContext';

const GamePage = () => {
    const { rounds, selectedRegion } = useGameConfigCtx();
    const [view, setView] = useState('round');
    const [data, setData] = useState([]);
    const [distanceBetween, setDistanceBetween] = useState(null);
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
                    points={points}
                    pointsHistory={pointsHistory}
                />
            )}
            {view === 'gameSummary' && <GameSummary points={points} />}
        </>
    );
};

export default GamePage;
