import { createContext, useState } from 'react';

export const authContext = createContext(null);

const Provider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    const authInfo = {darkMode, setDarkMode};
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Provider;