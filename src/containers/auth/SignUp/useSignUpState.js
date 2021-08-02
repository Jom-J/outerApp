import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../../store/actions/usersActions";

import checkValidity from "../../../utils/checkValidity.js";
import formFields from "./fields.json";

const useSignUpState = (props) => {
  const dispatch = useDispatch();
  const [fields, setFields] = useState(JSON.parse(JSON.stringify(formFields)));
  const [showAlert, setShowAlert] = useState(false);

  const references = useRef({});

  const handleChange = (key, value) => {
    setFields((current) => ({
      ...current,
      [key]: {
        ...current[key],
        value: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    for (const key in JSON.parse(JSON.stringify(fields))) {
      if (fields.hasOwnProperty(key)) {
        const element = { ...fields[key] };
        let validity = checkValidity(
          element.value?.toString().trim(),
          element.label,
          element.rules
        );
        element.isValid = validity.isValid;
        element.error = validity.error;
        if (
          isValid &&
          !validity.isValid &&
          references.current[key] &&
          references.current[key].current
        ) {
          references.current[key].current.focus();
        }
        isValid = validity.isValid && isValid;
        setFields((prevState) => ({
          ...prevState,
          [key]: element,
        }));
      }
    }

    if (fields.password.value !== fields.confirmPassword.value) {
      setFields((prevState) => ({
        ...prevState,
        confirmPassword: {
          ...prevState.confirmPassword,
          isValid: false,
          error: "Password should match",
        },
      }));
      if (
        isValid &&
        references.current[confirmPassword] &&
        references.current[confirmPassword].current
      ) {
        references.current[confirmPassword].current.focus();
      }
      isValid = false;
    }

    if (isValid) {
      let user = {
        username: fields.username.value,
        email: fields.email.value,
        password: fields.password.value,
      };
      dispatch(addUser(user));
      setShowAlert(true);
      setFields(JSON.parse(JSON.stringify(formFields)));
    }
  };

  const getOrCreateRef = (id) => {
    if (!references.hasOwnProperty(id)) {
      references.current[id] = React.createRef();
    }
    return references.current[id];
  };

  return {
    fields: fields,
    showAlert: showAlert,
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    getOrCreateRef: getOrCreateRef,
    setShowAlert: setShowAlert,
  };
};

export default useSignUpState;
