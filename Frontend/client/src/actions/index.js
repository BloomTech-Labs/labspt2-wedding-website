import axios from 'axios'

export const LOGIN_REGISTER = 'LOGIN_REGISTER'
export const LOGIN_REGISTER_SUCCESS = 'LOGIN_REGISTER_SUCCESS'
export const LOGIN_REGISTER_ERROR = 'LOGIN_REGISTER_ERROR'
export const FETCHING = 'FETCHING'
export const GET_USERS = 'GET_USERS'
export const GET_USER = 'GET_USER'
export const GET_GUESTS = 'GET_GUESTS'
export const GET_GUEST = 'GET_GUEST'
export const UPDATING = 'UPDATING'
export const DELETE = 'DELETE'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const ERROR = 'ERROR'

// needs to be stored on secret .env file for production
const api = 'https://joinourbigday.herokuapp.com'

//Login in / Registering
export const loginRegister = creds => dispatch => {
  dispatch({ type: LOGIN_REGISTER })
  axios
    .post(`${api}/auth/login`, creds)
    .then(res => {
      dispatch({
        type: LOGIN_REGISTER_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: LOGIN_REGISTER_ERROR,
        payload: err,
      })
    })
}

//users
export const fetchUsers = () => dispatch => {
  dispatch({ type: FETCHING })
  axios
    .get(`${api}/users`)
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err,
      })
    })
}

export const fetchUser = id => dispatch => {
  dispatch({ type: FETCHING })
  axios
    .get(`${api}/users/${id}`)
    .then(res => {
      dispatch({
        type: GET_USER,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: FETCHING_ERROR,
      })
    })
}

export const editUser = (id, user) => dispatch => {
  dispatch({ type: UPDATING })
  axios
    .put(`${api}/users/${id}`, user)
    .then(() => fetchUser(id)(dispatch))
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err,
      })
    })
}

export const fetchGuests = () => {
  dispatch({ type: FETCHING })
  axios
    .get(`${api}/guest`)
    .then(res => {
      dispatch({
        type: GET_GUESTS,
        paylaod: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        paylaod: err,
      })
    })
}
export const fetchGuest = id => {
  dispatch({ type: FETCHING })
  axios
    .get(`${api}/guest/${id}`)
    .then(res => {
      dispatch({
        type: GET_GUEST,
        paylaod: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        paylaod: err,
      })
    })
}

export const editGuest = (id, guest) => dispatch => {
  dispatch({ type: UPDATING })
  axios
    .put(`${api}/guest/${id}`, guest)
    .then(() => fetchGuest(id)(dispatch))
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err,
      })
    })
}

export const deleteGuest = id => dispatch => {
  dispatch({ type: DELETING })
  axios
    .delete(`${api}/guest/${id}`)
    .then(() => fetchGuests()(dispatch))
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err,
      })
    })
}
