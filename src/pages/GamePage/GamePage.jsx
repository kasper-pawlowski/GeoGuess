import React, { useEffect, useState } from 'react';
import RoundPage from '../RoundPage/RoundPage';
import RoundSummary from '../RoundSummary/RoundSummary';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useCookies, Cookies } from 'react-cookie';
import { useUserAuth } from '../../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import { useGameCtx } from '../../contexts/GameContext';

const GamePage = () => {
    const { gameID } = useParams();
    const { rounds, selectedRegion } = useGameCtx();
    const { user } = useUserAuth();
    const [currentRound, setCurrentRound] = useState(0);
    const [data, setData] = useState([]);
    const [distanceBetween, setDistanceBetween] = useState(null);
    const [view, setView] = useState('round');

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
                <RoundPage user={user} data={data} setDistanceBetween={setDistanceBetween} currentRound={currentRound} setView={setView} />
            )}
            {view === 'summary' && (
                <RoundSummary
                    dataLength={data.length}
                    distanceBetween={distanceBetween}
                    setView={setView}
                    currentRound={currentRound}
                    setCurrentRound={setCurrentRound}
                />
            )}
        </>
    );
};

export default GamePage;
