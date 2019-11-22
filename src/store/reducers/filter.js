import { SET_FILTER, SET_SORTING } from '../action-types/filter'
const initialState = {
  stops: [],
  sorting: 'cheapest'
}

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        stops: action.payload
      }
    case SET_SORTING:
      return {
        ...state,
        sorting: action.payload
      }
    default:
      return state
  }
}
