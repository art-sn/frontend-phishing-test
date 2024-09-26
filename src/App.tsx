import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {AuthProvider} from './app/context/AuthProvider';
import {AppRouter} from "./app/router/Router"; 

const App: React.FC = () => {
    return (
        <Router>
            <AuthProvider>
              <AppRouter />
            </AuthProvider>
        </Router>
    );
};

export default App;