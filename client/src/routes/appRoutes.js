import React from 'react';
import { Router, Route } from "react-router-dom";
import LandingPage from '../pages/LandingPage/LandingPage'
import Login from "../pages/LogInPage/LoginInPage";
import Signup from '../pages/SignUpPage/SignUp'
import ChatPage from '../pages/ChatPage/ChatPage'

const AppRoutes = () => {
    return (
        <Router>
            <Route>
                <Route exact path="/" Component={LandingPage} />
                <Route exact path="/login" Component={Login} />
                <Route exact path="/signup" Component={Signup} />
                <Route exact path="/chat" Component={ChatPage} />
            </Route>
        </Router>
    );
};

export default AppRoutes;