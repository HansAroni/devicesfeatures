import * as FileSystem from 'expo-file-system'
import { SIGN_UP_URL, SIGN_IN_URL } from "../../constants/DataBase";

export const ADD_PIC = 'ADD_PIC'
export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const SIGN_FAIL = "SIGN_UP_FAIL";
export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_IN_START = 'SIGN_IN_START';

export const signUp = (email, password, displayName) => {
  return async dispatch => {
    try {
      dispatch({
        type: SIGN_UP_START
      })
      const response = await fetch(SIGN_UP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          displayName,
          returnSecureToken: true
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        const errorResData = await response.json();
        const errorId = errorResData.error.message;
        let message = 'No se pudo registrar!';

        if (errorId === 'EMAIL_EXISTS') {
          message = 'Este email ya existe!';
        }
        throw new Error(message);
      }

      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
        userEmail: data.email,
        userName: data.displayName
      })
    } catch (error) {
      dispatch({
        type: SIGN_FAIL
      })
      alert(error);
    }
  }
}

export const signIn = (email, password) => {
  return async dispatch => {
    try {
      dispatch({
        type: SIGN_IN_START
      })
      const response = await fetch(SIGN_IN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        }),
      });
      let data = null;
      try {
        data = await response.json();
      } catch (error) {
        console.error(error);
      }
      if (!response.ok) {
        const errorId = data?.error?.message;
        let message = 'Usuario o contraseña incorrecta!';
        if (errorId === 'USER_DISABLED') {
          message = 'Su usuario a sido suspendido';
        }
        throw new Error(message);
      }
      dispatch({
        type: SIGN_IN,
        token: data.idToken,
        userId: data.localId,
        userEmail: data.email,
        userName: data.displayName
      })
    } catch (error) {
      dispatch({
        type: SIGN_FAIL
      })
      alert(error);
    }
  }
}


export const signOut = () => {
  return async dispatch => {
    try {

      dispatch({
        type: SIGN_IN,
        token: null,
        userId: null,
        userEmail: null,
        userName: null
      })
    } catch (error) {
      dispatch({
        type: SIGN_FAIL
      })
      alert(error);
    }
  }
}


export const addPic = (image) => {

  return async dispatch => {
    const fileName = image.split('/').pop()
    const Path = FileSystem.documentDirectory + fileName
    try {
      FileSystem.moveAsync({
        from: image,
        to: Path
      })

    } catch (error) {
      console.log(error.message)
      throw error
    }
    dispatch({ type: ADD_PIC, payload: { image: Path } })
  }
}