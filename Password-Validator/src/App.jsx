import React, { useState } from "react";
import validator from "validator";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const App = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Strong Password");
    } else if (
      password.length >= 6 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password)
    ) {
      setErrorMessage("Medium Password");
    } else {
      setErrorMessage("Weak Password");
    }
  };

  return (
    <div className="container">
      <h2>Checking Password Strength in ReactJS</h2>
      <label>Enter Password:</label>
      <div className="password-input">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <button onClick={validate}>Validate</button>
      {errorMessage && <span className={`message ${errorMessage.toLowerCase().replace(" ", "-")}`}>{errorMessage}</span>}
    </div>
  );
};

export default App;
