import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  LIST_PRODUCTS_REQUEST,
  LIST_PRODUCTS_SUCCESS,
  LIST_PRODUCTS_FAIL,
} from '../types';

import { collection, addDoc, getDocs, setDoc, doc } from 'firebase/firestore';

import { db } from '../../firebase';

export const addProduct =
  (name, price, imageUrl, brand, countInStock, description) =>
  async (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_REQUEST,
    });

    const newProduct = {
      name,
      price,
      imageUrl,
      brand,
      countInStock,
      description,
    };

    addDoc(collection(db, 'products'), newProduct)
      .then((res) => {
        setDoc(
          doc(db, 'products', res.id),
          {
            uid: res.id,
          },
          {
            merge: true,
          }
        );
        dispatch({
          type: ADD_PRODUCT_SUCCESS,
        });
      })
      .catch((err) =>
        dispatch({
          type: ADD_PRODUCT_FAIL,
          payload: err,
        })
      );
  };

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: LIST_PRODUCTS_REQUEST,
  });

  getDocs(collection(db, 'products'))
    .then((docs) => {
      let docsArray = [];

      docs.forEach((doc) => docsArray.push(doc.data()));

      dispatch({
        type: LIST_PRODUCTS_SUCCESS,
        payload: docsArray,
      });
    })
    .catch((err) =>
      dispatch({
        type: LIST_PRODUCTS_FAIL,
        payload: err,
      })
    );
};
