import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'

export interface Segment {
  origin: string
  destination: string
  date: string
  stops: string[]
  duration: number
}

export interface Ticket {
  price: number
  carrier: string
  segments: Segment[]
}

export interface FilterStore {
  stops: number[],
  sorting: string
}

export interface TicketStore {
    searchId: string,
    tickets: Ticket[],
    isLoading: boolean,
    error: boolean
}

export interface RootStore {
  filter: FilterStore,
  ticket: TicketStore
}

export const store = createStore(rootReducer, applyMiddleware(thunk))
