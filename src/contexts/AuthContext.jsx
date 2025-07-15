import { createContext, useContext, useState } from 'react';

const userAuthContext = createContext();

// context który zwraca obiekt danych usera

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({
        displayName: 'Gracz',
        photoURL: null,
        uid: 'default-user',
    });

    function logOut() {
        // Nie robimy nic, bo nie ma logowania
        return Promise.resolve();
    }

    return <userAuthContext.Provider value={{ user, logOut }}>{children}</userAuthContext.Provider>;
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
