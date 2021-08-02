import React from "react";
import {
  Container,
  Row,
  Card,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import useSignUpState from "./useSignUpState.js";

const SignUp = (props) => {
  const {
    fields,
    showAlert,
    handleChange,
    handleSubmit,
    getOrCreateRef,
    setShowAlert,
  } = useSignUpState();

  return (
    <Container className="h-100">
      <Row className="justify-content-center h-100">
        <Col lg={5}>
          <Card className="border-0 rounded-lg mt-5 w-100 bg-info">
            <Card.Body>
              <Card.Title className="text-light text-center">
                <h3>Sign Up</h3>
              </Card.Title>
              <div className="w-100 d-flex flex-column">
                {showAlert && (
                  <Alert
                    variant={"success"}
                    dismissible
                    onClose={() => setShowAlert(false)}
                  >
                    Registration Successful
                  </Alert>
                )}
                <Form
                  className="d-flex flex-column w-100"
                  onSubmit={handleSubmit}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    className="mb-3 align-self-stretch mx-5"
                  >
                    <Form.Label className="text-light">Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter email"
                      value={fields.email.value}
                      onChange={(e) => {
                        handleChange("email", e.target.value);
                      }}
                      ref={getOrCreateRef("email")}
                    />
                    {!fields.email.isValid && (
                      <Form.Text className="text-danger">
                        {fields.email.error}
                      </Form.Text>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicUsername"
                    className="mb-3 align-self-stretch mx-5"
                  >
                    <Form.Label className="text-light">Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      value={fields.username.value}
                      onChange={(e) => {
                        handleChange("username", e.target.value);
                      }}
                      ref={getOrCreateRef("username")}
                    />
                    {!fields.username.isValid && (
                      <Form.Text className="text-danger">
                        {fields.username.error}
                      </Form.Text>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3 align-self-stretch mx-5"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="text-light">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={fields.password.value}
                      onChange={(e) => {
                        handleChange("password", e.target.value);
                      }}
                      ref={getOrCreateRef("password")}
                    />
                    {!fields.password.isValid && (
                      <Form.Text className="text-danger">
                        {fields.password.error}
                      </Form.Text>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3 align-self-stretch mx-5"
                    controlId="formBasicConfirmPassword"
                  >
                    <Form.Label className="text-light">
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      value={fields.confirmPassword.value}
                      onChange={(e) => {
                        handleChange("confirmPassword", e.target.value);
                      }}
                      ref={getOrCreateRef("confirmPassword")}
                    />
                    {!fields.confirmPassword.isValid && (
                      <Form.Text className="text-danger">
                        {fields.confirmPassword.error}
                      </Form.Text>
                    )}
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="align-self-center mt-3 px-5"
                  >
                    Sign Up
                  </Button>
                </Form>
                <Link to="/login" className="align-self-center mt-3 text-light">
                  LOGIN
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
