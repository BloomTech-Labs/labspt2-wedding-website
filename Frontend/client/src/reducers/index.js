import {
  L_R,
  L_R_SUCCESS,
  L_R_ERROR,
  FETCHING,
  SET_USER,
  SOCIAL_USER,
  OAUTH_USER,
  GET_USER,
  GET_GUESTS,
  GET_GUEST,
  GET_QS,
  UPDATING,
  DELETE,
  ERROR,
  LOGOUT,
} from '../actions/index'

const initialState = {
  fetching: false,
  err: null,
  //user
  authProcess: false,
  authenticated: false,
  userInfo: null,
  updatingUser: false,
  //guest
  guests: null,
  updating: false,
  userQuestions: null,
  //answers
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true }
    case L_R:
      return { ...state, authProcess: true }
    case L_R_SUCCESS:
      return { ...state, authProcess: false, userInfo: action.payload }
    case L_R_ERROR:
      return { ...state, authProcess: false, err: action.payload }
    case SOCIAL_USER:
      return { ...state, authProcess: true }
    case GET_USER:
      return { ...state, userInfo: action.payload, fetching: false }
    case OAUTH_USER:
      return {
        ...state,
        authProcess: false,
        userInfo: action.payload,
        fetching: false,
      }
    case SET_USER:
      return {
        ...state,
        authProcess: false,
        userInfo: action.payload,
        fetching: false,
      }
    case LOGOUT:
      return { ...state, userInfo: null, guests: null }
    case GET_GUESTS:
      return { ...state, guests: action.payload, fetching: false }
    case GET_QS:
      return { ...state, userQuestions: action.payload, fetching: false }
    case UPDATING:
      return { ...state, guests: action.payload, fetching: false }
    case ERROR:
      return { ...state, updating: true }
    default:
      return state
  }
}
