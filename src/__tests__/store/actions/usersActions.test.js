import * as usersActions from "../../../store/actions/usersActions";
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
        type: actionTypes.ADD_USER,
        user,
      };
      expect(usersActions.addUser(user)).toEqual(expectedAction);
    });
  });
});
