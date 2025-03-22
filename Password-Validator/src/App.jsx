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
    <div style={{ marginLeft: "200px", fontFamily: "Arial, sans-serif" }}>
      <h2>Checking Password Strength in ReactJS</h2>
      <span>Enter Password: </span>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "5px",
            marginRight: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          style={{
            cursor: "pointer",
            fontSize: "18px",
            color: "#333",
          }}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <button
        onClick={validate}
        style={{
          padding: "5px 10px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Validate
      </button>
      <br />
      {errorMessage && (
        <span
          style={{
            fontWeight: "bold",
            color:
              errorMessage === "Strong Password"
                ? "green"
                : errorMessage === "Medium Password"
                ? "orange"
                : "red",
            display: "block",
            marginTop: "10px",
          }}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default App;
