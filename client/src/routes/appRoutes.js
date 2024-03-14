import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from '../pages/LandingPage/LandingPage'
import Login from "../pages/LogInPage/LoginInPage";
import Signup from '../pages/SignUpPage/SignUp'
import ChatPage from '../pages/ChatPage/ChatPage'

const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/chat" component={ChatPage} />
        </Routes>
      </Router>
    );
};

export default AppRoutes;