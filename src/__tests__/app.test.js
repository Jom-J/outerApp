/**
 * @jest-environment jsdom
 */

import React from "react";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { render, cleanup } from "@testing-library/react";

import App from "../App";

import { createStore } from "redux";
import { Provider } from "react-redux";

import createReducer from "../store/createReducer";

describe("<App/>", () => {
  describe("App - Unauthenticated", () => {
    const initialState = {
      auth: {
        isLoggedIn: false,
        profile: null,
      },
    };

    const store = createStore(createReducer(), initialState);

    const Wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    test("redirects to login page", () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <App />
        </Router>,
        {
          wrapper: Wrapper,
        }
      );
      expect(history.location.pathname).toBe("/login");
    });
  });

  describe("App - Authenticated", () => {
    const initialState = {
      auth: {
        isLoggedIn: true,
        profile: {
          email: "tyson@gmail.com",
          username: "Tyson",
          password: "tyson@123",
        },
      },
    };

    const store = createStore(createReducer(), initialState);

    const Wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    test("redirects to dashboard page", () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <App />
        </Router>,
        {
          wrapper: Wrapper,
        }
      );
      expect(history.location.pathname).toBe("/dashboard");
    });
  });

  afterAll(cleanup);
});
