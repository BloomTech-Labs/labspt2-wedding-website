import axios from "axios"

export const LOGIN_REGISTER = "LOGIN_REGISTER"
export const LOGIN_REGISTER_SUCCESS = "LOGIN_REGISTER_SUCCESS"
export const LOGIN_REGISTER_ERROR = "LOGIN_REGISTER_ERROR"
export const FETCHING = 'FETCHING'
export const GET_USERS = 'GET_USERS'
export const FETCHING_ERROR = 'FETCHING_ERROR'

const

//Login in / Registering
export const loginRegister = creds => dispatch => {
  dispatch({ type: LOGIN_REGISTER });
  axios.post('https://joinourbigday.herokuapp.com/auth/login', creds)
    .then(res => {
      dispatch({
        type: LOGIN_REGISTER_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: LOGIN_REGISTER_ERROR,
        payload: err
      })
    })
};

//users
export const fetchUsers = () => dispatch => {
  dispatch({type: FETCHING})
  axios 
    .get('https://joinourbigday.herokuapp.com//users')
}