import { combineReducers } from 'redux'
import { ticketsReducer } from './ticket'
import { filtersReducer } from './filter'

export const rootReducer = combineReducers({
  tickets: ticketsReducer,
  filters: filtersReducer
})
