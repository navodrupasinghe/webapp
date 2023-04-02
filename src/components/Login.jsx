import React from "react";
import "./Login.css";
import guidmepng from "../../src/guidme.png";
import consultancyjpg from "../../src/consultancy.jpg";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission
  };

  function handleCustomerSignup() {
    // code to handle customer sign up
  }

  function handleConsultantSignup() {
    // code to handle consultant sign up
  }
  return (
    <div className="row">
      <img src={guidmepng} alt="guidme" className="guidme-image" />
      <div className="left-col-md-6">
        <img
          src={consultancyjpg}
          alt="consultancy"
          className="consultancy-image"
        />
        <div className="box">
          <h1>Login to Your Account</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="                  Email or Username"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="                  Password"
            />
            <input type="submit" value="Log in" id="login-btn" />
          </form>
        </div>
      </div>
      <div className="right-col-md-6">
        <h2>New Here?</h2>
        <p>
          Sign up and discover a great
          <br /> amount of new opportunities!
        </p>
        <button className="customer" onClick={handleCustomerSignup}>
          Sign up as a customer
        </button>
        <button className="consultant" onClick={handleConsultantSignup}>
          Sign up as a consultant
        </button>
      </div>
    </div>
  );
};

export default Login;
