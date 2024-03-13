import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from '../pages/LandingPage/LandingPage'
import Login from "../pages/LoginPage/LogInPage";
import Signup from '../pages/SignUpPage/SignUp'
import ChatPage from '../pages/ChatPage/ChatPage'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" Component={LandingPage} />
                <Route exact path="/login" Component={Login} />
                <Route exact path="/signup" Component={Signup} />
                <Route exact path="/chat" Component={ChatPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRoutes;