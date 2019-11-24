import { SET_FILTER, SET_SORTING } from '../action-types/filter'
import { AnyAction } from 'redux'

export const setFilter = (payload: number[]): AnyAction => ({
  type: SET_FILTER,
  payload
})

export const setSorting = (payload: string): AnyAction => ({
  type: SET_SORTING,
  payload
})
