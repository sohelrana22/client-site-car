import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import google from "./../../assets/images/google.png";
import login from "./../../assets/images/login.png";
import sectionBg from './../../assets/images/bg.jpg';



const Login = () => {
  const { AllContexts } = useAuth();
  const history = useHistory();

  const location = useLocation();
  const redirect = location?.state?.from || "/home";

  const {
    getEmail,
    getPassword,
    signInWithEmail,
    error,
    setUser,
    signInWithGoogle,
  } = AllContexts;

  return (
    <div className="text-center login p-4"
    style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
    >
      <h2 className=" mt-3 text-white">Please Login</h2>
      <p className=" mt-3 text-white">Login with Email & Password</p>
      <p className="text-danger text-center">{error}</p>
      <div className="d-flex">
      <div className=" w-100">
      <div className="w-100 mx-auto">
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            signInWithEmail()
              .then((result) => {
                setUser(result?.user);
                history.push(redirect);
              })
          }}
        >
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Email Address
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                  onBlur={getEmail}
                  type="email"
                  autoComplete="current-email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="text-start">
              <Form.Label htmlFor="password" visuallyHidden>
                Your Password
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                  onBlur={getPassword}
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
            </Col>
          </Row>

          <button type="submit" className="btn btn-info mt-2 w-100">
            Login
          </button>
        </Form>
      </div>
      <p className="mt-2">
        <NavLink className="text-decoration-none text-white" to="/register">
          Need an Account? Please Register!
        </NavLink>
        <br />
        <NavLink className="text-decoration-none text-white" to="/reset">
          Forget password? Reset!
        </NavLink>
      </p>
      <p className="mt-3 text-white">Or</p>
      <p className="text-white"> Login with Google</p>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault()
            signInWithGoogle()
              .then((result) => {
                setUser(result?.user);
                history.push(redirect);
              })
              
          }}
          className="btn"
        >
          <img src={google} width="46px" alt="google-icon" />
        </button>
        
      </div>
      </div>
      <div>
          <img src={login} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Login;