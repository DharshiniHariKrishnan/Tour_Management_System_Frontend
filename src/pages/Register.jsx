import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Container } from "reactstrap";
import "../styles/login.css";

const Register = (props) => {
  const [email, setEmail] = useState('')
  const [fname, setFName] = useState('')
  const [lname, setLName] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    // update later
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Sign Up</div>
      </div>
      <br />

      <div className={'inputContainer'}>
        <input
          value={fname}
          placeholder="First Name"
          onChange={(ev) => setFName(ev.target.value)}
          className={'inputBox'}
        />

        <label className="errorLabel">{emailError}</label>
      </div>

      <div className={'inputContainer'}>
        <input
          value={lname}
          placeholder="Last Name"
          onChange={(ev) => setLName(ev.target.value)}
          className={'inputBox'}
        />

        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Email"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Confirm password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Register'} />
      </div>
    </div>
  )
}

export default Register