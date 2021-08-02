import { AUTH_SUCCESS, LOGOUT } from "./actionTypes";

export function authSucceeded(data) {
  return {
    type: AUTH_SUCCESS,
    user: data,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
