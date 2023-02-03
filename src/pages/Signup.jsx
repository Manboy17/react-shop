import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [file, setFile] = useState(null);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" className="m-auto text-center">
            <h3 className="fs-4 fw-bold">Signup</h3>

            <Form className="login__form">
              <FormGroup className="form__group">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Enter your username"
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
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  placeholder="Enter your email"
                />
              </FormGroup>

              <button className=" auth__btn">Create an Account</button>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Signup;
