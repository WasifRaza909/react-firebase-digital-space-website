import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  addProductReducer,
  listProductsReducer,
} from './reducers/productReducers';

import {
  userRegisterReducer,
  userLoginReducer,
  listUsersReducer,
} from './reducers/userReducers';

const userFromLocalStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  listUsers: listUsersReducer,
  addProduct: addProductReducer,
  listProducts: listProductsReducer,
});

const initialState = {
  userLogin: { user: userFromLocalStorage },
};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
