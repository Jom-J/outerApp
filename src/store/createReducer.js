/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";

import authReducer from "./reducers/authReducer";
import usersReducer from "./reducers/usersReducer";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
  });

  return rootReducer;
}
