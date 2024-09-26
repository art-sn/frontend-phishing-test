import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import ProtectedRoute from "../../shared/components/ProtectedRoute";
import PhishingPage from "../../pages/PhishingPage/PhishingPage";
import React from "react";

export const RoutesNames = {
    SIGN_UP: '/sign-up',
    LOG_IN: '/login',
    PHISHING: '/phishing'
}

export const AppRouter = () => {
    return <Routes>
        <Route path={RoutesNames.LOG_IN} element={<LoginPage/>}/>
        <Route path={RoutesNames.SIGN_UP} element={<SignUpPage/>}/>
        <Route path="/" element={<Navigate to={RoutesNames.LOG_IN}/>}/>
        <Route element={<ProtectedRoute/>}>
            <Route path={RoutesNames.PHISHING} element={<PhishingPage/>}/>
        </Route>
    </Routes>
}
