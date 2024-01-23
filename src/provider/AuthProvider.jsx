import { createContext, useState } from "react";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);

    const authInfo = {
        searchResults,
        setSearchResults
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;