import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import login from "./../../assets/images/login.png";
import sectionBg from './../../assets/images/bg.jpg';
import { NavLink, useLocation, useHistory } from "react-router-dom";




const Register = () => {
  const { AllContexts } = useAuth();
  const history = useHistory();

  const location = useLocation();
  const redirect = location?.state?.from || "/";

  const {
    getEmail,
    getPassword,
    error,
    setUser,
    signUp,
    getName,
    setError,
  } = AllContexts;
  return (
    <div className="text-center  register p-4 "
    style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
    >
      <h2 className="mt-3 text-white">Please Register</h2>
      <p className=" mt-3 text-white">Register with Email & Password</p>
      <p className="text-danger text-center">{error}</p>
   <div className="d-flex">
   <div className="row">
   <div className=" col-12 col-lg-6 mx-auto">
    <div className="w-100 px-5">
        <Form
          onSubmit={signUp}
         
        >
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Name
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                required
                  onBlur={getName}
                  type="text"
                  autoComplete="current-name"
                  id="name"
                  placeholder="Enter your name"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Email Address
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                required
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
                required
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
            Register
          </button>
        </Form>
      </div>
      <p className="mt-2">
        <NavLink className="text-decoration-none text-white" to="/login">
         Already have an account? Please login
        </NavLink>
       
      </p>
      
    </div>
    <div className="col-12 col-lg-6">
    <img className="w-100" src={login} alt="" />
    </div>
   </div>
   </div>
      
    </div>
  );
};

export default Register;