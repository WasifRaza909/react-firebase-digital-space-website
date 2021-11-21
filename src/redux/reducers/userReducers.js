import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LIST_USER_REQUEST,
  LIST_USER_SUCCESS,
  LIST_USER_FAIL,
  LOGOUT_USER_REQUEST,
} from '../types';

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { loading: true };

    case REGISTER_USER_SUCCESS:
      return {
        user: action.payload,
        loading: false,
      };

    case REGISTER_USER_FAIL:
      return {
        user: {},
        error: action.payload,
        loading: false,
      };

    case LOGOUT_USER_REQUEST:
      return {};

    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { loading: true };

    case LOGIN_USER_SUCCESS:
      return {
        user: action.payload,
        loading: false,
      };

    case LOGIN_USER_FAIL:
      return {
        error: action.payload,
        loading: false,
      };

    case LOGOUT_USER_REQUEST:
      return {};

    default:
      return state;
  }
};

export const listUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_USER_REQUEST:
      return { loading: true };

    case LIST_USER_SUCCESS:
      return {
        users: action.payload,
        loading: false,
      };

    case LIST_USER_FAIL:
      return {
        users: [],
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
