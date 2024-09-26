import React, {useState} from 'react';
import config from '../../shared/api/config';
import {Link, Navigate} from "react-router-dom";
import {RoutesNames} from "../../app/router/Router";
import {useAuthContext} from "../../app/hooks/useAuthContext";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([])
    const {login, isAuthenticated} = useAuthContext();


    if(isAuthenticated) return <Navigate to={RoutesNames.PHISHING}/>

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await config.post('/auth/login', {username, password});

            login(response.data.accessToken);
        } catch (error) {
            setErrors(['Invalid username or password'])
        }
    };

    return (
        <form onSubmit={handleLogin}>
            Login
            <div>
            username
            <input
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            /></div>
            <div>
            password
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            /></div>
            <div>{errors.map(e => <span style={{color: 'red'}}>{e}</span>)}</div>
            <button type="submit">Login</button>
            <p>
                <Link to={RoutesNames.SIGN_UP}>Sign up</Link>
            </p>
        </form>
    );
};

export default LoginPage;