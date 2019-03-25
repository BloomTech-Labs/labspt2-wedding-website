import {
  L_R,
  L_R_SUCCESS,
  L_R_ERROR,
  FETCHING,
  GET_USERS,
  GET_USER,
  GET_GUESTS,
  GET_GUEST,
  UPDATING,
  DELETE,
  DELETE_SUCCESS,
  ERROR,
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
  guests: [],
  guest: null,
  addingGuest: false,
  updatingGuest: false,
  //questions
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
    default:
      return state
  }
}
