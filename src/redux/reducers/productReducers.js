import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  LIST_PRODUCTS_REQUEST,
  LIST_PRODUCTS_SUCCESS,
  LIST_PRODUCTS_FAIL,
} from '../types';

export const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return {
        loading: true,
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        loading: false,
      };

    case ADD_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const listProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_PRODUCTS_REQUEST:
      return {
        loading: true,
      };

    case LIST_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };

    case LIST_PRODUCTS_FAIL:
      return {
        products: [],
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
