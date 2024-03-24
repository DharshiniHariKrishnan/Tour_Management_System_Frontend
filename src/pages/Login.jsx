import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Container } from "reactstrap";
import "../styles/login.css";
import worldMap from "../assets/images/worldMap.jpg";

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    // update later
  }

  return (
    <div className={'mainContainer'}>
      <div className={'loginInput'}>
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Login'} />
      </div>
    </div>
    </div>
  )
}

export default Login