import { createContext, useContext } from 'react';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const user = {
        displayName: 'Gracz',
        photoURL: null,
        uid: 'default-user',
    };

    return <userAuthContext.Provider value={{ user }}>{children}</userAuthContext.Provider>;
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
