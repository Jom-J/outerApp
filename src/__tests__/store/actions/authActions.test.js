import * as authActions from "../../../store/actions/authActions";
import * as actionTypes from "../../../store/actions/actionTypes";

describe("authActions", () => {
  describe("authSucceeded", () => {
    it("should create an action to save auth data", () => {
      const user = {
        username: "sample",
        email: "sample@sample.com",
        password: "sample",
      };
      const expectedAction = {
        type: actionTypes.AUTH_SUCCESS,
        user,
      };
      expect(authActions.authSucceeded(user)).toEqual(expectedAction);
    });
  });

  describe("logout", () => {
    it("should create an action for logout", () => {
      const expectedAction = {
        type: actionTypes.LOGOUT,
      };
      expect(authActions.logout()).toEqual(expectedAction);
    });
  });
});
