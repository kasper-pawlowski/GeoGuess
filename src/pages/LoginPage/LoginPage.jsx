import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import { Button, ErrorMessage, Wrapper } from './LoginPage.styles';

const LoginPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    // funkcja logowania poprzez google
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError('Nie udało się zalogować');
                console.log(errorMessage);
            });
    };

    return (
        <Wrapper>
            <h1>Quiz Architektoniczny</h1>
            <Button onClick={signInWithGoogle}>
                Kontynuuj z
                <span>
                    <FcGoogle />
                </span>
            </Button>
            {error && <ErrorMessage className="error">{error}</ErrorMessage>}
        </Wrapper>
    );
};

export default LoginPage;
