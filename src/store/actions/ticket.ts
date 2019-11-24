import { store, Ticket, RootStore } from 'store'
import { getSearchId, getTickets } from 'api'
import {
  FAIL_FETCHING,
  SAVE_TICKETS,
  SET_SEARCH_ID,
  START_FETCHING,
  SUCCESS_FETCHING
} from 'store/action-types/ticket'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

const startFetching = (): AnyAction => ({
  type: START_FETCHING
})

const failFetching = (): AnyAction => ({
  type: FAIL_FETCHING
})

const successFetching = (): AnyAction => ({
  type: SUCCESS_FETCHING
})

export const startSeach = () => async (
  dispatch: ThunkDispatch<RootStore, undefined, AnyAction>
) => {
  dispatch(startFetching())
  try {
    const {
      data: { searchId }
    } = await getSearchId()
    await dispatch(setSearchId(searchId))
    await dispatch(startFechingTickets())
  } catch {
    dispatch(failFetching())
  }
}

const setSearchId = (payload: string): AnyAction => ({
  type: SET_SEARCH_ID,
  payload
})

const startFechingTickets = () => async (
  dispatch: ThunkDispatch<RootStore, undefined, AnyAction>
) => {
  const {
    ticket: { searchId }
  } = store.getState()
  dispatch(startFetching())
  try {
    const {
      data: { tickets, stop }
    } = await getTickets(searchId)
    dispatch(saveTickets(tickets))
    stop ? dispatch(successFetching()) : dispatch(startFechingTickets())
  } catch {
    dispatch(failFetching())
    dispatch(startFechingTickets())
  }
}

const saveTickets = (payload: Ticket[]): AnyAction => ({
  type: SAVE_TICKETS,
  payload
})
