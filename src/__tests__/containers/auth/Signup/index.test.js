/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { StaticRouter } from "react-router";

import SignUp from "../../../../containers/auth/SignUp/index.js";

import { createStore } from "redux";
import { Provider } from "react-redux";

import createReducer from "../../../../store/createReducer";

const initialState = {};

const store = createStore(createReducer(), initialState);

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <StaticRouter>{children}</StaticRouter>
  </Provider>
);

describe("<SignUp/>", () => {
  let usernameInput, passwordInput, confirmPasswordInput, emailInput;

  beforeAll(() => {
    const { getByLabelText } = render(<SignUp />, {
      wrapper: Wrapper,
    });
    usernameInput = getByLabelText("Username");
    passwordInput = getByLabelText("Password");
    confirmPasswordInput = getByLabelText("Confirm Password");
    emailInput = getByLabelText("Email");
  });

  it("should display Sign Up", async () => {
    const heading = await screen.findAllByText("Sign Up");

    expect(heading).toHaveLength(2);
  });

  it("emailInput should have the default value", () => {
    expect(emailInput.value).toBe("");
    fireEvent.change(emailInput, { target: { value: "sample@sample.com" } });
  });

  it("emailInput should have the updated value", () => {
    expect(emailInput.value).toBe("sample@sample.com");
  });

  it("usernameInput should have the default value", () => {
    expect(usernameInput.value).toBe("");
    fireEvent.change(usernameInput, { target: { value: "ok" } });
  });

  it("usernameInput should have the updated value", () => {
    expect(usernameInput.value).toBe("ok");
  });

  it("passwordInput should have the default value", () => {
    expect(passwordInput.value).toBe("");
    fireEvent.change(passwordInput, { target: { value: "pass" } });
  });

  it("passwordInput should have the updated value", () => {
    expect(passwordInput.value).toBe("pass");
  });

  it("confirmPasswordInput should have the default value", () => {
    expect(confirmPasswordInput.value).toBe("");
    fireEvent.change(confirmPasswordInput, { target: { value: "pass" } });
  });

  it("confirmPasswordInput should have the updated value", () => {
    expect(confirmPasswordInput.value).toBe("pass");
  });

  afterAll(cleanup);
});
