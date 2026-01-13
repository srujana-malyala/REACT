 import "./auth.css"
import { useState } from "react";

export const Login = ({ closeModal }) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>

        {/* Close */}
        <span className="close-btn" onClick={closeModal}>×</span>

        {/* Title */}
        <h2>{isSignup ? "Signup" : "Login"}</h2>

        {/* Switch text */}
        {!isSignup ? (
          <p className="switch-text">
            New to Tech-Shop ?
            <span onClick={() => setIsSignup(true)}> Create an account</span>
          </p>
        ) : (
          <p className="switch-text">
            Already have an account ?
            <span onClick={() => setIsSignup(false)}> Login</span>
          </p>
        )}

        {/* Form */}
        <form>
          {isSignup && (
            <input type="text" placeholder="Username" />
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          {isSignup && (
            <input type="password" placeholder="Confirm Password" />
          )}

          <button className="login-btn">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="divider-text">
          <span>or login with</span>
        </div>

        {/* Social buttons */}
        <div className="social-login">
          <button className="fb">Facebook</button>
          <button className="google">Google</button>
          <button className="twitter">Twitter</button>
        </div>

      </div>
    </div>
  );
};


