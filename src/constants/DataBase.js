import ENV from "../../env"

export const URL_API = 'https://appdevcoderhouse-default-rtdb.firebaseio.com'
export const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${ENV.API_KEY}`
export const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${ENV.API_KEY}`
export const UPDATE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${ENV.API_KEY}`
