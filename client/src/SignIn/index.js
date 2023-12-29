import React from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="signin_main">
      <div className="signin">
        <h2 className="signin_heading">Sign in</h2>
        <div>
          <input
            className="signin_inputField"
            required
            placeholder="Email"
            type="email"
            name="email"
            value={"user@example.com"}
            // onChange={(e) => {}}
          />
        </div>
        <div>
          <input
            className="signin_inputField"
            required
            placeholder="Password"
            type="passsword"
            name="password"
            value={"123456789"}
            // onChange={(e) => {}}
          />
        </div>
        <div className="remember">
          <input type="checkbox" onChange={(e) => {}} />
          <p>Remember me</p>
        </div>
        <button
          className="login_btn"
          onClick={() => {
            navigate("/my-movies");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default SignIn;
