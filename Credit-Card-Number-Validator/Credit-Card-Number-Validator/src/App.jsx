import './App.css'
import React, { useState } from "react"; 
import validator from 'validator'

function App() {
 
  const [errorMessage, setErrorMessage] = useState('') 
  const [isValid, setIsValid] = useState(false)
    
  const validateCreditCard = (value) => { 
    
    if (validator.isCreditCard(value)) { 
      setErrorMessage('Valid CreditCard Number') 
      setIsValid(true)
    } else { 
      setErrorMessage('Enter valid CreditCard Number!')
      setIsValid(false)
    } 
  } 
  
  return ( 
    <div> 
      <pre> 
        <h2>Credit Card Validator</h2> 
        <span>Enter CreditCard: </span><input type="text" 
        onChange={(e) => validateCreditCard(e.target.value)} placeholder='Enter CreditCard'></input> <br /> 
        <span style={{ 
          fontWeight: 'bold', 
          color: isValid ? 'green' : 'red', 
        }}>{errorMessage}</span>
      </pre> 
    </div> 
  )
}

export default App

