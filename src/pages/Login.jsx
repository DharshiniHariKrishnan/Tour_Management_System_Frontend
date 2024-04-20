import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import loginimage from "../assets/images/World-Travel-PNG-Image.png";
import welcomeback from "../assets/images/luggage.png";
import { AuthContext } from "../components/Auth/AuthContext";
import { BASE_URL } from "../utils/config";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
    twoFactorCode: undefined
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`https://backend-latest-rsbd.onrender.com/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);
      console.log(result.data);

      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return (
    <section>
      <Container>
        <Row>
          {/*<Col lg="8" className="m-auto">*/}
            <div class="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginimage} alt=""  height={700} />
              </div>

              <div className="login__form">
                <div className="welcomeBack">
                  <img src={welcomeback} alt="" height={250} width={250}/>
                </div>
                <h2><strong>Login</strong></h2>


                <Form onSubmit={handleClick} className="form">
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="string"
                      placeholder="Two Factor Code"
                      id="twoFactorCode"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account?<br></br><Link to="/register">Create</Link>
                </p>
                <p>
                  Forgot Password?<br></br><Link to="/recoverpassword">Forgot Password</Link>
                </p>
              </div>
            </div>
          {/*</Col>*/}
        </Row>
      </Container>
    </section>
  );
};

export default Login;
