import {
  FAIL_FETCHING,
  SAVE_TICKETS,
  SET_SEARCH_ID,
  START_FETCHING,
  SUCCESS_FETCHING
} from '../action-types/ticket'

const initialState = {
  searchId: '',
  tickets: [],
  isLoading: false,
  error: false
}

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case SUCCESS_FETCHING:
      return {
        ...state,
        isLoading: false,
        error: false
      }
    case FAIL_FETCHING:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    case SET_SEARCH_ID:
      return {
        ...state,
        searchId: action.payload
      }
    case SAVE_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload]
      }
    default:
      return state
  }
}
