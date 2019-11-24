import { combineReducers } from 'redux'
import { ticketsReducer } from './ticket'
import { filtersReducer } from './filter'
import { RootStore } from 'store'

export const rootReducer = combineReducers<RootStore>({
  ticket: ticketsReducer,
  filter: filtersReducer
})
