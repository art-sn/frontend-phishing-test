import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import config from '../../shared/api/config';
import {RoutesNames} from "../../app/router/Router";

const SignUpPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        await config.post('/auth/signup', {username, password});
        navigate('/login');
    };

    return (
        <form onSubmit={handleRegister}>
            Sign up
            <div>
            <input
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            </div>
            <div>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
           <div> <button type="submit">Sign up</button></div>
            <p>
                <Link to={RoutesNames.LOG_IN}>Log in</Link>
            </p>
        </form>
    );
};

export default SignUpPage;