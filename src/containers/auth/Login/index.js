import React from "react";
import { Container, Row, Card, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import useLoginState from "./useLoginState";

const Login = (props) => {
  const { username, password, error, setUsername, setPassword, handleSubmit } =
    useLoginState(props);

  return (
    <Container className="h-100">
      <Row className="justify-content-center h-100">
        <Col lg={5}>
          <Card className="border-0 rounded-lg mt-5 w-100 bg-info">
            <Card.Body>
              <Card.Title className="text-light text-center">
                <h3>Login</h3>
              </Card.Title>
              <div className="w-100 d-flex flex-column">
                <Form
                  className="d-flex flex-column w-100"
                  onSubmit={handleSubmit}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicUsername"
                    className="mb-3 align-self-stretch mx-5"
                  >
                    <Form.Label className="text-light">Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 align-self-stretch mx-5"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="text-light">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    {error && (
                      <Form.Text className="text-danger">{error}</Form.Text>
                    )}
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="align-self-center mt-3 px-5"
                  >
                    Login
                  </Button>
                </Form>
                <Link
                  to="/signup"
                  className="align-self-center mt-3 text-light"
                >
                  SIGNUP
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
