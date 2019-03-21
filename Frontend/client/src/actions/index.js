import axios from "axios"

export const LOGIN_REGISTER = "LOGIN_REGISTER"
export const LOGIN_REGISTER_SUCCESS = "LOGIN_REGISTER_SUCCESS"
export const LOGIN_REGISTER_ERROR = "LOGIN_REGISTER_ERROR"
export const FETCHING = 'FETCHING'
export const GET_USERS = 'GET_USERS'
export const FETCHING_ERROR = 'FETCHING_ERROR'
export const GET_GUESTS = 'GET_GUESTS'
export const GET_GUEST = 'GET_GUEST'
export const UPDATING = 'UPDATING'
export const 

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
    .get('https://joinourbigday.herokuapp.com/users')
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: FETCHING_ERROR
      })
    })
}

export const fetchUser = id => dispatch => {
  dispatch({type: FETCHING})
  axios 
    .get(`https://joinourbigday.herokuapp.com/users/${id}`)
    .then(res => {
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: FETCHING_ERROR
      })
    })
}

export const editUser = (id, user) => dispatch => {
  dispatch({type: UPDATING})
  axios 
    .put(`https://joinourbigday.herokuapp.com/users/${id}`)
    .then(() => fetch)
}
