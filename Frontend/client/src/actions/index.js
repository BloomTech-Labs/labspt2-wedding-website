import axios from 'axios'
// L_G = LOGIN_REGISTER
export const L_R = 'L_R'
export const L_R_SUCCESS = 'L_R_SUCCESS'
export const L_R_ERROR = 'L_R_ERROR'
export const FETCHING = 'FETCHING'
export const SET_USER = 'SET_USER'
export const OAUTH_USER = 'SET_USER'
export const SOCIAL_USER = 'SOCIAL_USER'
export const GET_USERS = 'GET_USERS'
export const GET_USER = 'GET_USER'
export const GET_GUESTS = 'GET_GUESTS'
// export const GET_GUEST = 'GET_GUEST'
export const GET_QS = 'GET_QS'
export const GET_AS = 'GET_AS'
export const UPDATING = 'UPDATING'
export const DELETE = 'DELETE'
export const ERROR = 'ERROR'
export const LOGOUT = 'LOGOUT'

// needs to be stored on secret .env file for production
const api = 'https://joinourbigday.herokuapp.com'

//Login in / Registering
export const loginRegister = creds => dispatch => {
  dispatch({ type: L_R })
  axios
    .post(`${api}/auth/register-login`, creds)
    .then(res => {
      localStorage.setItem('jwt', res.data.token)
      console.log('login user info:', res.data.userInfo)
      dispatch({
        type: L_R_SUCCESS,
        payload: res.data.userInfo,
      })
    })
    .catch(err => {
      dispatch({
        type: L_R_ERROR,
        payload: err,
      })
    })
}

export const setUser = tokenInfo => dispatch => {
  dispatch({ type: SOCIAL_USER })
  if (tokenInfo.username) {
    // if there is a username in the token it means that they have looged in before and gone through account setup to choose a username + other stuff
    console.log('recurrent user')
    console.log(tokenInfo)
    dispatch({
      type: OAUTH_USER,
      payload: tokenInfo,
    })
  } else {
    // if there is no username in the token it means that it is the first time loggin in w oauth they still haven't chosen an username and they can be sent to the acount setup
    const user = {
      id: tokenInfo.id,
      email: tokenInfo.email,
      isPremium: tokenInfo.isPremium,
    }
    console.log('new user')
    dispatch({
      type: SET_USER,
      payload: user,
    })
  }
}

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
  localStorage.removeItem('jwt')
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
        type: ERROR,
        payload: err,
      })
    })
}

export const editUser = (id, user) => dispatch => {
  dispatch({ type: UPDATING })
  console.log('from edit user', user)
  console.log('from edit user id', id)
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

//guest

export const fetchGuests = id => dispatch => {
  dispatch({ type: FETCHING })
  axios
    .get(`${api}/user/guests/${id}`)

    .then(res => {
      dispatch({
        type: GET_GUESTS,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        paylaod: err,
      })
    })
}
// we already have all the guests on store so this enpoind is no longer needed

// export const fetchGuest = id => dispatch => {
//   dispatch({ type: FETCHING })
//   axios
//     .get(`${api}/guest/${id}`)
//     .then(res => {
//       dispatch({
//         type: GET_GUEST,
//         paylaod: res.data,
//       })
//     })
//     .catch(err => {
//       dispatch({
//         type: ERROR,
//         paylaod: err,
//       })
//     })
// }

export const addGuest = (userId, guest) => dispatch => {
  axios
    .post(`${api}/guest`, guest)
    .then(() => fetchGuests(userId)(dispatch))
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err,
      })
    })
}

export const editGuest = (userId, id, guest) => dispatch => {
  dispatch({ type: UPDATING })
  axios
    .put(`${api}/guest/${id}`, guest)
    .then(() => fetchGuests(userId)(dispatch))
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err,
      })
    })
}

export const deleteGuest = (userId, id) => dispatch => {
  dispatch({ type: DELETE })
  axios
    .delete(`${api}/guest/${id}`)
    .then(() => fetchGuests(userId)(dispatch))
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err,
      })
    })
}

//questions

export const fetchQuestions = id => dispatch => {
  dispatch({ type: FETCHING })
  axios
    .get(`${api}/${id}/questions`)

    .then(res => {
      dispatch({
        type: GET_QS,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        paylaod: err,
      })
    })
}

export const addQuestion = (userId, question) => dispatch => {
  console.log('question :', question)
  axios
    .post(`${api}/${userId}/addquestion`, question)
    .then(() => fetchQuestions(userId)(dispatch))
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err,
      })
    })
}

export const editQuestion = (userId, id, question) => dispatch => {
  dispatch({ type: UPDATING })
  axios
    .put(`${api}/update-question/${userId}/${id}`, question)
    .then(() => fetchQuestions(userId)(dispatch))
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err,
      })
    })
}

export const deleteQuestion = (userId, id) => dispatch => {
  dispatch({ type: DELETE })
  axios
    .delete(`${api}/questions/${id}`)
    .then(() => fetchQuestions(userId)(dispatch))
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err,
      })
    })
}

// export const fetchAnswers = questionId => dispatch => {
//   dispatch({ type: FETCHING })
//   axios
//     .get(`${api}/rsvp/answer/${questionId}`)

//     .then(res => {
//       dispatch({
//         type: GET_AS,
//         payload: res.data,
//       })
//     })
//     .catch(err => {
//       dispatch({
//         type: ERROR,
//         paylaod: err,
//       })
//     })
// }
