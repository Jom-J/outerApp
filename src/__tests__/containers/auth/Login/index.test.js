/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { StaticRouter } from "react-router";

import Login from "../../../../containers/auth/Login/index.js";

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

describe("<Login/>", () => {
  let usernameInput, passwordInput;

  beforeAll(() => {
    const { getByLabelText } = render(<Login />, {
      wrapper: Wrapper,
    });
    usernameInput = getByLabelText("Username");
    passwordInput = getByLabelText("Password");
  });

  it("should display user name", async () => {
    const heading = await screen.findAllByText("Login");

    expect(heading).toHaveLength(2);
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

  afterAll(cleanup);
});
