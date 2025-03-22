import React, { useState } from 'react'

const App = () => {
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')

  const checkPassword = (password) => {
    let status;
    if (password.length < 8) {
      status = "Weak";
    } else if(password.length >= 8 && password.length <= 12) {
      status = "Medium";
    } else {
      status = "Strong";
    }
    let ctUppercase =0 , ctLowercase =0, ctNumber =0, ctSpecial =0;
    for(let i = 0; i < password.length; i++) {
      if(password[i] >= 'A' && password[i] <= 'Z') {
        ctUppercase++;
      }
      else if(password[i] >= 'a' && password[i] <= 'z') {
        ctLowercase++;
      }
      else if(password[i] >= '0' && password[i] <= '9') {
        ctNumber++;
      }
      else {
        ctSpecial++;
      }
    }
    if(ctUppercase > 0 && ctLowercase > 0 && ctNumber > 0 && ctSpecial > 0) {
      status = "Strong";
    }
    else if (ctUppercase > 0 && ctLowercase > 0 && ctNumber > 0 || ctUppercase > 0 && ctLowercase > 0 && ctSpecial > 0 || ctUppercase > 0 && ctNumber > 0 && ctSpecial > 0 || ctLowercase > 0 && ctNumber > 0 && ctSpecial > 0) {
      status = "Medium";
    }
    else{
      status = "Weak";
    }
    return status;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus(checkPassword(password))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="input" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Check</button>
      </form>
      {status && <p className='output'>The password is {status}</p>}
    </div>
  )
}

export default App

