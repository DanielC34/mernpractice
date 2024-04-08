import "./App.css";
import Signin from "./components/SigninPage/Signin.js";
import Signup from "./components/SignupPage/Signup.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Setting up the Router component from react-router-dom */}
      <Router>
        {/* Defining different Routes using Routes and Route components */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* Route for the Dashboard component */}
          <Route exact path="/chats" element={<Dashboard />} />
          {/* Route for the Login component */}
          <Route exact path="/signin" element={<Signin />} />
          {/* Route for the Signup component */}
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
