import { SET_FILTER, SET_SORTING } from '../action-types/filter'

export const setFilter = payload => ({
  type: SET_FILTER,
  payload
})

export const setSorting = payload => ({
  type: SET_SORTING,
  payload
})
