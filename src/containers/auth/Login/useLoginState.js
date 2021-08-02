import React, { useEffect, useState } from "react";
import { Container, Row, Card, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { authSucceeded } from "../../../store/actions/authActions";

const useLoginState = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = users.find((item) => item.username === username);
    if (user && user.password === password) {
      dispatch(authSucceeded(user));
      props.history.push("/dashboard");
    } else {
      setError("Invalid Username/Password");
    }
  };

  return {
    username: username,
    password: password,
    error: error,
    setUsername: setUsername,
    setPassword: setPassword,
    handleSubmit: handleSubmit,
  };
};

export default useLoginState;
