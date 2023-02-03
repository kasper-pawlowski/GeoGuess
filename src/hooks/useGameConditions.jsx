import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameConfigCtx } from '../contexts/GameConfigContext';

// obsluga błędów w GameSetupPage

const useGameConditions = () => {
    const navigate = useNavigate();
    const { selectedRegion, rounds, roundTime } = useGameConfigCtx();
    const [errors, setErrors] = useState([]);
    const [regionError, setRegionError] = useState(null);

    useEffect(() => {
        const errorsArray = checkErrors();
        setErrors(errorsArray);
    }, [rounds, roundTime]);

    const checkErrors = () => {
        const errorsArray = [];
        if (rounds > 5) {
            errorsArray.push('Maksymalna ilość rund wynosi 5');
        } else if (rounds < 1) {
            errorsArray.push('Minimalna ilość rund wynosi 1');
        } else {
            removeError(errorsArray, 'Maksymalna ilość rund wynosi 5');
            removeError(errorsArray, 'Minimalna ilość rund wynosi 1');
        }
        if (roundTime > 60) {
            errorsArray.push('Maksymalny czas rundy to 60 sekund');
        } else if (roundTime < 10) {
            errorsArray.push('Minimalny czas rundy to 10 sekund');
        } else {
            removeError(errorsArray, 'Maksymalny czas rundy to 60 sekund');
            removeError(errorsArray, 'Minimalny czas rundy to 10 sekund');
        }
        return errorsArray;
    };

    const removeError = (errorsArray, errorMessage) => {
        const index = errorsArray.indexOf(errorMessage);
        if (index !== -1) {
            errorsArray.splice(index, 1);
        }
    };

    const handleStartGame = () => {
        if (errors.length === 0 && selectedRegion !== '') {
            navigate(`/game`);
        } else if (selectedRegion === '') {
            setRegionError('Nie wybrano regionu');
        }
    };
    return { errors, handleStartGame, regionError };
};

export default useGameConditions;
