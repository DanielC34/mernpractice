import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css';

const LandingPage = () => {
    return (
      <div className="landing-page-container">
        <div className="landing-page-content">
          <h1>Welcome to My Application</h1>
          <p>Sign Up or Sign In below</p>
          <div className="buttons-container">
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            <Link to="/signin">
              <button>Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default LandingPage