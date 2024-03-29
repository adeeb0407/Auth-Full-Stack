import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const login = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log('hello')
    dispatch({ type: AUTH, data });
    router('/');
  } catch (error) {
    console.log(error);
  }
};

export const register = (formData, router) => async (dispatch) => {
  try {

    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    router('/');
  } catch (error) {
    console.log(error);
  }
};