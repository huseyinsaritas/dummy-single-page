import { LOGOUT, SET_LANGUAGE, SET_USER } from "../actionType/user";
import { Action } from "../model/Action";
import { User } from "../model/user";

export const logout = (): Action => ({
  type: LOGOUT,
  payload: {},
});

export const setLanguage = (language: string): Action => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const setUser = (user: User): Action => ({
  type: SET_USER,
  payload: user,
});
