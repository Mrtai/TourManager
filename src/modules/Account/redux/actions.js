import * as Types from './constants';

export const signUp = (info) => {
  return {
    type: Types.SIGNUP,
    payload: info
  }
}

export const signUpSuccess = () => {
  return {
    type: Types.SIGNUP_SUCCESS
  }
}

export const login = (account) => {
  return {
    type: Types.LOGIN,
    payload: account
  }
}

export const loginSuccess = (data) => {
  return {
    type: Types.LOGIN_SUCCESS,
    payload: data
  }
}

export const logOut = () => {
    return {
        type: Types.LOGOUT
    }
}

export const forgotPassword = (email) => {
  return {
    type: Types.FORGOT_PASSWORD,
    payload: email
  }
}

export const forgotPasswordSuccess = () => {
  return {
    type: Types.FORGOT_PASSWORD_SUCCESS
  }
}

export const resetPassword = (info) => {
  return {
    type: Types.RESET_PASSWORD,
    payload: info
  }
}

export const resetPasswordSuccess = () => {
  return {
    type: Types.RESET_PASSWORD_SUCCESS
  }
}

export const getOC = (callback) => {
  return {
    type: Types.GET_OC,
    callback
  }
}

export const getOCSuccess = (ocPoint) => {
  return {
    type: Types.GET_OC_SUCCESS,
    payload: ocPoint
  }
}
