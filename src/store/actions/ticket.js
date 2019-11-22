import { store } from 'store'
import { getSearchId, getTickets } from 'api'
import {
  FAIL_FETCHING,
  SAVE_TICKETS,
  SET_SEARCH_ID,
  START_FETCHING,
  SUCCESS_FETCHING
} from 'store/action-types/ticket'

const startFetching = () => ({
  type: START_FETCHING
})

const failFetching = () => ({
  type: FAIL_FETCHING
})

const successFetching = () => ({
  type: SUCCESS_FETCHING
})

export const startSeach = () => async dispatch => {
  dispatch(startFetching())
  try {
    const { searchId } = await getSearchId()
    await dispatch(setSearchId(searchId))
    await dispatch(startFechingTickets())
  } catch {
    dispatch(failFetching())
  }
}

const setSearchId = payload => ({
  type: SET_SEARCH_ID,
  payload
})

const startFechingTickets = () => async dispatch => {
  const {
    tickets: { searchId }
  } = store.getState()
  dispatch(startFetching())
  try {
    const { tickets, stop } = await getTickets(searchId)
    dispatch(saveTickets(tickets))
    stop ? dispatch(successFetching()) : dispatch(startFechingTickets())
  } catch {
    dispatch(failFetching())
    dispatch(startFechingTickets())
  }
}

const saveTickets = payload => ({
  type: SAVE_TICKETS,
  payload
})
