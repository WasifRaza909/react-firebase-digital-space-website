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

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@firebase/auth';

import { db, auth } from '../../firebase.js';

import { setDoc, doc } from 'firebase/firestore';

import { collection, getDoc, getDocs } from '@firebase/firestore';

export const registerUser =
  (firstName, lastName, email, password) => async (dispatch) => {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = {
          uid: userCredential.user.uid,
          firstName: firstName,
          lastName: lastName,
          email: userCredential.user.email,
          isAdmin: false,
        };

        setDoc(doc(db, 'users', userCredential.user.uid), user).then().catch();

        localStorage.setItem('user', JSON.stringify(user));

        dispatch({
          type: REGISTER_USER_SUCCESS,
          payload: user,
        });

        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: user,
        });
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_USER_FAIL,
          payload: error.message,
        });
      });
  };

export const loginUser = (email, password) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER_REQUEST,
  });

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const userId = userCredential.user.uid;

      const docRef = doc(db, 'users', userId);
      getDoc(docRef)
        .then((doc) => {
          dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: doc.data(),
          });

          localStorage.setItem('user', JSON.stringify(doc.data()));
        })
        .catch((error) =>
          dispatch({
            LOGIN_USER_FAIL,
            payload: error,
          })
        );
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_USER_FAIL,
        payload: error.message,
      });
    });
};

export const logoutUser = () => async (dispatch) => {
  dispatch({
    type: LOGOUT_USER_REQUEST,
  });

  localStorage.removeItem('user');
};

export const listUsers = () => async (dispatch) => {
  dispatch({
    type: LIST_USER_REQUEST,
  });

  getDocs(collection(db, 'users'))
    .then((docs) => {
      let docsArray = [];
      docs.forEach((doc) => docsArray.push(doc.data()));

      dispatch({
        type: LIST_USER_SUCCESS,
        payload: docsArray,
      });
    })
    .catch((errror) =>
      dispatch({
        type: LIST_USER_FAIL,
        paylaod: errror.message,
      })
    );
};
