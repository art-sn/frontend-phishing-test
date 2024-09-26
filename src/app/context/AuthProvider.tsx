import React, {createContext, useContext, useState, useEffect, useCallback} from 'react';
import config, {accessTokenKey} from '../../shared/api/config';
import {useNavigate} from 'react-router-dom';
import {RoutesNames} from "../router/Router";

interface AuthContextType {
    user: any;
    login: (token: string) => void;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user, setUser] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem(accessTokenKey);
        if (token) config.get('/auth/me').then((res) => setUser(res.data)).finally(() => {
            setIsLoading(false);
        });
        else {
            setIsLoading(false)
        }
    }, []);

    const loginUser = async (token: string) => {
        localStorage.setItem(accessTokenKey, token);
        setUser({});
        navigate(RoutesNames.PHISHING);
    };

    return (
        <AuthContext.Provider value={{user, login: loginUser, isAuthenticated: !!user}}>
            {isLoading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};