import produce from "immer";

import reducer from "../../../store/reducers/authReducer";
import { authSucceeded, logout } from "../../../store/actions/authActions";

describe("auth reducer", () => {
  let state;
  beforeAll(() => {
    state = {
      isLoggedIn: false,
      profile: null,
    };
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(state);
  });

  describe("auth reducer - authSucceed", () => {
    let state;
    beforeAll(() => {
      state = {
        isLoggedIn: false,
        profile: null,
      };
    });

    it("should handle the authSucceeded action correctly", () => {
      const params = {
        email: "sample@sample.com",
        username: "sample",
        password: "sample",
      };
      const expectedResult = produce(state, (draft) => {
        draft.isLoggedIn = true;
        draft.profile = params;
      });

      expect(reducer(state, authSucceeded(params))).toEqual(expectedResult);
    });

    it("should handle the logout action correctly", () => {
      const expectedResult = produce(state, (draft) => {
        draft.isLoggedIn = false;
        draft.profile = null;
      });

      expect(reducer(state, logout())).toEqual(expectedResult);
    });
  });

  describe("auth reducer - Logout", () => {
    let state;
    beforeAll(() => {
      state = {
        isLoggedIn: true,
        profile: {
          email: "sample@sample.com",
          username: "sample",
          password: "sample",
        },
      };
    });

    it("should handle the logout action correctly", () => {
      const expectedResult = produce(state, (draft) => {
        draft.isLoggedIn = false;
        draft.profile = null;
      });

      expect(reducer(state, logout())).toEqual(expectedResult);
    });
  });
});
