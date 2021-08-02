import { ADD_USER } from "./actionTypes";

export function addUser(data) {
  return {
    type: ADD_USER,
    user: data,
  };
}
