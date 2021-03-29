import * as types from "./constants"

const initialState = {
  universitiesapi_response_get_Searches: [],
  universitiesAPI: []
}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.UNIVERSITIESAPI_GET_SEARCH_LIST:
    case types.UNIVERSITIESAPI_GET_SEARCH_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        universitiesapi_response_get_Searches: [
          ...state.universitiesapi_response_get_Searches,
          action.response
        ]
      })
    case types.UNIVERSITIESAPI_GET_SEARCH_LIST_FAILED:
      return Object.assign({}, state, {
        universitiesAPI: [...state.universitiesAPI, action.response]
      })
    default:
      return state
  }
}
