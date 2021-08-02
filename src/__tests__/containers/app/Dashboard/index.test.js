/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import { StaticRouter } from "react-router";

import Dashboard from "../../../../containers/app/Dashboard/index.js";

import { createStore } from "redux";
import { Provider } from "react-redux";

import createReducer from "../../../../store/createReducer";

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
  <Provider store={store}>
    <StaticRouter>{children}</StaticRouter>
  </Provider>
);

describe("<Dashboard/>", () => {
  beforeEach(() => {
    render(<Dashboard />, {
      wrapper: Wrapper,
    });
  });

  it("should display user name", async () => {
    const name = await screen.findAllByText(initialState.auth.profile.username);
    expect(name).toBeTruthy();
  });

  it("should display Logout", async () => {
    const logoutBtn = await screen.getByText("Logout");
    expect(logoutBtn).toBeTruthy();
  });

  afterAll(cleanup);
});
