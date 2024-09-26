import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {RoutesNames} from "../../app/router/Router";
import {useAuthContext} from "../../app/hooks/useAuthContext";

const ProtectedRoute: React.FC = () => {
    const { isAuthenticated } = useAuthContext();


    return isAuthenticated ? (
        <>
            <Outlet />
        </>
    ) : (
        <Navigate to={RoutesNames.LOG_IN} />
    );
};

export default ProtectedRoute;