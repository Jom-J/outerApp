import produce from "immer";

import reducer from "../../../store/reducers/usersReducer";
import { addUser } from "../../../store/actions/usersActions";

describe("usersReducer", () => {
  let state;
  beforeAll(() => {
    state = {
      users: [],
    };
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(state);
  });

  it("should handle the addUser action correctly", () => {
    const params = {
      email: "sample@sample.com",
      username: "sample",
      password: "sample",
    };
    const expectedResult = produce(state, (draft) => {
      draft.users.push(params);
    });

    expect(reducer(state, addUser(params))).toEqual(expectedResult);
  });
});
