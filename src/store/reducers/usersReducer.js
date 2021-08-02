/* eslint-disable default-case */
import produce from "immer";

import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  users: [],
};

const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.ADD_USER:
        draft.users.push(action.user);
        break;
    }
  });

export default authReducer;
