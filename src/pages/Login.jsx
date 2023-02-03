import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Login.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" className="m-auto text-center">
            <h3 className="fs-4 fw-bold">Login</h3>

            <Form className="login__form">
              <FormGroup className="form__group">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                />
              </FormGroup>
              <FormGroup className="form__group">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="pasword"
                  placeholder="Enter your password"
                />
              </FormGroup>

              <button className=" auth__btn">Login</button>
              <p>
                Don't have an account?{" "}
                <Link to="/signup">Create an account</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
