import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

const userAuthContext = createContext();

// context który zwraca obiekt danych usera

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, [auth]);

    return <userAuthContext.Provider value={{ user, logOut }}>{children}</userAuthContext.Provider>;
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
