/* eslint-disable default-case */
import produce from "immer";

import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  isLoggedIn: false,
  profile: null,
};

const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.AUTH_SUCCESS:
        draft.isLoggedIn = true;
        draft.profile = action.user;
        break;

      case actionTypes.LOGOUT:
        draft.profile = null;
        draft.isLoggedIn = false;
        break;
    }
  });

export default authReducer;
